"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantTrackingController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const plant_tracking_service_1 = require("./plant-tracking.service");
const pick_1 = __importDefault(require("../../helpers/pick"));
const createPlantTracking = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const result = await plant_tracking_service_1.PlantTrackingService.createPlantTracking(userId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Plant tracking created successfully',
        data: result,
    });
});
const getAllPlantTrackings = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const options = (0, pick_1.default)(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
    const result = await plant_tracking_service_1.PlantTrackingService.getAllPlantTrackings(userId, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant trackings retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});
const getPlantTrackingById = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const { id } = req.params;
    const result = await plant_tracking_service_1.PlantTrackingService.getPlantTrackingById(id, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant tracking retrieved successfully',
        data: result,
    });
});
const updatePlantTracking = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const { id } = req.params;
    const result = await plant_tracking_service_1.PlantTrackingService.updatePlantTracking(id, userId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant tracking updated successfully',
        data: result,
    });
});
const updatePlantHealth = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const { id } = req.params;
    const { healthStatus, notes } = req.body;
    const result = await plant_tracking_service_1.PlantTrackingService.updatePlantHealth(id, userId, healthStatus, notes);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant health updated successfully',
        data: result,
    });
});
const waterPlant = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const { id } = req.params;
    const result = await plant_tracking_service_1.PlantTrackingService.waterPlant(id, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant watered successfully',
        data: result,
    });
});
const fertilizePlant = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const { id } = req.params;
    const result = await plant_tracking_service_1.PlantTrackingService.fertilizePlant(id, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant fertilized successfully',
        data: result,
    });
});
const deletePlantTracking = (0, catchAsync_1.default)(async (req, res) => {
    const userId = req.user?.userId;
    const { id } = req.params;
    await plant_tracking_service_1.PlantTrackingService.deletePlantTracking(id, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Plant tracking deleted successfully',
        data: null,
    });
});
exports.PlantTrackingController = {
    createPlantTracking,
    getAllPlantTrackings,
    getPlantTrackingById,
    updatePlantTracking,
    updatePlantHealth,
    waterPlant,
    fertilizePlant,
    deletePlantTracking,
};
//# sourceMappingURL=plant-tracking.controller.js.map