"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.communityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const community_controller_1 = require("./community.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get('/posts', community_controller_1.CommunityController.getAllPosts);
router.get('/posts/:id', community_controller_1.CommunityController.getPostById);
router.post('/posts', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.createPost);
router.patch('/posts/:id', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.updatePost);
router.delete('/posts/:id', (0, auth_1.default)(client_1.UserRole.Admin, client_1.UserRole.Vendor, client_1.UserRole.Customer), community_controller_1.CommunityController.deletePost);
exports.communityRoutes = router;
//# sourceMappingURL=community.routes.js.map