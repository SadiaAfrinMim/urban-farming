import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { PaymentService } from './payment.service';
const createPaymentIntent = catchAsync(async (req, res) => {
    const userId = req.user?.id;
    const { orderId } = req.body;
    console.log('Payment intent request:', { orderId, userId, user: req.user });
    if (!userId) {
        throw new Error('Authentication required');
    }
    const result = await PaymentService.createPaymentIntent(orderId, userId);
    console.log('Payment intent created successfully:', result.clientSecret ? 'Has client secret' : 'No client secret');
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment intent created successfully',
        data: result,
    });
});
const confirmPayment = catchAsync(async (req, res) => {
    const { paymentIntentId } = req.body;
    const result = await PaymentService.confirmPayment(paymentIntentId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment confirmed successfully',
        data: result,
    });
});
const createCheckoutSession = catchAsync(async (req, res) => {
    const userId = req.user?.id;
    const { orderId } = req.body;
    const result = await PaymentService.createCheckoutSession(orderId, userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Checkout session created successfully',
        data: result,
    });
});
const handleWebhook = catchAsync(async (req, res) => {
    const signature = req.headers['stripe-signature'];
    const result = await PaymentService.handleWebhook(signature, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Webhook received successfully',
        data: result,
    });
});
export const PaymentController = {
    createPaymentIntent,
    confirmPayment,
    createCheckoutSession,
    handleWebhook,
};
//# sourceMappingURL=payment.controller.js.map