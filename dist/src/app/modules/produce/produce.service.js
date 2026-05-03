"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduceService = void 0;
const prisma_js_1 = require("../../shared/prisma.js");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_js_1 = __importDefault(require("../../errors/ApiError.js"));
const getAllProduces = async (page, limit) => {
    const skip = (page - 1) * limit;
    // If limit is very large (like 1000), get all products without pagination
    const shouldGetAll = limit >= 1000;
    const produces = await prisma_js_1.prisma.produce.findMany({
        where: {
            certificationStatus: 'Approved'
        },
        ...(shouldGetAll ? {} : { skip, take: limit }),
        orderBy: { createdAt: 'desc' },
        include: {
            vendor: {
                select: {
                    user: {
                        select: {
                            name: true
                        }
                    },
                    farmName: true,
                    sustainabilityCerts: {
                        select: {
                            certifyingAgency: true,
                            certificationDate: true
                        }
                    }
                }
            }
        }
    });
    const total = await prisma_js_1.prisma.produce.count({
        where: {
            certificationStatus: 'Approved'
        }
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
    const where = {};
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
    const produces = await prisma_js_1.prisma.produce.findMany({
        where,
        include: {
            vendor: {
                select: {
                    user: {
                        select: {
                            name: true
                        }
                    },
                    farmName: true,
                    sustainabilityCerts: {
                        select: {
                            certifyingAgency: true,
                            certificationDate: true
                        }
                    }
                }
            },
        },
    });
    return produces;
};
const getProduceById = async (id) => {
    const produce = await prisma_js_1.prisma.produce.findUnique({
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
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    return produce;
};
const createProduce = async (vendorId, payload) => {
    const vendorIdNumber = parseInt(vendorId, 10);
    if (isNaN(vendorIdNumber)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid vendor ID');
    }
    const vendorProfile = await prisma_js_1.prisma.vendorProfile.findUnique({
        where: { userId: vendorIdNumber },
    });
    if (!vendorProfile) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Vendor profile not found');
    }
    const produce = await prisma_js_1.prisma.produce.create({
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
    const io = global.io;
    if (io) {
        io.emit('produce-created', produce);
    }
    return produce;
};
const updateProduce = async (id, payload) => {
    const produce = await prisma_js_1.prisma.produce.findUnique({
        where: { id: parseInt(id) },
    });
    if (!produce) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    const updated = await prisma_js_1.prisma.produce.update({
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
    const io = global.io;
    if (io) {
        io.emit('produce-updated', updated);
    }
    return updated;
};
const deleteProduce = async (id) => {
    const produce = await prisma_js_1.prisma.produce.findUnique({
        where: { id: parseInt(id) },
    });
    if (!produce) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    await prisma_js_1.prisma.produce.delete({
        where: { id: parseInt(id) },
    });
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('produce-deleted', { id });
    }
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