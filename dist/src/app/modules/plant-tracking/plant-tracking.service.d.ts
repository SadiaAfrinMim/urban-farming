import { PlantHealth } from '@prisma/client';
import { IPaginationOptions } from '../../types/common';
export declare const PlantTrackingService: {
    createPlantTracking: (userId: string, payload: any) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import(".prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    getAllPlantTrackings: (userId: string, options: IPaginationOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            userId: number;
            rentalSpaceId: number;
            plantName: string;
            plantHealth: import(".prisma/client").$Enums.PlantHealth;
            plantingDate: Date;
            expectedHarvest: Date | null;
            notes: string | null;
        }[];
    }>;
    getPlantTrackingById: (id: string, userId: string) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import(".prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    updatePlantTracking: (id: string, userId: string, payload: any) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import(".prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    updatePlantHealth: (id: string, userId: string, healthStatus: PlantHealth, notes?: string) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import(".prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    waterPlant: (id: string, userId: string) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import(".prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    fertilizePlant: (id: string, userId: string) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import(".prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    deletePlantTracking: (id: string, userId: string) => Promise<null>;
};
//# sourceMappingURL=plant-tracking.service.d.ts.map