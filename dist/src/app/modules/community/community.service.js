"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityService = void 0;
const prisma_1 = require("../../shared/prisma");
const client_1 = require("@prisma/client");
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
            isApproved: false, // Posts need admin approval
        },
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
    });
    const postWithCounts = {
        ...post,
        likeCount: post.likes.length,
        commentCount: post.comments.length,
    };
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('community-post-created', postWithCounts);
    }
    // Notify admins about new post for moderation (async, non-blocking)
    process.nextTick(async () => {
        try {
            const NotificationService = (await Promise.resolve().then(() => __importStar(require('../notification/notification.service')))).NotificationService;
            const admins = await prisma_1.prisma.user.findMany({
                where: { role: client_1.UserRole.Admin },
            });
            for (const admin of admins) {
                await NotificationService.createNotification(admin.id, 'SYSTEM', 'New Post for Moderation', `New community post by ${post.user.name} needs approval.`, {
                    postId: post.id,
                    postContent: post.postContent.substring(0, 100) + '...',
                    authorId: post.userId,
                    authorName: post.user.name,
                    type: 'post_moderation',
                });
            }
        }
        catch (error) {
            console.error('Failed to create post moderation notification:', error);
        }
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
    });
    const updatedWithCounts = {
        ...updated,
        likeCount: updated.likes.length,
        commentCount: updated.comments.length,
    };
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('community-post-updated', updatedWithCounts);
    }
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
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('community-post-deleted', { id });
    }
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
        // Emit real-time update
        const io = global.io;
        if (io) {
            io.emit('community-post-unliked', { postId, userId });
        }
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
        // Emit real-time update
        const io = global.io;
        if (io) {
            io.emit('community-post-liked', { postId, userId });
        }
        // Create notification for post author (if not the same user) (async, non-blocking)
        process.nextTick(async () => {
            try {
                const NotificationService = (await Promise.resolve().then(() => __importStar(require('../notification/notification.service')))).NotificationService;
                const post = await prisma_1.prisma.communityPost.findUnique({
                    where: { id: parseInt(postId) },
                    include: { user: true },
                });
                if (post && post.userId !== parseInt(userId)) {
                    const liker = await prisma_1.prisma.user.findUnique({
                        where: { id: parseInt(userId) },
                        select: { name: true },
                    });
                    await NotificationService.createNotification(post.userId, 'COMMUNITY_POST_LIKE', 'Post Liked', `${liker?.name || 'Someone'} liked your post.`, {
                        postId: postId,
                        likerId: userId,
                        likerName: liker?.name,
                        postContent: post.postContent.substring(0, 50) + '...',
                    });
                }
            }
            catch (error) {
                console.error('Failed to create like notification:', error);
            }
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
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('community-comment-added', { postId, comment });
    }
    // Create notification for post author (if not the same user) (async, non-blocking)
    process.nextTick(async () => {
        try {
            const NotificationService = (await Promise.resolve().then(() => __importStar(require('../notification/notification.service')))).NotificationService;
            const post = await prisma_1.prisma.communityPost.findUnique({
                where: { id: parseInt(postId) },
                include: { user: true },
            });
            if (post && post.userId !== parseInt(userId)) {
                const commenter = await prisma_1.prisma.user.findUnique({
                    where: { id: parseInt(userId) },
                    select: { name: true },
                });
                await NotificationService.createNotification(post.userId, 'COMMUNITY_POST_COMMENT', 'New Comment', `${commenter?.name || 'Someone'} commented on your post.`, {
                    postId: postId,
                    commentId: comment.id,
                    commenterId: userId,
                    commenterName: commenter?.name,
                    commentContent: comment.content,
                    postContent: post.postContent.substring(0, 50) + '...',
                });
            }
        }
        catch (error) {
            console.error('Failed to create comment notification:', error);
        }
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
    // Emit real-time update
    const io = global.io;
    if (io) {
        io.emit('community-comment-deleted', { commentId, postId: comment.postId });
    }
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