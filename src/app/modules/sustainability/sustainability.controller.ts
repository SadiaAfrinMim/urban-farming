import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync';
import sendResponse from '../../../app/shared/sendResponse';
import { SustainabilityService } from './sustainability.service';

const getAllCerts = catchAsync(async (req: Request, res: Response) => {
  const result = await SustainabilityService.getAllCerts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificates retrieved successfully',
    data: result,
  });
});

const getCertById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = (req as any).user;
  const result = await SustainabilityService.getCertById(id as string, user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate retrieved successfully',
    data: result,
  });
});

const createCert = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const payload = req.body;
  const result = await SustainabilityService.createCert(user.id, payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Certificate created successfully',
    data: result,
  });
});

const updateCertStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { certificationStatus } = req.body;
  const result = await SustainabilityService.updateCertStatus(id as string, certificationStatus);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Certificate status updated successfully',
    data: result,
  });
});

export const SustainabilityController = {
  getAllCerts,
  getCertById,
  createCert,
  updateCertStatus,
};