import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync.js';
import sendResponse from '../../../app/shared/sendResponse.js';
import { OrderService } from './order.service.js';
const getOrders = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await OrderService.getOrders(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
    });
});
const getOrderById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const result = await OrderService.getOrderById(id, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order retrieved successfully',
        data: result,
    });
});
const createOrder = catchAsync(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await OrderService.createOrder(user.id, payload);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Order created successfully',
        data: result,
    });
});
const updateOrderStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const result = await OrderService.updateOrderStatus(id, status);
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
//# sourceMappingURL=order.controller.js.map