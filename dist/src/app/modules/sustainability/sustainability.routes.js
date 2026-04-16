"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sustainabilityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sustainability_controller_1 = require("./sustainability.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get('/certs', (0, auth_1.default)(client_1.UserRole.Admin), sustainability_controller_1.SustainabilityController.getAllCerts);
router.get('/certs/:id', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor), sustainability_controller_1.SustainabilityController.getCertById);
router.post('/certs', (0, auth_1.default)(client_1.UserRole.Vendor), sustainability_controller_1.SustainabilityController.createCert);
router.patch('/certs/:id/status', (0, auth_1.default)(client_1.UserRole.Admin), sustainability_controller_1.SustainabilityController.updateCertStatus);
exports.sustainabilityRoutes = router;
//# sourceMappingURL=sustainability.routes.js.map