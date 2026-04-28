"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("../../../../prisma/prisma/generated/client");
/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */
const router = express_1.default.Router();
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of orders
 */
router.get('/', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), order_controller_1.OrderController.getOrders);
/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
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
 *         description: Order details
 *       404:
 *         description: Order not found
 */
router.get('/:id', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), order_controller_1.OrderController.getOrderById);
/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *             total:
 *               type: number
 *     responses:
 *       201:
 *         description: Order created
 */
router.post('/', (0, auth_1.default)(client_1.UserRole.Customer), order_controller_1.OrderController.createOrder);
/**
 * @swagger
 * /orders/{id}/status:
 *   patch:
 *     summary: Update order status
 *     tags: [Orders]
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
 *                 enum: [Pending, Confirmed, Shipped, Delivered]
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch('/:id/status', (0, auth_1.default)(client_1.UserRole.Vendor), order_controller_1.OrderController.updateOrderStatus);
exports.orderRoutes = router;
//# sourceMappingURL=order.routes.js.map