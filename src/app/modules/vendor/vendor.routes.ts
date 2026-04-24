import express from 'express';
import { VendorController } from './vendor.controller';
import auth from '../../middlewares/auth';

import { UserRole } from '../../types/common';
import { multerUpload } from '../../../config/multer.config';





const router = express.Router();

// Profile routes
router.post(
    '/profile',
    auth(UserRole.Vendor),
    multerUpload.single('certification'),
    VendorController.createOrUpdateProfile
);

router.get('/profile', auth(UserRole.Vendor), VendorController.getProfile);

// Rental space routes
router.post(
    '/rental-spaces',
    auth(UserRole.Vendor),
   
    VendorController.createRentalSpace
);

router.get('/rental-spaces', auth(UserRole.Vendor), VendorController.getRentalSpaces);

router.patch(
    '/rental-spaces/:id',
    auth(UserRole.Vendor),
  
    VendorController.updateRentalSpace
);

router.delete('/rental-spaces/:id', auth(UserRole.Vendor), VendorController.deleteRentalSpace);

// Produce routes
router.post(
    '/produces',
   
    auth(UserRole.Vendor),
    VendorController.createProduce
);

router.get('/produces', auth(UserRole.Vendor), VendorController.getProduces);

router.patch(
    '/produces/:id',
 
    auth(UserRole.Vendor),
    VendorController.updateProduce
);

router.delete('/produces/:id', auth(UserRole.Vendor), VendorController.deleteProduce);

// Plant update route
router.patch(
    '/plant-update',
    auth(UserRole.Vendor),

    VendorController.updatePlantStatus
);

// Orders route
router.get('/orders', auth(UserRole.Vendor), VendorController.getOrders);

export const VendorRoutes = router;