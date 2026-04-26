import { PlantHealth } from '../../../../prisma/prisma/generated';
import { IPaginationOptions } from '../../types/common';
export declare const PlantTrackingService: {
    createPlantTracking: (userId: string, payload: any) => Promise<any>;
    getAllPlantTrackings: (userId: string, options: IPaginationOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: any;
        };
        data: any;
    }>;
    getPlantTrackingById: (id: string, userId: string) => Promise<any>;
    updatePlantTracking: (id: string, userId: string, payload: any) => Promise<any>;
    updatePlantHealth: (id: string, userId: string, healthStatus: PlantHealth, notes?: string) => Promise<any>;
    waterPlant: (id: string, userId: string) => Promise<any>;
    fertilizePlant: (id: string, userId: string) => Promise<any>;
    deletePlantTracking: (id: string, userId: string) => Promise<null>;
};
//# sourceMappingURL=plant-tracking.service.d.ts.map