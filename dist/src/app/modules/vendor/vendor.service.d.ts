import { Request } from 'express';
import { IJWTPayload } from '../../types/common';
export declare const VendorService: {
    createOrUpdateProfile: (user: IJWTPayload, req: Request) => Promise<{
        id: number;
        createdAt: Date;
        farmName: string;
        farmLocation: string;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
        userId: number;
    }>;
    getProfile: (user: IJWTPayload) => Promise<{
        id: number;
        createdAt: Date;
        farmName: string;
        farmLocation: string;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
        userId: number;
    } | null>;
    getVendorCard: (user: IJWTPayload) => Promise<{
        id: number;
        vendorName: any;
        vendorEmail: any;
        farmName: string;
        farmLocation: string;
        profilePhoto: string | null;
        certifications: string[];
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        totalProduces: number;
        totalRentalSpaces: number;
        recentProduces: any;
        recentRentalSpaces: any;
    }>;
    createRentalSpace: (user: IJWTPayload, req: Request) => Promise<{
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    getRentalSpaces: (user: IJWTPayload) => Promise<{
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }[]>;
    updateRentalSpace: (user: IJWTPayload, id: string, data: any) => Promise<import("../../../../prisma/prisma/generated").Prisma.BatchPayload>;
    deleteRentalSpace: (user: IJWTPayload, id: string) => Promise<import("../../../../prisma/prisma/generated").Prisma.BatchPayload>;
    createProduce: (user: IJWTPayload, req: Request) => Promise<{
        id: number;
        name: string;
        createdAt: Date;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    getProduces: (user: IJWTPayload) => Promise<{
        id: number;
        name: string;
        createdAt: Date;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }[]>;
    updateProduce: (user: IJWTPayload, id: string, data: any) => Promise<import("../../../../prisma/prisma/generated").Prisma.BatchPayload>;
    deleteProduce: (user: IJWTPayload, id: string) => Promise<import("../../../../prisma/prisma/generated").Prisma.BatchPayload>;
    updatePlantStatus: (user: IJWTPayload, data: any) => Promise<import("../../../../prisma/prisma/generated").Prisma.BatchPayload>;
    getOrders: (user: IJWTPayload) => Promise<({
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            createdAt: Date;
        };
        produce: {
            id: number;
            name: string;
            createdAt: Date;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            vendorId: number;
            price: number;
            image: string | null;
            description: string;
            category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
            availableQuantity: number;
            unit: string | null;
            isOrganic: boolean | null;
        };
    } & {
        id: number;
        status: import("../../../../prisma/prisma/generated").$Enums.OrderStatus;
        userId: number;
        vendorId: number;
        produceId: number;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
    })[]>;
};
//# sourceMappingURL=vendor.service.d.ts.map