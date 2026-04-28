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
    updateRentalSpace: (user: IJWTPayload, id: string, req: any) => Promise<{
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
    deleteRentalSpace: (user: IJWTPayload, id: string) => Promise<{
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
    updateProduce: (user: IJWTPayload, id: string, req: any) => Promise<{
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
    deleteProduce: (user: IJWTPayload, id: string) => Promise<{
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
    updatePlantStatus: (user: IJWTPayload, data: any) => Promise<{
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
    updateOrderStatus: (user: IJWTPayload, orderId: string, status: string) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
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
        } | null;
    } & {
        id: number;
        status: import("../../../../prisma/prisma/generated").$Enums.OrderStatus;
        userId: number;
        vendorId: number;
        produceId: number | null;
        rentalSpaceId: number | null;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
    }>;
    getOrders: (user: IJWTPayload) => Promise<({
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
            createdAt: Date;
        };
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
                profileImage: string | null;
                createdAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
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
        } | null;
    } & {
        id: number;
        status: import("../../../../prisma/prisma/generated").$Enums.OrderStatus;
        userId: number;
        vendorId: number;
        produceId: number | null;
        rentalSpaceId: number | null;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
    })[]>;
    createVendorPost: (user: IJWTPayload, req: Request) => Promise<{
        vendor: {
            user: {
                name: string;
                email: string;
            };
        } & {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        vendorId: number;
        image: string | null;
        category: import("../../../../prisma/prisma/generated").$Enums.VendorPostCategory;
        isApproved: boolean;
        content: string;
        updatedAt: Date;
        title: string;
    }>;
    getVendorPosts: (user: IJWTPayload) => Promise<{
        likeCount: number;
        commentCount: number;
        comments: {
            user: {
                id: number;
                name: string;
            };
            id: number;
            createdAt: Date;
            content: string;
        }[];
        likes: {
            id: number;
            userId: number;
        }[];
        id: number;
        createdAt: Date;
        vendorId: number;
        image: string | null;
        category: import("../../../../prisma/prisma/generated").$Enums.VendorPostCategory;
        isApproved: boolean;
        content: string;
        updatedAt: Date;
        title: string;
    }[]>;
    updateVendorPost: (user: IJWTPayload, id: string, req: any) => Promise<{
        vendor: {
            user: {
                name: string;
                email: string;
            };
        } & {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        vendorId: number;
        image: string | null;
        category: import("../../../../prisma/prisma/generated").$Enums.VendorPostCategory;
        isApproved: boolean;
        content: string;
        updatedAt: Date;
        title: string;
    }>;
    deleteVendorPost: (user: IJWTPayload, id: string) => Promise<void>;
    toggleVendorPostLike: (user: IJWTPayload, postId: string) => Promise<{
        liked: boolean;
    }>;
    addVendorPostComment: (user: IJWTPayload, postId: string, content: string) => Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
        content: string;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=vendor.service.d.ts.map