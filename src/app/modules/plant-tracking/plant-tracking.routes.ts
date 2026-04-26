import express from 'express';
import { PlantTrackingController } from './plant-tracking.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../types/common';

/**
 * @swagger
 * tags:
 *   name: Plant Tracking
 *   description: Plant tracking and management
 */

const router = express.Router();

/**
 * @swagger
 * /plant-tracking:
 *   get:
 *     summary: Get all plant trackings
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Plant trackings retrieved
 */
router.get(
  '/',
  auth(UserRole.Customer, UserRole.Vendor, UserRole.Admin),
  PlantTrackingController.getAllPlantTrackings
);

/**
 * @swagger
 * /plant-tracking:
 *   post:
 *     summary: Create plant tracking
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plantName:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plant tracking created
 */
router.post(
  '/',
  auth(UserRole.Customer, UserRole.Vendor),
  PlantTrackingController.createPlantTracking
);

/**
 * @swagger
 * /plant-tracking/{id}:
 *   get:
 *     summary: Get plant tracking by ID
 *     tags: [Plant Tracking]
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
 *         description: Plant tracking details
 */
router.get(
  '/:id',
  auth(UserRole.Customer, UserRole.Vendor, UserRole.Admin),
  PlantTrackingController.getPlantTrackingById
);

/**
 * @swagger
 * /plant-tracking/{id}:
 *   patch:
 *     summary: Update plant tracking
 *     tags: [Plant Tracking]
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
 *         description: Plant tracking updated
 */
router.patch(
  '/:id',
  auth(UserRole.Customer, UserRole.Vendor),
  PlantTrackingController.updatePlantTracking
);

/**
 * @swagger
 * /plant-tracking/{id}/health:
 *   patch:
 *     summary: Update plant health
 *     tags: [Plant Tracking]
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
 *         description: Plant health updated
 */
router.patch(
  '/:id/health',
  auth(UserRole.Customer, UserRole.Vendor),
  PlantTrackingController.updatePlantHealth
);

/**
 * @swagger
 * /plant-tracking/{id}/water:
 *   patch:
 *     summary: Water plant
 *     tags: [Plant Tracking]
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
 *         description: Plant watered
 */
router.patch(
  '/:id/water',
  auth(UserRole.Customer, UserRole.Vendor),
  PlantTrackingController.waterPlant
);

/**
 * @swagger
 * /plant-tracking/{id}/fertilize:
 *   patch:
 *     summary: Fertilize plant
 *     tags: [Plant Tracking]
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
 *         description: Plant fertilized
 */
router.patch(
  '/:id/fertilize',
  auth(UserRole.Customer, UserRole.Vendor),
  PlantTrackingController.fertilizePlant
);

/**
 * @swagger
 * /plant-tracking/{id}:
 *   delete:
 *     summary: Delete plant tracking
 *     tags: [Plant Tracking]
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
 *         description: Plant tracking deleted
 */
router.delete(
  '/:id',
  auth(UserRole.Customer, UserRole.Vendor),
  PlantTrackingController.deletePlantTracking
);

export const plantTrackingRoutes = router;
