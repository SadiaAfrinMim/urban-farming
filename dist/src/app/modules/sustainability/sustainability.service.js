"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SustainabilityService = void 0;
const prisma_1 = require("../../shared/prisma");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const getAllCerts = async () => {
    const certs = await prisma_1.prisma.sustainabilityCert.findMany({
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
const getCertById = async (id, user) => {
    const cert = await prisma_1.prisma.sustainabilityCert.findUnique({
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
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Certificate not found');
    }
    if (user.role === 'Vendor') {
        const userIdNumber = parseInt(user.id, 10);
        if (isNaN(userIdNumber)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
        }
        const vendorProfile = await prisma_1.prisma.vendorProfile.findUnique({
            where: { userId: userIdNumber },
        });
        if (!vendorProfile || cert.vendorId !== vendorProfile.id) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
        }
    }
    return cert;
};
const createCert = async (userId, payload) => {
    const userIdNumber = parseInt(userId, 10);
    if (isNaN(userIdNumber)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
    }
    const vendorProfile = await prisma_1.prisma.vendorProfile.findUnique({
        where: { userId: userIdNumber },
    });
    if (!vendorProfile) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Vendor profile not found');
    }
    const cert = await prisma_1.prisma.sustainabilityCert.create({
        data: {
            vendorId: vendorProfile.id,
            ...payload,
            certificationDate: new Date(payload.certificationDate),
        },
    });
    return cert;
};
const updateCertStatus = async (id, certificationStatus) => {
    // Update vendor profile status too?
    const cert = await prisma_1.prisma.sustainabilityCert.findUnique({
        where: { id },
    });
    if (!cert) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Certificate not found');
    }
    await prisma_1.prisma.vendorProfile.update({
        where: { id: cert.vendorId },
        data: { certificationStatus },
    });
    const updated = await prisma_1.prisma.sustainabilityCert.update({
        where: { id },
        data: {}, // No status on cert, perhaps add
    });
    return updated;
};
exports.SustainabilityService = {
    getAllCerts,
    getCertById,
    createCert,
    updateCertStatus,
};
//# sourceMappingURL=sustainability.service.js.map