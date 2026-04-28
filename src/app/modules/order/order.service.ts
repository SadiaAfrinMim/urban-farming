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
  produceId: string | number;
  quantity?: number;
  totalPrice?: number;
}) => {
  const produceId = typeof payload.produceId === 'string' ? parseInt(payload.produceId) : payload.produceId;
  const quantity = payload.quantity || 1;

  const produce = await prisma.produce.findUnique({
    where: { id: produceId },
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
  const totalPrice = produce.price * quantity;

  // Use a transaction to ensure both order creation and stock update happen atomically
  const result = await prisma.$transaction(async (tx) => {
    // Decrease the available quantity
    const updatedProduce = await tx.produce.update({
      where: { id: produceId },
      data: {
        availableQuantity: {
          decrement: quantity,
        },
      },
    });

    console.log(`Stock decreased for produce ${produceId}: ${produce.availableQuantity} -> ${updatedProduce.availableQuantity} (ordered: ${quantity})`);

    // Create the order
    const order = await tx.order.create({
      data: {
        userId: parseInt(userId),
        produceId,
        vendorId: produce.vendorId,
        quantity,
        totalPrice,
      },
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

    console.log(`Order created: ${order.id} for user ${userId}, produce ${produceId}, quantity ${quantity}, total ${totalPrice}`);

    return order;
  });

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('order-created', result);
  }

  // Notify admins about new order (async, non-blocking)
  process.nextTick(async () => {
    try {
      const NotificationService = (await import('../notification/notification.service')).NotificationService;
      const admins = await prisma.user.findMany({
        where: { role: 'Admin' },
      });

      for (const admin of admins) {
        await NotificationService.createNotification(
          admin.id,
          'SYSTEM' as any,
          'New Order Placed',
          `New order #${result.id} placed by ${result.user.name} for ${result.produce.name}.`,
          {
            orderId: result.id,
            customerId: result.userId,
            customerName: result.user.name,
            vendorId: result.vendorId,
            vendorName: result.vendor.user.name,
            produceName: result.produce.name,
            totalPrice: result.totalPrice,
            type: 'new_order',
          }
        );
      }
    } catch (error) {
      console.error('Failed to create new order notification:', error);
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
      createdAt: {
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