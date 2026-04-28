"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduceService = void 0;
const prisma_1 = require("../../shared/prisma");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const getAllProduces = async (page, limit) => {
    const skip = (page - 1) * limit;
    const produces = await prisma_1.prisma.produce.findMany({
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
    const total = await prisma_1.prisma.produce.count({
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
const searchProduces = async (query) => {
    const where = {
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
    const produces = await prisma_1.prisma.produce.findMany({
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
const getProduceById = async (id) => {
    const produce = await prisma_1.prisma.produce.findUnique({
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
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    return produce;
};
const createProduce = async (vendorId, payload) => {
    const vendorIdNumber = parseInt(vendorId, 10);
    if (isNaN(vendorIdNumber)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid vendor ID');
    }
    const vendorProfile = await prisma_1.prisma.vendorProfile.findUnique({
        where: { userId: vendorIdNumber },
    });
    if (!vendorProfile) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Vendor profile not found');
    }
    const produce = await prisma_1.prisma.produce.create({
        data: {
            vendorId: vendorProfile.id,
            ...payload,
        },
    });
    return produce;
};
const updateProduce = async (id, payload) => {
    const produce = await prisma_1.prisma.produce.findUnique({
        where: { id: parseInt(id) },
    });
    if (!produce) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    const updated = await prisma_1.prisma.produce.update({
        where: { id: parseInt(id) },
        data: payload,
    });
    return updated;
};
const deleteProduce = async (id) => {
    const produce = await prisma_1.prisma.produce.findUnique({
        where: { id: parseInt(id) },
    });
    if (!produce) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    await prisma_1.prisma.produce.delete({
        where: { id: parseInt(id) },
    });
};
exports.ProduceService = {
    getAllProduces,
    searchProduces,
    getProduceById,
    createProduce,
    updateProduce,
    deleteProduce,
};
//# sourceMappingURL=produce.service.js.map