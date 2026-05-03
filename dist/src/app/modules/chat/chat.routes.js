"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRoutes = void 0;
const express_1 = __importDefault(require("express"));
const chat_controller_1 = require("./chat.controller");
const router = express_1.default.Router();
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
router.post('/send', chat_controller_1.ChatController.sendMessage);
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
router.get('/messages/:userId', chat_controller_1.ChatController.getMessages);
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
router.post('/handle', chat_controller_1.ChatController.handleChatMessage);
// Health check route
router.get('/health', chat_controller_1.ChatController.healthCheck);
// Environment check route (for debugging)
router.get('/env-check', (req, res) => {
    res.json({
        node_env: process.env.NODE_ENV,
        openrouter_key: process.env.OPENROUTER_API_KEY ? 'Set' : 'Not set',
        openai_key: process.env.OPENAI_API_KEY ? 'Set' : 'Not set',
        database_url: process.env.DATABASE_URL ? 'Set' : 'Not set',
        timestamp: new Date().toISOString()
    });
});
exports.chatRoutes = router;
//# sourceMappingURL=chat.routes.js.map