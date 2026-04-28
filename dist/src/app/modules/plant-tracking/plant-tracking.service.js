"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantTrackingService = void 0;
const prisma_1 = require("../../shared/prisma");
const paginationHelper_1 = require("../../helpers/paginationHelper");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createPlantTracking = async (userId, payload) => {
    const result = await prisma_1.prisma.plantTracking.create({
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
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const whereConditions = { userId };
    const result = await prisma_1.prisma.plantTracking.findMany({
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
    const total = await prisma_1.prisma.plantTracking.count({
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
    const result = await prisma_1.prisma.plantTracking.findUnique({
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
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Plant tracking not found');
    }
    return result;
};
const updatePlantTracking = async (id, userId, payload) => {
    const plantTracking = await prisma_1.prisma.plantTracking.findUnique({
        where: {
            id,
            userId,
        },
    });
    if (!plantTracking) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Plant tracking not found');
    }
    const result = await prisma_1.prisma.plantTracking.update({
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
const updatePlantHealth = async (id, userId, healthStatus, notes) => {
    const plantTracking = await prisma_1.prisma.plantTracking.findUnique({
        where: {
            id,
            userId,
        },
    });
    if (!plantTracking) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Plant tracking not found');
    }
    const result = await prisma_1.prisma.plantTracking.update({
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
const waterPlant = async (id, userId) => {
    const plantTracking = await prisma_1.prisma.plantTracking.findUnique({
        where: {
            id,
            userId,
        },
    });
    if (!plantTracking) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Plant tracking not found');
    }
    const result = await prisma_1.prisma.plantTracking.update({
        where: {
            id,
        },
        data: {
            lastWatered: new Date(),
        },
    });
    return result;
};
const fertilizePlant = async (id, userId) => {
    const plantTracking = await prisma_1.prisma.plantTracking.findUnique({
        where: {
            id,
            userId,
        },
    });
    if (!plantTracking) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Plant tracking not found');
    }
    const result = await prisma_1.prisma.plantTracking.update({
        where: {
            id,
        },
        data: {
            lastFertilized: new Date(),
        },
    });
    return result;
};
const deletePlantTracking = async (id, userId) => {
    const plantTracking = await prisma_1.prisma.plantTracking.findUnique({
        where: {
            id,
            userId,
        },
    });
    if (!plantTracking) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Plant tracking not found');
    }
    await prisma_1.prisma.plantTracking.delete({
        where: {
            id,
        },
    });
    return null;
};
exports.PlantTrackingService = {
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