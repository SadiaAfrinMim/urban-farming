"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const vendor_service_1 = require("./vendor.service");
const createOrUpdateProfile = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.createOrUpdateProfile(user, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Profile updated successfully',
        data: result,
    });
});
const getVendorCard = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.getVendorCard(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vendor card retrieved successfully',
        data: result,
    });
});
const getProfile = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.getProfile(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Profile retrieved successfully',
        data: result,
    });
});
const createRentalSpace = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.createRentalSpace(user, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Rental space created successfully',
        data: result,
    });
});
const getRentalSpaces = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.getRentalSpaces(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental spaces retrieved successfully',
        data: result,
    });
});
const updateRentalSpace = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await vendor_service_1.VendorService.updateRentalSpace(user, id, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental space updated successfully',
        data: result,
    });
});
const deleteRentalSpace = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await vendor_service_1.VendorService.deleteRentalSpace(user, id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental space deleted successfully',
        data: result,
    });
});
const createProduce = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.createProduce(user, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Produce created successfully',
        data: result,
    });
});
const getProduces = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.getProduces(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produces retrieved successfully',
        data: result,
    });
});
const updateProduce = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await vendor_service_1.VendorService.updateProduce(user, id, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produce updated successfully',
        data: result,
    });
});
const deleteProduce = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await vendor_service_1.VendorService.deleteProduce(user, id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produce deleted successfully',
        data: result,
    });
});
const updatePlantStatus = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.updatePlantStatus(user, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant status updated successfully',
        data: result,
    });
});
const updateOrderStatus = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const { status } = req.body;
    const result = await vendor_service_1.VendorService.updateOrderStatus(user, id, status);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Order status updated successfully',
        data: result,
    });
});
const getOrders = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.getOrders(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
    });
});
const createVendorPost = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.createVendorPost(user, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Vendor post created successfully',
        data: result,
    });
});
const getVendorPosts = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await vendor_service_1.VendorService.getVendorPosts(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vendor posts retrieved successfully',
        data: result,
    });
});
const updateVendorPost = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await vendor_service_1.VendorService.updateVendorPost(user, id, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vendor post updated successfully',
        data: result,
    });
});
const deleteVendorPost = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await vendor_service_1.VendorService.deleteVendorPost(user, id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vendor post deleted successfully',
        data: result,
    });
});
const toggleVendorPostLike = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { postId } = req.params;
    const result = await vendor_service_1.VendorService.toggleVendorPostLike(user, postId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result.liked ? 'Post liked successfully' : 'Post unliked successfully',
        data: result,
    });
});
const addVendorPostComment = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { postId } = req.params;
    const { content } = req.body;
    const result = await vendor_service_1.VendorService.addVendorPostComment(user, postId, content);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Comment added successfully',
        data: result,
    });
});
exports.VendorController = {
    createOrUpdateProfile,
    getProfile,
    getVendorCard,
    createRentalSpace,
    getRentalSpaces,
    updateRentalSpace,
    deleteRentalSpace,
    createProduce,
    getProduces,
    updateProduce,
    deleteProduce,
    updatePlantStatus,
    updateOrderStatus,
    getOrders,
    createVendorPost,
    getVendorPosts,
    updateVendorPost,
    deleteVendorPost,
    toggleVendorPostLike,
    addVendorPostComment,
};
//# sourceMappingURL=vendor.controller.js.map