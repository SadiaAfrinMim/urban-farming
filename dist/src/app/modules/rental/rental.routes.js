"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rental_controller_1 = require("./rental.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const generated_1 = require("../../../../prisma/prisma/generated");
/**
 * @swagger
 * tags:
 *   name: Rentals
 *   description: Rental space management
 */
const router = express_1.default.Router();
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
router.get('/', rental_controller_1.RentalController.getAllRentalSpaces);
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
router.get('/search', rental_controller_1.RentalController.searchRentalSpaces);
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
router.get('/:id', rental_controller_1.RentalController.getRentalSpaceById);
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
router.post('/', (0, auth_1.default)(generated_1.UserRole.Vendor), rental_controller_1.RentalController.createRentalSpace);
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
router.patch('/:id', (0, auth_1.default)(generated_1.UserRole.Vendor), rental_controller_1.RentalController.updateRentalSpace);
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
router.delete('/:id', (0, auth_1.default)(generated_1.UserRole.Vendor), rental_controller_1.RentalController.deleteRentalSpace);
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
router.patch('/:id/availability', (0, auth_1.default)(generated_1.UserRole.Vendor), rental_controller_1.RentalController.toggleAvailability);
exports.rentalRoutes = router;
//# sourceMappingURL=rental.routes.js.map