export declare const CustomerService: {
    getCustomerPosts: (userId: string) => Promise<{
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
        user: {
            id: number;
            name: string;
            email: string;
        };
        likes: {
            id: number;
            userId: number;
        }[];
        id: number;
        createdAt: Date;
        userId: number;
        category: import("../../../../prisma/prisma/generated").$Enums.PostCategory;
        isApproved: boolean;
        content: string;
        updatedAt: Date;
        title: string;
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
        id: number;
        createdAt: Date;
        userId: number;
        category: import("../../../../prisma/prisma/generated").$Enums.PostCategory;
        isApproved: boolean;
        content: string;
        updatedAt: Date;
        title: string;
    }>;
    updateCustomerPost: (postId: string, userId: string, payload: Partial<{
        title: string;
        content: string;
        category: string;
    }>) => Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        category: import("../../../../prisma/prisma/generated").$Enums.PostCategory;
        isApproved: boolean;
        content: string;
        updatedAt: Date;
        title: string;
    }>;
    deleteCustomerPost: (postId: string, userId: string) => Promise<void>;
    getCustomerDashboard: (userId: string) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
        };
        stats: {
            postsCount: number;
            ordersCount: number;
        };
        recentPosts: {
            id: number;
            createdAt: Date;
            category: import("../../../../prisma/prisma/generated").$Enums.PostCategory;
            isApproved: boolean;
            title: string;
        }[];
    }>;
    getCustomerOrders: (userId: string) => Promise<{
        id: number;
        status: import("../../../../prisma/prisma/generated").$Enums.OrderStatus;
        userId: number;
        vendorId: number;
        produceId: number | null;
        rentalSpaceId: number | null;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
    }[]>;
    toggleCustomerPostLike: (postId: string, userId: string) => Promise<{
        liked: boolean;
    }>;
    addCustomerPostComment: (postId: string, userId: string, content: string) => Promise<{
        user: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
        content: string;
        updatedAt: Date;
    }>;
    getCustomerPostComments: (postId: string) => Promise<({
        user: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        postId: number;
        content: string;
        updatedAt: Date;
    })[]>;
    deleteCustomerPostComment: (commentId: string, userId: string) => Promise<void>;
};
//# sourceMappingURL=customer.service.d.ts.map