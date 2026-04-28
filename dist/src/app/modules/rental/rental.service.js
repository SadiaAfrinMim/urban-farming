"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalService = void 0;
const prisma_1 = require("../../shared/prisma");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const getAllRentalSpaces = async () => {
    const rentalSpaces = await prisma_1.prisma.rentalSpace.findMany({
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
const searchRentalSpaces = async (location) => {
    const where = {};
    if (location) {
        where.location = {
            contains: location,
            mode: 'insensitive',
        };
    }
    const rentalSpaces = await prisma_1.prisma.rentalSpace.findMany({
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
const getRentalSpaceById = async (id) => {
    const rentalSpace = await prisma_1.prisma.rentalSpace.findUnique({
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
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    return rentalSpace;
};
const createRentalSpace = async (vendorId, payload) => {
    // Check if vendor exists and is Vendor role
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
    const rentalSpace = await prisma_1.prisma.rentalSpace.create({
        data: {
            vendorId: vendorProfile.id,
            ...payload,
        },
    });
    return rentalSpace;
};
const updateRentalSpace = async (id, payload) => {
    const rentalSpace = await prisma_1.prisma.rentalSpace.findUnique({
        where: { id },
    });
    if (!rentalSpace) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    const updated = await prisma_1.prisma.rentalSpace.update({
        where: { id },
        data: payload,
    });
    return updated;
};
const deleteRentalSpace = async (id) => {
    const rentalSpace = await prisma_1.prisma.rentalSpace.findUnique({
        where: { id },
    });
    if (!rentalSpace) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    await prisma_1.prisma.rentalSpace.delete({
        where: { id },
    });
};
const toggleAvailability = async (id, availability) => {
    const updated = await prisma_1.prisma.rentalSpace.update({
        where: { id },
        data: { availability },
    });
    return updated;
};
const bookRentalSpace = async (spaceId, customerId) => {
    const rentalSpace = await prisma_1.prisma.rentalSpace.findUnique({
        where: { id: spaceId },
    });
    if (!rentalSpace) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    if (!rentalSpace.availability) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Rental space is not available');
    }
    // Update availability to false
    const updated = await prisma_1.prisma.rentalSpace.update({
        where: { id: spaceId },
        data: { availability: false },
    });
    return updated;
};
exports.RentalService = {
    getAllRentalSpaces,
    searchRentalSpaces,
    getRentalSpaceById,
    createRentalSpace,
    updateRentalSpace,
    deleteRentalSpace,
    toggleAvailability,
    bookRentalSpace,
};
//# sourceMappingURL=rental.service.js.map