"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SustainabilityController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../app/shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../app/shared/sendResponse"));
const sustainability_service_1 = require("./sustainability.service");
const getAllCerts = (0, catchAsync_1.default)(async (req, res) => {
    const result = await sustainability_service_1.SustainabilityService.getAllCerts();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Certificates retrieved successfully',
        data: result,
    });
});
const getCertById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const result = await sustainability_service_1.SustainabilityService.getCertById(id, user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Certificate retrieved successfully',
        data: result,
    });
});
const createCert = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await sustainability_service_1.SustainabilityService.createCert(user.id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Certificate created successfully',
        data: result,
    });
});
const updateCertStatus = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const { certificationStatus } = req.body;
    const result = await sustainability_service_1.SustainabilityService.updateCertStatus(id, certificationStatus);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Certificate status updated successfully',
        data: result,
    });
});
exports.SustainabilityController = {
    getAllCerts,
    getCertById,
    createCert,
    updateCertStatus,
};
//# sourceMappingURL=sustainability.controller.js.map