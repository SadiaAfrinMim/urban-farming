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
    console.log('=== RENTAL SPACE CREATE SERVICE START ===');
    console.log('Request method:', req.method);
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Body keys:', Object.keys(req.body || {}));
    console.log('Files:', req.file ? 'Has file' : 'No file');
    console.log('Image URL from middleware:', req.body?.imageUrl);
    // Log all body data for debugging
    if (req.body) {
        Object.keys(req.body).forEach(key => {
            console.log(`${key}:`, typeof req.body[key] === 'string' && req.body[key].length > 50 ?
                req.body[key].substring(0, 50) + '...' : req.body[key]);
        });
    }
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
const updateRentalSpace = async (user, id, req) => {
    console.log('=== RENTAL SPACE UPDATE SERVICE START ===');
    console.log('Rental space ID:', id);
    console.log('Content-Type:', req.headers?.['content-type']);
    console.log('Body keys:', Object.keys(req.body || {}));
    console.log('Files:', req.file ? 'Has file' : 'No file');
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    const data = req.body;
    // Parse FormData if it contains 'data' field
    let updateData = data;
    if (data.data) {
        console.log('Parsing JSON data from FormData');
        updateData = JSON.parse(data.data);
    }
    // Handle image update - check for imageUrl from middleware
    if (data.imageUrl) {
        console.log('Adding image URL:', data.imageUrl);
        updateData.image = data.imageUrl;
    }
    // Convert price to number if it's a string
    if (updateData.price && typeof updateData.price === 'string') {
        updateData.price = parseFloat(updateData.price);
    }
    console.log('Final update data:', updateData);
    const rentalSpace = await prisma_1.prisma.rentalSpace.update({
        where: {
            id: parseInt(id),
            vendorId: profile.id,
        },
        data: updateData,
    });
    console.log('Rental space updated successfully');
    return rentalSpace;
};
const deleteRentalSpace = async (user, id) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    const rentalSpace = await prisma_1.prisma.rentalSpace.delete({
        where: {
            id: parseInt(id),
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
    // Validate category
    const validCategories = ['Vegetables', 'Fruits', 'Grains', 'Dairy'];
    if (!validCategories.includes(req.body.category)) {
        throw new ApiError_1.default(`Invalid category. Valid categories are: ${validCategories.join(', ')}`, 400);
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
const updateProduce = async (user, id, req) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    const data = req.body;
    // Validate category if provided
    if (data.category) {
        const validCategories = ['Vegetables', 'Fruits', 'Grains', 'Dairy'];
        if (!validCategories.includes(data.category)) {
            throw new ApiError_1.default(`Invalid category. Valid categories are: ${validCategories.join(', ')}`, 400);
        }
    }
    // Handle image update - check for imageUrl from middleware or direct JSON
    let updateData = {
        ...data,
        price: data.price ? parseFloat(data.price) : undefined,
        availableQuantity: data.availableQuantity ? parseInt(data.availableQuantity) : undefined,
        isOrganic: data.isOrganic === 'true' || data.isOrganic === true ? true : data.isOrganic === 'false' || data.isOrganic === false ? false : undefined,
    };
    // If new image was uploaded via multipart, use it
    if (data.imageUrl) {
        updateData.image = data.imageUrl;
    }
    const produce = await prisma_1.prisma.produce.update({
        where: {
            id: parseInt(id),
            vendorId: profile.id,
        },
        data: updateData,
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
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    const produce = await prisma_1.prisma.produce.delete({
        where: {
            id: parseInt(id),
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
    const validPlantStatuses = ['Seeding', 'Sprouting', 'Growing', 'Flowering', 'ReadyToHarvest', 'Harvested'];
    if (plantStatus && !validPlantStatuses.includes(plantStatus)) {
        throw new ApiError_1.default(400, 'Invalid plant status');
    }
    const updateData = {};
    if (plantStatus)
        updateData.plantStatus = plantStatus;
    if (lastWatered)
        updateData.lastWatered = new Date(lastWatered);
    const rentalSpace = await prisma_1.prisma.rentalSpace.update({
        where: {
            id: parseInt(rentalSpaceId),
            vendorId: profile.id,
        },
        data: updateData,
    });
    return rentalSpace;
};
const updateOrderStatus = async (user, orderId, status) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default(404, 'Vendor profile not found');
    }
    const validStatuses = ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];
    if (!validStatuses.includes(status)) {
        throw new ApiError_1.default(400, 'Invalid order status');
    }
    const order = await prisma_1.prisma.order.findUnique({
        where: {
            id: parseInt(orderId),
        },
    });
    if (!order) {
        throw new ApiError_1.default(404, 'Order not found');
    }
    // Allow updating any order for testing
    const updatedOrder = await prisma_1.prisma.order.update({
        where: {
            id: parseInt(orderId),
        },
        data: {
            status: status,
        },
        include: {
            produce: true,
            user: true,
        },
    });
    return updatedOrder;
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
        include: {
            produce: true,
            user: true,
            vendor: {
                include: {
                    user: true,
                },
            },
        },
    });
    return orders;
};
const createVendorPost = async (user, req) => {
    console.log('=== VENDOR POST CREATE SERVICE START ===');
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
    // Validate category
    const validCategories = ['FarmUpdate', 'ProductShowcase', 'Sustainability', 'Community'];
    if (!validCategories.includes(req.body.category)) {
        throw new ApiError_1.default(`Invalid category. Valid categories are: ${validCategories.join(', ')}`, 400);
    }
    const postData = {
        vendorId: profile.id,
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        image: req.body.imageUrl || null,
        isApproved: req.body.isApproved || false,
    };
    console.log('Final vendor post data:', postData);
    const post = await prisma_1.prisma.vendorPost.create({
        data: postData,
        include: {
            vendor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });
    console.log('✅ Vendor post created:', post.id);
    return post;
};
const getVendorPosts = async (user) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        return [];
    }
    const posts = await prisma_1.prisma.vendorPost.findMany({
        where: {
            vendorId: profile.id,
        },
        include: {
            likes: {
                select: {
                    id: true,
                    userId: true,
                },
            },
            comments: {
                select: {
                    id: true,
                    content: true,
                    createdAt: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'asc',
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    // Add computed fields
    return posts.map(post => ({
        ...post,
        likeCount: post.likes.length,
        commentCount: post.comments.length,
    }));
};
const updateVendorPost = async (user, id, req) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    const post = await prisma_1.prisma.vendorPost.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    if (!post) {
        throw new ApiError_1.default('Vendor post not found', 404);
    }
    // Check if the post belongs to the user
    if (post.vendorId !== profile.id) {
        throw new ApiError_1.default('You can only update your own posts', 403);
    }
    // Validate category if provided
    if (req.body.category) {
        const validCategories = ['FarmUpdate', 'ProductShowcase', 'Sustainability', 'Community'];
        if (!validCategories.includes(req.body.category)) {
            throw new ApiError_1.default(`Invalid category. Valid categories are: ${validCategories.join(', ')}`, 400);
        }
    }
    // Handle image update
    let updateData = {
        ...req.body,
        updatedAt: new Date(),
    };
    // If new image was uploaded via multipart, use it
    if (req.body.imageUrl) {
        updateData.image = req.body.imageUrl;
    }
    const updatedPost = await prisma_1.prisma.vendorPost.update({
        where: {
            id: parseInt(id),
        },
        data: updateData,
        include: {
            vendor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });
    return updatedPost;
};
const deleteVendorPost = async (user, id) => {
    const profile = await prisma_1.prisma.vendorProfile.findUnique({
        where: {
            userId: user.id,
        },
    });
    if (!profile) {
        throw new ApiError_1.default('Vendor profile not found', 404);
    }
    const post = await prisma_1.prisma.vendorPost.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    if (!post) {
        throw new ApiError_1.default('Vendor post not found', 404);
    }
    // Check if the post belongs to the user
    if (post.vendorId !== profile.id) {
        throw new ApiError_1.default('You can only delete your own posts', 403);
    }
    await prisma_1.prisma.vendorPost.delete({
        where: {
            id: parseInt(id),
        },
    });
};
const toggleVendorPostLike = async (user, postId) => {
    const post = await prisma_1.prisma.vendorPost.findUnique({
        where: { id: parseInt(postId) },
    });
    if (!post) {
        throw new ApiError_1.default('Vendor post not found', 404);
    }
    // Check if user already liked the post
    const existingLike = await prisma_1.prisma.vendorPostLike.findUnique({
        where: {
            userId_postId: {
                userId: user.id,
                postId: parseInt(postId),
            },
        },
    });
    if (existingLike) {
        // Unlike the post
        await prisma_1.prisma.vendorPostLike.delete({
            where: { id: existingLike.id },
        });
        return { liked: false };
    }
    else {
        // Like the post
        await prisma_1.prisma.vendorPostLike.create({
            data: {
                userId: user.id,
                postId: parseInt(postId),
            },
        });
        return { liked: true };
    }
};
const addVendorPostComment = async (user, postId, content) => {
    const post = await prisma_1.prisma.vendorPost.findUnique({
        where: { id: parseInt(postId) },
    });
    if (!post) {
        throw new ApiError_1.default('Vendor post not found', 404);
    }
    if (!content.trim()) {
        throw new ApiError_1.default('Comment content cannot be empty', 400);
    }
    const comment = await prisma_1.prisma.vendorPostComment.create({
        data: {
            userId: user.id,
            postId: parseInt(postId),
            content: content.trim(),
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
    return comment;
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
    updateOrderStatus,
    getOrders,
    createVendorPost,
    getVendorPosts,
    updateVendorPost,
    deleteVendorPost,
    toggleVendorPostLike,
    addVendorPostComment,
};
//# sourceMappingURL=vendor.service.js.map