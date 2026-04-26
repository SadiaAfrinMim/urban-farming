import express from 'express';
import { PaymentController } from './payment.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../types/common';

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment processing and management
 */

const router = express.Router();

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
router.post(
  '/create-intent',
  auth(UserRole.Customer,UserRole.Vendor),
  PaymentController.createPaymentIntent
);

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
router.post(
  '/confirm',
  auth(UserRole.Customer, UserRole.Vendor),
  PaymentController.confirmPayment
);

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
router.post(
  '/checkout-session',
  auth(UserRole.Customer, UserRole.Vendor),
  PaymentController.createCheckoutSession
);

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
router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  PaymentController.handleWebhook
);

export const paymentRoutes = router;
