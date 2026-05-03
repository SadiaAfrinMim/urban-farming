"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const catchAsync_js_1 = __importDefault(require("../../shared/catchAsync.js"));
const sendResponse_js_1 = __importDefault(require("../../shared/sendResponse.js"));
const user_constant_js_1 = require("./user.constant.js");
const http_status_1 = __importDefault(require("http-status"));
const user_service_js_1 = require("./user.service.js");
const pick_js_1 = __importDefault(require("../../helpers/pick.js"));
const createCustomer = (0, catchAsync_js_1.default)(async (req, res) => {
    const result = await user_service_js_1.UserService.createCustomer(req);
    (0, sendResponse_js_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Customer created successfully!",
        data: result
    });
});
const createAdmin = (0, catchAsync_js_1.default)(async (req, res) => {
    const result = await user_service_js_1.UserService.createAdmin(req);
    (0, sendResponse_js_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Admin Created successfuly!",
        data: result
    });
});
const createVendor = (0, catchAsync_js_1.default)(async (req, res) => {
    const result = await user_service_js_1.UserService.createVendor(req);
    (0, sendResponse_js_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Vendor Created successfuly!",
        data: result
    });
});
const createVendorPublic = (0, catchAsync_js_1.default)(async (req, res) => {
    const result = await user_service_js_1.UserService.createVendorPublic(req);
    (0, sendResponse_js_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Vendor created successfully!",
        data: result
    });
});
const getAllFromDB = (0, catchAsync_js_1.default)(async (req, res) => {
    const filters = (0, pick_js_1.default)(req.query, user_constant_js_1.userFilterableFields); // searching , filtering
    const options = (0, pick_js_1.default)(req.query, ["page", "limit", "sortBy", "sortOrder"]); // pagination and sorting
    const result = await user_service_js_1.UserService.getAllFromDB(filters, options);
    (0, sendResponse_js_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User retrive successfully!",
        meta: result.meta,
        data: result.data
    });
});
const getMyProfile = (0, catchAsync_js_1.default)(async (req, res) => {
    const user = req.user;
    const result = await user_service_js_1.UserService.getMyProfile(user);
    (0, sendResponse_js_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "My profile data fetched!",
        data: result
    });
});
const changeProfileStatus = (0, catchAsync_js_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await user_service_js_1.UserService.changeProfileStatus(id, req.body);
    (0, sendResponse_js_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Users profile status changed!",
        data: result
    });
});
const updateMyProfile = (0, catchAsync_js_1.default)(async (req, res) => {
    const user = req.user;
    const result = await user_service_js_1.UserService.updateMyProfile(user, req);
    (0, sendResponse_js_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "My profile updated!",
        data: result
    });
});
exports.UserController = {
    createCustomer,
    createAdmin,
    createVendor,
    createVendorPublic,
    getAllFromDB,
    getMyProfile,
    changeProfileStatus,
    updateMyProfile
};
//# sourceMappingURL=user.controller.js.map