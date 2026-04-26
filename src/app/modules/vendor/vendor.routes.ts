import express from 'express';
import path from 'path';
import { VendorController } from './vendor.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../types/common';
import multer from 'multer';
import { fileUploader } from '../../helpers/fileUploader';



// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    console.log(`File upload attempt: ${file.fieldname} - ${file.originalname} (${file.mimetype})`);

    // Allow images for profile photos and both images and PDFs for certifications
    let allowedTypes;
    if (file.fieldname === 'profilePhoto' || file.fieldname === 'image') {
      allowedTypes = /jpeg|jpg|png|gif/;
    } else if (file.fieldname === 'certification') {
      allowedTypes = /jpeg|jpg|png|gif|pdf/;
    } else {
      // For other files, allow images
      allowedTypes = /jpeg|jpg|png|gif/;
    }

    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      console.log(`File ${file.originalname} accepted`);
      cb(null, true);
    } else {
      console.log(`File ${file.originalname} rejected - invalid type`);
      cb(new Error(`Only allowed file types are permitted for ${file.fieldname}!`));
    }
  },
});

const uploadFields = upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'certification', maxCount: 10 }
]);

const uploadSingle = upload.single('image');

// Middleware to upload files to Cloudinary with debugging
const uploadToCloudinary = async (req: any, res: any, next: any) => {
  try {
    console.log('=== CLOUDINARY UPLOAD MIDDLEWARE START ===');
    console.log('Request body keys:', Object.keys(req.body || {}));
    console.log('Request body:', req.body);
    console.log('Files received:', req.files ? Object.keys(req.files) : 'No files');
    console.log('Single file:', req.file ? req.file.originalname : 'No single file');

    let uploadedImages: any[] = [];

    // Handle profile photo upload
    if (req.files && req.files.profilePhoto && req.files.profilePhoto[0]) {
      console.log('Uploading profile photo:', req.files.profilePhoto[0].originalname);
      const uploadResult = await fileUploader.uploadToCloudinary(req.files.profilePhoto[0]);
      uploadedImages.push(uploadResult);
      req.body.profilePhotoUrl = uploadResult.secure_url;
      console.log('✅ Profile photo uploaded:', uploadResult.secure_url);
    }

    // Handle certification files upload
    if (req.files && req.files.certification && Array.isArray(req.files.certification)) {
      console.log('Uploading certification files:', req.files.certification.length);
      req.body.certificationUrls = [];
      for (const certFile of req.files.certification) {
        console.log('Uploading cert:', certFile.originalname);
        const uploadResult = await fileUploader.uploadToCloudinary(certFile);
        uploadedImages.push(uploadResult);
        req.body.certificationUrls.push(uploadResult.secure_url);
      }
      console.log('✅ Certification files uploaded:', req.body.certificationUrls);
    }

    // Handle single image upload (for rental spaces and produces)
    if (req.file) {
      console.log('Uploading single image:', req.file.originalname);
      const uploadResult = await fileUploader.uploadToCloudinary(req.file);
      uploadedImages.push(uploadResult);
      req.body.imageUrl = uploadResult.secure_url;
      console.log('✅ Single image uploaded:', uploadResult.secure_url);
    }

    req.uploadedImages = uploadedImages;
    console.log('=== CLOUDINARY UPLOAD MIDDLEWARE END ===');
    next();
  } catch (error) {
    console.error('❌ Cloudinary upload error:', error);
    // Clean up uploaded images on error
    if (req.uploadedImages) {
      for (const img of req.uploadedImages) {
        try {
          await fileUploader.deleteFromCloudinary(img.public_id);
        } catch (cleanupError) {
          console.error('Failed to cleanup uploaded image:', cleanupError);
        }
      }
    }
    next(error);
  }
};

/**
 * @swagger
 * tags:
 *   name: Vendor
 *   description: Vendor operations and management
 */

const router = express.Router();

// Debug endpoint to check what's being received
router.post('/debug-upload', uploadFields, (req: any, res: any) => {
  console.log('=== DEBUG UPLOAD ENDPOINT ===');
  console.log('Body:', req.body);
  console.log('Files:', req.files);
  res.json({
    body: req.body,
    files: req.files ? Object.keys(req.files) : [],
    fileDetails: req.files
  });
});

// Profile routes
/**
 * @swagger
 * /vendor/profile:
 *   post:
 *     summary: Create or update vendor profile
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               certification:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile updated
 */
router.post(
  '/profile',
  auth(UserRole.Vendor),
  uploadFields,
  uploadToCloudinary,
  VendorController.createOrUpdateProfile
);

/**
 * @swagger
 * /vendor/profile:
 *   get:
 *     summary: Get vendor profile
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile retrieved
 */
router.get('/profile', auth(UserRole.Vendor), VendorController.getProfile);

/**
 * @swagger
 * /vendor/card:
 *   get:
 *     summary: Get vendor card information
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Vendor card retrieved
 */
router.get('/card', auth(UserRole.Vendor), VendorController.getVendorCard);

// Rental space routes
/**
 * @swagger
 * /vendor/rental-spaces:
 *   post:
 *     summary: Create rental space
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Rental space created
 */
router.post(
  '/rental-spaces',
  auth(UserRole.Vendor),
  uploadSingle,
  uploadToCloudinary,
  VendorController.createRentalSpace
);

/**
 * @swagger
 * /vendor/rental-spaces:
 *   get:
 *     summary: Get vendor rental spaces
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Rental spaces retrieved
 */
router.get('/rental-spaces', auth(UserRole.Vendor), VendorController.getRentalSpaces);

/**
 * @swagger
 * /vendor/rental-spaces/{id}:
 *   patch:
 *     summary: Update rental space
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rental space updated
 */
router.patch('/rental-spaces/:id', auth(UserRole.Vendor), VendorController.updateRentalSpace);

/**
 * @swagger
 * /vendor/rental-spaces/{id}:
 *   delete:
 *     summary: Delete rental space
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rental space deleted
 */
router.delete('/rental-spaces/:id', auth(UserRole.Vendor), VendorController.deleteRentalSpace);

// Produce routes
/**
 * @swagger
 * /vendor/produces:
 *   post:
 *     summary: Create produce
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Produce created
 */
router.post(
  '/produces',
  auth(UserRole.Vendor),
  uploadSingle,
  uploadToCloudinary,
  VendorController.createProduce
);

/**
 * @swagger
 * /vendor/produces:
 *   get:
 *     summary: Get vendor produces
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Produces retrieved
 */
router.get('/produces', auth(UserRole.Vendor), VendorController.getProduces);

/**
 * @swagger
 * /vendor/produces/{id}:
 *   patch:
 *     summary: Update produce
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produce updated
 */
router.patch('/produces/:id', auth(UserRole.Vendor), VendorController.updateProduce);

/**
 * @swagger
 * /vendor/produces/{id}:
 *   delete:
 *     summary: Delete produce
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produce deleted
 */
router.delete('/produces/:id', auth(UserRole.Vendor), VendorController.deleteProduce);

// Plant update route
/**
 * @swagger
 * /vendor/plant-update:
 *   patch:
 *     summary: Update plant status
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plantId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plant status updated
 */
router.patch('/plant-update', auth(UserRole.Vendor), VendorController.updatePlantStatus);

// Orders route
/**
 * @swagger
 * /vendor/orders:
 *   get:
 *     summary: Get vendor orders
 *     tags: [Vendor]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Orders retrieved
 */
router.get('/orders', auth(UserRole.Vendor), VendorController.getOrders);

export const VendorRoutes = router;