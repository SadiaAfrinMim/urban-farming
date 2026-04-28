"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.produceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const produce_controller_1 = require("./produce.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("../../../../prisma/prisma/generated/client");
/**
 * @swagger
 * tags:
 *   name: Produces
 *   description: Produce management
 */
const router = express_1.default.Router();
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
router.get('/', produce_controller_1.ProduceController.getAllProduces);
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
router.get('/search', produce_controller_1.ProduceController.searchProduces);
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
router.get('/:id', produce_controller_1.ProduceController.getProduceById);
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
router.post('/', (0, auth_1.default)(client_1.UserRole.Vendor), produce_controller_1.ProduceController.createProduce);
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
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.Vendor), produce_controller_1.ProduceController.updateProduce);
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
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.Vendor), produce_controller_1.ProduceController.deleteProduce);
exports.produceRoutes = router;
//# sourceMappingURL=produce.routes.js.map