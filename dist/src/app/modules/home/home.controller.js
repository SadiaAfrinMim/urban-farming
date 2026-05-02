import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse';
import { HomeService } from './home.service';
// Featured Products
const getFeaturedProducts = async (req, res) => {
    const result = await HomeService.getFeaturedProducts();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Featured products retrieved successfully',
        data: result,
    });
};
// Categories
const getCategories = async (req, res) => {
    const result = await HomeService.getCategories();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Categories retrieved successfully',
        data: result,
    });
};
// Statistics
const getStatistics = async (req, res) => {
    const result = await HomeService.getStatistics();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Statistics retrieved successfully',
        data: result,
    });
};
// Testimonials
const getTestimonials = async (req, res) => {
    const result = await HomeService.getTestimonials();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Testimonials retrieved successfully',
        data: result,
    });
};
// Featured Vendors
const getFeaturedVendors = async (req, res) => {
    try {
        const result = await HomeService.getFeaturedVendors();
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Featured vendors retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        console.error('❌ Get featured vendors error:', {
            message: error.message,
            code: error.code,
            meta: error.meta,
            stack: error.stack
        });
        sendResponse(res, {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'Failed to retrieve featured vendors',
            data: null,
        });
    }
};
// Approved Vendors Certificates
const getApprovedVendorCertificates = async (req, res) => {
    const result = await HomeService.getApprovedVendorCertificates();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Approved vendors certificates retrieved successfully',
        data: result,
    });
};
export const HomeController = {
    getFeaturedProducts,
    getCategories,
    getStatistics,
    getTestimonials,
    getFeaturedVendors,
    getApprovedVendorCertificates,
};
//# sourceMappingURL=home.controller.js.map