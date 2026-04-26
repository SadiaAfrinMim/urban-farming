"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = require("../../shared/prisma");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const getOrders = async (user) => {
    let where = {};
    if (user.role === 'Customer') {
        where.userId = user.id;
    }
    else if (user.role === 'Vendor') {
        const vendorProfile = await prisma_1.prisma.vendorProfile.findUnique({
            where: { userId: user.id },
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
        const vendorProfile = await prisma_1.prisma.vendorProfile.findUnique({
            where: { userId: user.id },
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
    // Calculate total price if not provided
    const totalPrice = payload.totalPrice || (produce.price * quantity);
    const order = await prisma_1.prisma.order.create({
        data: {
            userId: parseInt(userId),
            produceId,
            vendorId: produce.vendorId,
            quantity,
            totalPrice,
        },
    });
    return order;
};
const updateOrderStatus = async (id, status) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id },
    });
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    const updated = await prisma_1.prisma.order.update({
        where: { id },
        data: { status },
    });
    return updated;
};
exports.OrderService = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrderStatus,
};
//# sourceMappingURL=order.service.js.map