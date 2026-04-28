import { Request, Response } from 'express';
export declare const RentalController: {
    getAllRentalSpaces: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    searchRentalSpaces: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getRentalSpaceById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createRentalSpace: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateRentalSpace: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteRentalSpace: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    toggleAvailability: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    bookRentalSpace: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=rental.controller.d.ts.map