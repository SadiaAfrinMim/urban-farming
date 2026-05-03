"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../app/shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../app/shared/sendResponse"));
const rental_service_js_1 = require("./rental.service.js");
const getAllRentalSpaces = (0, catchAsync_1.default)(async (req, res) => {
    const result = await rental_service_js_1.RentalService.getAllRentalSpaces();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental spaces retrieved successfully',
        data: result,
    });
});
const searchRentalSpaces = (0, catchAsync_1.default)(async (req, res) => {
    const { location } = req.query;
    const result = await rental_service_js_1.RentalService.searchRentalSpaces(location);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental spaces searched successfully',
        data: result,
    });
});
const getRentalSpaceById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await rental_service_js_1.RentalService.getRentalSpaceById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental space retrieved successfully',
        data: result,
    });
});
const createRentalSpace = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await rental_service_js_1.RentalService.createRentalSpace(user.id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Rental space created successfully',
        data: result,
    });
});
const updateRentalSpace = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await rental_service_js_1.RentalService.updateRentalSpace(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental space updated successfully',
        data: result,
    });
});
const deleteRentalSpace = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    await rental_service_js_1.RentalService.deleteRentalSpace(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental space deleted successfully',
        data: null,
    });
});
const toggleAvailability = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const { availability } = req.body;
    const result = await rental_service_js_1.RentalService.toggleAvailability(id, availability);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Availability updated successfully',
        data: result,
    });
});
const bookRentalSpace = (0, catchAsync_1.default)(async (req, res) => {
    const { spaceId } = req.body;
    const user = req.user;
    const result = await rental_service_js_1.RentalService.bookRentalSpace(spaceId, user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental space booked successfully',
        data: result,
    });
});
const createRentalOrder = (0, catchAsync_1.default)(async (req, res) => {
    const { spaceId, totalPrice, duration } = req.body;
    const user = req.user;
    const result = await rental_service_js_1.RentalService.createRentalOrder(user.id, spaceId, totalPrice, duration);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Rental order created successfully',
        data: result,
    });
});
const getVendorRentalOrders = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await rental_service_js_1.RentalService.getVendorRentalOrders(user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Vendor rental orders retrieved successfully',
        data: result,
    });
});
const updateRentalOrderStatus = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;
    const orderId = parseInt(id, 10);
    if (isNaN(orderId)) {
        throw new ApiError(http_status_1.default.BAD_REQUEST, 'Invalid order ID');
    }
    const result = await rental_service_js_1.RentalService.updateRentalOrderStatus(orderId, status, user.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental order status updated successfully',
        data: result,
    });
});
exports.RentalController = {
    getAllRentalSpaces,
    searchRentalSpaces,
    getRentalSpaceById,
    createRentalSpace,
    updateRentalSpace,
    deleteRentalSpace,
    toggleAvailability,
    bookRentalSpace,
    createRentalOrder,
    getVendorRentalOrders,
    updateRentalOrderStatus,
};
//# sourceMappingURL=rental.controller.js.map