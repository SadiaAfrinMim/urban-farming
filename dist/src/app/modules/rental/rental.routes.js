"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rental_controller_1 = require("./rental.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get('/spaces', rental_controller_1.RentalController.getAllRentalSpaces);
router.get('/spaces/search', rental_controller_1.RentalController.searchRentalSpaces);
router.get('/spaces/:id', rental_controller_1.RentalController.getRentalSpaceById);
router.post('/spaces', (0, auth_1.default)(client_1.UserRole.Vendor), rental_controller_1.RentalController.createRentalSpace);
router.patch('/spaces/:id', (0, auth_1.default)(client_1.UserRole.Vendor), rental_controller_1.RentalController.updateRentalSpace);
router.delete('/spaces/:id', (0, auth_1.default)(client_1.UserRole.Vendor), rental_controller_1.RentalController.deleteRentalSpace);
// Booking APIs (assuming we add booking later, but for now, toggle availability)
router.patch('/spaces/:id/availability', (0, auth_1.default)(client_1.UserRole.Vendor), rental_controller_1.RentalController.toggleAvailability);
exports.rentalRoutes = router;
//# sourceMappingURL=rental.routes.js.map