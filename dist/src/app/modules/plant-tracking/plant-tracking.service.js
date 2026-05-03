import { prisma } from '../../shared/prisma.js';
import { paginationHelper } from '../../helpers/paginationHelper.js';
import ApiError from '../../errors/ApiError.js';
import httpStatus from 'http-status';
const createPlantTracking = async (userId, payload) => {
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
const getAllPlantTrackings = async (userId, options) => {
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
const getPlantTrackingById = async (id, userId) => {
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
const updatePlantTracking = async (id, userId, payload) => {
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
const updatePlantHealth = async (id, userId, healthStatus, notes) => {
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
const waterPlant = async (id, userId) => {
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
const fertilizePlant = async (id, userId) => {
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
const deletePlantTracking = async (id, userId) => {
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
//# sourceMappingURL=plant-tracking.service.js.map