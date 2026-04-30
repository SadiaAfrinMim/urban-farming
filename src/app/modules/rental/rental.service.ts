import { prisma } from '../../shared/prisma';
import { NotificationService } from '../notification/notification.service';
import { NotificationType } from '@prisma/client';

import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

const getAllRentalSpaces = async () => {
  const rentalSpaces = await prisma.rentalSpace.findMany({
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  return rentalSpaces;
};

const searchRentalSpaces = async (location?: string) => {
  const where: any = {};
  if (location) {
    where.location = {
      contains: location,
      mode: 'insensitive',
    };
  }
  const rentalSpaces = await prisma.rentalSpace.findMany({
    where,
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  return rentalSpaces;
};

const getRentalSpaceById = async (id: string) => {
  const rentalSpaceId = parseInt(id, 10);
  if (isNaN(rentalSpaceId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
  }
  const rentalSpace = await prisma.rentalSpace.findUnique({
    where: { id: rentalSpaceId },
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  if (!rentalSpace) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
  }
  return rentalSpace;
};

const createRentalSpace = async (vendorId: string, payload: {
  location: string;
  size: string;
  price: number;
  availability?: boolean;
}) => {
  // Check if vendor exists and is Vendor role
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
  const rentalSpace = await prisma.rentalSpace.create({
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
    io.emit('rental-space-created', rentalSpace);
  }

  return rentalSpace;
};

const updateRentalSpace = async (id: string, payload: Partial<{
  location: string;
  size: string;
  price: number;
  availability: boolean;
}>) => {
  const rentalSpaceId = parseInt(id, 10);
  if (isNaN(rentalSpaceId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
  }
  const rentalSpace = await prisma.rentalSpace.findUnique({
    where: { id: rentalSpaceId },
  });
  if (!rentalSpace) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
  }
  const updated = await prisma.rentalSpace.update({
    where: { id: rentalSpaceId },
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
    io.emit('rental-space-updated', updated);
  }

  return updated;
};

const deleteRentalSpace = async (id: string) => {
  const rentalSpaceId = parseInt(id, 10);
  if (isNaN(rentalSpaceId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
  }
  const rentalSpace = await prisma.rentalSpace.findUnique({
    where: { id: rentalSpaceId },
  });
  if (!rentalSpace) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
  }
  await prisma.rentalSpace.delete({
    where: { id: rentalSpaceId },
  });

  // Emit real-time update
  const io = (global as any).io;
  if (io) {
    io.emit('rental-space-deleted', { id });
  }
};

const toggleAvailability = async (id: string, availability: boolean) => {
  const rentalSpaceId = parseInt(id, 10);
  if (isNaN(rentalSpaceId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
  }
  const updated = await prisma.rentalSpace.update({
    where: { id: rentalSpaceId },
    data: { availability },
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
    io.emit('rental-space-availability-changed', updated);
  }

  return updated;
};

const bookRentalSpace = async (spaceId: string, customerId: string) => {
  const rentalSpace = await prisma.rentalSpace.findUnique({
    where: { id: parseInt(spaceId) },
  });
  if (!rentalSpace) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
  }
  if (!rentalSpace.availability) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Rental space is not available');
  }
  // Update availability to false
  const updated = await prisma.rentalSpace.update({
    where: { id: parseInt(spaceId) },
    data: { availability: false },
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
    io.emit('rental-space-booked', updated);
  }

  // Create notification for the vendor (async, non-blocking)
  process.nextTick(async () => {
    try {
      const NotificationService = (await import('../notification/notification.service')).NotificationService;
      await NotificationService.createNotification(
        updated.vendor.userId,
        'RENTAL_SPACE_BOOKED' as any,
        'Rental Space Booked',
        `Your rental space "${updated.location}" has been booked.`,
        {
          rentalSpaceId: updated.id,
          customerId: customerId,
          location: updated.location,
        }
      );
    } catch (error) {
      console.error('Failed to create booking notification:', error);
    }
  });

  return updated;
};

export const RentalService = {
  getAllRentalSpaces,
  searchRentalSpaces,
  getRentalSpaceById,
  createRentalSpace,
  updateRentalSpace,
  deleteRentalSpace,
  toggleAvailability,
  bookRentalSpace,
};