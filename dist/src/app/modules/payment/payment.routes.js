"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("./payment.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const common_1 = require("../../types/common");
/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment processing and management
 */
const router = express_1.default.Router();
/**
 * @swagger
 * /payments/create-intent:
 *   post:
 *     summary: Create payment intent
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment intent created
 */
router.post('/create-intent', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), payment_controller_1.PaymentController.createPaymentIntent);
/**
 * @swagger
 * /payments/confirm:
 *   post:
 *     summary: Confirm payment
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentIntentId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment confirmed
 */
router.post('/confirm', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), payment_controller_1.PaymentController.confirmPayment);
/**
 * @swagger
 * /payments/checkout-session:
 *   post:
 *     summary: Create checkout session
 *     tags: [Payments]
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
 *     responses:
 *       200:
 *         description: Checkout session created
 */
router.post('/checkout-session', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), payment_controller_1.PaymentController.createCheckoutSession);
/**
 * @swagger
 * /payments/webhook:
 *   post:
 *     summary: Handle payment webhook
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Webhook processed
 */
router.post('/webhook', express_1.default.raw({ type: 'application/json' }), payment_controller_1.PaymentController.handleWebhook);
exports.paymentRoutes = router;
//# sourceMappingURL=payment.routes.js.map