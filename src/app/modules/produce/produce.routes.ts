import express from 'express';
import { ProduceController } from './produce.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/ValidateRequest';
import { UserRole } from '@prisma/client';


/**
 * @swagger
 * tags:
 *   name: Produces
 *   description: Produce management
 */

const router = express.Router();

/**
 * @swagger
 * /produces:
 *   get:
 *     summary: Get all produces
 *     tags: [Produces]
 *     responses:
 *       200:
 *         description: List of produces
 */
router.get('/', ProduceController.getAllProduces);
/**
 * @swagger
 * /produces/search:
 *   get:
 *     summary: Search produces
 *     tags: [Produces]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 */
router.get('/search', ProduceController.searchProduces);
/**
 * @swagger
 * /produces/{id}:
 *   get:
 *     summary: Get produce by ID
 *     tags: [Produces]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produce details
 */
router.get('/:id', ProduceController.getProduceById);

/**
 * @swagger
 * /produces:
 *   post:
 *     summary: Create produce
 *     tags: [Produces]
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
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produce created
 */
router.post('/', auth(UserRole.Vendor), ProduceController.createProduce);
/**
 * @swagger
 * /produces/{id}:
 *   patch:
 *     summary: Update produce
 *     tags: [Produces]
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
 *         description: Produce updated
 */
router.patch('/:id', auth(UserRole.Vendor), ProduceController.updateProduce);
/**
 * @swagger
 * /produces/{id}:
 *   delete:
 *     summary: Delete produce
 *     tags: [Produces]
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
router.delete('/:id', auth(UserRole.Vendor), ProduceController.deleteProduce);

export const produceRoutes = router;