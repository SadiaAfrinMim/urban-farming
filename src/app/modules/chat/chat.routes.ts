import express from 'express';
import { ChatController } from './chat.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Chat functionality for chatbot
 */

/**
 * @swagger
 * /chat/send:
 *   post:
 *     summary: Send a chat message
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - message
 *             properties:
 *               userId:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message sent successfully
 */
router.post('/send', ChatController.sendMessage);

/**
 * @swagger
 * /chat/messages/{userId}:
 *   get:
 *     summary: Get chat messages for a user
 *     tags: [Chat]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Messages retrieved successfully
 */
router.get('/messages/:userId', ChatController.getMessages);

/**
 * @swagger
 * /chat/handle:
 *   post:
 *     summary: Handle chat message with bot response
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - message
 *             properties:
 *               userId:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Chat handled successfully
 */
router.post('/handle', ChatController.handleChatMessage);

// Health check route
router.get('/health', ChatController.healthCheck);

// Environment check route (for debugging)
router.get('/env-check', async (req, res) => {
  try {
    const { prisma } = require('../../shared/prisma');

    // Test database connection
    await prisma.$queryRaw`SELECT 1`;
    const dbStatus = '✅ Connected';

    res.json({
      node_env: process.env.NODE_ENV,
      openrouter_key: process.env.OPENROUTER_API_KEY ? 'Set' : 'Not set',
      openai_key: process.env.OPENAI_API_KEY ? 'Set' : 'Not set',
      database_url: process.env.DATABASE_URL ? 'Set' : 'Not set',
      database_connection: dbStatus,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    res.json({
      node_env: process.env.NODE_ENV,
      openrouter_key: process.env.OPENROUTER_API_KEY ? 'Set' : 'Not set',
      openai_key: process.env.OPENAI_API_KEY ? 'Set' : 'Not set',
      database_url: process.env.DATABASE_URL ? 'Set' : 'Not set',
      database_connection: `❌ Failed: ${error.message}`,
      timestamp: new Date().toISOString()
    });
  }
});

export const chatRoutes = router;