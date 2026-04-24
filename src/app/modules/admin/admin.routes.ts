import express from 'express';
import { AdminController } from './admin.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/ValidateRequest';
import { AdminValidation } from './admin.validation';

const router = express.Router();

// All admin routes require Admin role
router.use(auth('Admin'));

// User Management Routes
router.get('/users', AdminController.getAllUsers);
router.patch('/users/:userId/role', validateRequest(AdminValidation.updateUserRole), AdminController.updateUserRole);
router.patch('/users/:userId/status', validateRequest(AdminValidation.updateUserStatus), AdminController.updateUserStatus);

// Certification and Verification Routes
router.get('/certifications/pending', AdminController.getPendingCertifications);
router.patch('/certifications/:vendorId/approve', AdminController.approveCertification);
router.patch('/certifications/:vendorId/reject', validateRequest(AdminValidation.rejectCertification), AdminController.rejectCertification);

// Produce Approval Routes
router.get('/produces/pending', AdminController.getPendingProduces);
router.patch('/produces/:produceId/approve', AdminController.approveProduce);
router.patch('/produces/:produceId/reject', AdminController.rejectProduce);

// Content Moderation Routes
router.get('/posts', AdminController.getAllPosts);
router.patch('/posts/:postId/approve', AdminController.approvePost);
router.delete('/posts/:postId', AdminController.deletePost);

// Report Handling Routes
router.get('/reports', AdminController.getReports);
router.patch('/reports/:reportId/resolve', AdminController.resolveReport);

// Transaction and Order Monitoring Routes
router.get('/orders', AdminController.getAllOrders);
router.get('/analytics/rental', AdminController.getRentalAnalytics);
router.get('/analytics/revenue', AdminController.getRevenueAnalytics);

// System Settings Routes
router.get('/logs/rate-limit', AdminController.getRateLimitLogs);
router.post('/announcements', validateRequest(AdminValidation.createAnnouncement), AdminController.createAnnouncement);
router.get('/announcements', AdminController.getAnnouncements);
router.delete('/announcements/:announcementId', AdminController.deleteAnnouncement);

export const AdminRoutes = router;