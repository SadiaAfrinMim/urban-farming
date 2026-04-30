import { OrderStatus } from '../../types/common';
import { prisma } from '../../shared/prisma';
import { NotificationService } from '../notification/notification.service';
import { NotificationType } from '@prisma/client';

import httpStatus from 'http-status';
import { IJWTPayload } from '../../types/common';
import ApiError from '../../errors/ApiError';

const getOrders = async (user: IJWTPayload) => {
  let where: any = {};
  if (user.role === 'Customer') {
    where.userId = user.id;
  } else if (user.role === 'Vendor') {
    const userIdNumber = parseInt(user.id, 10);
    if (isNaN(userIdNumber)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid user ID');
    }
    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: userIdNumber },
    });
    if (vendorProfile) {
      where.vendorId = vendorProfile.id;
    }
  }
  // Admin can see all
  const orders = await prisma.order.findMany({
    where,
    include: {
      user: true,
      produce: true,
      rentalSpace: true,
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  return orders;
};

const getOrderById = async (id: string, user: IJWTPayload) => {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      produce: true,
      rentalSpace: true,
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  // Check permissions
  if (user.role === 'Customer' && order.userId !== user.id) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
  }
  if (user.role === 'Vendor') {
    const userIdNumber = parseInt(user.id, 10);
    if (isNaN(userIdNumber)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid user ID');
    }
    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: userIdNumber },
    });
    if (!vendorProfile || order.vendorId !== vendorProfile.id) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
    }
  }
  return order;
};

const createOrder = async (userId: string, payload: {
  produceId?: string | number;
  rentalSpaceId?: string | number;
  quantity?: number;
  totalPrice?: number;
}) => {
  const quantity = payload.quantity || 1;
  let totalPrice = payload.totalPrice;
  let vendorId: number;
  let produceId: number | null = null;
  let rentalSpaceId: number | null = null;

  if (payload.produceId) {
    const produceIdNum = typeof payload.produceId === 'string' ? parseInt(payload.produceId) : payload.produceId;
    const produce = await prisma.produce.findUnique({
      where: { id: produceIdNum },
    });
    if (!produce) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
    }

    // Check if product is approved
    if (produce.certificationStatus !== 'Approved') {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Product is not available for purchase');
    }

    // Check if enough stock is available
    if (produce.availableQuantity < quantity) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Insufficient stock available');
    }

    // Calculate total price (always use price * quantity to ensure accuracy)
    totalPrice = totalPrice || produce.price * quantity;
    vendorId = produce.vendorId;
    produceId = produceIdNum;
  } else if (payload.rentalSpaceId) {
    const rentalSpaceIdNum = typeof payload.rentalSpaceId === 'string' ? parseInt(payload.rentalSpaceId) : payload.rentalSpaceId;
    const rentalSpace = await prisma.rentalSpace.findUnique({
      where: { id: rentalSpaceIdNum },
    });
    if (!rentalSpace) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
    }

    // Check if rental space is available
    if (!rentalSpace.availability) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Rental space is not available');
    }

    // For rentals, quantity is 1 (one month rental), totalPrice is the monthly price
    totalPrice = totalPrice || rentalSpace.price;
    vendorId = rentalSpace.vendorId;
    rentalSpaceId = rentalSpaceIdNum;
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Either produceId or rentalSpaceId must be provided');
  }

  // Use a transaction to ensure both order creation and stock/rental update happen atomically
  const result = await prisma.$transaction(async (tx) => {
    if (produceId) {
      // Decrease the available quantity for produce
      const produce = await tx.produce.findUnique({ where: { id: produceId } });
      if (!produce) throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
      const updatedProduce = await tx.produce.update({
        where: { id: produceId },
        data: {
          availableQuantity: {
            decrement: quantity,
          },
        },
      });

      console.log(`Stock decreased for produce ${produceId}: ${produce.availableQuantity} -> ${updatedProduce.availableQuantity} (ordered: ${quantity})`);
    } else if (rentalSpaceId) {
      // Set rental space availability to false
      const rentalSpace = await tx.rentalSpace.findUnique({ where: { id: rentalSpaceId } });
      if (!rentalSpace) throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
      await tx.rentalSpace.update({
        where: { id: rentalSpaceId },
        data: { availability: false },
      });

      console.log(`Rental space ${rentalSpaceId} marked as unavailable`);
    }

    // Create the order
    const order = await tx.order.create({
      data: {
        userId: parseInt(userId),
        produceId,
        rentalSpaceId,
        vendorId,
        quantity,
        totalPrice,
      },
      include: {
        user: true,
        produce: produceId ? true : false,
        rentalSpace: rentalSpaceId ? true : false,
        vendor: {
          include: {
            user: true,
          },
        },
      },
    });

    console.log(`Order created: ${order.id} for user ${userId}, ${produceId ? `produce ${produceId}` : `rental ${rentalSpaceId}`}, quantity ${quantity}, total ${totalPrice}`);

    return order;
  });

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('order-created', result);
  }

  // Notify customer and admins about new order (async, non-blocking)
  process.nextTick(async () => {
    try {
      const NotificationService = (await import('../notification/notification.service')).NotificationService;
      const itemName = result.produce ? result.produce.name : result.rentalSpace ? result.rentalSpace.location : 'Unknown item';

      // Notify customer
      await NotificationService.createNotification(
        result.userId,
        'ORDER_PLACED' as any,
        'Order Placed Successfully',
        `Your order #${result.id} for ${itemName} has been placed successfully. Total: ৳${result.totalPrice}`,
        {
          orderId: result.id,
          itemName,
          totalPrice: result.totalPrice,
          status: result.status,
        }
      );

      // Notify admins
      const admins = await prisma.user.findMany({
        where: { role: 'Admin' },
      });

      for (const admin of admins) {
        await NotificationService.createNotification(
          admin.id,
          'SYSTEM' as any,
          'New Order Placed',
          `New order #${result.id} placed by ${result.user.name} for ${itemName}.`,
          {
            orderId: result.id,
            customerId: result.userId,
            customerName: result.user.name,
            vendorId: result.vendorId,
            vendorName: result.vendor.user.name,
            itemName,
            totalPrice: result.totalPrice,
          }
        );
      }
    } catch (error) {
      console.error('Failed to send notifications for new order:', error);
    }
  });

  return result;
};

