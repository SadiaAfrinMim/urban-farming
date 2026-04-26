import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse';
import { CustomerService } from './customer.service';
import catchAsync from '../../shared/catchAsync';
import { IJWTPayload } from '../../types/common';

const getCustomerPosts = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const result = await CustomerService.getCustomerPosts(user.id);
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
  const result = await CustomerService.createCustomerPost(user.id, payload);
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
  const result = await CustomerService.updateCustomerPost(id, user.id, payload);
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
  await CustomerService.deleteCustomerPost(id, user.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer post deleted successfully',
    data: null,
  });
});

const getCustomerDashboard = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const result = await CustomerService.getCustomerDashboard(user.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer dashboard retrieved successfully',
    data: result,
  });
});

const getCustomerOrders = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const user = req.user!;
  const result = await CustomerService.getCustomerOrders(user.id);
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
  const result = await CustomerService.toggleCustomerPostLike(id, user.id);
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
  const result = await CustomerService.addCustomerPostComment(id, user.id, content);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Comment added successfully',
    data: result,
  });
});

const getCustomerPostComments = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.getCustomerPostComments(id);
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
  await CustomerService.deleteCustomerPostComment(commentId, user.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment deleted successfully',
    data: null,
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
};