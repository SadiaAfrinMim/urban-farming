import express from 'express';
import { AdminController } from './admin.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/ValidateRequest';
import { AdminValidation } from './admin.validation';



const router = express.Router();

// All admin routes require Admin role authentication
router.use(auth('Admin'));

// User Management Routes
router.get('/users', validateRequest(AdminValidation.getUsersQuerySchema), AdminController.getAllUsers);
router.get('/users/all', AdminController.getAllUsersData);
router.get('/vendors/all', AdminController.getAllVendorsData);
router.get('/customers/all', AdminController.getAllCustomersData);
router.patch('/users/:userId/role', validateRequest(AdminValidation.updateUserRoleZodSchema), AdminController.updateUserRole);
router.patch('/users/:userId/status', validateRequest(AdminValidation.updateUserStatusZodSchema), AdminController.updateUserStatus);

// Certification and Verification Routes
router.get('/certifications/pending', AdminController.getPendingCertifications);
router.patch('/certifications/:vendorId/approve', validateRequest(AdminValidation.approveCertificationZodSchema), AdminController.approveCertification);
router.patch('/certifications/:vendorId/reject', validateRequest(AdminValidation.rejectCertificationZodSchema), AdminController.rejectCertification);

// Produce Approval Routes
router.get('/produces/pending', AdminController.getPendingProduces);
router.patch('/produces/:produceId/approve', validateRequest(AdminValidation.approveProduceZodSchema), AdminController.approveProduce);
router.patch('/produces/:produceId/reject', validateRequest(AdminValidation.rejectProduceZodSchema), AdminController.rejectProduce);

// Content Moderation Routes
router.get('/posts', AdminController.getAllPosts);
router.patch('/posts/:postId/approve', validateRequest(AdminValidation.approvePostZodSchema), AdminController.approvePost);
router.delete('/posts/:postId', validateRequest(AdminValidation.deletePostZodSchema), AdminController.deletePost);

// Report Handling Routes
router.get('/reports', AdminController.getReports);
router.patch('/reports/:reportId/resolve', validateRequest(AdminValidation.resolveReportZodSchema), AdminController.resolveReport);

// Transaction and Order Monitoring Routes
router.get('/orders', validateRequest(AdminValidation.getOrdersQuerySchema), AdminController.getAllOrders);
router.get('/analytics/rental', AdminController.getRentalAnalytics);
router.get('/analytics/revenue', AdminController.getRevenueAnalytics);

// System Settings Routes
router.get('/logs/rate-limit', AdminController.getRateLimitLogs);
router.post('/announcements', validateRequest(AdminValidation.createAnnouncementZodSchema), AdminController.createAnnouncement);
router.get('/announcements', AdminController.getAnnouncements);
router.delete('/announcements/:announcementId', validateRequest(AdminValidation.deleteAnnouncementZodSchema), AdminController.deleteAnnouncement);

// Dashboard Routes
router.get('/dashboard/stats', AdminController.getDashboardStats);

export const AdminRoutes = router;