import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { PlantTrackingService } from './plant-tracking.service';
import { IJWTPayload } from '../../types/common';
import pick from '../../helpers/pick';
import { PlantHealth } from '../../../../prisma/prisma/generated';

const createPlantTracking = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const result = await PlantTrackingService.createPlantTracking(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Plant tracking created successfully',
    data: result,
  });
});

const getAllPlantTrackings = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
  const result = await PlantTrackingService.getAllPlantTrackings(userId, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plant trackings retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getPlantTrackingById = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const { id } = req.params;
  const result = await PlantTrackingService.getPlantTrackingById(id, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plant tracking retrieved successfully',
    data: result,
  });
});

const updatePlantTracking = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const { id } = req.params;
  const result = await PlantTrackingService.updatePlantTracking(id, userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plant tracking updated successfully',
    data: result,
  });
});

const updatePlantHealth = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const { id } = req.params;
  const { healthStatus, notes } = req.body;
  const result = await PlantTrackingService.updatePlantHealth(id, userId, healthStatus as PlantHealth, notes);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plant health updated successfully',
    data: result,
  });
});

const waterPlant = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const { id } = req.params;
  const result = await PlantTrackingService.waterPlant(id, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plant watered successfully',
    data: result,
  });
});

const fertilizePlant = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const { id } = req.params;
  const result = await PlantTrackingService.fertilizePlant(id, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plant fertilized successfully',
    data: result,
  });
});

const deletePlantTracking = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
  const userId = req.user?.userId as string;
  const { id } = req.params;
  await PlantTrackingService.deletePlantTracking(id, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Plant tracking deleted successfully',
    data: null,
  });
});

export const PlantTrackingController = {
  createPlantTracking,
  getAllPlantTrackings,
  getPlantTrackingById,
  updatePlantTracking,
  updatePlantHealth,
  waterPlant,
  fertilizePlant,
  deletePlantTracking,
};
