"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.produceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const produce_controller_1 = require("./produce.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get('/produces', produce_controller_1.ProduceController.getAllProduces);
router.get('/produces/search', produce_controller_1.ProduceController.searchProduces);
router.get('/produces/:id', produce_controller_1.ProduceController.getProduceById);
router.post('/produces', (0, auth_1.default)(client_1.UserRole.Vendor), produce_controller_1.ProduceController.createProduce);
router.patch('/produces/:id', (0, auth_1.default)(client_1.UserRole.Vendor), produce_controller_1.ProduceController.updateProduce);
router.delete('/produces/:id', (0, auth_1.default)(client_1.UserRole.Vendor), produce_controller_1.ProduceController.deleteProduce);
exports.produceRoutes = router;
//# sourceMappingURL=produce.routes.js.map