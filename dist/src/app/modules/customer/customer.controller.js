"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const customer_service_1 = require("./customer.service");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const getCustomerPosts = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await customer_service_1.CustomerService.getCustomerPosts(user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customer posts retrieved successfully',
        data: result,
    });
});
const createCustomerPost = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await customer_service_1.CustomerService.createCustomerPost(user.id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Customer post created successfully',
        data: result,
    });
});
const updateCustomerPost = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const payload = req.body;
    const result = await customer_service_1.CustomerService.updateCustomerPost(id, user.id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customer post updated successfully',
        data: result,
    });
});
const deleteCustomerPost = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    await customer_service_1.CustomerService.deleteCustomerPost(id, user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customer post deleted successfully',
        data: null,
    });
});
const getCustomerDashboard = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await customer_service_1.CustomerService.getCustomerDashboard(user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customer dashboard retrieved successfully',
        data: result,
    });
});
const getCustomerOrders = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await customer_service_1.CustomerService.getCustomerOrders(user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customer orders retrieved successfully',
        data: result,
    });
});
const toggleCustomerPostLike = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const result = await customer_service_1.CustomerService.toggleCustomerPostLike(id, user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result.liked ? 'Post liked successfully' : 'Post unliked successfully',
        data: result,
    });
});
const addCustomerPostComment = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const { content } = req.body;
    const result = await customer_service_1.CustomerService.addCustomerPostComment(id, user.id, content);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Comment added successfully',
        data: result,
    });
});
const getCustomerPostComments = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await customer_service_1.CustomerService.getCustomerPostComments(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Comments retrieved successfully',
        data: result,
    });
});
const deleteCustomerPostComment = (0, catchAsync_1.default)(async (req, res) => {
    const { commentId } = req.params;
    const user = req.user;
    await customer_service_1.CustomerService.deleteCustomerPostComment(commentId, user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Comment deleted successfully',
        data: null,
    });
});
exports.CustomerController = {
    getCustomerPosts,
    createCustomerPost,
    updateCustomerPost,
    deleteCustomerPost,
    getCustomerDashboard,
    getCustomerOrders,
    toggleCustomerPostLike,
    addCustomerPostComment,
    getCustomerPostComments,
    deleteCustomerPostComment,
};
//# sourceMappingURL=customer.controller.js.map