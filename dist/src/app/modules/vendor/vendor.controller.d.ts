import { Request, Response } from 'express';
export declare const VendorController: {
    createOrUpdateProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getVendorCard: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createRentalSpace: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getRentalSpaces: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateRentalSpace: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteRentalSpace: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createProduce: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getProduces: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateProduce: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteProduce: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updatePlantStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateOrderStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getOrders: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createVendorPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getVendorPosts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateVendorPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteVendorPost: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    toggleVendorPostLike: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    addVendorPostComment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=vendor.controller.d.ts.map