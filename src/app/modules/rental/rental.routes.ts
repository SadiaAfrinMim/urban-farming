import express from 'express';
import { RentalController } from './rental.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/prisma/generated';


/**
 * @swagger
 * tags:
 *   name: Rentals
 *   description: Rental space management
 */

const router = express.Router();

/**
 * @swagger
 * /rentals:
 *   get:
 *     summary: Get all rental spaces
 *     tags: [Rentals]
 *     responses:
 *       200:
 *         description: List of rental spaces
 */
router.get('/', RentalController.getAllRentalSpaces);

/**
 * @swagger
 * /rentals/search:
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
router.get('/search', RentalController.searchRentalSpaces);

/**
 * @swagger
 * /rentals/{id}:
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
router.get('/:id', RentalController.getRentalSpaceById);

/**
 * @swagger
 * /rentals:
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
router.post('/', auth(UserRole.Vendor), RentalController.createRentalSpace);

/**
 * @swagger
 * /rentals/{id}:
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
router.patch('/:id', auth(UserRole.Vendor), RentalController.updateRentalSpace);

/**
 * @swagger
 * /rentals/{id}:
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
router.delete('/:id', auth(UserRole.Vendor), RentalController.deleteRentalSpace);

/**
 * @swagger
 * /rentals/{id}/availability:
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
router.patch('/:id/availability', auth(UserRole.Vendor), RentalController.toggleAvailability);

export const rentalRoutes = router;