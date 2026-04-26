import express from 'express';
import { CommunityController } from './community.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/prisma/generated/client';

/**
 * @swagger
 * tags:
 *   name: Community
 *   description: Community post management
 */

const router = express.Router();

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
router.get('/posts', CommunityController.getAllPosts);

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
router.get('/posts/:id', CommunityController.getPostById);

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
router.post('/posts', auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer), CommunityController.createPost);

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
router.patch('/posts/:id', auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer), CommunityController.updatePost);

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
router.delete('/posts/:id', auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer), CommunityController.deletePost);

export const communityRoutes = router;

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