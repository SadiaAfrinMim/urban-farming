import { UserRole, UserStatus } from '../../../../prisma/prisma/generated';
export declare const AdminService: {
    getAllUsers: (filters: any, options: any) => Promise<{
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            createdAt: Date;
        }[];
        meta: {
            page: any;
            limit: any;
            total: number;
            totalPages: number;
        };
    }>;
    updateUserRole: (userId: string, role: UserRole) => Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        createdAt: Date;
    }>;
    updateUserStatus: (userId: string, status: UserStatus) => Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        createdAt: Date;
    }>;
    getPendingCertifications: () => Promise<{
        id: number;
        createdAt: Date;
        farmName: string;
        farmLocation: string;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
        userId: number;
    }[]>;
    approveCertification: (vendorId: string) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
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
    }>;
    rejectCertification: (vendorId: string, reason?: string) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
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
    }>;
    approveProduce: (produceId: string) => Promise<{
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
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
    } & {
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
    rejectProduce: (produceId: string) => Promise<{
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
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
    } & {
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
    getPendingProduces: () => Promise<({
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
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
    } & {
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
    })[]>;
    getAllPosts: () => Promise<{
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
    }[]>;
    approvePost: (postId: string, adminId: string) => Promise<{
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
    }>;
    deletePost: (postId: string) => Promise<{
        message: string;
    }>;
    getReports: () => Promise<never[]>;
    resolveReport: (reportId: string, adminId: string) => Promise<{
        id: string;
        status: string;
        adminId: string;
        resolvedAt: Date;
        message: string;
    }>;
    getAllOrders: (filters: any, options: any) => Promise<{
        data: ({
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
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
        })[];
        meta: {
            page: any;
            limit: any;
            total: number;
            totalPages: number;
        };
    }>;
    getRentalAnalytics: () => Promise<{
        totalSpaces: number;
        rentedSpaces: number;
        rentedPercentage: number;
    }>;
    getRevenueAnalytics: () => Promise<{
        totalRevenue: number;
        commission: number;
        orderCount: number;
    }>;
    getRateLimitLogs: (options: any) => Promise<{
        data: {
            id: string;
            ip: string;
            endpoint: string;
            method: string;
            count: number;
            windowStart: Date;
            createdAt: Date;
        }[];
        meta: {
            page: any;
            limit: any;
            total: number;
            totalPages: number;
        };
    }>;
    createAnnouncement: (adminId: string, data: {
        title: string;
        content: string;
        target: string;
    }) => Promise<any>;
    getAnnouncements: () => Promise<any>;
    deleteAnnouncement: (announcementId: string) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map