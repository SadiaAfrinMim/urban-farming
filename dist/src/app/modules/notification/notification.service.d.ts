import { NotificationType } from '@prisma/client';
export declare const NotificationService: {
    createNotification: (userId: number, type: NotificationType, title: string, message: string, data?: any) => Promise<{
        data: import("@prisma/client/runtime/client").JsonValue | null;
        type: import("@prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        isRead: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    getUserNotifications: (userId: number, page?: number, limit?: number) => Promise<{
        data: {
            data: import("@prisma/client/runtime/client").JsonValue | null;
            type: import("@prisma/client").$Enums.NotificationType;
            title: string;
            message: string;
            isRead: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            userId: number;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    markAsRead: (notificationId: number, userId: number) => Promise<{
        data: import("@prisma/client/runtime/client").JsonValue | null;
        type: import("@prisma/client").$Enums.NotificationType;
        title: string;
        message: string;
        isRead: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    markAllAsRead: (userId: number) => Promise<import("@prisma/client").Prisma.BatchPayload>;
    getUnreadCount: (userId: number) => Promise<number>;
};
//# sourceMappingURL=notification.service.d.ts.map