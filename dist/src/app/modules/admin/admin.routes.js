"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const ValidateRequest_1 = __importDefault(require("../../middlewares/ValidateRequest"));
const admin_validation_1 = require("./admin.validation");
const router = express_1.default.Router();
// All admin routes require Admin role authentication
router.use((0, auth_1.default)('Admin'));
// User Management Routes
router.get('/users', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.getUsersQuerySchema), admin_controller_1.AdminController.getAllUsers);
router.get('/users/all', admin_controller_1.AdminController.getAllUsersData);
router.get('/vendors/all', admin_controller_1.AdminController.getAllVendorsData);
router.get('/customers/all', admin_controller_1.AdminController.getAllCustomersData);
router.patch('/users/:userId/role', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.updateUserRoleZodSchema), admin_controller_1.AdminController.updateUserRole);
router.patch('/users/:userId/status', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.updateUserStatusZodSchema), admin_controller_1.AdminController.updateUserStatus);
// Certification and Verification Routes
router.get('/certifications/pending', admin_controller_1.AdminController.getPendingCertifications);
router.patch('/certifications/:vendorId/approve', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.approveCertificationZodSchema), admin_controller_1.AdminController.approveCertification);
router.patch('/certifications/:vendorId/reject', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.rejectCertificationZodSchema), admin_controller_1.AdminController.rejectCertification);
// Produce Approval Routes
router.get('/produces/pending', admin_controller_1.AdminController.getPendingProduces);
router.patch('/produces/:produceId/approve', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.approveProduceZodSchema), admin_controller_1.AdminController.approveProduce);
router.patch('/produces/:produceId/reject', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.rejectProduceZodSchema), admin_controller_1.AdminController.rejectProduce);
// Content Moderation Routes
router.get('/posts', admin_controller_1.AdminController.getAllPosts);
router.patch('/posts/:postId/approve', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.approvePostZodSchema), admin_controller_1.AdminController.approvePost);
router.delete('/posts/:postId', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.deletePostZodSchema), admin_controller_1.AdminController.deletePost);
// Report Handling Routes
router.get('/reports', admin_controller_1.AdminController.getReports);
router.patch('/reports/:reportId/resolve', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.resolveReportZodSchema), admin_controller_1.AdminController.resolveReport);
// Transaction and Order Monitoring Routes
router.get('/orders', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.getOrdersQuerySchema), admin_controller_1.AdminController.getAllOrders);
router.get('/analytics/rental', admin_controller_1.AdminController.getRentalAnalytics);
router.get('/analytics/revenue', admin_controller_1.AdminController.getRevenueAnalytics);
// System Settings Routes
router.get('/logs/rate-limit', admin_controller_1.AdminController.getRateLimitLogs);
router.post('/announcements', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.createAnnouncementZodSchema), admin_controller_1.AdminController.createAnnouncement);
router.get('/announcements', admin_controller_1.AdminController.getAnnouncements);
router.delete('/announcements/:announcementId', (0, ValidateRequest_1.default)(admin_validation_1.AdminValidation.deleteAnnouncementZodSchema), admin_controller_1.AdminController.deleteAnnouncement);
// Dashboard Routes
router.get('/dashboard/stats', admin_controller_1.AdminController.getDashboardStats);
exports.AdminRoutes = router;
//# sourceMappingURL=admin.routes.js.map