"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("../user/user.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication management
 */
const router = express_1.default.Router();
const authLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many authentication attempts, please try again later.',
});
router.post('/register', authLimiter, (0, validateRequest_1.default)(user_validation_1.UserValidation.createUserZodSchema), auth_controller_1.AuthController.registerUser);
router.post('/login', authLimiter, (0, validateRequest_1.default)(user_validation_1.UserValidation.loginZodSchema), auth_controller_1.AuthController.loginUser);
router.post('/refresh-token', (0, validateRequest_1.default)(user_validation_1.UserValidation.refreshTokenZodSchema), auth_controller_1.AuthController.refreshToken);
router.post('/change-password', (0, validateRequest_1.default)(user_validation_1.UserValidation.changePasswordZodSchema), (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), auth_controller_1.AuthController.changePassword);
exports.authRoutes = router;
//# sourceMappingURL=auth.routes.js.map