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
            user: true,
        },
        orderBy: {
            postDate: 'desc',
        },
    });
    return posts;
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
    if (post.userId !== user.id && user.role !== 'Admin') {
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
    if (post.userId !== user.id && user.role !== 'Admin') {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
    }
    await prisma_1.prisma.communityPost.delete({
        where: { id: parseInt(id) },
    });
};
exports.CommunityService = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
//# sourceMappingURL=community.service.js.map