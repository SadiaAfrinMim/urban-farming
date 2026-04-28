"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const common_1 = require("../../types/common");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer post management
 */
const router = express_1.default.Router();
/**
 * @swagger
 * /customer/posts:
 *   get:
 *     summary: Get customer's posts
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 */
router.get('/posts', (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.getCustomerPosts);
/**
 * @swagger
 * /customer/posts:
 *   post:
 *     summary: Create a new customer post
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post
 *               content:
 *                 type: string
 *                 description: The content of the post
 *               category:
 *                 type: string
 *                 enum: [Question, Discussion, Review, Suggestion]
 *                 description: The category of the post
 *             required:
 *               - title
 *               - content
 *     responses:
 *       201:
 *         description: Post created successfully
 */
router.post('/posts', (0, validateRequest_1.default)(customer_validation_1.CustomerValidation.createCustomerPostZodSchema), (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.createCustomerPost);
/**
 * @swagger
 * /customer/posts/{id}:
 *   patch:
 *     summary: Update a customer post
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the post
 *               content:
 *                 type: string
 *                 description: The updated content of the post
 *               category:
 *                 type: string
 *                 enum: [Question, Discussion, Review, Suggestion]
 *                 description: The updated category of the post
 *     responses:
 *       200:
 *         description: Post updated successfully
 */
router.patch('/posts/:id', (0, validateRequest_1.default)(customer_validation_1.CustomerValidation.updateCustomerPostZodSchema), (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.updateCustomerPost);
/**
 * @swagger
 * /customer/posts/{id}:
 *   delete:
 *     summary: Delete a customer post
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 */
router.delete('/posts/:id', (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.deleteCustomerPost);
/**
 * @swagger
 * /customer/posts/{id}/like:
 *   post:
 *     summary: Toggle like on a customer post
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Like toggled successfully
 */
router.post('/posts/:id/like', (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.toggleCustomerPostLike);
/**
 * @swagger
 * /customer/posts/{id}/comments:
 *   post:
 *     summary: Add a comment to a customer post
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The comment content
 *             required:
 *               - content
 *     responses:
 *       201:
 *         description: Comment added successfully
 */
router.post('/posts/:id/comments', (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.addCustomerPostComment);
/**
 * @swagger
 * /customer/posts/{id}/comments:
 *   get:
 *     summary: Get comments for a customer post
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Comments retrieved successfully
 */
router.get('/posts/:id/comments', customer_controller_1.CustomerController.getCustomerPostComments);
/**
 * @swagger
 * /customer/posts/comments/{commentId}:
 *   delete:
 *     summary: Delete a customer post comment
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The comment ID
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 */
router.delete('/posts/comments/:commentId', (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.deleteCustomerPostComment);
/**
 * @swagger
 * /customer/dashboard:
 *   get:
 *     summary: Get customer dashboard data
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard data retrieved successfully
 */
router.get('/dashboard', (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.getCustomerDashboard);
/**
 * @swagger
 * /customer/orders:
 *   get:
 *     summary: Get customer's orders
 *     tags: [Customer]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Orders retrieved successfully
 */
router.get('/orders', (0, auth_1.default)(common_1.UserRole.Customer), customer_controller_1.CustomerController.getCustomerOrders);
exports.customerRoutes = router;
//# sourceMappingURL=customer.routes.js.map