import { prisma } from '../../shared/prisma';
import { PlantHealth } from '../../../../prisma/prisma/generated';
import { IPaginationOptions } from '../../types/common';
import { paginationHelper } from '../../helpers/paginationHelper';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';

const createPlantTracking = async (userId: string, payload: any) => {
  const result = await prisma.plantTracking.create({
    data: {
      userId,
      ...payload,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return result;
};

const getAllPlantTrackings = async (userId: string, options: IPaginationOptions) => {
  const { page, limit, skip, sortBy, sortOrder } = paginationHelper.calculatePagination(options);

  const whereConditions = { userId };

  const result = await prisma.plantTracking.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const total = await prisma.plantTracking.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getPlantTrackingById = async (id: string, userId: string) => {
  const result = await prisma.plantTracking.findUnique({
    where: {
      id,
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  return result;
};

const updatePlantTracking = async (id: string, userId: string, payload: any) => {
  const plantTracking = await prisma.plantTracking.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id,
    },
    data: payload,
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return result;
};

const updatePlantHealth = async (id: string, userId: string, healthStatus: PlantHealth, notes?: string) => {
  const plantTracking = await prisma.plantTracking.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id,
    },
    data: {
      healthStatus,
      notes,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return result;
};

const waterPlant = async (id: string, userId: string) => {
  const plantTracking = await prisma.plantTracking.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id,
    },
    data: {
      lastWatered: new Date(),
    },
  });
  return result;
};

const fertilizePlant = async (id: string, userId: string) => {
  const plantTracking = await prisma.plantTracking.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id,
    },
    data: {
      lastFertilized: new Date(),
    },
  });
  return result;
};

const deletePlantTracking = async (id: string, userId: string) => {
  const plantTracking = await prisma.plantTracking.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  await prisma.plantTracking.delete({
    where: {
      id,
    },
  });
  return null;
};

export const PlantTrackingService = {
  createPlantTracking,
  getAllPlantTrackings,
  getPlantTrackingById,
  updatePlantTracking,
  updatePlantHealth,
  waterPlant,
  fertilizePlant,
  deletePlantTracking,
};
