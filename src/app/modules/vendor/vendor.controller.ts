import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { VendorService } from './vendor.service';
import { IJWTPayload } from '../../types/common';

const createOrUpdateProfile = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.createOrUpdateProfile(user, req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile updated successfully',
        data: result,
    });
});

const getVendorCard = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.getVendorCard(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vendor card retrieved successfully',
        data: result,
    });
});

const getProfile = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.getProfile(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile retrieved successfully',
        data: result,
    });
});

const createRentalSpace = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.createRentalSpace(user, req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Rental space created successfully',
        data: result,
    });
});

const getRentalSpaces = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.getRentalSpaces(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental spaces retrieved successfully',
        data: result,
    });
});

const updateRentalSpace = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { id } = req.params;
    const result = await VendorService.updateRentalSpace(user, id, req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental space updated successfully',
        data: result,
    });
});

const deleteRentalSpace = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { id } = req.params;
    const result = await VendorService.deleteRentalSpace(user, id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental space deleted successfully',
        data: result,
    });
});

const createProduce = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.createProduce(user, req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Produce created successfully',
        data: result,
    });
});

const getProduces = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.getProduces(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Produces retrieved successfully',
        data: result,
    });
});

const updateProduce = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { id } = req.params;
    const result = await VendorService.updateProduce(user, id, req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Produce updated successfully',
        data: result,
    });
});

const deleteProduce = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { id } = req.params;
    const result = await VendorService.deleteProduce(user, id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Produce deleted successfully',
        data: result,
    });
});

const updatePlantStatus = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.updatePlantStatus(user, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Plant status updated successfully',
        data: result,
    });
});

const updateOrderStatus = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { id } = req.params;
    const { status } = req.body;
    const result = await VendorService.updateOrderStatus(user, id, status);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order status updated successfully',
        data: result,
    });
});

const getOrders = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.getOrders(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
    });
});

const createVendorPost = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.createVendorPost(user, req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Vendor post created successfully',
        data: result,
    });
});

const getVendorPosts = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.getVendorPosts(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vendor posts retrieved successfully',
        data: result,
    });
});

const updateVendorPost = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { id } = req.params;
    const result = await VendorService.updateVendorPost(user, id, req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vendor post updated successfully',
        data: result,
    });
});

const deleteVendorPost = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { id } = req.params;
    const result = await VendorService.deleteVendorPost(user, id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vendor post deleted successfully',
        data: result,
    });
});

const toggleVendorPostLike = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { postId } = req.params;
    const result = await VendorService.toggleVendorPostLike(user, postId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.liked ? 'Post liked successfully' : 'Post unliked successfully',
        data: result,
    });
});

const addVendorPostComment = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const { postId } = req.params;
    const { content } = req.body;
    const result = await VendorService.addVendorPostComment(user, postId, content);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Comment added successfully',
        data: result,
    });
});

const getVendorDashboardStats = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user!;
    const result = await VendorService.getVendorDashboardStats(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Dashboard stats retrieved successfully',
        data: result,
    });
});

export const VendorController = {
    createOrUpdateProfile,
    getProfile,
    getVendorCard,
    createRentalSpace,
    getRentalSpaces,
    updateRentalSpace,
    deleteRentalSpace,
    createProduce,
    getProduces,
    updateProduce,
    deleteProduce,
    updatePlantStatus,
    updateOrderStatus,
    getOrders,
    createVendorPost,
    getVendorPosts,
    updateVendorPost,
    deleteVendorPost,
    toggleVendorPostLike,
    addVendorPostComment,
    getVendorDashboardStats,
};