import { IJWTPayload } from '../../types/common';
export declare const CommunityService: {
    getAllPosts: () => Promise<({
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
        userId: number;
        postContent: string;
        postDate: Date;
    })[]>;
    getPostById: (id: string) => Promise<{
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
        userId: number;
        postContent: string;
        postDate: Date;
    }>;
    createPost: (userId: number, payload: {
        postContent: string;
    }) => Promise<{
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
    }>;
    updatePost: (id: string, user: IJWTPayload, payload: Partial<{
        postContent: string;
    }>) => Promise<{
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
    }>;
    deletePost: (id: string, user: IJWTPayload) => Promise<void>;
};
//# sourceMappingURL=community.service.d.ts.map