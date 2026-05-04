import { prisma } from '../../shared/prisma.js';
import { PlantHealth } from '@prisma/client';
import { IPaginationOptions } from '../../types/common.js';
import { paginationHelper } from '../../helpers/paginationHelper.js';
import ApiError from '../../errors/ApiError.js';
import httpStatus from 'http-status';

const createPlantTracking = async (userId: number, payload: any) => {
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

const getAllPlantTrackings = async (userId: number, options: IPaginationOptions) => {
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

const getPlantTrackingById = async (id: string, userId: number) => {
  const plantTrackingId = Number(id);
  const result = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
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

const updatePlantTracking = async (id: string, userId: number, payload: any) => {
  const plantTrackingId = Number(id);
  const plantTracking = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id: plantTrackingId,
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

const updatePlantHealth = async (id: string, userId: number, healthStatus: PlantHealth, notes?: string) => {
  const plantTrackingId = Number(id);
  const plantTracking = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id: plantTrackingId,
    },
    data: {
      plantHealth: healthStatus,
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

const waterPlant = async (id: string, userId: number) => {
  const plantTrackingId = Number(id);
  const plantTracking = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id: plantTrackingId,
    },
    data: {
      notes: `Watered at ${new Date().toISOString()}`,
    },
  });
  return result;
};

const fertilizePlant = async (id: string, userId: number) => {
  const plantTrackingId = Number(id);
  const plantTracking = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id: plantTrackingId,
    },
    data: {
      notes: `Fertilized at ${new Date().toISOString()}`,
    },
  });
  return result;
};

const deletePlantTracking = async (id: string, userId: number) => {
  const plantTrackingId = Number(id);
  const plantTracking = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  await prisma.plantTracking.delete({
    where: {
      id: plantTrackingId,
    },
  });
  return null;
};

const uploadPhotos = async (id: string, userId: number, photos: string[]) => {
  const plantTrackingId = Number(id);
  const plantTracking = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const result = await prisma.plantTracking.update({
    where: {
      id: plantTrackingId,
    },
    data: {
      photos: {
        push: photos,
      },
      lastPhotoUpdate: new Date(),
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

  // Emit real-time update
  if ((global as any).io) {
    (global as any).io.to(`plant_tracking_${userId}`).emit('plant_photos_updated', {
      plantTrackingId,
      photos,
      lastPhotoUpdate: result.lastPhotoUpdate,
    });
  }

  return result;
};

const recordGrowth = async (id: string, userId: number, growthData: { height?: number; width?: number; notes?: string }) => {
  const plantTrackingId = Number(id);
  const plantTracking = await prisma.plantTracking.findFirst({
    where: {
      id: plantTrackingId,
      userId,
    },
  });

  if (!plantTracking) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Plant tracking not found');
  }

  const growthLog = {
    timestamp: new Date().toISOString(),
    height: growthData.height,
    width: growthData.width,
    notes: growthData.notes,
  };

  const currentGrowthLogs = (plantTracking.growthLogs as any[]) || [];
  const updatedGrowthLogs = [...currentGrowthLogs, growthLog];

  const result = await prisma.plantTracking.update({
    where: {
      id: plantTrackingId,
    },
    data: {
      height: growthData.height || plantTracking.height,
      width: growthData.width || plantTracking.width,
      growthLogs: updatedGrowthLogs,
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

  // Emit real-time update
  if ((global as any).io) {
    (global as any).io.to(`plant_tracking_${userId}`).emit('plant_growth_updated', {
      plantTrackingId,
      growthLog,
      currentHeight: result.height,
      currentWidth: result.width,
    });
  }

  return result;
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
  uploadPhotos,
  recordGrowth,
};
