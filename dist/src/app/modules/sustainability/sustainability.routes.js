"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sustainabilityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sustainability_controller_1 = require("./sustainability.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const generated_1 = require("../../../../prisma/prisma/generated");
/**
 * @swagger
 * tags:
 *   name: Sustainability
 *   description: Sustainability certification management
 */
const router = express_1.default.Router();
/**
 * @swagger
 * /sustainability/certs:
 *   get:
 *     summary: Get all certificates
 *     tags: [Sustainability]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of certificates
 */
router.get('/certs', (0, auth_1.default)(generated_1.UserRole.Admin, generated_1.UserRole.Customer), sustainability_controller_1.SustainabilityController.getAllCerts);
/**
 * @swagger
 * /sustainability/certs/{id}:
 *   get:
 *     summary: Get certificate by ID
 *     tags: [Sustainability]
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
 *         description: Certificate details
 */
router.get('/certs/:id', (0, auth_1.default)(generated_1.UserRole.Admin, generated_1.UserRole.Vendor), sustainability_controller_1.SustainabilityController.getCertById);
/**
 * @swagger
 * /sustainability/certs:
 *   post:
 *     summary: Create certificate
 *     tags: [Sustainability]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Certificate created
 */
router.post('/certs', (0, auth_1.default)(generated_1.UserRole.Vendor), sustainability_controller_1.SustainabilityController.createCert);
/**
 * @swagger
 * /sustainability/certs/{id}/status:
 *   patch:
 *     summary: Update certificate status
 *     tags: [Sustainability]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [Pending, Approved, Rejected]
 *     responses:
 *       200:
 *         description: Status updated
 */
router.patch('/certs/:id/status', (0, auth_1.default)(generated_1.UserRole.Admin), sustainability_controller_1.SustainabilityController.updateCertStatus);
exports.sustainabilityRoutes = router;
//# sourceMappingURL=sustainability.routes.js.map