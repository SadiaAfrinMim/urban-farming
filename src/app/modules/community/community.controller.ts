import { Request, Response } from 'express';
import httpStatus from 'http-status';

import sendResponse from '../../shared/sendResponse';
import { CommunityService } from './community.service';
import catchAsync from '../../shared/catchAsync';
import { AuthenticatedRequest } from '../../types/common';


const getAllPosts = catchAsync(async (req: Request, res: Response) => {
  const result = await CommunityService.getAllPosts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Posts retrieved successfully',
    data: result,
  });
});

const getPostById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CommunityService.getPostById(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post retrieved successfully',
    data: result,
  });
});

const createPost = catchAsync(async (req: Request, res: Response) => {
  const user = (req as AuthenticatedRequest).user;

  const payload = req.body;
  const result = await CommunityService.createPost(user.id, payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Post created successfully',
    data: result,
  });
});

const updatePost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const user = (req as AuthenticatedRequest).user;
  const result = await CommunityService.updatePost(id as string, user, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post updated successfully',
    data: result,
  });
});

const deletePost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = (req as AuthenticatedRequest).user;
  await CommunityService.deletePost(id as string, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post deleted successfully',
    data: null,
  });
});

export const CommunityController = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};