"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../shared/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("../../../../prisma/generated/prisma/client");
const fileUploader_1 = require("../../helpers/fileUploader");
const user_constant_1 = require("./user.constant");
const paginationHelper_1 = require("../../helpers/paginationHelper");
const createPatient = async (req) => {
    if (req.file) {
        const uploadResult = await fileUploader_1.fileUploader.uploadToCloudinary(req.file);
        req.body.patient.profilePhoto = uploadResult?.secure_url;
    }
    const hashPassword = await bcryptjs_1.default.hash(req.body.password, 10);
    const result = await prisma_1.prisma.$transaction(async (tnx) => {
        await tnx.user.create({
            data: {
                email: req.body.patient.email,
                password: hashPassword
            }
        });
        return await tnx.patient.create({
            data: req.body.patient
        });
    });
    return result;
};
const createAdmin = async (req) => {
    const file = req.file;
    if (file) {
        const uploadToCloudinary = await fileUploader_1.fileUploader.uploadToCloudinary(file);
        req.body.admin.profilePhoto = uploadToCloudinary?.secure_url;
    }
    const hashedPassword = await bcryptjs_1.default.hash(req.body.password, 10);
    const userData = {
        email: req.body.admin.email,
        password: hashedPassword,
        role: client_1.UserRole.ADMIN
    };
    const result = await prisma_1.prisma.$transaction(async (transactionClient) => {
        await transactionClient.user.create({
            data: userData
        });
        const createdAdminData = await transactionClient.admin.create({
            data: req.body.admin
        });
        return createdAdminData;
    });
    return result;
};
const createDoctor = async (req) => {
    const file = req.file;
    if (file) {
        const uploadToCloudinary = await fileUploader_1.fileUploader.uploadToCloudinary(file);
        req.body.doctor.profilePhoto = uploadToCloudinary?.secure_url;
    }
    const hashedPassword = await bcryptjs_1.default.hash(req.body.password, 10);
    const userData = {
        email: req.body.doctor.email,
        password: hashedPassword,
        role: client_1.UserRole.DOCTOR
    };
    const result = await prisma_1.prisma.$transaction(async (transactionClient) => {
        await transactionClient.user.create({
            data: userData
        });
        const createdDoctorData = await transactionClient.doctor.create({
            data: req.body.doctor
        });
        return createdDoctorData;
    });
    return result;
};
const getAllFromDB = async (params, options) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const { searchTerm, ...filterData } = params;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: user_constant_1.userSearchAbleFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive"
                }
            }))
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        });
    }
    const whereConditions = andConditions.length > 0 ? {
        AND: andConditions
    } : {};
    const result = await prisma_1.prisma.user.findMany({
        skip,
        take: limit,
        where: whereConditions,
        orderBy: {
            [sortBy]: sortOrder
        }
    });
    const total = await prisma_1.prisma.user.count({
        where: whereConditions
    });
    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
};
const getMyProfile = async (user) => {
    const userInfo = await prisma_1.prisma.user.findUniqueOrThrow({
        where: {
            email: user.email,
            status: client_1.UserStatus.ACTIVE
        },
        select: {
            id: true,
            email: true,
            needPasswordChange: true,
            role: true,
            status: true
        }
    });
    let profileData;
    if (userInfo.role === client_1.UserRole.PATIENT) {
        profileData = await prisma_1.prisma.patient.findUnique({
            where: {
                email: userInfo.email
            }
        });
    }
    else if (userInfo.role === client_1.UserRole.DOCTOR) {
        profileData = await prisma_1.prisma.doctor.findUnique({
            where: {
                email: userInfo.email
            }
        });
    }
    else if (userInfo.role === client_1.UserRole.ADMIN) {
        profileData = await prisma_1.prisma.admin.findUnique({
            where: {
                email: userInfo.email
            }
        });
    }
    return {
        ...userInfo,
        ...profileData
    };
};
const changeProfileStatus = async (id, payload) => {
    const userData = await prisma_1.prisma.user.findUniqueOrThrow({
        where: {
            id
        }
    });
    const updateUserStatus = await prisma_1.prisma.user.update({
        where: {
            id
        },
        data: payload
    });
    return updateUserStatus;
};
const updateMyProfie = async (user, req) => {
    const userInfo = await prisma_1.prisma.user.findUniqueOrThrow({
        where: {
            email: user?.email,
            status: client_1.UserStatus.ACTIVE
        }
    });
    const file = req.file;
    if (file) {
        const uploadToCloudinary = await fileUploader_1.fileUploader.uploadToCloudinary(file);
        req.body.profilePhoto = uploadToCloudinary?.secure_url;
    }
    let profileInfo;
    if (userInfo.role === client_1.UserRole.ADMIN) {
        profileInfo = await prisma_1.prisma.admin.update({
            where: {
                email: userInfo.email
            },
            data: req.body
        });
    }
    else if (userInfo.role === client_1.UserRole.DOCTOR) {
        profileInfo = await prisma_1.prisma.doctor.update({
            where: {
                email: userInfo.email
            },
            data: req.body
        });
    }
    else if (userInfo.role === client_1.UserRole.PATIENT) {
        profileInfo = await prisma_1.prisma.patient.update({
            where: {
                email: userInfo.email
            },
            data: req.body
        });
    }
    return { ...profileInfo };
};
exports.UserService = {
    createPatient,
    createAdmin,
    createDoctor,
    getAllFromDB,
    getMyProfile,
    changeProfileStatus,
    updateMyProfie
};
//# sourceMappingURL=user.service.js.map