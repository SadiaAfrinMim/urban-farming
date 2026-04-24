import express, { NextFunction, Request, Response } from 'express'

import { UserRole } from '../../../../prisma/generated/prisma/enums';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';
import { fileUploader } from '../../helpers/fileUploader';

const router = express.Router();

// Get all users
router.get(
  "/",
  auth(UserRole.Admin),
  UserController.getAllFromDB
);

// Get my profile
router.get(
  '/me',
  auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer),
  UserController.getMyProfile
);

// Create customer (NO VALIDATION)
router.post(
  "/create-customer",
  (req: Request, res: Response, next: NextFunction) => {
    return UserController.createCustomer(req, res, next)
  }
);

// Create admin (adminCode check only)
router.post(
  "/create-admin",
  (req: Request, res: Response, next: NextFunction) => {

    if (req.body.adminCode !== 'ADMIN123') {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: "Invalid admin code"
      });
    }

    return UserController.createAdmin(req, res, next)
  }
);

// Create vendor (NO VALIDATION)
router.post(
  "/create-vendor",
  (req: Request, res: Response, next: NextFunction) => {
    return UserController.createVendorPublic(req, res, next)
  }
);

// Change status
router.patch(
  '/:id/status',
  auth(UserRole.Admin),
  UserController.changeProfileStatus
);

// Update profile (NO VALIDATION)
router.patch(
  "/update-my-profile",
  auth(UserRole.Admin, UserRole.Vendor, UserRole.Customer),
  fileUploader.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {

    const parsedData = JSON.parse(req.body.data || '{}');
    req.body = parsedData;

    return UserController.updateMyProfile(req, res, next)
  }
);

export const userRoutes = router;