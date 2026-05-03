import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync';
import sendResponse from '../../../app/shared/sendResponse';
import { NotificationService } from './notification.service';
const getUserNotifications = catchAsync(async (req, res) => {
    const user = req.user;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const result = await NotificationService.getUserNotifications(user.id, page, limit);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notifications retrieved successfully',
        data: result,
    });
});
const markAsRead = catchAsync(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await NotificationService.markAsRead(parseInt(id), user.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notification marked as read',
        data: result,
    });
});
const markAllAsRead = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await NotificationService.markAllAsRead(user.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All notifications marked as read',
        data: result,
    });
});
const getUnreadCount = catchAsync(async (req, res) => {
    const user = req.user;
    const count = await NotificationService.getUnreadCount(user.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Unread count retrieved successfully',
        data: { count },
    });
});
export const NotificationController = {
    getUserNotifications,
    markAsRead,
    markAllAsRead,
    getUnreadCount,
};
//# sourceMappingURL=notification.controller.js.map