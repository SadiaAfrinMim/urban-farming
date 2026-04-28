import { Request, Response } from 'express';
export declare const AdminController: {
    getAllUsers: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllUsersData: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllVendorsData: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllCustomersData: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateUserRole: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateUserStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getPendingCertifications: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    approveCertification: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    rejectCertification: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    approveProduce: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    rejectProduce: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getPendingProduces: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllPosts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    approvePost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deletePost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getReports: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    resolveReport: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllOrders: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getRentalAnalytics: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getRevenueAnalytics: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getDashboardStats: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getRateLimitLogs: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createAnnouncement: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAnnouncements: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteAnnouncement: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map