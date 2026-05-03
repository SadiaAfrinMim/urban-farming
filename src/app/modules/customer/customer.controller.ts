import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse.js';
import { CustomerService } from './customer.service.js';
import catchAsync from '../../shared/catchAsync.js';
import { IJWTPayload } from '../../types/common.js';

const getCustomerPosts = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const result = await CustomerService.getCustomerPosts(String(user.id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer posts retrieved successfully',
    data: result,
  });
});

const createCustomerPost = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const payload = req.body;
  const result = await CustomerService.createCustomerPost(String(user.id), payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Customer post created successfully',
    data: result,
  });
});

const updateCustomerPost = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const { id } = req.params;
  const payload = req.body;
  const result = await CustomerService.updateCustomerPost(id as string, String(user.id), payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer post updated successfully',
    data: result,
  });
});

const deleteCustomerPost = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const { id } = req.params;
  await CustomerService.deleteCustomerPost(id as string, String(user.id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer post deleted successfully',
    data: null,
  });
});

const getCustomerDashboard = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const result = await CustomerService.getCustomerDashboard(String(user.id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer dashboard retrieved successfully',
    data: result,
  });
});

const getCustomerOrders = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const result = await CustomerService.getCustomerOrders(String(user.id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer orders retrieved successfully',
    data: result,
  });
});

const toggleCustomerPostLike = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const { id } = req.params;
  const user = req.user!;
  const result = await CustomerService.toggleCustomerPostLike(id as string, String(user.id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result.liked ? 'Post liked successfully' : 'Post unliked successfully',
    data: result,
  });
});

const addCustomerPostComment = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const { id } = req.params;
  const user = req.user!;
  const { content } = req.body;
  const result = await CustomerService.addCustomerPostComment(id as string, String(user.id), content);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Comment added successfully',
    data: result,
  });
});

const getCustomerPostComments = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.getCustomerPostComments(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comments retrieved successfully',
    data: result,
  });
});

const deleteCustomerPostComment = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const { commentId } = req.params;
  const user = req.user!;
  await CustomerService.deleteCustomerPostComment(commentId as string, String(user.id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment deleted successfully',
    data: null,
  });
});

const updateRentalOrderStatus = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const user = req.user!;
  const result = await CustomerService.updateRentalOrderStatus(id as string, String(user.id), status);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental order status updated successfully',
    data: result,
  });
});

export const CustomerController = {
  getCustomerPosts,
  createCustomerPost,
  updateCustomerPost,
  deleteCustomerPost,
  getCustomerDashboard,
  getCustomerOrders,
  toggleCustomerPostLike,
  addCustomerPostComment,
  getCustomerPostComments,
  deleteCustomerPostComment,
  updateRentalOrderStatus,
};
