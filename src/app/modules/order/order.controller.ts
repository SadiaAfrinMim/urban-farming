import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync';
import sendResponse from '../../../app/shared/sendResponse';
import { OrderService } from './order.service';

const getOrders = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const result = await OrderService.getOrders(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = (req as any).user;
  const result = await OrderService.getOrderById(id as string, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved successfully',
    data: result,
  });
});

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const payload = req.body;
  const result = await OrderService.createOrder(user.id, payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const updateOrderStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await OrderService.updateOrderStatus(id as string, status);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order status updated successfully',
    data: result,
  });
});

export const OrderController = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
};