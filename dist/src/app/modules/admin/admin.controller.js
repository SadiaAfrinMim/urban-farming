"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const admin_service_1 = require("./admin.service");
const pick_1 = __importDefault(require("../../helpers/pick"));
const admin_constants_1 = require("./admin.constants");
// User Management
const getAllUsers = (0, catchAsync_1.default)(async (req, res) => {
    const filters = (0, pick_1.default)(req.query, admin_constants_1.adminFilterableFields);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await admin_service_1.AdminService.getAllUsers(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Users retrieved successfully',
        data: result,
    });
});
const getAllUsersData = (0, catchAsync_1.default)(async (req, res) => {
    const filters = (0, pick_1.default)(req.query, ['searchTerm', 'role', 'status']);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await admin_service_1.AdminService.getAllUsersData(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All users data retrieved successfully',
        data: result.data,
        meta: result.meta,
    });
});
const getAllVendorsData = (0, catchAsync_1.default)(async (req, res) => {
    const filters = (0, pick_1.default)(req.query, ['searchTerm', 'certificationStatus']);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await admin_service_1.AdminService.getAllVendorsData(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All vendors data retrieved successfully',
        data: result,
    });
});
const getAllCustomersData = (0, catchAsync_1.default)(async (req, res) => {
    const filters = (0, pick_1.default)(req.query, ['searchTerm']);
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await admin_service_1.AdminService.getAllCustomersData(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All customers data retrieved successfully',
        data: result,
    });
});
const updateUserRole = (0, catchAsync_1.default)(async (req, res) => {
    const { userId } = req.params;
    const { role } = req.body;
    const result = await admin_service_1.AdminService.updateUserRole(userId, role);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User role updated successfully',
        data: result,
    });
});
const updateUserStatus = (0, catchAsync_1.default)(async (req, res) => {
    const { userId } = req.params;
    const { status } = req.body;
    const result = await admin_service_1.AdminService.updateUserStatus(userId, status);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User status updated successfully',
        data: result,
    });
});
// Certification and Verification
const getPendingCertifications = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getPendingCertifications();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Pending certifications retrieved successfully',
        data: result,
    });
});
const approveCertification = (0, catchAsync_1.default)(async (req, res) => {
    const { vendorId } = req.params;
    const result = await admin_service_1.AdminService.approveCertification(vendorId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Certification approved successfully',
        data: result,
    });
});
const rejectCertification = (0, catchAsync_1.default)(async (req, res) => {
    const { vendorId } = req.params;
    const { reason } = req.body;
    const result = await admin_service_1.AdminService.rejectCertification(vendorId, reason);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Certification rejected',
        data: result,
    });
});
const approveProduce = (0, catchAsync_1.default)(async (req, res) => {
    const { produceId } = req.params;
    const result = await admin_service_1.AdminService.approveProduce(produceId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produce approved successfully',
        data: result,
    });
});
const rejectProduce = (0, catchAsync_1.default)(async (req, res) => {
    const { produceId } = req.params;
    const result = await admin_service_1.AdminService.rejectProduce(produceId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produce rejected',
        data: result,
    });
});
// Content Moderation
const getPendingProduces = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getPendingProduces();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Pending produces retrieved successfully',
        data: result,
    });
});
const getAllPosts = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getAllPosts();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Posts retrieved successfully',
        data: result,
    });
});
const approvePost = (0, catchAsync_1.default)(async (req, res) => {
    const { postId } = req.params;
    const user = req.user;
    const result = await admin_service_1.AdminService.approvePost(postId, user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post approved successfully',
        data: result,
    });
});
const deletePost = (0, catchAsync_1.default)(async (req, res) => {
    const { postId } = req.params;
    const result = await admin_service_1.AdminService.deletePost(postId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post deleted successfully',
        data: result,
    });
});
const getReports = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getReports();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Reports retrieved successfully',
        data: result,
    });
});
const resolveReport = (0, catchAsync_1.default)(async (req, res) => {
    const { reportId } = req.params;
    const user = req.user;
    const result = await admin_service_1.AdminService.resolveReport(reportId, user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Report resolved successfully',
        data: result,
    });
});
// Transaction and Order Monitoring
const getAllOrders = (0, catchAsync_1.default)(async (req, res) => {
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await admin_service_1.AdminService.getAllOrders({}, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
    });
});
const getRentalAnalytics = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getRentalAnalytics();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental analytics retrieved successfully',
        data: result,
    });
});
const getRevenueAnalytics = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getRevenueAnalytics();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Revenue analytics retrieved successfully',
        data: result,
    });
});
// System Settings
const getRateLimitLogs = (0, catchAsync_1.default)(async (req, res) => {
    const options = (0, pick_1.default)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await admin_service_1.AdminService.getRateLimitLogs(options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rate limit logs retrieved successfully',
        data: result,
    });
});
const createAnnouncement = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await admin_service_1.AdminService.createAnnouncement(user.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Announcement created successfully',
        data: result,
    });
});
const getAnnouncements = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getAnnouncements();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Announcements retrieved successfully',
        data: result,
    });
});
const deleteAnnouncement = (0, catchAsync_1.default)(async (req, res) => {
    const { announcementId } = req.params;
    const result = await admin_service_1.AdminService.deleteAnnouncement(announcementId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Announcement deleted successfully',
        data: result,
    });
});
const getDashboardStats = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.AdminService.getDashboardStats();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Dashboard stats retrieved successfully',
        data: result,
    });
});
exports.AdminController = {
    // User Management
    getAllUsers,
    getAllUsersData,
    getAllVendorsData,
    getAllCustomersData,
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
    // Dashboard
    getDashboardStats,
    // System Settings
    getRateLimitLogs,
    createAnnouncement,
    getAnnouncements,
    deleteAnnouncement,
};
//# sourceMappingURL=admin.controller.js.map