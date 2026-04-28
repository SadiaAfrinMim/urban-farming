"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const home_service_1 = require("./home.service");
// Featured Products
const getFeaturedProducts = async (req, res) => {
    const result = await home_service_1.HomeService.getFeaturedProducts();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Featured products retrieved successfully',
        data: result,
    });
};
// Categories
const getCategories = async (req, res) => {
    const result = await home_service_1.HomeService.getCategories();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Categories retrieved successfully',
        data: result,
    });
};
// Statistics
const getStatistics = async (req, res) => {
    const result = await home_service_1.HomeService.getStatistics();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Statistics retrieved successfully',
        data: result,
    });
};
// Testimonials
const getTestimonials = async (req, res) => {
    const result = await home_service_1.HomeService.getTestimonials();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Testimonials retrieved successfully',
        data: result,
    });
};
// Featured Vendors
const getFeaturedVendors = async (req, res) => {
    const result = await home_service_1.HomeService.getFeaturedVendors();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Featured vendors retrieved successfully',
        data: result,
    });
};
exports.HomeController = {
    getFeaturedProducts,
    getCategories,
    getStatistics,
    getTestimonials,
    getFeaturedVendors,
};
//# sourceMappingURL=home.controller.js.map