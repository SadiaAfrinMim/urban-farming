import { prisma } from '../../shared/prisma';

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
  const rentalSpace = await prisma.rentalSpace.findUnique({
    where: { id },
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
  const vendorProfile = await prisma.vendorProfile.findUnique({
    where: { userId: vendorId },
  });
  if (!vendorProfile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor profile not found');
  }
  const rentalSpace = await prisma.rentalSpace.create({
    data: {
      vendorId: vendorProfile.id,
      ...payload,
    },
  });
  return rentalSpace;
};

const updateRentalSpace = async (id: string, payload: Partial<{
  location: string;
  size: string;
  price: number;
  availability: boolean;
}>) => {
  const rentalSpace = await prisma.rentalSpace.findUnique({
    where: { id },
  });
  if (!rentalSpace) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
  }
  const updated = await prisma.rentalSpace.update({
    where: { id },
    data: payload,
  });
  return updated;
};

const deleteRentalSpace = async (id: string) => {
  const rentalSpace = await prisma.rentalSpace.findUnique({
    where: { id },
  });
  if (!rentalSpace) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
  }
  await prisma.rentalSpace.delete({
    where: { id },
  });
};

const toggleAvailability = async (id: string, availability: boolean) => {
  const updated = await prisma.rentalSpace.update({
    where: { id },
    data: { availability },
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
};