import { IJWTPayload } from '../../types/common';
export declare const CommunityService: {
    getAllPosts: () => Promise<{
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
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
        moderatedBy: number | null;
        moderatedAt: Date | null;
    }[]>;
    getPostById: (id: string) => Promise<{
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
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
        moderatedBy: number | null;
        moderatedAt: Date | null;
    }>;
    createPost: (userId: number, payload: {
        postContent: string;
    }) => Promise<{
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
    } & {
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
        moderatedBy: number | null;
        moderatedAt: Date | null;
    }>;
    updatePost: (id: string, user: IJWTPayload, payload: Partial<{
        postContent: string;
    }>) => Promise<{
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
    } & {
        id: number;
        userId: number;
        postContent: string;
        postDate: Date;
        isApproved: boolean;
        moderatedBy: number | null;
        moderatedAt: Date | null;
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
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        postId: number;
        content: string;
    }>;
    getPostComments: (postId: string) => Promise<({
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
    deleteComment: (commentId: string, userId: string) => Promise<void>;
};
//# sourceMappingURL=community.service.d.ts.map