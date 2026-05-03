"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantTrackingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const plant_tracking_controller_1 = require("./plant-tracking.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const common_1 = require("../../types/common");
/**
 * @swagger
 * tags:
 *   name: Plant Tracking
 *   description: Plant tracking and management
 */
const router = express_1.default.Router();
/**
 * @swagger
 * /plant-tracking:
 *   get:
 *     summary: Get all plant trackings
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Plant trackings retrieved
 */
router.get('/', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor, common_1.UserRole.Admin), plant_tracking_controller_1.PlantTrackingController.getAllPlantTrackings);
/**
 * @swagger
 * /plant-tracking:
 *   post:
 *     summary: Create plant tracking
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plantName:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plant tracking created
 */
router.post('/', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), plant_tracking_controller_1.PlantTrackingController.createPlantTracking);
/**
 * @swagger
 * /plant-tracking/{id}:
 *   get:
 *     summary: Get plant tracking by ID
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plant tracking details
 */
router.get('/:id', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor, common_1.UserRole.Admin), plant_tracking_controller_1.PlantTrackingController.getPlantTrackingById);
/**
 * @swagger
 * /plant-tracking/{id}:
 *   patch:
 *     summary: Update plant tracking
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plant tracking updated
 */
router.patch('/:id', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), plant_tracking_controller_1.PlantTrackingController.updatePlantTracking);
/**
 * @swagger
 * /plant-tracking/{id}/health:
 *   patch:
 *     summary: Update plant health
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plant health updated
 */
router.patch('/:id/health', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), plant_tracking_controller_1.PlantTrackingController.updatePlantHealth);
/**
 * @swagger
 * /plant-tracking/{id}/water:
 *   patch:
 *     summary: Water plant
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plant watered
 */
router.patch('/:id/water', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), plant_tracking_controller_1.PlantTrackingController.waterPlant);
/**
 * @swagger
 * /plant-tracking/{id}/fertilize:
 *   patch:
 *     summary: Fertilize plant
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plant fertilized
 */
router.patch('/:id/fertilize', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), plant_tracking_controller_1.PlantTrackingController.fertilizePlant);
/**
 * @swagger
 * /plant-tracking/{id}:
 *   delete:
 *     summary: Delete plant tracking
 *     tags: [Plant Tracking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plant tracking deleted
 */
router.delete('/:id', (0, auth_1.default)(common_1.UserRole.Customer, common_1.UserRole.Vendor), plant_tracking_controller_1.PlantTrackingController.deletePlantTracking);
exports.plantTrackingRoutes = router;
//# sourceMappingURL=plant-tracking.routes.js.map