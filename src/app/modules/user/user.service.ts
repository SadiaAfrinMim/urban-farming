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

    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
        req.body.vendorProfile.profilePhoto = uploadToCloudinary?.secure_url
    }
    const hashedPassword: string = await bcrypt.hash(req.body.password, 10)

    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: UserRole.Vendor
    }

    const result = await prisma.$transaction(async (transactionClient) => {
        const createdUser = await transactionClient.user.create({
            data: userData
        });

        const createdVendorProfile = await transactionClient.vendorProfile.create({
            data: {
                ...req.body.vendorProfile,
                userId: createdUser.id
            }
        });

        return { user: createdUser, vendorProfile: createdVendorProfile };
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

const updateMyProfie = async (user: IJWTPayload, req: Request) => {
    const userInfo = await prisma.user.findFirstOrThrow({
        where: {
            email: user?.email!,
            status: UserStatus.Active
        }
    });

    const file = req.file;
    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
        req.body.profilePhoto = uploadToCloudinary?.secure_url;
    }

    if (userInfo.role === UserRole.Vendor) {
        const profileInfo = await prisma.vendorProfile.update({
            where: {
                userId: userInfo.id
            },
            data: req.body
        })
        return { ...profileInfo };
    }

    return { message: 'Profile updated' };
}

export const UserService = {
    createCustomer,
    createAdmin,
    createVendor,
    getAllFromDB,
    getMyProfile,
    changeProfileStatus,
    updateMyProfie
}