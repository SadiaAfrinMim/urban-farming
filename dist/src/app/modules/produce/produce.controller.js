import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync.js';
import sendResponse from '../../../app/shared/sendResponse.js';
import { ProduceService } from './produce.service.js';
const getAllProduces = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    console.log('🌐 API called: GET /api/v1/produces');
    console.log('Query params:', { page, limit });
    const result = await ProduceService.getAllProduces(page, limit);
    console.log('📤 Sending response with', result.data.length, 'products');
    // Log each product for debugging
    result.data.forEach((product, i) => {
        console.log(`  ${i + 1}. ${product.name} - ${product.certificationStatus} - $${product.price}`);
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Produces retrieved successfully',
        data: result.data, // Return just the data array
        meta: result.meta, // Include meta separately if needed
    });
});
const searchProduces = catchAsync(async (req, res) => {
    const { q } = req.query;
    const result = await ProduceService.searchProduces(q);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Produces searched successfully',
        data: result, // Already returns array from service
    });
});
const getProduceById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProduceService.getProduceById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Produce retrieved successfully',
        data: result,
    });
});
const createProduce = catchAsync(async (req, res) => {
    const user = req.user;
    const payload = req.body;
    const result = await ProduceService.createProduce(user.id, payload);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Produce created successfully',
        data: result,
    });
});
const updateProduce = catchAsync(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await ProduceService.updateProduce(id, payload);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Produce updated successfully',
        data: result,
    });
});
const deleteProduce = catchAsync(async (req, res) => {
    const { id } = req.params;
    await ProduceService.deleteProduce(id);
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
//# sourceMappingURL=produce.controller.js.map