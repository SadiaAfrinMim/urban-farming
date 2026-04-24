import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse';
import catchAsync from '../../shared/catchAsync';
import { AdminService } from './admin.service';
import { AuthenticatedRequest } from '../../types/common';
import pick from '../../helpers/pick';
import { adminFilterableFields } from './admin.constants';

// User Management
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await AdminService.getAllUsers(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
});

const updateUserRole = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { role } = req.body;
  const result = await AdminService.updateUserRole(userId, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User role updated successfully',
    data: result,
  });
});

const updateUserStatus = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { status } = req.body;
  const result = await AdminService.updateUserStatus(userId, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User status updated successfully',
    data: result,
  });
});

// Certification and Verification
const getPendingCertifications = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getPendingCertifications();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Pending certifications retrieved successfully',
    data: result,
  });
});

const approveCertification = catchAsync(async (req: Request, res: Response) => {
  const { vendorId } = req.params;
  const result = await AdminService.approveCertification(vendorId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certification approved successfully',
    data: result,
  });
});

const rejectCertification = catchAsync(async (req: Request, res: Response) => {
  const { vendorId } = req.params;
  const { reason } = req.body;
  const result = await AdminService.rejectCertification(vendorId, reason);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certification rejected',
    data: result,
  });
});

const approveProduce = catchAsync(async (req: Request, res: Response) => {
  const { produceId } = req.params;
  const result = await AdminService.approveProduce(produceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Produce approved successfully',
    data: result,
  });
});

const rejectProduce = catchAsync(async (req: Request, res: Response) => {
  const { produceId } = req.params;
  const result = await AdminService.rejectProduce(produceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Produce rejected',
    data: result,
  });
});

// Content Moderation
const getPendingProduces = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getPendingProduces();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Pending produces retrieved successfully',
    data: result,
  });
});

const getAllPosts = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllPosts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Posts retrieved successfully',
    data: result,
  });
});

const approvePost = catchAsync(async (req: Request, res: Response) => {
  const { postId } = req.params;
  const user = (req as AuthenticatedRequest).user;
  const result = await AdminService.approvePost(postId, user.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post approved successfully',
    data: result,
  });
});

const deletePost = catchAsync(async (req: Request, res: Response) => {
  const { postId } = req.params;
  const result = await AdminService.deletePost(postId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post deleted successfully',
    data: result,
  });
});

const getReports = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getReports();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reports retrieved successfully',
    data: result,
  });
});

const resolveReport = catchAsync(async (req: Request, res: Response) => {
  const { reportId } = req.params;
  const user = (req as AuthenticatedRequest).user;
  const result = await AdminService.resolveReport(reportId, user.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Report resolved successfully',
    data: result,
  });
});

// Transaction and Order Monitoring
const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await AdminService.getAllOrders({}, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

const getRentalAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getRentalAnalytics();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental analytics retrieved successfully',
    data: result,
  });
});

const getRevenueAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getRevenueAnalytics();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Revenue analytics retrieved successfully',
    data: result,
  });
});

// System Settings
const getRateLimitLogs = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await AdminService.getRateLimitLogs(options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rate limit logs retrieved successfully',
    data: result,
  });
});

const createAnnouncement = catchAsync(async (req: Request, res: Response) => {
  const user = (req as AuthenticatedRequest).user;
  const result = await AdminService.createAnnouncement(user.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Announcement created successfully',
    data: result,
  });
});

const getAnnouncements = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAnnouncements();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Announcements retrieved successfully',
    data: result,
  });
});

const deleteAnnouncement = catchAsync(async (req: Request, res: Response) => {
  const { announcementId } = req.params;
  const result = await AdminService.deleteAnnouncement(announcementId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Announcement deleted successfully',
    data: result,
  });
});

export const AdminController = {
  // User Management
  getAllUsers,
  updateUserRole,
  updateUserStatus,

  // Certification and Verification
  getPendingCertifications,
  approveCertification,
  rejectCertification,
  approveProduce,
  rejectProduce,

  // Content Moderation
  getPendingProduces,
  getAllPosts,
  approvePost,
  deletePost,
  getReports,
  resolveReport,

  // Transaction and Order Monitoring
  getAllOrders,
  getRentalAnalytics,
  getRevenueAnalytics,

  // System Settings
  getRateLimitLogs,
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
};