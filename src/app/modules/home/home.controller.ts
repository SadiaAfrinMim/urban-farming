import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse';
import { HomeService } from './home.service';

// Featured Products
const getFeaturedProducts = async (req: Request, res: Response) => {
  const result = await HomeService.getFeaturedProducts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured products retrieved successfully',
    data: result,
  });
};

// Categories
const getCategories = async (req: Request, res: Response) => {
  const result = await HomeService.getCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: result,
  });
};

// Statistics
const getStatistics = async (req: Request, res: Response) => {
  const result = await HomeService.getStatistics();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Statistics retrieved successfully',
    data: result,
  });
};

// Testimonials
const getTestimonials = async (req: Request, res: Response) => {
  const result = await HomeService.getTestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonials retrieved successfully',
    data: result,
  });
};

// Featured Vendors
const getFeaturedVendors = async (req: Request, res: Response) => {
  const result = await HomeService.getFeaturedVendors();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured vendors retrieved successfully',
    data: result,
  });
};

export const HomeController = {
  getFeaturedProducts,
  getCategories,
  getStatistics,
  getTestimonials,
  getFeaturedVendors,
};