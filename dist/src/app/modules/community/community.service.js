"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityService = void 0;
const prisma_1 = require("../../shared/prisma");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const getAllPosts = async () => {
    const posts = await prisma_1.prisma.communityPost.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            likes: {
                select: {
                    id: true,
                    userId: true,
                },
            },
            comments: {
                select: {
                    id: true,
                    content: true,
                    createdAt: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'asc',
                },
            },
        },
        orderBy: {
            postDate: 'desc',
        },
    });
    // Add computed fields
    return posts.map(post => ({
        ...post,
        likeCount: post.likes.length,
        commentCount: post.comments.length,
    }));
};
const getPostById = async (id) => {
    const post = await prisma_1.prisma.communityPost.findUnique({
        where: { id: parseInt(id) },
        include: {
            user: true,
        },
    });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Post not found');
    }
    return post;
};
const createPost = async (userId, payload) => {
    const post = await prisma_1.prisma.communityPost.create({
        data: {
            userId,
            postContent: payload.postContent,
        },
    });
    return post;
};
const updatePost = async (id, user, payload) => {
    const post = await prisma_1.prisma.communityPost.findUnique({
        where: { id: parseInt(id) },
    });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Post not found');
    }
    if (post.userId !== parseInt(user.id) && user.role !== 'Admin') {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    const updated = await prisma_1.prisma.communityPost.update({
        where: { id: parseInt(id) },
        data: {
            postContent: payload.postContent,
        },
    });
    return updated;
};
const deletePost = async (id, user) => {
    const post = await prisma_1.prisma.communityPost.findUnique({
        where: { id: parseInt(id) },
    });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Post not found');
    }
    if (post.userId !== parseInt(user.id) && user.role !== 'Admin') {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    await prisma_1.prisma.communityPost.delete({
        where: { id: parseInt(id) },
    });
};
const toggleLike = async (postId, userId) => {
    const post = await prisma_1.prisma.communityPost.findUnique({
        where: { id: parseInt(postId) },
    });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Post not found');
    }
    // Check if user already liked the post
    const existingLike = await prisma_1.prisma.postLike.findUnique({
        where: {
            userId_postId: {
                userId: parseInt(userId),
                postId: parseInt(postId),
            },
        },
    });
    if (existingLike) {
        // Unlike the post
        await prisma_1.prisma.postLike.delete({
            where: { id: existingLike.id },
        });
        return { liked: false };
    }
    else {
        // Like the post
        await prisma_1.prisma.postLike.create({
            data: {
                userId: parseInt(userId),
                postId: parseInt(postId),
            },
        });
        return { liked: true };
    }
};
const addComment = async (postId, userId, content) => {
    const post = await prisma_1.prisma.communityPost.findUnique({
        where: { id: parseInt(postId) },
    });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Post not found');
    }
    if (!content.trim()) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Comment content cannot be empty');
    }
    const comment = await prisma_1.prisma.postComment.create({
        data: {
            userId: parseInt(userId),
            postId: parseInt(postId),
            content: content.trim(),
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
    return comment;
};
const getPostComments = async (postId) => {
    const comments = await prisma_1.prisma.postComment.findMany({
        where: { postId: parseInt(postId) },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
        orderBy: {
            createdAt: 'asc',
        },
    });
    return comments;
};
const deleteComment = async (commentId, userId) => {
    const comment = await prisma_1.prisma.postComment.findUnique({
        where: { id: parseInt(commentId) },
    });
    if (!comment) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Comment not found');
    }
    if (comment.userId !== parseInt(userId)) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'You can only delete your own comments');
    }
    await prisma_1.prisma.postComment.delete({
        where: { id: parseInt(commentId) },
    });
};
exports.CommunityService = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    toggleLike,
    addComment,
    getPostComments,
    deleteComment,
};
//# sourceMappingURL=community.service.js.map