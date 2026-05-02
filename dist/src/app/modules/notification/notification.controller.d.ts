import { Request, Response } from 'express';
export declare const NotificationController: {
    getUserNotifications: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    markAsRead: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    markAllAsRead: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getUnreadCount: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=notification.controller.d.ts.map