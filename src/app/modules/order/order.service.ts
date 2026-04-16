import { OrderStatus } from '../../types/common';
import { prisma } from '../../shared/prisma';

import httpStatus from 'http-status';
import { IJWTPayload } from '../../types/common';
import ApiError from '../../errors/ApiError';

const getOrders = async (user: IJWTPayload) => {
  let where: any = {};
  if (user.role === 'Customer') {
    where.userId = user.id;
  } else if (user.role === 'Vendor') {
    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: user.id },
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
    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: user.id },
    });
    if (!vendorProfile || order.vendorId !== vendorProfile.id) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
    }
  }
  return order;
};

const createOrder = async (userId: string, payload: {
  produceId: string;
  quantity?: number; // Assuming quantity, but model doesn't have, perhaps add later or assume 1
}) => {
  const { produceId } = payload;
  const produce = await prisma.produce.findUnique({
    where: { id: produceId },
  });
  if (!produce) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
  }
  const order = await prisma.order.create({
    data: {
      userId,
      produceId,
      vendorId: produce.vendorId,
    },
  });
  return order;
};

const updateOrderStatus = async (id: string, status: OrderStatus) => {
  const order = await prisma.order.findUnique({
    where: { id },
  });
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  const updated = await prisma.order.update({
    where: { id },
    data: { status },
  });
  return updated;
};

export const OrderService = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
};