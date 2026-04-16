"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const user_constant_1 = require("./user.constant");
const http_status_1 = __importDefault(require("http-status"));
const user_service_1 = require("./user.service");
const pick_1 = __importDefault(require("../../helpers/pick"));
const createPatient = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.createPatient(req);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Patient created successfully!",
        data: result
    });
});
const createAdmin = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.createAdmin(req);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Admin Created successfuly!",
        data: result
    });
});
const createDoctor = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.createDoctor(req);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Doctor Created successfuly!",
        data: result
    });
});
const getAllFromDB = (0, catchAsync_1.default)(async (req, res) => {
    const filters = (0, pick_1.default)(req.query, user_constant_1.userFilterableFields); // searching , filtering
    const options = (0, pick_1.default)(req.query, ["page", "limit", "sortBy", "sortOrder"]); // pagination and sorting
    const result = await user_service_1.UserService.getAllFromDB(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User retrive successfully!",
        meta: result.meta,
        data: result.data
    });
});
const getMyProfile = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await user_service_1.UserService.getMyProfile(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "My profile data fetched!",
        data: result
    });
});
const changeProfileStatus = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await user_service_1.UserService.changeProfileStatus(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Users profile status changed!",
        data: result
    });
});
const updateMyProfie = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const result = await user_service_1.UserService.updateMyProfie(user, req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "My profile updated!",
        data: result
    });
});
exports.UserController = {
    createPatient,
    createAdmin,
    createDoctor,
    getAllFromDB,
    getMyProfile,
    changeProfileStatus,
    updateMyProfie
};
//# sourceMappingURL=user.controller.js.map