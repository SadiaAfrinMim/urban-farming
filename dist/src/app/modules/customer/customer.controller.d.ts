import { Request, Response } from 'express';
export declare const CustomerController: {
    getCustomerPosts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createCustomerPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateCustomerPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteCustomerPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getCustomerDashboard: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getCustomerOrders: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    toggleCustomerPostLike: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    addCustomerPostComment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getCustomerPostComments: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteCustomerPostComment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=customer.controller.d.ts.map