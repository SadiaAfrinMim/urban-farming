import express from 'express';
import rateLimit from 'express-rate-limit';
import { AuthController } from './auth.controller';

import { UserValidation } from '../user/user.validation';
import auth from '../../middlewares/auth';

import validateRequest from '../../middlewares/ValidateRequest';
import { UserRole } from '../../../../prisma/generated/prisma/enums';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication management
 */

const router = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many authentication attempts, please try again later.',
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post(
  '/register',
  authLimiter,
  validateRequest(UserValidation.createUserZodSchema),
  AuthController.registerUser
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 */
router.post(
  '/login',
  authLimiter,
  validateRequest(UserValidation.loginZodSchema),
  AuthController.loginUser
);

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *             required:
 *               - refreshToken
 *     responses:
 *       200:
 *         description: Token refreshed
 *       401:
 *         description: Unauthorized
 */
router.post(
  '/refresh-token',
  validateRequest(UserValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

/**
 * @swagger
 * /auth/change-password:
 *   post:
 *     summary: Change user password
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *             required:
 *               - oldPassword
 *               - newPassword
 *     responses:
 *       200:
 *         description: Password changed
 *       401:
 *         description: Unauthorized
 */
router.post(
  '/change-password',
  validateRequest(UserValidation.changePasswordZodSchema),
  auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer),
  AuthController.changePassword
);

export const authRoutes = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password for the user (not returned in responses)
 *         role:
 *           type: string
 *           enum: [Admin, Vendor, Customer]
 *           description: The role of the user
 *         status:
 *           type: string
 *           enum: [Active, Pending, Suspended]
 *           description: The status of the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date
 *       required:
 *         - id
 *         - email
 *         - password
 *         - role
 *         - status
 *         - createdAt
 *         - updatedAt
 */