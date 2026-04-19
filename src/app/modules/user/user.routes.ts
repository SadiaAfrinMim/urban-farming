import express, { NextFunction, Request, Response } from 'express'

import { UserValidation } from './user.validation';
import { UserRole } from '../../../../prisma/generated/prisma/enums';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';
import { fileUploader } from '../../helpers/fileUploader';


const router = express.Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get(
    "/",
    auth(UserRole.Admin),
    UserController.getAllFromDB
)

/**
 * @swagger
 * /user/me:
 *   get:
 *     summary: Get my profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile
 */
router.get(
    '/me',
    auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer),
    UserController.getMyProfile
)

/**
 * @swagger
 * /user/create-customer:
 *   post:
 *     summary: Create customer
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Customer created
 */
router.post(
    "/create-customer",
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createUserZodSchema.parse({ body: req.body }).body
        return UserController.createCustomer(req, res, next)
    }
)

/**
 * @swagger
 * /user/create-admin:
 *   post:
 *     summary: Create admin
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Admin created
 */
router.post(
    "/create-admin",
    auth(UserRole.Admin),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createUserZodSchema.parse({ body: req.body }).body
        return UserController.createAdmin(req, res, next)
    }
);

/**
 * @swagger
 * /user/create-vendor:
 *   post:
 *     summary: Create vendor
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               data:
 *                 type: string
 *                 description: JSON string with vendor data
 *     responses:
 *       201:
 *         description: Vendor created
 */
router.post(
    "/create-vendor",
    auth(UserRole.Admin),
    fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data)
        return UserController.createVendor(req, res, next)
    }
);

/**
 * @swagger
 * /user/{id}/status:
 *   patch:
 *     summary: Change user status
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [Active, Pending, Suspended]
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch(
    '/:id/status',
    auth(UserRole.Admin),
    UserController.changeProfileStatus
);

/**
 * @swagger
 * /user/update-my-profile:
 *   patch:
 *     summary: Update my profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Profile photo file (optional)
 *               data:
 *                 type: string
 *                 description: JSON string with profile data
 *     responses:
 *       200:
 *         description: Profile updated
 */
router.patch(
    "/update-my-profile",
    auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer),
    fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        const parsedData = JSON.parse(req.body.data || '{}');
        req.body = UserValidation.updateProfileZodSchema.parse({ body: parsedData }).body;
        return UserController.updateMyProfile(req, res, next)
    }
);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */
export const userRoutes = router;