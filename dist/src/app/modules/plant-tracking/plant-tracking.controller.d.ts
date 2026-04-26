import { Request, Response } from 'express';
export declare const PlantTrackingController: {
    createPlantTracking: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllPlantTrackings: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getPlantTrackingById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updatePlantTracking: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updatePlantHealth: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    waterPlant: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    fertilizePlant: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deletePlantTracking: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=plant-tracking.controller.d.ts.map