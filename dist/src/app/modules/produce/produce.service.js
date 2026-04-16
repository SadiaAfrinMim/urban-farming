"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduceService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const getAllProduces = async (page, limit) => {
    const skip = (page - 1) * limit;
    const produces = await prisma_1.default.produce.findMany({
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
    const total = await prisma_1.default.produce.count();
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
const searchProduces = async (category, name) => {
    const where = {};
    if (category) {
        where.category = category;
    }
    if (name) {
        where.name = {
            contains: name,
            mode: 'insensitive',
        };
    }
    const produces = await prisma_1.default.produce.findMany({
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
    const produce = await prisma_1.default.produce.findUnique({
        where: { id },
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
    const vendorProfile = await prisma_1.default.vendorProfile.findUnique({
        where: { userId: vendorId },
    });
    if (!vendorProfile) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Vendor profile not found');
    }
    const produce = await prisma_1.default.produce.create({
        data: {
            vendorId: vendorProfile.id,
            ...payload,
        },
    });
    return produce;
};
const updateProduce = async (id, payload) => {
    const produce = await prisma_1.default.produce.findUnique({
        where: { id },
    });
    if (!produce) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    const updated = await prisma_1.default.produce.update({
        where: { id },
        data: payload,
    });
    return updated;
};
const deleteProduce = async (id) => {
    const produce = await prisma_1.default.produce.findUnique({
        where: { id },
    });
    if (!produce) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    await prisma_1.default.produce.delete({
        where: { id },
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