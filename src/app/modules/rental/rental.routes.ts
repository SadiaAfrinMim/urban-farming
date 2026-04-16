import express from 'express';
import { RentalController } from './rental.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/generated/prisma/enums';

/**
 * @swagger
 * tags:
 *   name: Rentals
 *   description: Rental space management
 */

const router = express.Router();

/**
 * @swagger
 * /spaces:
 *   get:
 *     summary: Get all rental spaces
 *     tags: [Rentals]
 *     responses:
 *       200:
 *         description: List of rental spaces
 */
/**
 * @swagger
 * /spaces/search:
 *   get:
 *     summary: Search rental spaces
 *     tags: [Rentals]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 */
/**
 * @swagger
 * /spaces/{id}:
 *   get:
 *     summary: Get rental space by ID
 *     tags: [Rentals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rental space details
 */
router.get('/spaces', RentalController.getAllRentalSpaces);
router.get('/spaces/search', RentalController.searchRentalSpaces);
router.get('/spaces/:id', RentalController.getRentalSpaceById);

/**
 * @swagger
 * /spaces:
 *   post:
 *     summary: Create rental space
 *     tags: [Rentals]
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
 *               location:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Rental space created
 */
/**
 * @swagger
 * /spaces/{id}:
 *   patch:
 *     summary: Update rental space
 *     tags: [Rentals]
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
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Rental space updated
 */
/**
 * @swagger
 * /spaces/{id}:
 *   delete:
 *     summary: Delete rental space
 *     tags: [Rentals]
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
router.post('/spaces', auth(UserRole.Vendor), RentalController.createRentalSpace);
router.patch('/spaces/:id', auth(UserRole.Vendor), RentalController.updateRentalSpace);
router.delete('/spaces/:id', auth(UserRole.Vendor), RentalController.deleteRentalSpace);

// Booking APIs (assuming we add booking later, but for now, toggle availability)
/**
 * @swagger
 * /spaces/{id}/availability:
 *   patch:
 *     summary: Toggle rental space availability
 *     tags: [Rentals]
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
 *         description: Availability toggled
 */
router.patch('/spaces/:id/availability', auth(UserRole.Vendor), RentalController.toggleAvailability);

export const rentalRoutes = router;