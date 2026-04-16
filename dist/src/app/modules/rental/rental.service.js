"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const getAllRentalSpaces = async () => {
    const rentalSpaces = await prisma_1.default.rentalSpace.findMany({
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
    const rentalSpaces = await prisma_1.default.rentalSpace.findMany({
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
    const rentalSpace = await prisma_1.default.rentalSpace.findUnique({
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
    const vendorProfile = await prisma_1.default.vendorProfile.findUnique({
        where: { userId: vendorId },
    });
    if (!vendorProfile) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Vendor profile not found');
    }
    const rentalSpace = await prisma_1.default.rentalSpace.create({
        data: {
            vendorId: vendorProfile.id,
            ...payload,
        },
    });
    return rentalSpace;
};
const updateRentalSpace = async (id, payload) => {
    const rentalSpace = await prisma_1.default.rentalSpace.findUnique({
        where: { id },
    });
    if (!rentalSpace) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    const updated = await prisma_1.default.rentalSpace.update({
        where: { id },
        data: payload,
    });
    return updated;
};
const deleteRentalSpace = async (id) => {
    const rentalSpace = await prisma_1.default.rentalSpace.findUnique({
        where: { id },
    });
    if (!rentalSpace) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    await prisma_1.default.rentalSpace.delete({
        where: { id },
    });
};
const toggleAvailability = async (id, availability) => {
    const updated = await prisma_1.default.rentalSpace.update({
        where: { id },
        data: { availability },
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
};
//# sourceMappingURL=rental.service.js.map