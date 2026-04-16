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
    const vendorProfile = await prisma.vendorProfile.findUnique({
      where: { userId: user.id },
    });
    if (!vendorProfile || cert.vendorId !== vendorProfile.id) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
    }
  }
  return cert;
};

const createCert = async (userId: string, payload: {
  certifyingAgency: string;
  certificationDate: string;
}) => {
  const vendorProfile = await prisma.vendorProfile.findUnique({
    where: { userId },
  });
  if (!vendorProfile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor profile not found');
  }
  const cert = await prisma.sustainabilityCert.create({
    data: {
      vendorId: vendorProfile.id,
      ...payload,
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