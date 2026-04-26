import express from 'express';
import { SustainabilityController } from './sustainability.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/prisma/generated';


/**
 * @swagger
 * tags:
 *   name: Sustainability
 *   description: Sustainability certification management
 */

const router = express.Router();

/**
 * @swagger
 * /sustainability/certs:
 *   get:
 *     summary: Get all certificates
 *     tags: [Sustainability]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of certificates
 */
router.get('/certs', auth(UserRole.Admin), SustainabilityController.getAllCerts);

/**
 * @swagger
 * /sustainability/certs/{id}:
 *   get:
 *     summary: Get certificate by ID
 *     tags: [Sustainability]
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
 *         description: Certificate details
 */
router.get('/certs/:id', auth(UserRole.Admin, UserRole.Vendor), SustainabilityController.getCertById);

/**
 * @swagger
 * /sustainability/certs:
 *   post:
 *     summary: Create certificate
 *     tags: [Sustainability]
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
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Certificate created
 */
router.post('/certs', auth(UserRole.Vendor), SustainabilityController.createCert);

/**
 * @swagger
 * /sustainability/certs/{id}/status:
 *   patch:
 *     summary: Update certificate status
 *     tags: [Sustainability]
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
 *                 enum: [Pending, Approved, Rejected]
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch('/certs/:id/status', auth(UserRole.Admin), SustainabilityController.updateCertStatus);

export const sustainabilityRoutes = router;