export declare const CustomerService: {
    getCustomerPosts: (userId: string) => Promise<{
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
        user: {
            id: number;
            name: string;
            email: string;
        };
        likes: {
            id: number;
            userId: number;
        }[];
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        category: import("@prisma/client").$Enums.PostCategory;
        isApproved: boolean;
        content: string;
    }[]>;
    createCustomerPost: (userId: string, payload: {
        title: string;
        content: string;
        category: string;
    }) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
    } & {
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        category: import("@prisma/client").$Enums.PostCategory;
        isApproved: boolean;
        content: string;
    }>;
    updateCustomerPost: (postId: string, userId: string, payload: Partial<{
        title: string;
        content: string;
        category: string;
    }>) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
    } & {
        title: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        category: import("@prisma/client").$Enums.PostCategory;
        isApproved: boolean;
        content: string;
    }>;
    deleteCustomerPost: (postId: string, userId: string) => Promise<void>;
    getCustomerDashboard: (userId: string) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
        stats: {
            postsCount: number;
            ordersCount: number;
        };
        recentPosts: {
            title: string;
            createdAt: Date;
            id: number;
            category: import("@prisma/client").$Enums.PostCategory;
            isApproved: boolean;
        }[];
    }>;
    getCustomerOrders: (userId: string) => Promise<({
        rentalSpace: ({
            vendor: {
                user: {
                    name: string;
                };
                farmName: string;
            };
        } & {
            createdAt: Date;
            id: number;
            vendorId: number;
            location: string;
            size: string;
            price: number;
            availability: boolean;
            image: string | null;
            plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
            lastWatered: Date | null;
        }) | null;
        produce: ({
            vendor: {
                user: {
                    name: string;
                };
                farmName: string;
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
        }) | null;
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
    })[]>;
    toggleCustomerPostLike: (postId: string, userId: string) => Promise<{
        liked: boolean;
    }>;
    addCustomerPostComment: (postId: string, userId: string, content: string) => Promise<{
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
    getCustomerPostComments: (postId: string) => Promise<({
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
    })[]>;
    deleteCustomerPostComment: (commentId: string, userId: string) => Promise<void>;
    updateRentalOrderStatus: (orderId: string, userId: string, status: string) => Promise<{
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
        rentalSpace: ({
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
            vendorId: number;
            location: string;
            size: string;
            price: number;
            availability: boolean;
            image: string | null;
            plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
            lastWatered: Date | null;
        }) | null;
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
    }>;
};
//# sourceMappingURL=customer.service.d.ts.map