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
exports.OrderService = void 0;
const common_js_1 = require("../../types/common.js");
const prisma_js_1 = require("../../shared/prisma.js");
const notification_service_js_1 = require("../notification/notification.service.js");
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_js_1 = __importDefault(require("../../errors/ApiError.js"));
const getOrders = async (user) => {
    let where = {};
    if (user.role === 'Customer') {
        where.userId = user.id;
    }
    else if (user.role === 'Vendor') {
        const userIdNumber = parseInt(user.id, 10);
        if (isNaN(userIdNumber)) {
            throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
        }
        const vendorProfile = await prisma_js_1.prisma.vendorProfile.findUnique({
            where: { userId: userIdNumber },
        });
        if (vendorProfile) {
            where.vendorId = vendorProfile.id;
        }
    }
    // Admin can see all
    const orders = await prisma_js_1.prisma.order.findMany({
        where,
        include: {
            user: true,
            produce: true,
            rentalSpace: true,
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
    const orderId = parseInt(id);
    if (isNaN(orderId)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid order ID');
    }
    const order = await prisma_js_1.prisma.order.findUnique({
        where: { id: orderId },
        include: {
            user: true,
            produce: true,
            rentalSpace: true,
            vendor: {
                include: {
                    user: true,
                },
            },
        },
    });
    if (!order) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    // Check permissions
    if (user.role === 'Customer' && order.userId !== user.id) {
        throw new ApiError_js_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    if (user.role === 'Vendor') {
        const userIdNumber = parseInt(user.id, 10);
        if (isNaN(userIdNumber)) {
            throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
        }
        const vendorProfile = await prisma_js_1.prisma.vendorProfile.findUnique({
            where: { userId: userIdNumber },
        });
        if (!vendorProfile || order.vendorId !== vendorProfile.id) {
            throw new ApiError_js_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
        }
    }
    return order;
};
const createOrder = async (userId, payload) => {
    const quantity = payload.quantity || 1;
    let totalPrice = payload.totalPrice;
    let vendorId;
    let produceId = null;
    let rentalSpaceId = null;
    if (payload.produceId) {
        const produceIdNum = typeof payload.produceId === 'string' ? parseInt(payload.produceId) : payload.produceId;
        const produce = await prisma_js_1.prisma.produce.findUnique({
            where: { id: produceIdNum },
        });
        if (!produce) {
            throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
        }
        // Check if product is approved
        if (produce.certificationStatus !== 'Approved') {
            throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Product is not available for purchase');
        }
        // Check if enough stock is available
        if (produce.availableQuantity < quantity) {
            throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Insufficient stock available');
        }
        // Calculate total price (always use price * quantity to ensure accuracy)
        totalPrice = totalPrice || produce.price * quantity;
        vendorId = produce.vendorId;
        produceId = produceIdNum;
    }
    else if (payload.rentalSpaceId) {
        const rentalSpaceIdNum = typeof payload.rentalSpaceId === 'string' ? parseInt(payload.rentalSpaceId) : payload.rentalSpaceId;
        const rentalSpace = await prisma_js_1.prisma.rentalSpace.findUnique({
            where: { id: rentalSpaceIdNum },
        });
        if (!rentalSpace) {
            throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
        }
        // Check if rental space is available
        if (!rentalSpace.availability) {
            throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Rental space is not available');
        }
        // For rentals, quantity is 1 (one month rental), totalPrice is the monthly price
        totalPrice = totalPrice || rentalSpace.price;
        vendorId = rentalSpace.vendorId;
        rentalSpaceId = rentalSpaceIdNum;
    }
    else {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Either produceId or rentalSpaceId must be provided');
    }
    // Use a transaction to ensure both order creation and stock/rental update happen atomically
    const result = await prisma_js_1.prisma.$transaction(async (tx) => {
        if (produceId) {
            // Decrease the available quantity for produce
            const produce = await tx.produce.findUnique({ where: { id: produceId } });
            if (!produce)
                throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
            const updatedProduce = await tx.produce.update({
                where: { id: produceId },
                data: {
                    availableQuantity: {
                        decrement: quantity,
                    },
                },
            });
            console.log(`Stock decreased for produce ${produceId}: ${produce.availableQuantity} -> ${updatedProduce.availableQuantity} (ordered: ${quantity})`);
        }
        else if (rentalSpaceId) {
            // Set rental space availability to false
            const rentalSpace = await tx.rentalSpace.findUnique({ where: { id: rentalSpaceId } });
            if (!rentalSpace)
                throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Rental space not found');
            await tx.rentalSpace.update({
                where: { id: rentalSpaceId },
                data: { availability: false },
            });
            console.log(`Rental space ${rentalSpaceId} marked as unavailable`);
        }
        // Create the order
        const order = await tx.order.create({
            data: {
                userId: parseInt(userId),
                produceId,
                rentalSpaceId,
                vendorId,
                quantity,
                totalPrice,
            },
            include: {
                user: true,
                produce: produceId ? true : false,
                rentalSpace: rentalSpaceId ? true : false,
                vendor: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        console.log(`Order created: ${order.id} for user ${userId}, ${produceId ? `produce ${produceId}` : `rental ${rentalSpaceId}`}, quantity ${quantity}, total ${totalPrice}`);
        return order;
    });
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('order-created', result);
    }
    // Notify customer and admins about new order (async, non-blocking)
    process.nextTick(async () => {
        try {
            const NotificationService = (await Promise.resolve().then(() => __importStar(require('../notification/notification.service')))).NotificationService;
            const itemName = result.produce ? result.produce.name : result.rentalSpace ? result.rentalSpace.location : 'Unknown item';
            // Notify customer
            await NotificationService.createNotification(result.userId, 'ORDER_PLACED', 'Order Placed Successfully', `Your order #${result.id} for ${itemName} has been placed successfully. Total: ৳${result.totalPrice}`, {
                orderId: result.id,
                itemName,
                totalPrice: result.totalPrice,
                status: result.status,
            });
            // Notify admins
            const admins = await prisma_js_1.prisma.user.findMany({
                where: { role: 'Admin' },
            });
            for (const admin of admins) {
                await NotificationService.createNotification(admin.id, 'SYSTEM', 'New Order Placed', `New order #${result.id} placed by ${result.user.name} for ${itemName}.`, {
                    orderId: result.id,
                    customerId: result.userId,
                    customerName: result.user.name,
                    vendorId: result.vendorId,
                    vendorName: result.vendor.user.name,
                    itemName,
                    totalPrice: result.totalPrice,
                });
            }
        }
        catch (error) {
            console.error('Failed to send notifications for new order:', error);
        }
    });
    return result;
};
const updateOrderStatus = async (id, status) => {
    const orderId = parseInt(id);
    if (isNaN(orderId)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid order ID');
    }
    const order = await prisma_js_1.prisma.order.findUnique({
        where: { id: orderId },
    });
    if (!order) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    // If cancelling a pending order, restore the stock
    if (status === common_js_1.OrderStatus.Cancelled && order.status === common_js_1.OrderStatus.Pending) {
        const updated = await prisma_js_1.prisma.$transaction(async (tx) => {
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
            const updatedOrder = await tx.order.update({
                where: { id },
                data: { status },
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
            return updatedOrder;
        });
        console.log(`Stock restored for cancelled order ${id}: +${order.quantity} to produce ${order.produceId}`);
        // Emit real-time update
        const io = global.io;
        if (io) {
            io.emit('order-status-updated', updated);
        }
        // Create notifications
        try {
            await notification_service_js_1.NotificationService.createNotification(updated.userId, client_1.NotificationType.ORDER_STATUS_UPDATE, 'Order Status Updated', `Your order #${updated.id} status has been updated to ${status}.`, {
                orderId: updated.id,
                status: status,
                produceName: updated.produce.name,
            });
            await notification_service_js_1.NotificationService.createNotification(updated.vendor.userId, client_1.NotificationType.ORDER_STATUS_UPDATE, 'Order Status Updated', `Order #${updated.id} status has been updated to ${status}.`, {
                orderId: updated.id,
                status: status,
                customerName: updated.user.name,
            });
        }
        catch (error) {
            console.error('Failed to create order status notification:', error);
        }
        return updated;
    }
    else {
        const updated = await prisma_js_1.prisma.order.update({
            where: { id },
            data: { status },
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
        // Emit real-time update
        const io = global.io;
        if (io) {
            io.emit('order-status-updated', updated);
        }
        // Create notifications
        try {
            await notification_service_js_1.NotificationService.createNotification(updated.userId, client_1.NotificationType.ORDER_STATUS_UPDATE, 'Order Status Updated', `Your order #${updated.id} status has been updated to ${status}.`, {
                orderId: updated.id,
                status: status,
                produceName: updated.produce.name,
            });
            await notification_service_js_1.NotificationService.createNotification(updated.vendor.userId, client_1.NotificationType.ORDER_STATUS_UPDATE, 'Order Status Updated', `Order #${updated.id} status has been updated to ${status}.`, {
                orderId: updated.id,
                status: status,
                customerName: updated.user.name,
            });
        }
        catch (error) {
            console.error('Failed to create order status notification:', error);
        }
        return updated;
    }
};
// Function to cancel expired pending orders and restore stock
const cancelExpiredOrders = async () => {
    const expiryTime = new Date(Date.now() - 30 * 60 * 1000); // 30 minutes ago
    const expiredOrders = await prisma_js_1.prisma.order.findMany({
        where: {
            status: common_js_1.OrderStatus.Pending,
            orderDate: {
                lt: expiryTime,
            },
        },
    });
    for (const order of expiredOrders) {
        await updateOrderStatus(order.id.toString(), common_js_1.OrderStatus.Cancelled);
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