const updateOrderStatus = async (id: string, status: OrderStatus) => {
  const order = await prisma.order.findUnique({
    where: { id },
  });
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }

  // If cancelling a pending order, restore the stock
  if (status === OrderStatus.Cancelled && order.status === OrderStatus.Pending) {
    const updated = await prisma.$transaction(async (tx) => {
      // Restore the stock
      await tx.produce.update({
        where: { id: order.produceId },
        data: {
          availableQuantity: {
            increment: order.quantity,
          },
        },
      });

      // Update order status
      const updatedOrder = await tx.order.update({
        where: { id },
        data: { status },
        include: {
          user: true,
          produce: true,
          vendor: {
            include: {
              user: true,
            },
          },
        },
      });

      return updatedOrder;
    });

    console.log(`Stock restored for cancelled order ${id}: +${order.quantity} to produce ${order.produceId}`);

    // Emit real-time update
    const io = (global as any).io;
    if (io) {
      io.emit('order-status-updated', updated);
    }

    // Create notifications
    try {
      await NotificationService.createNotification(
        updated.userId,
        NotificationType.ORDER_STATUS_UPDATE,
        'Order Status Updated',
        `Your order #${updated.id} status has been updated to ${status}.`,
        {
          orderId: updated.id,
          status: status,
          produceName: updated.produce.name,
        }
      );

      await NotificationService.createNotification(
        updated.vendor.userId,
        NotificationType.ORDER_STATUS_UPDATE,
        'Order Status Updated',
        `Order #${updated.id} status has been updated to ${status}.`,
        {
          orderId: updated.id,
          status: status,
          customerName: updated.user.name,
        }
      );
    } catch (error) {
      console.error('Failed to create order status notification:', error);
    }

    return updated;
  } else {
    const updated = await prisma.order.update({
      where: { id },
      data: { status },
      include: {
        user: true,
        produce: true,
        vendor: {
          include: {
            user: true,
          },
        },
      },
    });

    // Emit real-time update
    const io = (global as any).io;
    if (io) {
      io.emit('order-status-updated', updated);
    }

    // Create notifications
    try {
      await NotificationService.createNotification(
        updated.userId,
        NotificationType.ORDER_STATUS_UPDATE,
        'Order Status Updated',
        `Your order #${updated.id} status has been updated to ${status}.`,
        {
          orderId: updated.id,
          status: status,
          produceName: updated.produce.name,
        }
      );

      await NotificationService.createNotification(
        updated.vendor.userId,
        NotificationType.ORDER_STATUS_UPDATE,
        'Order Status Updated',
        `Order #${updated.id} status has been updated to ${status}.`,
        {
          orderId: updated.id,
          status: status,
          customerName: updated.user.name,
        }
      );
    } catch (error) {
      console.error('Failed to create order status notification:', error);
    }

    return updated;
  }
};

// Function to cancel expired pending orders and restore stock
const cancelExpiredOrders = async () => {
  const expiryTime = new Date(Date.now() - 30 * 60 * 1000); // 30 minutes ago

  const expiredOrders = await prisma.order.findMany({
    where: {
      status: OrderStatus.Pending,
      orderDate: {
        lt: expiryTime,
      },
    },
  });

  for (const order of expiredOrders) {
    await updateOrderStatus(order.id.toString(), OrderStatus.Cancelled);
    console.log(`Auto-cancelled expired order ${order.id}`);
  }

  return expiredOrders.length;
};

export const OrderService = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  cancelExpiredOrders,
};