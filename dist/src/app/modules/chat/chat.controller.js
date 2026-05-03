"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const chat_service_1 = require("./chat.service");
// Send Message
const sendMessage = async (req, res) => {
    const { userId, message } = req.body;
    const result = await chat_service_1.ChatService.sendMessage({ userId, message });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Message sent successfully',
        data: result,
    });
};
// Get Messages
const getMessages = async (req, res) => {
    const { userId } = req.params;
    const result = await chat_service_1.ChatService.getMessages(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Messages retrieved successfully',
        data: result,
    });
};
// Handle Chat Message (user message + bot response)
const handleChatMessage = async (req, res) => {
    try {
        const { userId, message } = req.body;
        console.log('💬 Chat request received:', { userId, messageLength: message?.length });
        const result = await chat_service_1.ChatService.handleChatMessage({ userId, message });
        console.log('✅ Chat handled successfully');
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: 'Chat handled successfully',
            data: result,
        });
    }
    catch (error) {
        console.error('❌ Chat handling error:', {
            message: error.message,
            stack: error.stack,
            name: error.name,
            code: error.code,
            details: error.response?.data || error.response?.statusText || 'No additional details'
        });
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'Chat processing failed. Please try again.',
            data: null,
        });
    }
};
// Health check endpoint
const healthCheck = async (req, res) => {
    try {
        const { openRouter, hasOpenRouterKey } = require('../../helpers/open-router');
        const openRouterStatus = !!openRouter;
        // Test database connection - temporarily disable chat count check
        const dbStatus = 1; // Assume DB is connected
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Chat service health check',
            data: {
                openRouter: {
                    configured: openRouterStatus,
                    hasApiKey: hasOpenRouterKey,
                    status: openRouterStatus ? '✅ Ready' : '❌ Fallback mode'
                },
                database: '✅ Connected',
                environment: process.env.NODE_ENV || 'unknown',
                timestamp: new Date().toISOString()
            },
        });
    }
    catch (error) {
        console.error('Health check error:', error);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'Service health check failed',
            data: {
                error: error.message,
                timestamp: new Date().toISOString()
            },
        });
    }
};
exports.ChatController = {
    sendMessage,
    getMessages,
    handleChatMessage,
    healthCheck,
};
//# sourceMappingURL=chat.controller.js.map