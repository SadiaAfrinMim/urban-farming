"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../app/shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../app/shared/sendResponse"));
const produce_service_1 = require("./produce.service");
const getAllProduces = (0, catchAsync_1.default)(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    console.log('🌐 API called: GET /api/v1/produces');
    console.log('Query params:', { page, limit });
    const result = await produce_service_1.ProduceService.getAllProduces(page, limit);
    console.log('📤 Sending response with', result.data.length, 'products');
    // Log each product for debugging
    result.data.forEach((product, i) => {
        console.log(`  ${i + 1}. ${product.name} - ${product.certificationStatus} - $${product.price}`);
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produces retrieved successfully',
        data: result.data, // Return just the data array
        meta: result.meta, // Include meta separately if needed
    });
});
const searchProduces = (0, catchAsync_1.default)(async (req, res) => {
    const { q } = req.query;
    const result = await produce_service_1.ProduceService.searchProduces(q);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produces searched successfully',
        data: result, // Already returns array from service
    });
});
const getProduceById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await produce_service_1.ProduceService.getProduceById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produce retrieved successfully',
        data: result,
    });
});
const createProduce = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await produce_service_1.ProduceService.createProduce(user.id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Produce created successfully',
        data: result,
    });
});
const updateProduce = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await produce_service_1.ProduceService.updateProduce(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produce updated successfully',
        data: result,
    });
});
const deleteProduce = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    await produce_service_1.ProduceService.deleteProduce(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Produce deleted successfully',
        data: null,
    });
});
exports.ProduceController = {
    getAllProduces,
    searchProduces,
    getProduceById,
    createProduce,
    updateProduce,
    deleteProduce,
};
//# sourceMappingURL=produce.controller.js.map