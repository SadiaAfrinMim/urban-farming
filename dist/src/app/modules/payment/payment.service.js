"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const stripe_1 = require("../../helpers/stripe");
const prisma_1 = require("../../shared/prisma");
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const common_1 = require("../../types/common");
const createPaymentIntent = async (orderId, userId) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id: parseInt(orderId) },
        include: {
            produce: true,
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
    const paymentIntent = await stripe_1.stripe.paymentIntents.create({
        amount: Math.round((order.totalPrice || order.produce.price * order.quantity) * 100), // Convert to cents
        currency: 'bdt',
        metadata: {
            orderId: order.id,
            userId: userId,
            produceId: order.produceId,
        },
    });
    return {
        clientSecret: paymentIntent.client_secret,
        orderId: order.id,
        amount: order.totalPrice,
    };
};
const confirmPayment = async (paymentIntentId) => {
    const paymentIntent = await stripe_1.stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Payment not successful');
    }
    const orderId = paymentIntent.metadata.orderId;
    if (!orderId) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid payment intent');
    }
    const updatedOrder = await prisma_1.prisma.order.update({
        where: { id: parseInt(orderId) },
        data: {
            status: common_1.OrderStatus.Confirmed,
        },
        include: {
            produce: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
    });
    return updatedOrder;
};
const createCheckoutSession = async (orderId, userId) => {
    const order = await prisma_1.prisma.order.findUnique({
        where: { id: parseInt(orderId) },
        include: {
            produce: true,
        },
    });
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    if (order.userId !== userId) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'You are not authorized to pay for this order');
    }
    const session = await stripe_1.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'bdt',
                    product_data: {
                        name: order.produce.name,
                        description: order.produce.description || 'Organic produce purchase',
                    },
                    unit_amount: Math.round((order.totalPrice || order.produce.price * order.quantity) * 100),
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/payment?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/payment?canceled=true`,
        metadata: {
            orderId: order.id,
            userId: userId,
        },
    });
    return {
        sessionId: session.id,
        url: session.url,
    };
};
const handleWebhook = async (signature, payload) => {
    const event = stripe_1.stripe.webhooks.constructEvent(payload, signature, config_1.default.stripeWebhookSecret);
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;
        if (orderId) {
            await prisma_1.prisma.order.update({
                where: { id: parseInt(orderId) },
                data: {
                    status: common_1.OrderStatus.Confirmed,
                },
            });
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