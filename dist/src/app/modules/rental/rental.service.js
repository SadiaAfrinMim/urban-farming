import { prisma } from '../../shared/prisma.js';
import { OrderStatus } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError.js';
const getAllRentalSpaces = async () => {
    const rentalSpaces = await prisma.rentalSpace.findMany({
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
    const rentalSpaces = await prisma.rentalSpace.findMany({
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
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
    }
    const rentalSpace = await prisma.rentalSpace.findUnique({
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
        throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
    }
    return rentalSpace;
};
const createRentalSpace = async (vendorId, payload) => {
    // Check if vendor exists and is Vendor role
    const vendorIdNumber = parseInt(vendorId, 10);
    if (isNaN(vendorIdNumber)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid vendor ID');
    }
    const vendorProfile = await prisma.vendorProfile.findUnique({
        where: { userId: vendorIdNumber },
    });
    if (!vendorProfile) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Vendor profile not found');
    }
    const rentalSpace = await prisma.rentalSpace.create({
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
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
    }
    const rentalSpace = await prisma.rentalSpace.findUnique({
        where: { id: rentalSpaceId },
    });
    if (!rentalSpace) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
    }
    const updated = await prisma.rentalSpace.update({
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
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
    }
    const rentalSpace = await prisma.rentalSpace.findUnique({
        where: { id: rentalSpaceId },
    });
    if (!rentalSpace) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
    }
    await prisma.rentalSpace.delete({
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
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid rental space ID');
    }
    const updated = await prisma.rentalSpace.update({
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
    const rentalSpace = await prisma.rentalSpace.findUnique({
        where: { id: parseInt(spaceId) },
    });
    if (!rentalSpace) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
    }
    if (!rentalSpace.availability) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Rental space is not available');
    }
    // Update availability to false
    const updated = await prisma.rentalSpace.update({
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
            const NotificationService = (await import('../notification/notification.service.js')).NotificationService;
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
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid customer ID');
    }
    // Check if rental space exists and is available
    const rentalSpace = await prisma.rentalSpace.findUnique({
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
        throw new ApiError(httpStatus.NOT_FOUND, 'Rental space not found');
    }
    if (!rentalSpace.availability) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Rental space is not available');
    }
    // Create the rental order
    const order = await prisma.order.create({
        data: {
            userId: customerIdNumber,
            vendorId: rentalSpace.vendorId,
            rentalSpaceId: spaceId,
            quantity: duration ?? 1,
            totalPrice: totalPrice,
            status: OrderStatus.Pending,
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
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid vendor ID');
    }
    const vendorProfile = await prisma.vendorProfile.findUnique({
        where: { userId: vendorIdNumber },
    });
    if (!vendorProfile) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Vendor profile not found');
    }
    const orders = await prisma.order.findMany({
        where: {
            rentalSpace: {
                vendorId: vendorProfile.id,
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
            orderDate: 'desc',
        },
    });
    return orders;
};
const updateRentalOrderStatus = async (orderId, status, vendorId) => {
    const vendorIdNumber = parseInt(vendorId, 10);
    if (isNaN(vendorIdNumber)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid vendor ID');
    }
    // First check if the order belongs to this vendor
    const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: {
            rentalSpace: true,
        },
    });
    if (!order) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
    }
    if (order.rentalSpace?.vendorId !== vendorIdNumber) {
        throw new ApiError(httpStatus.FORBIDDEN, 'You can only update orders for your rental spaces');
    }
    // Update the order status
    const updatedOrder = await prisma.order.update({
        where: { id: orderId },
        data: { status: status },
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
export const RentalService = {
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