"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.communityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const community_controller_1 = require("./community.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("../../../../prisma/prisma/generated/client");
/**
 * @swagger
 * tags:
 *   name: Community
 *   description: Community post management
 */
const router = express_1.default.Router();
/**
 * @swagger
 * /community/posts:
 *   get:
 *     summary: Get all community posts
 *     tags: [Community]
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CommunityPost'
 */
router.get('/posts', community_controller_1.CommunityController.getAllPosts);
/**
 * @swagger
 * /community/posts/{id}:
 *   get:
 *     summary: Get a community post by ID
 *     tags: [Community]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/CommunityPost'
 *       404:
 *         description: Post not found
 */
router.get('/posts/:id', community_controller_1.CommunityController.getPostById);
/**
 * @swagger
 * /community/posts:
 *   post:
 *     summary: Create a new community post
 *     tags: [Community]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postContent:
 *                 type: string
 *                 description: The content of the post
 *             required:
 *               - postContent
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/CommunityPost'
 *       401:
 *         description: Unauthorized
 */
router.post('/posts', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.createPost);
/**
 * @swagger
 * /community/posts/{id}:
 *   patch:
 *     summary: Update a community post
 *     tags: [Community]
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
 *               postContent:
 *                 type: string
 *                 description: The updated content of the post
 *             required:
 *               - postContent
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/CommunityPost'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */
router.patch('/posts/:id', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.updatePost);
/**
 * @swagger
 * /community/posts/{id}:
 *   delete:
 *     summary: Delete a community post
 *     tags: [Community]
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */
router.delete('/posts/:id', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.deletePost);
/**
 * @swagger
 * /community/posts/{id}/like:
 *   post:
 *     summary: Toggle like on a community post
 *     tags: [Community]
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
router.post('/posts/:id/like', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.toggleLike);
/**
 * @swagger
 * /community/posts/{id}/comments:
 *   post:
 *     summary: Add a comment to a community post
 *     tags: [Community]
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
router.post('/posts/:id/comments', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.addComment);
/**
 * @swagger
 * /community/posts/{id}/comments:
 *   get:
 *     summary: Get comments for a community post
 *     tags: [Community]
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
router.get('/posts/:id/comments', community_controller_1.CommunityController.getPostComments);
/**
 * @swagger
 * /community/posts/comments/{commentId}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Community]
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
router.delete('/posts/comments/:commentId', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.deleteComment);
exports.communityRoutes = router;
/**
 * @swagger
 * components:
 *   schemas:
 *     CommunityPost:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the post
 *         userId:
 *           type: string
 *           description: The ID of the user who created the post
 *         postContent:
 *           type: string
 *           description: The content of the post
 *         postDate:
 *           type: string
 *           format: date-time
 *           description: The date and time when the post was created
 *         user:
 *           $ref: '#/components/schemas/User'
 *       required:
 *         - id
 *         - userId
 *         - postContent
 *         - postDate
 */ 
//# sourceMappingURL=community.routes.js.map