import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync';
import sendResponse from '../../../app/shared/sendResponse';
import { ProduceService } from './produce.service';

const getAllProduces = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 12;

  console.log('🌐 API called: GET /api/v1/produces');
  console.log('Query params:', { page, limit });

  const result = await ProduceService.getAllProduces(page, limit);
  console.log('📤 Sending response with', result.data.length, 'products');

  // Log each product for debugging
  result.data.forEach((product, i) => {
    console.log(`  ${i+1}. ${product.name} - ${product.certificationStatus} - $${product.price}`);
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Produces retrieved successfully',
    data: result, // Return the full result object with data and meta
  });
});

const searchProduces = catchAsync(async (req: Request, res: Response) => {
  const { q } = req.query;
  const result = await ProduceService.searchProduces(q as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Produces searched successfully',
    data: result, // Already returns array from service
  });
});

const getProduceById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProduceService.getProduceById(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Produce retrieved successfully',
    data: result,
  });
});

const createProduce = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const payload = req.body;
  const result = await ProduceService.createProduce(user.id, payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Produce created successfully',
    data: result,
  });
});

const updateProduce = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await ProduceService.updateProduce(id as string, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Produce updated successfully',
    data: result,
  });
});

const deleteProduce = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProduceService.deleteProduce(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Produce deleted successfully',
    data: null,
  });
});

export const ProduceController = {
  getAllProduces,
  searchProduces,
  getProduceById,
  createProduce,
  updateProduce,
  deleteProduce,
};