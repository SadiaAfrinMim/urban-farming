"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const home_controller_1 = require("./home.controller");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Home page data and statistics
 */
/**
 * @swagger
 * /home/featured-products:
 *   get:
 *     summary: Get featured products for home page
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Featured products retrieved successfully
 */
router.get('/featured-products', home_controller_1.HomeController.getFeaturedProducts);
/**
 * @swagger
 * /home/categories:
 *   get:
 *     summary: Get product categories for home page
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Categories retrieved successfully
 */
router.get('/categories', home_controller_1.HomeController.getCategories);
/**
 * @swagger
 * /home/statistics:
 *   get:
 *     summary: Get platform statistics for home page
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Statistics retrieved successfully
 */
router.get('/statistics', home_controller_1.HomeController.getStatistics);
/**
 * @swagger
 * /home/testimonials:
 *   get:
 *     summary: Get customer testimonials for home page
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Testimonials retrieved successfully
 */
router.get('/testimonials', home_controller_1.HomeController.getTestimonials);
/**
 * @swagger
 * /home/featured-vendors:
 *   get:
 *     summary: Get featured vendors for home page
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Featured vendors retrieved successfully
 */
router.get('/featured-vendors', home_controller_1.HomeController.getFeaturedVendors);
exports.homeRoutes = router;
//# sourceMappingURL=home.routes.js.map