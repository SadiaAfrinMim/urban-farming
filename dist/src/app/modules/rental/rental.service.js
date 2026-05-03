"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalService = void 0;
const prisma_js_1 = require("../../shared/prisma.js");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_js_1 = __importDefault(require("../../errors/ApiError.js"));
const getAllRentalSpaces = async () => {
    const rentalSpaces = await prisma_js_1.prisma.rentalSpace.findMany({
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
    const rentalSpaces = await prisma_js_1.prisma.rentalSpace.findMany({
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
    const rentalSpaceId = parseInt(id, 10);
    if (isNaN(rentalSpaceId)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid rental space ID');
    }
    const rentalSpace = await prisma_js_1.prisma.rentalSpace.findUnique({
        where: { id: rentalSpaceId },
        include: {
            vendor: {
                include: {
                    user: true,
                },
            },
        },
    });
    if (!rentalSpace) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    return rentalSpace;
};
const createRentalSpace = async (vendorId, payload) => {
    // Check if vendor exists and is Vendor role
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
    const rentalSpace = await prisma_js_1.prisma.rentalSpace.create({
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
        io.emit('rental-space-created', rentalSpace);
    }
    return rentalSpace;
};
const updateRentalSpace = async (id, payload) => {
    const rentalSpaceId = parseInt(id, 10);
    if (isNaN(rentalSpaceId)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid rental space ID');
    }
    const rentalSpace = await prisma_js_1.prisma.rentalSpace.findUnique({
        where: { id: rentalSpaceId },
    });
    if (!rentalSpace) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    const updated = await prisma_js_1.prisma.rentalSpace.update({
        where: { id: rentalSpaceId },
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
        io.emit('rental-space-updated', updated);
    }
    return updated;
};
const deleteRentalSpace = async (id) => {
    const rentalSpaceId = parseInt(id, 10);
    if (isNaN(rentalSpaceId)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid rental space ID');
    }
    const rentalSpace = await prisma_js_1.prisma.rentalSpace.findUnique({
        where: { id: rentalSpaceId },
    });
    if (!rentalSpace) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    await prisma_js_1.prisma.rentalSpace.delete({
        where: { id: rentalSpaceId },
    });
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('rental-space-deleted', { id });
    }
};
const toggleAvailability = async (id, availability) => {
    const rentalSpaceId = parseInt(id, 10);
    if (isNaN(rentalSpaceId)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid rental space ID');
    }
    const updated = await prisma_js_1.prisma.rentalSpace.update({
        where: { id: rentalSpaceId },
        data: { availability },
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
        io.emit('rental-space-availability-changed', updated);
    }
    return updated;
};
const bookRentalSpace = async (spaceId, customerId) => {
    const rentalSpace = await prisma_js_1.prisma.rentalSpace.findUnique({
        where: { id: parseInt(spaceId) },
    });
    if (!rentalSpace) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    if (!rentalSpace.availability) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Rental space is not available');
    }
    // Update availability to false
    const updated = await prisma_js_1.prisma.rentalSpace.update({
        where: { id: parseInt(spaceId) },
        data: { availability: false },
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
        io.emit('rental-space-booked', updated);
    }
    // Create notification for the vendor (async, non-blocking)
    process.nextTick(async () => {
        try {
            const NotificationService = (await Promise.resolve().then(() => __importStar(require('../notification/notification.service')))).NotificationService;
            await NotificationService.createNotification(updated.vendor.userId, 'RENTAL_SPACE_BOOKED', 'Rental Space Booked', `Your rental space "${updated.location}" has been booked.`, {
                rentalSpaceId: updated.id,
                customerId: customerId,
                location: updated.location,
            });
        }
        catch (error) {
            console.error('Failed to create booking notification:', error);
        }
    });
    return updated;
};
const createRentalOrder = async (customerId, spaceId, totalPrice, duration) => {
    const customerIdNumber = parseInt(customerId, 10);
    if (isNaN(customerIdNumber)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid customer ID');
    }
    // Check if rental space exists and is available
    const rentalSpace = await prisma_js_1.prisma.rentalSpace.findUnique({
        where: { id: spaceId },
        include: {
            vendor: {
                include: {
                    user: true,
                },
            },
        },
    });
    if (!rentalSpace) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
    }
    if (!rentalSpace.availability) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Rental space is not available');
    }
    // Create the rental order
    const order = await prisma_js_1.prisma.order.create({
        data: {
            userId: customerId,
            rentalSpaceId: spaceId,
            totalPrice: totalPrice,
            status: 'Pending',
        },
        include: {
            user: true,
            rentalSpace: {
                include: {
                    vendor: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            produce: true,
        },
    });
    return order;
};
const getVendorRentalOrders = async (vendorId) => {
    const vendorIdNumber = parseInt(vendorId, 10);
    if (isNaN(vendorIdNumber)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid vendor ID');
    }
    const orders = await prisma_js_1.prisma.order.findMany({
        where: {
            rentalSpace: {
                vendorId: vendorIdNumber,
            },
        },
        include: {
            user: true,
            rentalSpace: {
                include: {
                    vendor: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            produce: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return orders;
};
const updateRentalOrderStatus = async (orderId, status, vendorId) => {
    const vendorIdNumber = parseInt(vendorId, 10);
    if (isNaN(vendorIdNumber)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid vendor ID');
    }
    // First check if the order belongs to this vendor
    const order = await prisma_js_1.prisma.order.findUnique({
        where: { id: orderId },
        include: {
            rentalSpace: true,
        },
    });
    if (!order) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    if (order.rentalSpace?.vendorId !== vendorIdNumber) {
        throw new ApiError_js_1.default(http_status_1.default.FORBIDDEN, 'You can only update orders for your rental spaces');
    }
    // Update the order status
    const updatedOrder = await prisma_js_1.prisma.order.update({
        where: { id: orderId },
        data: { status },
        include: {
            user: true,
            rentalSpace: {
                include: {
                    vendor: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            produce: true,
        },
    });
    return updatedOrder;
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
    createRentalOrder,
    getVendorRentalOrders,
    updateRentalOrderStatus,
};
//# sourceMappingURL=rental.service.js.map