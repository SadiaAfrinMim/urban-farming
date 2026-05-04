import { PlantHealth } from '@prisma/client';
import { IPaginationOptions } from '../../types/common.js';
export declare const PlantTrackingService: {
    createPlantTracking: (userId: number, payload: any) => Promise<{
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
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    getAllPlantTrackings: (userId: number, options: IPaginationOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
            user: {
                id: number;
                name: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            userId: number;
            rentalSpaceId: number;
            plantName: string;
            plantHealth: import("@prisma/client").$Enums.PlantHealth;
            plantingDate: Date;
            expectedHarvest: Date | null;
            notes: string | null;
        })[];
    }>;
    getPlantTrackingById: (id: string, userId: number) => Promise<{
        user: {
            id: number;
            name: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    updatePlantTracking: (id: string, userId: number, payload: any) => Promise<{
        user: {
            id: number;
            name: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    updatePlantHealth: (id: string, userId: number, healthStatus: PlantHealth, notes?: string) => Promise<{
        user: {
            id: number;
            name: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    waterPlant: (id: string, userId: number) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    fertilizePlant: (id: string, userId: number) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    deletePlantTracking: (id: string, userId: number) => Promise<null>;
    uploadPhotos: (id: string, userId: number, photos: string[]) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
    recordGrowth: (id: string, userId: number, growthData: {
        height?: number;
        width?: number;
        notes?: string;
    }) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        rentalSpaceId: number;
        plantName: string;
        plantHealth: import("@prisma/client").$Enums.PlantHealth;
        plantingDate: Date;
        expectedHarvest: Date | null;
        notes: string | null;
    }>;
};
//# sourceMappingURL=plant-tracking.service.d.ts.map