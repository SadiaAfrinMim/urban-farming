"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../app/shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../app/shared/sendResponse"));
const notification_service_1 = require("./notification.service");
const getUserNotifications = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const result = await notification_service_1.NotificationService.getUserNotifications(user.id, page, limit);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Notifications retrieved successfully',
        data: result,
    });
});
const markAsRead = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await notification_service_1.NotificationService.markAsRead(parseInt(id), user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Notification marked as read',
        data: result,
    });
});
const markAllAsRead = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await notification_service_1.NotificationService.markAllAsRead(user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All notifications marked as read',
        data: result,
    });
});
const getUnreadCount = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const count = await notification_service_1.NotificationService.getUnreadCount(user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Unread count retrieved successfully',
        data: { count },
    });
});
exports.NotificationController = {
    getUserNotifications,
    markAsRead,
    markAllAsRead,
    getUnreadCount,
};
//# sourceMappingURL=notification.controller.js.map