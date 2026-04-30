import express from 'express';
import { HomeController } from './home.controller';

const router = express.Router();

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
router.get('/featured-products', HomeController.getFeaturedProducts);

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
router.get('/categories', HomeController.getCategories);

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
router.get('/statistics', HomeController.getStatistics);

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
router.get('/testimonials', HomeController.getTestimonials);

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
router.get('/featured-vendors', HomeController.getFeaturedVendors);

/**
 * @swagger
 * /home/approved-vendors-certificates:
 *   get:
 *     summary: Get approved vendors with their certificates for sustainability page
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Approved vendors certificates retrieved successfully
 */
router.get('/approved-vendors-certificates', HomeController.getApprovedVendorCertificates);

export const homeRoutes = router;