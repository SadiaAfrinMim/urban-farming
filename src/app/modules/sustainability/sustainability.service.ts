import { CertificationStatus } from '../../types/common';
import { prisma } from '../../shared/prisma';

import httpStatus from 'http-status';
import { IJWTPayload } from '../../types/common.js';
import ApiError from '../../errors/ApiError.js';

const getAllCerts = async () => {
  try {
    const certs = await prisma.sustainabilityCert.findMany({
      include: {
        vendor: true,
      },
    });
    return certs;
  } catch (error: any) {
    console.error('Error fetching sustainability certs:', error);
    // If table doesn't exist, return empty array
    if (error.code === 'P2028' || error.message?.includes('sustainability_certs')) {
      console.log('SustainabilityCert table does not exist, returning empty array');
      return [];
    }
    throw error;
  }
};

const getCertById = async (id: string, user: IJWTPayload) => {
  try {
    const cert = await prisma.sustainabilityCert.findUnique({
      where: { id },
      include: {
        vendor: true,
      },
    });
    if (!cert) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Certificate not found');
    }
    if (user.role === 'Vendor') {
      const userIdNumber = parseInt(user.id, 10);
      if (isNaN(userIdNumber)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid user ID');
      }
      const vendorProfile = await prisma.vendorProfile.findUnique({
        where: { userId: userIdNumber },
      });
      if (!vendorProfile || cert.vendorId !== vendorProfile.id) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }
    }
    return cert;
  } catch (error) {
    console.error('Error fetching sustainability cert by ID:', error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch certificate');
  }
};

const createCert = async (userId: string, payload: any, userRole?: string) => {
  try {
    const userIdNumber = parseInt(userId, 10);
    if (isNaN(userIdNumber)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid user ID');
    }

    // If admin is creating cert for a vendor
    if (userRole === 'Admin' && payload.vendorId) {
      const vendorIdNumber = parseInt(payload.vendorId, 10);
      if (isNaN(vendorIdNumber)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid vendor ID');
      }
      const vendorProfile = await prisma.vendorProfile.findUnique({
        where: { id: vendorIdNumber },
      });
      if (!vendorProfile) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Vendor profile not found');
      }
      // Check if vendor is approved
      if (vendorProfile.certificationStatus !== 'Approved') {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Only approved vendors can be added to sustainability list');
      }
      const cert = await prisma.sustainabilityCert.create({
        data: {
          vendorId: vendorProfile.id,
          certifyingAgency: payload.certifyingAgency || 'Urban Farming Admin',
          certificationDate: new Date(payload.certificationDate || new Date()),
        },
      });
      return cert;
    }

    // If vendor is creating their own cert
    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: userIdNumber },
    });
    if (!vendorProfile) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Vendor profile not found');
    }
    const cert = await prisma.sustainabilityCert.create({
      data: {
        vendorId: vendorProfile.id,
        certifyingAgency: payload.certifyingAgency,
        certificationDate: new Date(payload.certificationDate),
      },
    });
    return cert;
  } catch (error) {
    console.error('Error creating sustainability cert:', error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to create certificate');
  }
};

const updateCertStatus = async (id: string, certificationStatus: CertificationStatus) => {
  try {
    // Update vendor profile status too?
    const cert = await prisma.sustainabilityCert.findUnique({
      where: { id },
    });
    if (!cert) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Certificate not found');
    }
    await prisma.vendorProfile.update({
      where: { id: cert.vendorId },
      data: { certificationStatus },
    });
    const updated = await prisma.sustainabilityCert.update({
      where: { id },
      data: { }, // No status on cert, perhaps add
    });
    return updated;
  } catch (error) {
    console.error('Error updating sustainability cert status:', error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to update certificate status');
  }
};

export const SustainabilityService = {
  getAllCerts,
  getCertById,
  createCert,
  updateCertStatus,
};