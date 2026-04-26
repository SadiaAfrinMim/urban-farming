"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorService = void 0;
const prisma_1 = require("../../shared/prisma");
const fileUploader_1 = require("../../helpers/fileUploader");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const createOrUpdateProfile = async (user, req) => {
    console.log('=== PROFILE SERVICE START ===');
    console.log('Raw body:', req.body);
    console.log('Uploaded images from middleware:', req.uploadedImages);
    try {
        // Validate required fields
        if (!req.body.farmName || !req.body.farmLocation) {
            console.log('❌ Validation failed: farmName or farmLocation missing');
            console.log('farmName:', req.body.farmName);
            console.log('farmLocation:', req.body.farmLocation);
            // Clean up any uploaded images on validation error
            if (req.uploadedImages) {
                console.log('Cleaning up uploaded images...');
                for (const img of req.uploadedImages) {
                    try {
                        await fileUploader_1.fileUploader.deleteFromCloudinary(img.public_id);
                    }
                    catch (cleanupError) {
                        console.error('Failed to cleanup uploaded image:', cleanupError);
                    }
                }
            }
            throw new ApiError_1.default('Farm name and farm location are required', 400);
        }
        console.log('✅ Validation passed');
        // Prepare data for upsert
        const baseData = {
            farmName: req.body.farmName,
            farmLocation: req.body.farmLocation,
        };
        const profileData = { ...baseData };
        const createData = {
            ...baseData,
            userId: user.id,
        };
        console.log('Base data prepared:', baseData);
        // Use URLs from middleware
        if (req.body.profilePhotoUrl) {
            profileData.profilePhoto = req.body.profilePhotoUrl;
            createData.profilePhoto = req.body.profilePhotoUrl;
            console.log('✅ Profile photo URL added:', req.body.profilePhotoUrl);
        }
        else {
            console.log('⚠️ No profile photo URL provided');
        }
        if (req.body.certificationUrls && req.body.certificationUrls.length > 0) {
            // Get existing certifications and append new ones
            const existingProfile = await prisma_1.prisma.vendorProfile.findUnique({
                where: { userId: user.id },
            });
            const existingCerts = existingProfile?.certifications || [];
            profileData.certifications = [...existingCerts, ...req.body.certificationUrls];
            createData.certifications = [...existingCerts, ...req.body.certificationUrls];
            console.log('✅ Certification URLs added:', req.body.certificationUrls);
            console.log('Existing certs:', existingCerts);
        }
        else {
            // If no new certifications, preserve existing ones in update
            const existingProfile = await prisma_1.prisma.vendorProfile.findUnique({
                where: { userId: user.id },
            });
            if (existingProfile?.certifications) {
                profileData.certifications = existingProfile.certifications;
                console.log('✅ Preserved existing certifications');
            }
            else {
                console.log('⚠️ No certifications to preserve');
            }
        }
        console.log('Final profileData:', profileData);
        console.log('Final createData:', createData);
        const result = await prisma_1.prisma.vendorProfile.upsert({
            where: {
                userId: user.id,
            },
            update: profileData,
            create: createData,
        });
        console.log('✅ Profile upsert successful:', result.id);
        return result;
    }
    catch (error) {
        console.error('❌ Profile creation error:', error);
        // Delete uploaded images on error
        if (req.uploadedImages) {
            console.log('Cleaning up uploaded images due to error...');
            for (const img of req.uploadedImages) {
                try {
                    await fileUploader_1.fileUploader.deleteFromCloudinary(img.public_id);
                }
                catch (cleanupError) {
                    console.error('Failed to cleanup uploaded image:', cleanupError);
                }
            }
        }
        throw error;
    }
};
const getProfile = async (user) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    return profile;
};
const getVendorCard = async (user) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                },
            },
            produces: {
                take: 3, // Show latest 3 produces
                orderBy: {
                    createdAt: 'desc',
                },
                select: {
                    id: true,
                    name: true,
                    image: true,
                    price: true,
                    category: true,
                },
            },
            rentalSpaces: {
                take: 2, // Show latest 2 rental spaces
                orderBy: {
                    createdAt: 'desc',
                },
                select: {
                    id: true,
                    location: true,
                    size: true,
                    price: true,
                    availability: true,
                    image: true,
                },
            },
        },
    });
    if (!profile) {
        throw new Error('Vendor profile not found');
    }
    return {
        id: profile.id,
        vendorName: profile.user.name,
        vendorEmail: profile.user.email,
        farmName: profile.farmName,
        farmLocation: profile.farmLocation,
        profilePhoto: profile.profilePhoto,
        certifications: profile.certifications,
        certificationStatus: profile.certificationStatus,
        totalProduces: await prisma_1.prisma.produce.count({ where: { vendorId: profile.id } }),
        totalRentalSpaces: await prisma_1.prisma.rentalSpace.count({ where: { vendorId: profile.id } }),
        recentProduces: profile.produces,
        recentRentalSpaces: profile.rentalSpaces,
    };
};
const createRentalSpace = async (user, req) => {
    console.log('=== RENTAL SPACE SERVICE START ===');
    console.log('Body:', req.body);
    console.log('Image URL from middleware:', req.body.imageUrl);
    // Validate required fields
    const { location, size, price } = req.body;
    if (!location || !size || !price) {
        throw new ApiError_1.default('Location, size, and price are required', 400);
    }
    // Validate price is a valid number
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
        throw new ApiError_1.default('Price must be a valid positive number', 400);
    }
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    // Extract only valid RentalSpace fields from request body
    const rentalSpaceData = {
        location: req.body.location,
        size: req.body.size,
        price: parseFloat(req.body.price), // Ensure price is a number
        availability: req.body.availability !== undefined ? req.body.availability : true,
        plantStatus: req.body.plantStatus || null,
        lastWatered: req.body.lastWatered ? new Date(req.body.lastWatered) : null,
        vendorId: profile.id,
    };
    // Add image if provided
    if (req.body.imageUrl) {
        rentalSpaceData.image = req.body.imageUrl;
        console.log('✅ Image URL added to rental space:', req.body.imageUrl);
    }
    else {
        console.log('⚠️ No image URL provided for rental space');
    }
    console.log('Final rental space data:', rentalSpaceData);
    const rentalSpace = await prisma_1.prisma.rentalSpace.create({
        data: rentalSpaceData,
    });
    console.log('✅ Rental space created:', rentalSpace.id);
    return rentalSpace;
};
const getRentalSpaces = async (user) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        return [];
    }
    const rentalSpaces = await prisma_1.prisma.rentalSpace.findMany({
        where: {
            vendorId: profile.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return rentalSpaces;
};
const updateRentalSpace = async (user, id, data) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new Error('Vendor profile not found');
    }
    const rentalSpace = await prisma_1.prisma.rentalSpace.updateMany({
        where: {
            id,
            vendorId: profile.id,
        },
        data,
    });
    return rentalSpace;
};
const deleteRentalSpace = async (user, id) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new Error('Vendor profile not found');
    }
    const rentalSpace = await prisma_1.prisma.rentalSpace.deleteMany({
        where: {
            id,
            vendorId: profile.id,
        },
    });
    return rentalSpace;
};
const createProduce = async (user, req) => {
    console.log('=== PRODUCE SERVICE START ===');
    console.log('Body:', req.body);
    console.log('Image URL from middleware:', req.body.imageUrl);
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    const produceData = {
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        category: req.body.category,
        availableQuantity: parseInt(req.body.availableQuantity),
        certificationStatus: req.body.certificationStatus || 'Pending',
        unit: req.body.unit || 'kg',
        isOrganic: req.body.isOrganic === 'true' || req.body.isOrganic === true || false,
        image: req.body.imageUrl || null,
        vendorId: profile.id,
    };
    console.log('Final produce data:', produceData);
    const produce = await prisma_1.prisma.produce.create({
        data: produceData,
    });
    console.log('✅ Produce created:', produce.id);
    return produce;
};
const getProduces = async (user) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        return [];
    }
    const produces = await prisma_1.prisma.produce.findMany({
        where: {
            vendorId: profile.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return produces;
};
const updateProduce = async (user, id, data) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new Error('Vendor profile not found');
    }
    const produce = await prisma_1.prisma.produce.updateMany({
        where: {
            id,
            vendorId: profile.id,
        },
        data,
    });
    return produce;
};
const deleteProduce = async (user, id) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new Error('Vendor profile not found');
    }
    const produce = await prisma_1.prisma.produce.deleteMany({
        where: {
            id,
            vendorId: profile.id,
        },
    });
    return produce;
};
const updatePlantStatus = async (user, data) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new Error('Vendor profile not found');
    }
    const { rentalSpaceId, plantStatus, lastWatered } = data;
    const updateData = {};
    if (plantStatus)
        updateData.plantStatus = plantStatus;
    if (lastWatered)
        updateData.lastWatered = lastWatered;
    const rentalSpace = await prisma_1.prisma.rentalSpace.updateMany({
        where: {
            id: rentalSpaceId,
            vendorId: profile.id,
        },
        data: updateData,
    });
    return rentalSpace;
};
const getOrders = async (user) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        return [];
    }
    const orders = await prisma_1.prisma.order.findMany({
        where: {
            vendorId: profile.id,
        },
        include: {
            produce: true,
            user: true,
        },
    });
    return orders;
};
exports.VendorService = {
    createOrUpdateProfile,
    getProfile,
    getVendorCard,
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
//# sourceMappingURL=vendor.service.js.map