import { prisma } from '../../shared/prisma';
const createNotification = async (userId, type, title, message, data) => {
    const notification = await prisma.notification.create({
        data: {
            userId,
            type,
            title,
            message,
            data,
        },
    });
    // Emit real-time notification
    const io = global.io;
    if (io) {
        console.log(`Emitting notification to user ${userId}:`, notification);
        io.emit(`notification-${userId}`, notification);
    }
    else {
        console.log('WebSocket io instance not available');
    }
    return notification;
};
const getUserNotifications = async (userId, page = 1, limit = 20) => {
    const skip = (page - 1) * limit;
    const notifications = await prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
    });
    const total = await prisma.notification.count({
        where: { userId },
    });
    return {
        data: notifications,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};
const markAsRead = async (notificationId, userId) => {
    const notification = await prisma.notification.findUnique({
        where: { id: notificationId },
    });
    if (!notification || notification.userId !== userId) {
        throw new Error('Notification not found or access denied');
    }
    return await prisma.notification.update({
        where: { id: notificationId },
        data: { isRead: true },
    });
};
const markAllAsRead = async (userId) => {
    return await prisma.notification.updateMany({
        where: { userId, isRead: false },
        data: { isRead: true },
    });
};
const getUnreadCount = async (userId) => {
    return await prisma.notification.count({
        where: { userId, isRead: false },
    });
};
export const NotificationService = {
    createNotification,
    getUserNotifications,
    markAsRead,
    markAllAsRead,
    getUnreadCount,
};
//# sourceMappingURL=notification.service.js.map