import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync';
import sendResponse from '../../../app/shared/sendResponse';
import { RentalService } from './rental.service';

const getAllRentalSpaces = catchAsync(async (req: Request, res: Response) => {
  const result = await RentalService.getAllRentalSpaces();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental spaces retrieved successfully',
    data: result,
  });
});

const searchRentalSpaces = catchAsync(async (req: Request, res: Response) => {
  const { location } = req.query;
  const result = await RentalService.searchRentalSpaces(location as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental spaces searched successfully',
    data: result,
  });
});

const getRentalSpaceById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await RentalService.getRentalSpaceById(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental space retrieved successfully',
    data: result,
  });
});

const createRentalSpace = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const payload = req.body;
  const result = await RentalService.createRentalSpace(user.id, payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Rental space created successfully',
    data: result,
  });
});

const updateRentalSpace = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await RentalService.updateRentalSpace(id as string, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental space updated successfully',
    data: result,
  });
});

const deleteRentalSpace = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await RentalService.deleteRentalSpace(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental space deleted successfully',
    data: null,
  });
});

const toggleAvailability = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { availability } = req.body;
  const result = await RentalService.toggleAvailability(id as string, availability);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Availability updated successfully',
    data: result,
  });
});

const bookRentalSpace = catchAsync(async (req: Request, res: Response) => {
  const { spaceId } = req.body;
  const user = (req as any).user;
  const result = await RentalService.bookRentalSpace(spaceId, user.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental space booked successfully',
    data: result,
  });
});

const createRentalOrder = catchAsync(async (req: Request, res: Response) => {
  const { spaceId, totalPrice, duration } = req.body;
  const user = (req as any).user;
  const result = await RentalService.createRentalOrder(user.id, spaceId, totalPrice, duration);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Rental order created successfully',
    data: result,
  });
});

const getVendorRentalOrders = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const result = await RentalService.getVendorRentalOrders(user.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vendor rental orders retrieved successfully',
    data: result,
  });
});

const updateRentalOrderStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const user = (req as any).user;

  const orderId = parseInt(id, 10);
  if (isNaN(orderId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid order ID');
  }

  const result = await RentalService.updateRentalOrderStatus(orderId, status, user.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental order status updated successfully',
    data: result,
  });
});

export const RentalController = {
  getAllRentalSpaces,
  searchRentalSpaces,
  getRentalSpaceById,
  createRentalSpace,
  updateRentalSpace,
  deleteRentalSpace,
  toggleAvailability,
  bookRentalSpace,
  createRentalOrder,
  getVendorRentalOrders,
  updateRentalOrderStatus,
};