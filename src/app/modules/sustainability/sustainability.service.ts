import { CertificationStatus } from '../../types/common';
import { prisma } from '../../shared/prisma';

import httpStatus from 'http-status';
import { IJWTPayload } from '../../types/common';
import ApiError from '../../errors/ApiError';

const getAllCerts = async () => {
  const certs = await prisma.sustainabilityCert.findMany({
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
    },
  });
  return certs;
};

const getCertById = async (id: string, user: IJWTPayload) => {
  const cert = await prisma.sustainabilityCert.findUnique({
    where: { id },
    include: {
      vendor: {
        include: {
          user: true,
        },
      },
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
};

const createCert = async (userId: string, payload: any, userRole?: string) => {
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
};

const updateCertStatus = async (id: string, certificationStatus: CertificationStatus) => {
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
};

export const SustainabilityService = {
  getAllCerts,
  getCertById,
  createCert,
  updateCertStatus,
};