import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse.js';
import { ConversationService } from './conversation.service.js';

// Get all conversations for the authenticated user
const getUserConversations = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'User not authenticated',
        data: null,
      });
    }

    const conversations = await ConversationService.getUserConversations(userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Conversations retrieved successfully',
      data: conversations,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message || 'Failed to retrieve conversations',
      data: null,
    });
  }
};

// Get or create conversation between current user and another user
const getOrCreateConversation = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { otherUserId } = req.params;

    if (!userId) {
      return sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'User not authenticated',
        data: null,
      });
    }

    const otherUserIdNum = parseInt(otherUserId);
    if (isNaN(otherUserIdNum)) {
      return sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: 'Invalid user ID',
        data: null,
      });
    }

    const conversation = await ConversationService.getOrCreateConversation(userId, otherUserIdNum);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Conversation retrieved successfully',
      data: conversation,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message || 'Failed to get or create conversation',
      data: null,
    });
  }
};

// Send message in a conversation
const sendMessage = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { conversationId } = req.params;
    const { content } = req.body;

    if (!userId) {
      return sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'User not authenticated',
        data: null,
      });
    }

    if (!content || content.trim().length === 0) {
      return sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: 'Message content is required',
        data: null,
      });
    }

    const conversationIdNum = parseInt(conversationId);
    if (isNaN(conversationIdNum)) {
      return sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: 'Invalid conversation ID',
        data: null,
      });
    }

    const message = await ConversationService.sendMessage(conversationIdNum, userId, content.trim());

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Message sent successfully',
      data: message,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message || 'Failed to send message',
      data: null,
    });
  }
};

// Get messages for a conversation
const getConversationMessages = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { conversationId } = req.params;

    if (!userId) {
      return sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'User not authenticated',
        data: null,
      });
    }

    const conversationIdNum = parseInt(conversationId);
    if (isNaN(conversationIdNum)) {
      return sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: 'Invalid conversation ID',
        data: null,
      });
    }

    const messages = await ConversationService.getConversationMessages(conversationIdNum, userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Messages retrieved successfully',
      data: messages,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message || 'Failed to retrieve messages',
      data: null,
    });
  }
};

// Mark messages as read in a conversation
const markMessagesAsRead = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { conversationId } = req.params;

    if (!userId) {
      return sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'User not authenticated',
        data: null,
      });
    }

    const conversationIdNum = parseInt(conversationId);
    if (isNaN(conversationIdNum)) {
      return sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: 'Invalid conversation ID',
        data: null,
      });
    }

    await ConversationService.markMessagesAsRead(conversationIdNum, userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Messages marked as read',
      data: null,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message || 'Failed to mark messages as read',
      data: null,
    });
  }
};

export const ConversationController = {
  getUserConversations,
  getOrCreateConversation,
  sendMessage,
  getConversationMessages,
  markMessagesAsRead,
};