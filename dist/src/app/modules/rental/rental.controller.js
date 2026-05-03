import httpStatus from 'http-status';
import ApiError from '../../../app/errors/ApiError.js';
import catchAsync from '../../../app/shared/catchAsync.js';
import sendResponse from '../../../app/shared/sendResponse.js';
import { RentalService } from './rental.service.js';
const getAllRentalSpaces = catchAsync(async (req, res) => {
    const result = await RentalService.getAllRentalSpaces();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental spaces retrieved successfully',
        data: result,
    });
});
const searchRentalSpaces = catchAsync(async (req, res) => {
    const { location } = req.query;
    const result = await RentalService.searchRentalSpaces(location);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental spaces searched successfully',
        data: result,
    });
});
const getRentalSpaceById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await RentalService.getRentalSpaceById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental space retrieved successfully',
        data: result,
    });
});
const createRentalSpace = catchAsync(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await RentalService.createRentalSpace(user.id, payload);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Rental space created successfully',
        data: result,
    });
});
const updateRentalSpace = catchAsync(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await RentalService.updateRentalSpace(id, payload);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental space updated successfully',
        data: result,
    });
});
const deleteRentalSpace = catchAsync(async (req, res) => {
    const { id } = req.params;
    await RentalService.deleteRentalSpace(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental space deleted successfully',
        data: null,
    });
});
const toggleAvailability = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { availability } = req.body;
    const result = await RentalService.toggleAvailability(id, availability);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Availability updated successfully',
        data: result,
    });
});
const bookRentalSpace = catchAsync(async (req, res) => {
    const { spaceId } = req.body;
    const user = req.user;
    const result = await RentalService.bookRentalSpace(spaceId, user.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental space booked successfully',
        data: result,
    });
});
const createRentalOrder = catchAsync(async (req, res) => {
    const { spaceId, totalPrice, duration } = req.body;
    const user = req.user;
    const result = await RentalService.createRentalOrder(user.id, spaceId, totalPrice, duration);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Rental order created successfully',
        data: result,
    });
});
const getVendorRentalOrders = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await RentalService.getVendorRentalOrders(user.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Vendor rental orders retrieved successfully',
        data: result,
    });
});
const updateRentalOrderStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;
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
//# sourceMappingURL=rental.controller.js.map