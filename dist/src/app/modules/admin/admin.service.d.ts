import { UserRole, UserStatus } from '@prisma/client';
export declare const AdminService: {
    getAllUsers: (filters: any, options: any) => Promise<{
        data: ({
            vendorProfile: {
                createdAt: Date;
                id: number;
                userId: number;
                farmName: string;
                farmLocation: string;
                certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
                profilePhoto: string | null;
                certifications: string[];
            } | null;
        } & {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        })[];
        meta: {
            page: any;
            limit: any;
            total: number;
            totalPages: number;
        };
    }>;
    getAllUsersData: (filters: any, options: any) => Promise<{
        data: ({
            vendorProfile: {
                createdAt: Date;
                id: number;
                userId: number;
                farmName: string;
                farmLocation: string;
                certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
                profilePhoto: string | null;
                certifications: string[];
            } | null;
        } & {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getAllProfiles: (filters: any) => Promise<{
        id: any;
        name: any;
        email: any;
        role: any;
        status: any;
        createdAt: any;
        vendorProfile: {
            farmName: any;
            farmLocation: any;
            certificationStatus: any;
            certifications: any;
            producesCount: any;
            rentalSpacesCount: any;
        } | undefined;
        customerStats: {
            postsCount: any;
            ordersCount: any;
        } | undefined;
    }[]>;
    getAllVendorsData: (filters: any, options: any) => Promise<{
        data: ({
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                status: import("@prisma/client").$Enums.UserStatus;
            };
            produces: {
                id: number;
                name: string;
                certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
                price: number;
            }[];
            rentalSpaces: {
                id: number;
                location: string;
                price: number;
                availability: boolean;
            }[];
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        })[];
        meta: {
            page: any;
            limit: any;
            total: number;
            totalPages: number;
        };
    }>;
    getAllCustomersData: (filters: any, options: any) => Promise<{
        data: ({
            _count: {
                orders: number;
            };
        } & {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    updateUserRole: (userId: string, role: UserRole) => Promise<{
        vendorProfile: {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        } | null;
    } & {
        createdAt: Date;
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.UserRole;
        status: import("@prisma/client").$Enums.UserStatus;
        profileImage: string | null;
    }>;
    updateUserStatus: (userId: string, status: UserStatus) => Promise<{
        vendorProfile: {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        } | null;
    } & {
        createdAt: Date;
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.UserRole;
        status: import("@prisma/client").$Enums.UserStatus;
        profileImage: string | null;
    }>;
    getPendingCertifications: () => Promise<({
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
    } & {
        createdAt: Date;
        id: number;
        userId: number;
        farmName: string;
        farmLocation: string;
        certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
    })[]>;
    approveCertification: (vendorId: string) => Promise<{
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
    } & {
        createdAt: Date;
        id: number;
        userId: number;
        farmName: string;
        farmLocation: string;
        certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
    }>;
    rejectCertification: (vendorId: string, reason?: string) => Promise<{
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
    } & {
        createdAt: Date;
        id: number;
        userId: number;
        farmName: string;
        farmLocation: string;
        certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
    }>;
    approveProduce: (produceId: string) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("@prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    rejectProduce: (produceId: string) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("@prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    getPendingProduces: () => Promise<({
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("@prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    })[]>;
    getAllPosts: () => Promise<({
        comments: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            userId: number;
            postId: number;
            content: string;
        }[];
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
        likes: {
            createdAt: Date;
            id: number;
            userId: number;
            postId: number;
        }[];
    } & {
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
        moderatedBy: number | null;
        moderatedAt: Date | null;
    })[]>;
    approvePost: (postId: string, adminId: string) => Promise<{
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
    } & {
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
        moderatedBy: number | null;
        moderatedAt: Date | null;
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
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
            vendor: {
                user: {
                    createdAt: Date;
                    id: number;
                    name: string;
                    email: string;
                    password: string;
                    role: import("@prisma/client").$Enums.UserRole;
                    status: import("@prisma/client").$Enums.UserStatus;
                    profileImage: string | null;
                };
            } & {
                createdAt: Date;
                id: number;
                userId: number;
                farmName: string;
                farmLocation: string;
                certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
                profilePhoto: string | null;
                certifications: string[];
            };
            produce: {
                createdAt: Date;
                id: number;
                name: string;
                certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
                vendorId: number;
                price: number;
                image: string | null;
                description: string;
                category: import("@prisma/client").$Enums.ProduceCategory;
                availableQuantity: number;
                unit: string | null;
                isOrganic: boolean | null;
            } | null;
        } & {
            id: number;
            userId: number;
            status: import("@prisma/client").$Enums.OrderStatus;
            vendorId: number;
            quantity: number;
            totalPrice: number;
            orderDate: Date;
            produceId: number | null;
            rentalSpaceId: number | null;
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
    }) => Promise<{
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        content: string;
        target: string;
    }>;
    getAnnouncements: () => Promise<({
        admin: never;
    } & {
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        content: string;
        target: string;
    })[]>;
    deleteAnnouncement: (announcementId: string) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map