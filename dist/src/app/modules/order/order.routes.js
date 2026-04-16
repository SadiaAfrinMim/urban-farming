"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), order_controller_1.OrderController.getOrders);
router.get('/:id', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), order_controller_1.OrderController.getOrderById);
router.post('/', (0, auth_1.default)(client_1.UserRole.Customer), order_controller_1.OrderController.createOrder);
router.patch('/:id/status', (0, auth_1.default)(client_1.UserRole.Vendor), order_controller_1.OrderController.updateOrderStatus);
exports.orderRoutes = router;
//# sourceMappingURL=order.routes.js.map