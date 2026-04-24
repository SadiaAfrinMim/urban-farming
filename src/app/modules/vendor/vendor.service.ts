import { Request } from 'express';
import { prisma } from '../../shared/prisma';
import { fileUploader } from '../../helpers/fileUploader';
import { IJWTPayload } from '../../types/common';

const createOrUpdateProfile = async (user: IJWTPayload, req: Request) => {
    const file = req.file;
    let uploadedImages: any[] = [];

    try {
        // Upload certifications to Cloudinary
        if (file) {
            const uploadResult = await fileUploader.uploadToCloudinary(file);
            uploadedImages.push(uploadResult);
            req.body.certifications = req.body.certifications || [];
            req.body.certifications.push(uploadResult.secure_url);
        }

        const profileData = {
            farmName: req.body.farmName,
            farmLocation: req.body.farmLocation,
            certifications: req.body.certifications,
        };

        const result = await prisma.vendorProfile.upsert({
            where: {
                userId: user.id!,
            },
            update: profileData,
            create: {
                ...profileData,
                userId: user.id!,
            },
        });

        return result;
    } catch (error) {
        // Delete uploaded images on error
        for (const img of uploadedImages) {
            await fileUploader.deleteFromCloudinary(img.public_id);
        }
        throw error;
    }
};

const getProfile = async (user: IJWTPayload) => {
    const profile = await prisma.vendorProfile.findUnique({
        where: {
            userId: user.id!,
        },
    });
    return profile;
};

const createRentalSpace = async (user: IJWTPayload, data: any) => {
    const rentalSpace = await prisma.rentalSpace.create({
        data: {
            ...data,
            vendorId: user.id!,
        },
    });
    return rentalSpace;
};

const getRentalSpaces = async (user: IJWTPayload) => {
    const rentalSpaces = await prisma.rentalSpace.findMany({
        where: {
            vendorId: user.id!,
        },
    });
    return rentalSpaces;
};

const updateRentalSpace = async (user: IJWTPayload, id: string, data: any) => {
    const rentalSpace = await prisma.rentalSpace.updateMany({
        where: {
            id,
            vendorId: user.id!,
        },
        data,
    });
    return rentalSpace;
};

const deleteRentalSpace = async (user: IJWTPayload, id: string) => {
    const rentalSpace = await prisma.rentalSpace.deleteMany({
        where: {
            id,
            vendorId: user.id!,
        },
    });
    return rentalSpace;
};

const createProduce = async (user: IJWTPayload, data: any) => {
    const produce = await prisma.produce.create({
        data: {
            ...data,
            vendorId: user.id!,
        },
    });
    return produce;
};

const getProduces = async (user: IJWTPayload) => {
    const produces = await prisma.produce.findMany({
        where: {
            vendorId: user.id!,
        },
    });
    return produces;
};

const updateProduce = async (user: IJWTPayload, id: string, data: any) => {
    const produce = await prisma.produce.updateMany({
        where: {
            id,
            vendorId: user.id!,
        },
        data,
    });
    return produce;
};

const deleteProduce = async (user: IJWTPayload, id: string) => {
    const produce = await prisma.produce.deleteMany({
        where: {
            id,
            vendorId: user.id!,
        },
    });
    return produce;
};

const updatePlantStatus = async (user: IJWTPayload, data: any) => {
    const { rentalSpaceId, plantStatus, lastWatered } = data;

    const updateData: any = {};
    if (plantStatus) updateData.plantStatus = plantStatus;
    if (lastWatered) updateData.lastWatered = lastWatered;

    const rentalSpace = await prisma.rentalSpace.updateMany({
        where: {
            id: rentalSpaceId,
            vendorId: user.id!,
        },
        data: updateData,
    });
    return rentalSpace;
};

const getOrders = async (user: IJWTPayload) => {
    const orders = await prisma.order.findMany({
        where: {
            vendorId: user.id!,
        },
        include: {
            items: true,
            user: true,
        },
    });
    return orders;
};

export const VendorService = {
    createOrUpdateProfile,
    getProfile,
    createRentalSpace,
    getRentalSpaces,
    updateRentalSpace,
    deleteRentalSpace,
    createProduce,
    getProduces,
    updateProduce,
    deleteProduce,
    updatePlantStatus,
    getOrders,
};