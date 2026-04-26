"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../shared/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const common_1 = require("../../types/common");
const fileUploader_1 = require("../../helpers/fileUploader");
const user_constant_1 = require("./user.constant");
const paginationHelper_1 = require("../../helpers/paginationHelper");
const createCustomer = async (req) => {
    const hashPassword = await bcryptjs_1.default.hash(req.body.password, 10);
    const result = await prisma_1.prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            role: common_1.UserRole.Customer
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true
        }
    });
    return result;
};
const createAdmin = async (req) => {
    const hashedPassword = await bcryptjs_1.default.hash(req.body.password, 10);
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: common_1.UserRole.Admin
    };
    const result = await prisma_1.prisma.user.create({
        data: userData,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true
        }
    });
    return result;
};
const createVendor = async (req) => {
    const file = req.file;
    let uploadedImage = null;
    req.body.vendorProfile = req.body.vendorProfile || {};
    try {
        // 1. Upload outside transaction (OK)
        if (file) {
            uploadedImage = await fileUploader_1.fileUploader.uploadToCloudinary(file);
            req.body.vendorProfile.profilePhoto = uploadedImage?.secure_url;
        }
        const hashedPassword = await bcryptjs_1.default.hash(req.body.password, 10);
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: common_1.UserRole.Vendor
        };
        // 2. Keep transaction ONLY for DB ops
        const result = await prisma_1.prisma.$transaction(async (tx) => {
            const createdUser = await tx.user.create({
                data: userData
            });
            const createdVendorProfile = await tx.vendorProfile.create({
                data: {
                    ...req.body.vendorProfile,
                    userId: createdUser.id
                }
            });
            return { user: createdUser, vendorProfile: createdVendorProfile };
        }, {
            timeout: 20000 // 20 second timeout
        });
        return result;
    }
    catch (error) {
        if (uploadedImage) {
            await fileUploader_1.fileUploader.deleteFromCloudinary(uploadedImage.public_id);
        }
        throw error;
    }
};
const createVendorPublic = async (req) => {
    const hashedPassword = await bcryptjs_1.default.hash(req.body.password, 10);
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: common_1.UserRole.Vendor
    };
    const result = await prisma_1.prisma.$transaction(async (tx) => {
        const createdUser = await tx.user.create({
            data: userData
        });
        const createdVendorProfile = await tx.vendorProfile.create({
            data: {
                farmName: req.body.farmName,
                farmLocation: req.body.farmLocation,
                userId: createdUser.id,
                certificationStatus: "Pending" // Default status for new vendors
            }
        });
        return {
            user: {
                id: createdUser.id,
                name: createdUser.name,
                email: createdUser.email,
                role: createdUser.role,
                createdAt: createdUser.createdAt
            },
            vendorProfile: createdVendorProfile
        };
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
    const userInfo = await prisma_1.prisma.user.findFirstOrThrow({
        where: {
            email: user.email,
            status: common_1.UserStatus.Active
        },
        select: {
            id: true,
            email: true,
            role: true,
            status: true
        }
    });
    let profileData = null;
    if (userInfo.role === common_1.UserRole.Vendor) {
        profileData = await prisma_1.prisma.vendorProfile.findUnique({
            where: {
                userId: userInfo.id
            },
            select: {
                id: true,
                farmName: true,
                farmLocation: true,
                certificationStatus: true,
                certifications: true,
                createdAt: true,
            },
        });
    }
    return {
        ...userInfo,
        profileData
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
const updateMyProfile = async (user, req) => {
    const userInfo = await prisma_1.prisma.user.findFirstOrThrow({
        where: {
            email: user?.email,
            status: common_1.UserStatus.Active
        }
    });
    const file = req.file;
    let uploadedImage = null;
    try {
        // ✅ Cloudinary আপলোড ট্রানজাকশনের বাইরে করা
        if (file) {
            uploadedImage = await fileUploader_1.fileUploader.uploadToCloudinary(file);
            req.body.profilePhoto = uploadedImage?.secure_url;
        }
        const { farmName, certificationStatus, farmLocation, profilePhoto, ...userUpdateData } = req.body;
        // ✅ শুধুমাত্র ডাটাবেস অপারেশন ট্রানজাকশনের ভিতর
        await prisma_1.prisma.$transaction(async (transactionClient) => {
            // Update User table for all roles
            if (Object.keys(userUpdateData).length > 0) {
                await transactionClient.user.update({
                    where: {
                        id: userInfo.id
                    },
                    data: userUpdateData
                });
            }
            if (userInfo.role === common_1.UserRole.Vendor) {
                const vendorUpdateData = {
                    farmName,
                    certificationStatus,
                    farmLocation,
                    profilePhoto
                };
                // Filter out undefined values
                Object.keys(vendorUpdateData).forEach(key => {
                    if (vendorUpdateData[key] === undefined) {
                        delete vendorUpdateData[key];
                    }
                });
                if (Object.keys(vendorUpdateData).length > 0) {
                    await transactionClient.vendorProfile.update({
                        where: {
                            userId: userInfo.id
                        },
                        data: vendorUpdateData
                    });
                }
            }
        }, {
            timeout: 10000 // ✅ 10 সেকেন্ড টাইমআউট যোগ করা
        });
        return { message: 'Profile updated' };
    }
    catch (error) {
        // ট্রানজাকশন ফেইল হলে আপলোড করা ইমেজ ডিলিট করা
        if (uploadedImage) {
            await fileUploader_1.fileUploader.deleteFromCloudinary(uploadedImage.public_id);
        }
        throw error;
    }
};
exports.UserService = {
    createCustomer,
    createAdmin,
    createVendor,
    createVendorPublic,
    getAllFromDB,
    getMyProfile,
    changeProfileStatus,
    updateMyProfile
};
//# sourceMappingURL=user.service.js.map