"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const payment_service_1 = require("./payment.service");
const createPaymentIntent = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.id;
    const { orderId } = req.body;
    console.log('Payment intent request:', { orderId, userId, user: req.user });
    if (!userId) {
        throw new Error('Authentication required');
    }
    const result = await payment_service_1.PaymentService.createPaymentIntent(orderId, userId);
    console.log('Payment intent created successfully:', result.clientSecret ? 'Has client secret' : 'No client secret');
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment intent created successfully',
        data: result,
    });
});
const confirmPayment = (0, catchAsync_1.default)(async (req, res) => {
    const { paymentIntentId } = req.body;
    const result = await payment_service_1.PaymentService.confirmPayment(paymentIntentId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment confirmed successfully',
        data: result,
    });
});
const createCheckoutSession = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.id;
    const { orderId } = req.body;
    const result = await payment_service_1.PaymentService.createCheckoutSession(orderId, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Checkout session created successfully',
        data: result,
    });
});
const handleWebhook = (0, catchAsync_1.default)(async (req, res) => {
    const signature = req.headers['stripe-signature'];
    const result = await payment_service_1.PaymentService.handleWebhook(signature, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Webhook received successfully',
        data: result,
    });
});
exports.PaymentController = {
    createPaymentIntent,
    confirmPayment,
    createCheckoutSession,
    handleWebhook,
};
//# sourceMappingURL=payment.controller.js.map