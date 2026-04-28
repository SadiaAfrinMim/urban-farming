import { IJWTPayload } from '../../types/common';
export declare const CommunityService: {
    getAllPosts: () => Promise<{
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
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
    }[]>;
    getPostById: (id: string) => Promise<{
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
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
    }>;
    createPost: (userId: number, payload: {
        postContent: string;
    }) => Promise<{
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
    }>;
    updatePost: (id: string, user: IJWTPayload, payload: Partial<{
        postContent: string;
    }>) => Promise<{
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
    }>;
    deletePost: (id: string, user: IJWTPayload) => Promise<void>;
    toggleLike: (postId: string, userId: string) => Promise<{
        liked: boolean;
    }>;
    addComment: (postId: string, userId: string, content: string) => Promise<{
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
    getPostComments: (postId: string) => Promise<({
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
    deleteComment: (commentId: string, userId: string) => Promise<void>;
};
//# sourceMappingURL=community.service.d.ts.map