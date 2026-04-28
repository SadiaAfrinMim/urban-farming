import { UserRole, UserStatus } from '../../types/common';
export declare const AdminService: {
    getAllUsers: (filters: any, options: any) => Promise<{
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
            createdAt: Date;
        }[];
        meta: {
            page: any;
            limit: any;
            total: number;
            totalPages: number;
        };
    }>;
    getAllUsersData: (filters: any, options: any) => Promise<{
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
            createdAt: Date;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getAllVendorsData: (filters: any, options: any) => Promise<{
        data: {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        }[];
        meta: {
            page: any;
            limit: any;
            total: number;
            totalPages: number;
        };
    }>;
    getAllCustomersData: (filters: any, options: any) => Promise<{
        data: {
            postsCount: number;
            ordersCount: any;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
            createdAt: Date;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    updateUserRole: (userId: string, role: UserRole) => Promise<{
        vendorProfile: {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        } | null;
    } & {
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        profileImage: string | null;
        createdAt: Date;
    }>;
    updateUserStatus: (userId: string, status: UserStatus) => Promise<{
        vendorProfile: {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        } | null;
    } & {
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        profileImage: string | null;
        createdAt: Date;
    }>;
    getPendingCertifications: () => Promise<({
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
    })[]>;
    approveCertification: (vendorId: string) => Promise<{
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
    }>;
    rejectCertification: (vendorId: string, reason?: string) => Promise<{
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
    getAllPosts: () => Promise<({
        comments: {
            id: number;
            createdAt: Date;
            userId: number;
            postId: number;
            content: string;
            updatedAt: Date;
        }[];
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
        likes: {
            id: number;
            createdAt: Date;
            userId: number;
            postId: number;
        }[];
    } & {
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
    })[]>;
    approvePost: (postId: string, adminId: string) => Promise<{
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
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
        })[];
        meta: {
            page: number;
            limit: number;
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
    getDashboardStats: () => Promise<{
        totalUsers: number;
        totalVendors: number;
        totalCustomers: number;
        pendingCertifications: number;
        pendingProducts: number;
        pendingPosts: number;
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
            total: any;
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