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
exports.PaymentService = void 0;
const stripe_1 = require("../../helpers/stripe");
const prisma_1 = require("../../shared/prisma");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const common_1 = require("../../types/common");
const createPaymentIntent = async (orderId, userId) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id: parseInt(orderId) },
        include: {
            produce: true,
            rentalSpace: true,
        },
    });
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    if (order.userId !== userId) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'You are not authorized to pay for this order');
    }
    if (order.status === 'Confirmed' || order.status === 'Delivered') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'This order has already been paid');
    }
    const amount = order.totalPrice;
    // Convert BDT to USD (approximate rate: 1 USD = 120 BDT)
    const usdAmount = Math.round(amount / 120 * 100); // Convert to USD cents
    // Ensure minimum amount of $0.50 (50 cents)
    const finalAmount = Math.max(usdAmount, 50);
    const paymentIntent = await stripe_1.stripe.paymentIntents.create({
        amount: finalAmount, // Amount in USD cents
        currency: 'usd',
        metadata: {
            orderId: order.id,
            userId: userId,
            produceId: order.produceId?.toString(),
            rentalSpaceId: order.rentalSpaceId?.toString(),
            originalAmount: amount.toString(),
            originalCurrency: 'bdt',
        },
    });
    return {
        clientSecret: paymentIntent.client_secret,
        orderId: order.id,
        amount: finalAmount / 100, // Return USD amount
        originalAmount: amount, // Original BDT amount
        currency: 'usd',
        isRentalOrder: !!order.rentalSpaceId,
    };
};
const confirmPayment = async (paymentIntentId) => {
    const paymentIntent = await stripe_1.stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Payment not successful');
    }
    const orderId = paymentIntent.metadata.orderId;
    const userId = paymentIntent.metadata.userId;
    if (!orderId || !userId) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid payment intent');
    }
    // Create payment record
    const payment = await prisma_1.prisma.payment.create({
        data: {
            orderId: parseInt(orderId),
            userId: parseInt(userId),
            paymentIntentId: paymentIntentId,
            amount: paymentIntent.amount,
            originalAmount: parseFloat(paymentIntent.metadata.originalAmount || '0'),
            currency: paymentIntent.currency,
            status: 'Completed',
            paymentDate: new Date(),
        },
    });
    // Update order status
    const updatedOrder = await prisma_1.prisma.order.update({
        where: { id: parseInt(orderId) },
        data: {
            status: common_1.OrderStatus.Confirmed,
        },
        include: {
            produce: true,
            rentalSpace: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            payments: true,
        },
    });
    return { order: updatedOrder, payment };
};
const createCheckoutSession = async (orderId, userId) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id: parseInt(orderId) },
        include: {
            produce: true,
            rentalSpace: true,
        },
    });
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    if (order.userId !== userId) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'You are not authorized to pay for this order');
    }
    const amount = order.totalPrice;
    // Convert BDT to USD (approximate rate: 1 USD = 120 BDT)
    const usdAmount = Math.round(amount / 120 * 100); // Convert to USD cents
    // Ensure minimum amount of $0.50 (50 cents)
    const finalAmount = Math.max(usdAmount, 50);
    const productName = order.produce ? order.produce.name : order.rentalSpace ? `Rental Space: ${order.rentalSpace.location}` : 'Unknown item';
    const productDescription = order.produce ? (order.produce.description || 'Organic produce purchase') : 'Monthly rental space booking';
    const session = await stripe_1.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: productName,
                        description: productDescription,
                    },
                    unit_amount: finalAmount,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/payment?canceled=true`,
        metadata: {
            orderId: order.id,
            userId: userId,
            produceId: order.produceId?.toString(),
            rentalSpaceId: order.rentalSpaceId?.toString(),
            originalAmount: amount.toString(),
            originalCurrency: 'bdt',
        },
    });
    return {
        sessionId: session.id,
        url: session.url,
        amount: finalAmount / 100, // Return USD amount
        originalAmount: amount, // Original BDT amount
        currency: 'usd',
    };
};
const handleWebhook = async (signature, payload) => {
    const event = stripe_1.stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;
        const rentalSpaceId = session.metadata?.rentalSpaceId;
        if (orderId) {
            // Update order status to Confirmed
            const updatedOrder = await prisma_1.prisma.order.update({
                where: { id: parseInt(orderId) },
                data: {
                    status: common_1.OrderStatus.Confirmed,
                },
                include: {
                    rentalSpace: true,
                    user: true,
                },
            });
            // If this is a rental order, mark the space as booked
            if (rentalSpaceId && updatedOrder.rentalSpace) {
                const { RentalService } = await Promise.resolve().then(() => __importStar(require('../rental/rental.service')));
                await RentalService.bookRentalSpace(rentalSpaceId, updatedOrder.userId.toString());
                // Emit real-time update for rental booking completion
                const io = global.io;
                if (io) {
                    io.emit('rental-order-completed', {
                        orderId: updatedOrder.id,
                        rentalSpaceId: parseInt(rentalSpaceId),
                        customerId: updatedOrder.userId,
                    });
                }
            }
        }
    }
    return { received: true };
};
exports.PaymentService = {
    createPaymentIntent,
    confirmPayment,
    createCheckoutSession,
    handleWebhook,
};
//# sourceMappingURL=payment.service.js.map