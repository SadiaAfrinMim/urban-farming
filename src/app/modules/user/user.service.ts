import { Request } from "express";
import { prisma } from "../../shared/prisma";
import bcrypt from "bcryptjs";

import { UserRole, UserStatus } from "../../types/common";

import { IJWTPayload } from "../../types/common";
import { fileUploader } from "../../helpers/fileUploader";
import { userSearchAbleFields } from "./user.constant";
import { IOptions, paginationHelper } from "../../helpers/paginationHelper";

const createCustomer = async (req: Request) => {

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const result = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            role: UserRole.Customer
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true
        }
    })

    return result;
}

const createAdmin = async (req: Request) => {

    const hashedPassword: string = await bcrypt.hash(req.body.password, 10)

    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: UserRole.Admin
    }

    const result = await prisma.user.create({
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

const createVendor = async (req: Request) => {
    const file = req.file;
    let uploadedImage = null;

    req.body.vendorProfile = req.body.vendorProfile || {};

    try {
        // 1. Upload outside transaction (OK)
        if (file) {
            uploadedImage = await fileUploader.uploadToCloudinary(file);
            req.body.vendorProfile.profilePhoto = uploadedImage?.secure_url;
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: UserRole.Vendor
        };

        // 2. Keep transaction ONLY for DB ops
        const result = await prisma.$transaction(async (tx) => {
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
    } catch (error) {
        if (uploadedImage) {
            await fileUploader.deleteFromCloudinary(uploadedImage.public_id);
        }
        throw error;
    }
};

const createVendorPublic = async (req: Request) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: UserRole.Vendor
    };

    const result = await prisma.$transaction(async (tx) => {
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


const getAllFromDB = async (params: any, options: IOptions) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper.calculatePagination(options)
    const { searchTerm, ...filterData } = params;

    const andConditions: any[] = [];

    if (searchTerm) {
        andConditions.push({
            OR: userSearchAbleFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive"
                }
            }))
        })
    }

    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        })
    }

    const whereConditions: any = andConditions.length > 0 ? {
        AND: andConditions
    } : {}

    const result = await prisma.user.findMany({
        skip,
        take: limit,

        where: whereConditions,
        orderBy: {
            [sortBy]: sortOrder
        }
    });

    const total = await prisma.user.count({
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
}

const getMyProfile = async (user: IJWTPayload) => {
    const userInfo = await prisma.user.findFirstOrThrow({
        where: {
            email: user.email!,
            status: UserStatus.Active
        },
        select: {
            id: true,
            email: true,
            role: true,
            status: true
        }
    })

    let profileData = null;

    if (userInfo.role === UserRole.Vendor) {
        profileData = await prisma.vendorProfile.findUnique({
            where: {
                userId: userInfo.id
            }
        })
    }

    return {
        ...userInfo,
        profileData
    };

};

const changeProfileStatus = async (id: string, payload: { status: UserStatus }) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            id
        }
    })

    const updateUserStatus = await prisma.user.update({
        where: {
            id
        },
        data: payload
    })

    return updateUserStatus;
};

const updateMyProfile = async (user: IJWTPayload, req: Request) => {
    const userInfo = await prisma.user.findFirstOrThrow({
        where: {
            email: user?.email!,
            status: UserStatus.Active
        }
    });

    const file = req.file;
    let uploadedImage = null;

    try {
        // ✅ Cloudinary আপলোড ট্রানজাকশনের বাইরে করা
        if (file) {
            uploadedImage = await fileUploader.uploadToCloudinary(file);
            req.body.profilePhoto = uploadedImage?.secure_url;
        }

        const { farmName, certificationStatus, farmLocation, profilePhoto, ...userUpdateData } = req.body;

        // ✅ শুধুমাত্র ডাটাবেস অপারেশন ট্রানজাকশনের ভিতর
        await prisma.$transaction(async (transactionClient) => {
            // Update User table for all roles
            if (Object.keys(userUpdateData).length > 0) {
                await transactionClient.user.update({
                    where: {
                        id: userInfo.id
                    },
                    data: userUpdateData
                });
            }

            if (userInfo.role === UserRole.Vendor) {
                const vendorUpdateData = {
                    farmName,
                    certificationStatus,
                    farmLocation,
                    profilePhoto
                };
                // Filter out undefined values
                Object.keys(vendorUpdateData).forEach(key => {
                    if (vendorUpdateData[key as keyof typeof vendorUpdateData] === undefined) {
                        delete vendorUpdateData[key as keyof typeof vendorUpdateData];
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
    } catch (error) {
        // ট্রানজাকশন ফেইল হলে আপলোড করা ইমেজ ডিলিট করা
        if (uploadedImage) {
            await fileUploader.deleteFromCloudinary(uploadedImage.public_id);
        }
        throw error;
    }
}

export const UserService = {
    createCustomer,
    createAdmin,
    createVendor,
    createVendorPublic,
    getAllFromDB,
    getMyProfile,
    changeProfileStatus,
    updateMyProfile
}