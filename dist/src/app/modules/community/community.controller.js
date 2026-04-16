"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const community_service_1 = require("./community.service");
const getAllPosts = (0, catchAsync_1.default)(async (req, res) => {
    const result = await community_service_1.CommunityService.getAllPosts();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Posts retrieved successfully',
        data: result,
    });
});
const getPostById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await community_service_1.CommunityService.getPostById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post retrieved successfully',
        data: result,
    });
});
const createPost = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await community_service_1.CommunityService.createPost(user.id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Post created successfully',
        data: result,
    });
});
const updatePost = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const user = req.user;
    const result = await community_service_1.CommunityService.updatePost(id, user, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post updated successfully',
        data: result,
    });
});
const deletePost = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    await community_service_1.CommunityService.deletePost(id, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post deleted successfully',
    });
});
exports.CommunityController = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
//# sourceMappingURL=community.controller.js.map