import { Request } from 'express';
import { IJWTPayload } from '../../types/common.js';
export declare const VendorService: {
    createOrUpdateProfile: (user: IJWTPayload, req: Request) => Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        farmName: string;
        farmLocation: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
    }>;
    getProfile: (user: IJWTPayload) => Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        farmName: string;
        farmLocation: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
    } | null>;
    getVendorCard: (user: IJWTPayload) => Promise<{
        id: number;
        vendorName: string;
        vendorEmail: string;
        farmName: string;
        farmLocation: string;
        profilePhoto: string | null;
        certifications: string[];
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        totalProduces: number;
        totalRentalSpaces: number;
        recentProduces: {
            id: number;
            name: string;
            price: number;
            image: string | null;
            category: import(".prisma/client").$Enums.ProduceCategory;
        }[];
        recentRentalSpaces: {
            id: number;
            location: string;
            size: string;
            price: number;
            availability: boolean;
            image: string | null;
        }[];
    }>;
    createRentalSpace: (user: IJWTPayload, req: Request) => Promise<{
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import(".prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    getRentalSpaces: (user: IJWTPayload) => Promise<{
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import(".prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }[]>;
    updateRentalSpace: (user: IJWTPayload, id: string, req: any) => Promise<{
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import(".prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    deleteRentalSpace: (user: IJWTPayload, id: string) => Promise<{
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import(".prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    createProduce: (user: IJWTPayload, req: Request) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import(".prisma/client").$Enums.UserRole;
                status: import(".prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    getProduces: (user: IJWTPayload) => Promise<{
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }[]>;
    updateProduce: (user: IJWTPayload, id: string, req: any) => Promise<{
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    deleteProduce: (user: IJWTPayload, id: string) => Promise<{
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    updatePlantStatus: (user: IJWTPayload, data: any) => Promise<{
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import(".prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    updateOrderStatus: (user: IJWTPayload, orderId: string, status: string) => Promise<{
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            status: import(".prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
        produce: {
            createdAt: Date;
            id: number;
            name: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            vendorId: number;
            price: number;
            image: string | null;
            description: string;
            category: import(".prisma/client").$Enums.ProduceCategory;
            availableQuantity: number;
            unit: string | null;
            isOrganic: boolean | null;
        } | null;
    } & {
        id: number;
        userId: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        vendorId: number;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
        produceId: number | null;
        rentalSpaceId: number | null;
    }>;
    getOrders: (user: IJWTPayload) => Promise<({
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            status: import(".prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import(".prisma/client").$Enums.UserRole;
                status: import(".prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
        produce: {
            createdAt: Date;
            id: number;
            name: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            vendorId: number;
            price: number;
            image: string | null;
            description: string;
            category: import(".prisma/client").$Enums.ProduceCategory;
            availableQuantity: number;
            unit: string | null;
            isOrganic: boolean | null;
        } | null;
    } & {
        id: number;
        userId: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        vendorId: number;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
        produceId: number | null;
        rentalSpaceId: number | null;
    })[]>;
    createVendorPost: (user: IJWTPayload, req: Request) => Promise<{
        vendor: {
            user: {
                name: string;
                email: string;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        vendorId: number;
        image: string | null;
        category: import(".prisma/client").$Enums.VendorPostCategory;
        isApproved: boolean;
        content: string;
    }>;
    getVendorPosts: (user: IJWTPayload) => Promise<{
        likeCount: number;
        commentCount: number;
        comments: {
            createdAt: Date;
            user: {
                id: number;
                name: string;
            };
            id: number;
            content: string;
        }[];
        likes: {
            id: number;
            userId: number;
        }[];
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        vendorId: number;
        image: string | null;
        category: import(".prisma/client").$Enums.VendorPostCategory;
        isApproved: boolean;
        content: string;
    }[]>;
    updateVendorPost: (user: IJWTPayload, id: string, req: any) => Promise<{
        vendor: {
            user: {
                name: string;
                email: string;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        vendorId: number;
        image: string | null;
        category: import(".prisma/client").$Enums.VendorPostCategory;
        isApproved: boolean;
        content: string;
    }>;
    deleteVendorPost: (user: IJWTPayload, id: string) => Promise<void>;
    toggleVendorPostLike: (user: IJWTPayload, postId: string) => Promise<{
        liked: boolean;
    }>;
    addVendorPostComment: (user: IJWTPayload, postId: string, content: string) => Promise<{
        user: {
            id: number;
            name: string;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        postId: number;
        content: string;
    }>;
    getVendorDashboardStats: (user: IJWTPayload) => Promise<{
        totalSales: number;
        activeRentals: number;
        pendingOrders: number;
        totalProducts: number;
        monthlyEarnings: {
            month: string;
            earnings: number;
        }[];
    }>;
};
//# sourceMappingURL=vendor.service.d.ts.map