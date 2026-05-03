import express from 'express';
import { ConversationController } from './conversation.controller.js';
import auth from '../../middlewares/auth.js';
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Conversation
 *   description: Private messaging between users
 */
/**
 * @swagger
 * /conversations:
 *   get:
 *     summary: Get all conversations for authenticated user
 *     tags: [Conversation]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Conversations retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/', auth(), ConversationController.getUserConversations);
/**
 * @swagger
 * /conversations/with/{otherUserId}:
 *   get:
 *     summary: Get or create conversation with another user
 *     tags: [Conversation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: otherUserId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Conversation retrieved successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Invalid user ID
 */
router.get('/with/:otherUserId', auth(), ConversationController.getOrCreateConversation);
/**
 * @swagger
 * /conversations/{conversationId}/messages:
 *   get:
 *     summary: Get messages for a conversation
 *     tags: [Conversation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Messages retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Not part of conversation
 *       400:
 *         description: Invalid conversation ID
 */
router.get('/:conversationId/messages', auth(), ConversationController.getConversationMessages);
/**
 * @swagger
 * /conversations/{conversationId}/messages:
 *   post:
 *     summary: Send message in a conversation
 *     tags: [Conversation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 description: Message content
 *     responses:
 *       201:
 *         description: Message sent successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Not part of conversation
 *       400:
 *         description: Invalid conversation ID or empty content
 */
router.post('/:conversationId/messages', auth(), ConversationController.sendMessage);
/**
 * @swagger
 * /conversations/{conversationId}/read:
 *   patch:
 *     summary: Mark messages as read in a conversation
 *     tags: [Conversation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Messages marked as read
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Not part of conversation
 *       400:
 *         description: Invalid conversation ID
 */
router.patch('/:conversationId/read', auth(), ConversationController.markMessagesAsRead);
export const conversationRoutes = router;
//# sourceMappingURL=conversation.routes.js.map