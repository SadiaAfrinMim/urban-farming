import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { PaymentService } from './payment.service';
import { IJWTPayload } from '../../types/common';
import auth from '../../middlewares/auth';
import { UserRole } from '../../types/common';

const createPaymentIntent = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.id as string;
  const { orderId } = req.body;
  const result = await PaymentService.createPaymentIntent(orderId, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment intent created successfully',
    data: result,
  });
});

const confirmPayment = catchAsync(async (req: Request, res: Response) => {
  const { paymentIntentId } = req.body;
  const result = await PaymentService.confirmPayment(paymentIntentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment confirmed successfully',
    data: result,
  });
});

const createCheckoutSession = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.id as string;
  const { orderId } = req.body;
  const result = await PaymentService.createCheckoutSession(orderId, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Checkout session created successfully',
    data: result,
  });
});

const handleWebhook = catchAsync(async (req: Request, res: Response) => {
  const signature = req.headers['stripe-signature'] as string;
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
