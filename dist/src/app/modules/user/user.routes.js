"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_js_1 = __importDefault(require("../../middlewares/auth.js"));
const user_controller_js_1 = require("./user.controller.js");
const fileUploader_js_1 = require("../../helpers/fileUploader.js");
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
// Get all users
router.get("/", (0, auth_js_1.default)(client_1.UserRole.Admin), user_controller_js_1.UserController.getAllFromDB);
// Get my profile
router.get('/me', (0, auth_js_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), user_controller_js_1.UserController.getMyProfile);
// Public endpoints - No authentication required
// Create customer (NO VALIDATION)
router.post("/create-customer", (req, res, next) => {
    return user_controller_js_1.UserController.createCustomer(req, res, next);
});
// Create admin (adminCode check only)
router.post("/create-admin", (req, res, next) => {
    // Admin code check removed for development
    // if (req.body.adminCode !== 'ADMIN123') {
    //   return res.status(400).json({
    //     statusCode: 400,
    //     success: false,
    //     message: "Invalid admin code"
    //   });
    // }
    return user_controller_js_1.UserController.createAdmin(req, res, next);
});
// Create vendor (NO VALIDATION)
router.post("/create-vendor", (req, res, next) => {
    return user_controller_js_1.UserController.createVendorPublic(req, res, next);
});
// Change status
router.patch('/:id/status', (0, auth_js_1.default)(client_1.UserRole.Admin), user_controller_js_1.UserController.changeProfileStatus);
// Update profile (NO VALIDATION)
router.post("/update-my-profile", (0, auth_js_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), fileUploader_js_1.fileUploader.upload.single('file'), user_controller_js_1.UserController.updateMyProfile);
exports.userRoutes = router;
//# sourceMappingURL=user.routes.js.map