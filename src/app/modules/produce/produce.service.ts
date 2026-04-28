import { prisma } from '../../shared/prisma';

import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

const getAllProduces = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  const produces = await prisma.produce.findMany({
    where: {
      certificationStatus: 'Approved', // Only show approved products in marketplace
    },
    skip,
    take: limit,
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  const total = await prisma.produce.count({
    where: {
      certificationStatus: 'Approved',
    },
  });
  return {
    data: produces,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const searchProduces = async (query?: string) => {
  const where: any = {
    certificationStatus: 'Approved', // Only show approved products in marketplace
  };
  if (query) {
    where.OR = [
      {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
      {
        description: {
          contains: query,
          mode: 'insensitive',
        },
      },
      {
        category: {
          contains: query,
          mode: 'insensitive',
        },
      },
    ];
  }
  const produces = await prisma.produce.findMany({
    where,
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  return produces;
};

const getProduceById = async (id: string) => {
  const produce = await prisma.produce.findUnique({
    where: { id: parseInt(id) },
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  if (!produce) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
  }
  return produce;
};

const createProduce = async (vendorId: string, payload: {
  name: string;
  description?: string;
  price: number;
  category: string;
  availableQuantity: number;
  unit?: string;
}) => {
  const vendorIdNumber = parseInt(vendorId, 10);
  if (isNaN(vendorIdNumber)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid vendor ID');
  }
  const vendorProfile = await prisma.vendorProfile.findUnique({
    where: { userId: vendorIdNumber },
  });
  if (!vendorProfile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor profile not found');
  }
  const produce = await prisma.produce.create({
    data: {
      vendorId: vendorProfile.id,
      ...payload,
    },
    include: {
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
    io.emit('produce-created', produce);
  }

  return produce;
};

const updateProduce = async (id: string, payload: Partial<{
  name: string;
  description: string;
  price: number;
  category: string;
  availableQuantity: number;
  unit?: string;
}>) => {
  const produce = await prisma.produce.findUnique({
    where: { id: parseInt(id) },
  });
  if (!produce) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
  }
  const updated = await prisma.produce.update({
    where: { id: parseInt(id) },
    data: payload,
    include: {
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
    io.emit('produce-updated', updated);
  }

  return updated;
};

const deleteProduce = async (id: string) => {
  const produce = await prisma.produce.findUnique({
    where: { id: parseInt(id) },
  });
  if (!produce) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
  }
  await prisma.produce.delete({
    where: { id: parseInt(id) },
  });

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('produce-deleted', { id });
  }
};

export const ProduceService = {
  getAllProduces,
  searchProduces,
  getProduceById,
  createProduce,
  updateProduce,
  deleteProduce,
};