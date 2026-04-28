"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("../../types/common");
const prisma_1 = require("../../shared/prisma");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const getOrders = async (user) => {
    let where = {};
    if (user.role === 'Customer') {
        where.userId = user.id;
    }
    else if (user.role === 'Vendor') {
        const userIdNumber = parseInt(user.id, 10);
        if (isNaN(userIdNumber)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
        }
        const vendorProfile = await prisma_1.prisma.vendorProfile.findUnique({
            where: { userId: userIdNumber },
        });
        if (vendorProfile) {
            where.vendorId = vendorProfile.id;
        }
    }
    // Admin can see all
    const orders = await prisma_1.prisma.order.findMany({
        where,
        include: {
            user: true,
            produce: true,
            vendor: {
                include: {
                    user: true,
                },
            },
        },
    });
    return orders;
};
const getOrderById = async (id, user) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id },
        include: {
            user: true,
            produce: true,
            vendor: {
                include: {
                    user: true,
                },
            },
        },
    });
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    // Check permissions
    if (user.role === 'Customer' && order.userId !== user.id) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    if (user.role === 'Vendor') {
        const userIdNumber = parseInt(user.id, 10);
        if (isNaN(userIdNumber)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
        }
        const vendorProfile = await prisma_1.prisma.vendorProfile.findUnique({
            where: { userId: userIdNumber },
        });
        if (!vendorProfile || order.vendorId !== vendorProfile.id) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
        }
    }
    return order;
};
const createOrder = async (userId, payload) => {
    const produceId = typeof payload.produceId === 'string' ? parseInt(payload.produceId) : payload.produceId;
    const quantity = payload.quantity || 1;
    const produce = await prisma_1.prisma.produce.findUnique({
        where: { id: produceId },
    });
    if (!produce) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    // Check if product is approved
    if (produce.certificationStatus !== 'Approved') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Product is not available for purchase');
    }
    // Check if enough stock is available
    if (produce.availableQuantity < quantity) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Insufficient stock available');
    }
    // Calculate total price (always use price * quantity to ensure accuracy)
    const totalPrice = produce.price * quantity;
    // Use a transaction to ensure both order creation and stock update happen atomically
    const result = await prisma_1.prisma.$transaction(async (tx) => {
        // Decrease the available quantity
        const updatedProduce = await tx.produce.update({
            where: { id: produceId },
            data: {
                availableQuantity: {
                    decrement: quantity,
                },
            },
        });
        console.log(`Stock decreased for produce ${produceId}: ${produce.availableQuantity} -> ${updatedProduce.availableQuantity} (ordered: ${quantity})`);
        // Create the order
        const order = await tx.order.create({
            data: {
                userId: parseInt(userId),
                produceId,
                vendorId: produce.vendorId,
                quantity,
                totalPrice,
            },
        });
        console.log(`Order created: ${order.id} for user ${userId}, produce ${produceId}, quantity ${quantity}, total ${totalPrice}`);
        return order;
    });
    return result;
};
const updateOrderStatus = async (id, status) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id },
    });
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    // If cancelling a pending order, restore the stock
    if (status === common_1.OrderStatus.Cancelled && order.status === common_1.OrderStatus.Pending) {
        await prisma_1.prisma.$transaction(async (tx) => {
            // Restore the stock
            await tx.produce.update({
                where: { id: order.produceId },
                data: {
                    availableQuantity: {
                        increment: order.quantity,
                    },
                },
            });
            // Update order status
            await tx.order.update({
                where: { id },
                data: { status },
            });
        });
        console.log(`Stock restored for cancelled order ${id}: +${order.quantity} to produce ${order.produceId}`);
    }
    else {
        const updated = await prisma_1.prisma.order.update({
            where: { id },
            data: { status },
        });
        return updated;
    }
};
// Function to cancel expired pending orders and restore stock
const cancelExpiredOrders = async () => {
    const expiryTime = new Date(Date.now() - 30 * 60 * 1000); // 30 minutes ago
    const expiredOrders = await prisma_1.prisma.order.findMany({
        where: {
            status: common_1.OrderStatus.Pending,
            createdAt: {
                lt: expiryTime,
            },
        },
    });
    for (const order of expiredOrders) {
        await updateOrderStatus(order.id.toString(), common_1.OrderStatus.Cancelled);
        console.log(`Auto-cancelled expired order ${order.id}`);
    }
    return expiredOrders.length;
};
exports.OrderService = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrderStatus,
    cancelExpiredOrders,
};
//# sourceMappingURL=order.service.js.map