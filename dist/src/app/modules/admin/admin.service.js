"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const prisma_1 = require("../../shared/prisma");
const common_1 = require("../../types/common");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
// User Management
const getAllUsers = async (filters, options) => {
    const { searchTerm, ...filterData } = filters;
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = options;
    const parsedPage = parseInt(page.toString(), 10) || 1;
    const parsedLimit = parseInt(limit.toString(), 10) || 10;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: [
                { name: { contains: searchTerm, mode: 'insensitive' } },
                { email: { contains: searchTerm, mode: 'insensitive' } },
            ],
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: filterData[key],
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma_1.prisma.user.findMany({
        where: whereConditions,
        skip: (parsedPage - 1) * parsedLimit,
        take: parsedLimit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            vendorProfile: true,
        },
    });
    const total = await prisma_1.prisma.user.count({ where: whereConditions });
    return {
        data: result,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};
const updateUserRole = async (userId, role) => {
    const userIdNumber = parseInt(userId, 10);
    if (isNaN(userIdNumber)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
    }
    const user = await prisma_1.prisma.user.findUnique({ where: { id: userIdNumber } });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const updatedUser = await prisma_1.prisma.user.update({
        where: { id: userIdNumber },
        data: { role },
        include: { vendorProfile: true },
    });
    return updatedUser;
};
const updateUserStatus = async (userId, status) => {
    const userIdNumber = parseInt(userId, 10);
    if (isNaN(userIdNumber)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
    }
    const user = await prisma_1.prisma.user.findUnique({ where: { id: userIdNumber } });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const updatedUser = await prisma_1.prisma.user.update({
        where: { id: userIdNumber },
        data: { status },
        include: { vendorProfile: true },
    });
    return updatedUser;
};
// Certification and Verification
const getPendingCertifications = async () => {
    const vendors = await prisma_1.prisma.vendorProfile.findMany({
        where: { certificationStatus: common_1.CertificationStatus.Pending },
        include: {
            user: true,
        },
    });
    return vendors;
};
const approveCertification = async (vendorId) => {
    const id = parseInt(vendorId);
    if (isNaN(id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid vendor ID');
    }
    const vendor = await prisma_1.prisma.vendorProfile.findUnique({ where: { id } });
    if (!vendor) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Vendor not found');
    }
    const updatedVendor = await prisma_1.prisma.vendorProfile.update({
        where: { id },
        data: { certificationStatus: common_1.CertificationStatus.Approved },
        include: { user: true },
    });
    return updatedVendor;
};
const rejectCertification = async (vendorId, reason) => {
    const id = parseInt(vendorId);
    if (isNaN(id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid vendor ID');
    }
    const vendor = await prisma_1.prisma.vendorProfile.findUnique({ where: { id } });
    if (!vendor) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Vendor not found');
    }
    const updatedVendor = await prisma_1.prisma.vendorProfile.update({
        where: { id },
        data: { certificationStatus: common_1.CertificationStatus.Rejected },
        include: { user: true },
    });
    // TODO: Send notification to vendor with reason
    return updatedVendor;
};
const approveProduce = async (produceId) => {
    const id = parseInt(produceId);
    if (isNaN(id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid produce ID');
    }
    const produce = await prisma_1.prisma.produce.findUnique({ where: { id } });
    if (!produce) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    const updatedProduce = await prisma_1.prisma.produce.update({
        where: { id },
        data: { certificationStatus: common_1.CertificationStatus.Approved },
        include: { vendor: { include: { user: true } } },
    });
    return updatedProduce;
};
const rejectProduce = async (produceId) => {
    const id = parseInt(produceId);
    if (isNaN(id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid produce ID');
    }
    const produce = await prisma_1.prisma.produce.findUnique({ where: { id } });
    if (!produce) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Produce not found');
    }
    const updatedProduce = await prisma_1.prisma.produce.update({
        where: { id },
        data: { certificationStatus: common_1.CertificationStatus.Rejected },
        include: { vendor: { include: { user: true } } },
    });
    return updatedProduce;
};
// Content Moderation
const getPendingProduces = async () => {
    const produces = await prisma_1.prisma.produce.findMany({
        where: { certificationStatus: common_1.CertificationStatus.Pending },
        include: {
            vendor: { include: { user: true } },
        },
    });
    return produces;
};
const getAllPosts = async () => {
    const posts = await prisma_1.prisma.communityPost.findMany({
        include: {
            user: true,
            likes: true,
            comments: true,
        },
        orderBy: { postDate: 'desc' },
    });
    return posts;
};
const approvePost = async (postId, adminId) => {
    const id = parseInt(postId);
    if (isNaN(id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid post ID');
    }
    const post = await prisma_1.prisma.communityPost.findUnique({ where: { id } });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Post not found');
    }
    const updatedPost = await prisma_1.prisma.communityPost.update({
        where: { id },
        data: {
            isApproved: true,
            moderatedBy: adminId,
            moderatedAt: new Date(),
        },
        include: { user: true },
    });
    return updatedPost;
};
const deletePost = async (postId) => {
    const id = parseInt(postId);
    if (isNaN(id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid post ID');
    }
    const post = await prisma_1.prisma.communityPost.findUnique({ where: { id } });
    if (!post) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Post not found');
    }
    // Delete related likes and comments first
    await prisma_1.prisma.postLike.deleteMany({ where: { postId: id } });
    await prisma_1.prisma.postComment.deleteMany({ where: { postId: id } });
    // Now delete the post
    await prisma_1.prisma.communityPost.delete({ where: { id } });
    return { message: 'Post deleted successfully' };
};
const getReports = async () => {
    // TODO: Implement Report model in database schema
    // For now, return empty array
    console.warn('Report functionality not implemented - missing Report model in schema');
    return [];
};
const resolveReport = async (reportId, adminId) => {
    // TODO: Implement Report model in database schema
    // For now, return a mock response
    console.warn('Report functionality not implemented - missing Report model in schema');
    return {
        id: reportId,
        status: 'Resolved',
        adminId,
        resolvedAt: new Date(),
        message: 'Report resolved (mock implementation)'
    };
};
// Transaction and Order Monitoring
const getAllOrders = async (filters, options) => {
    const { page = 1, limit = 10, sortBy = 'orderDate', sortOrder = 'desc' } = options;
    const parsedPage = parseInt(page.toString(), 10) || 1;
    const parsedLimit = parseInt(limit.toString(), 10) || 10;
    const result = await prisma_1.prisma.order.findMany({
        skip: (parsedPage - 1) * parsedLimit,
        take: parsedLimit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            user: true,
            produce: true,
            vendor: { include: { user: true } },
        },
    });
    const total = await prisma_1.prisma.order.count();
    return {
        data: result,
        meta: {
            page: parsedPage,
            limit: parsedLimit,
            total,
            totalPages: Math.ceil(total / parsedLimit),
        },
    };
};
const getRentalAnalytics = async () => {
    const totalSpaces = await prisma_1.prisma.rentalSpace.count();
    const rentedSpaces = await prisma_1.prisma.rentalSpace.count({
        where: { availability: false },
    });
    const rentedPercentage = totalSpaces > 0 ? (rentedSpaces / totalSpaces) * 100 : 0;
    return {
        totalSpaces,
        rentedSpaces,
        rentedPercentage,
    };
};
const getRevenueAnalytics = async () => {
    const orders = await prisma_1.prisma.order.findMany({
        where: { status: 'Delivered' },
        include: { produce: true },
    });
    const totalRevenue = orders.reduce((sum, order) => sum + order.produce.price, 0);
    // Commission assuming 10%
    const commission = totalRevenue * 0.1;
    return {
        totalRevenue,
        commission,
        orderCount: orders.length,
    };
};
// System Settings
const getRateLimitLogs = async (options) => {
    const { page = 1, limit = 50 } = options;
    // For now, return mock data since rate limiting logging is not implemented yet
    // In production, you would log rate limit violations to the database
    const result = [
        {
            id: 'mock-id-1',
            ip: '192.168.1.1',
            endpoint: '/auth/login',
            method: 'POST',
            count: 15,
            windowStart: new Date(),
            createdAt: new Date(),
        }
    ];
    return {
        data: result,
        meta: {
            page: parsedPage,
            limit: parsedLimit,
            total,
            totalPages: Math.ceil(total / parsedLimit),
        },
    };
};
const createAnnouncement = async (adminId, data) => {
    const announcement = await prisma_1.prisma.announcement.create({
        data: {
            ...data,
            adminId,
        },
    });
    return announcement;
};
const getAnnouncements = async () => {
    const announcements = await prisma_1.prisma.announcement.findMany({
        include: { admin: { select: { name: true, email: true } } },
        orderBy: { createdAt: 'desc' },
    });
    return announcements;
};
const deleteAnnouncement = async (announcementId) => {
    const id = parseInt(announcementId, 10);
    if (isNaN(id)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid announcement ID');
    }
    const announcement = await prisma_1.prisma.announcement.findUnique({ where: { id } });
    if (!announcement) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Announcement not found');
    }
    await prisma_1.prisma.announcement.delete({ where: { id } });
    return { message: 'Announcement deleted successfully' };
};
const getDashboardStats = async () => {
    const [totalUsers, totalVendors, totalCustomers, pendingCertifications, pendingProducts, pendingVendorPosts, pendingCustomerPosts,] = await Promise.all([
        prisma_1.prisma.user.count(),
        prisma_1.prisma.user.count({ where: { role: common_1.UserRole.Vendor } }),
        prisma_1.prisma.user.count({ where: { role: common_1.UserRole.Customer } }),
        prisma_1.prisma.vendorProfile.count({ where: { certificationStatus: common_1.CertificationStatus.Pending } }),
        prisma_1.prisma.produce.count({ where: { certificationStatus: common_1.CertificationStatus.Pending } }),
        prisma_1.prisma.vendorPost.count({ where: { isApproved: false } }),
        prisma_1.prisma.customerPost.count({ where: { isApproved: false } }),
    ]);
    return {
        totalUsers,
        totalVendors,
        totalCustomers,
        pendingCertifications,
        pendingProducts,
        pendingPosts: pendingVendorPosts + pendingCustomerPosts,
    };
};
const getAllUsersData = async (filters, options) => {
    const { searchTerm, role, status, ...filterData } = filters;
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = options;
    const parsedPage = parseInt(page.toString(), 10) || 1;
    const parsedLimit = parseInt(limit.toString(), 10) || 10;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: [
                { name: { contains: searchTerm, mode: 'insensitive' } },
                { email: { contains: searchTerm, mode: 'insensitive' } },
            ],
        });
    }
    if (role) {
        andConditions.push({ role });
    }
    if (status) {
        andConditions.push({ status });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: filterData[key],
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma_1.prisma.user.findMany({
        where: whereConditions,
        skip: (parsedPage - 1) * parsedLimit,
        take: parsedLimit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            vendorProfile: true,
        },
    });
    const total = await prisma_1.prisma.user.count({ where: whereConditions });
    return {
        data: result,
        meta: {
            page: parsedPage,
            limit: parsedLimit,
            total,
            totalPages: Math.ceil(total / parsedLimit),
        },
    };
};
const getAllVendorsData = async (filters, options) => {
    const { searchTerm, certificationStatus, ...filterData } = filters;
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = options;
    const parsedPage = parseInt(page.toString(), 10) || 1;
    const parsedLimit = parseInt(limit.toString(), 10) || 10;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: [
                { user: { name: { contains: searchTerm, mode: 'insensitive' } } },
                { user: { email: { contains: searchTerm, mode: 'insensitive' } } },
                { farmName: { contains: searchTerm, mode: 'insensitive' } },
                { farmLocation: { contains: searchTerm, mode: 'insensitive' } },
            ],
        });
    }
    if (certificationStatus) {
        andConditions.push({ certificationStatus });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: filterData[key],
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma_1.prisma.vendorProfile.findMany({
        where: whereConditions,
        skip: (parsedPage - 1) * parsedLimit,
        take: parsedLimit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    status: true,
                    createdAt: true,
                },
            },
            produces: {
                take: 3,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    certificationStatus: true,
                },
            },
            rentalSpaces: {
                take: 3,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    location: true,
                    price: true,
                    availability: true,
                },
            },
        },
    });
    const total = await prisma_1.prisma.vendorProfile.count({ where: whereConditions });
    return {
        data: result,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};
const getAllCustomersData = async (filters, options) => {
    const { searchTerm, ...filterData } = filters;
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = options;
    const parsedPage = parseInt(page.toString(), 10) || 1;
    const parsedLimit = parseInt(limit.toString(), 10) || 10;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: [
                { name: { contains: searchTerm, mode: 'insensitive' } },
                { email: { contains: searchTerm, mode: 'insensitive' } },
            ],
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: filterData[key],
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma_1.prisma.user.findMany({
        where: {
            ...whereConditions,
            role: common_1.UserRole.Customer,
        },
        skip: (parsedPage - 1) * parsedLimit,
        take: parsedLimit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            _count: {
                select: {
                    orders: true,
                },
            },
        },
    });
    // Get posts count for each customer
    const customersWithPosts = await Promise.all(result.map(async (customer) => {
        const postsCount = await prisma_1.prisma.customerPost.count({
            where: { userId: customer.id },
        });
        return {
            ...customer,
            postsCount,
            ordersCount: customer._count.orders,
        };
    }));
    const total = await prisma_1.prisma.user.count({
        where: {
            ...whereConditions,
            role: common_1.UserRole.Customer,
        },
    });
    return {
        data: customersWithPosts,
        meta: {
            page: parsedPage,
            limit: parsedLimit,
            total,
            totalPages: Math.ceil(total / parsedLimit),
        },
    };
};
exports.AdminService = {
    // User Management
    getAllUsers,
    getAllUsersData,
    getAllVendorsData,
    getAllCustomersData,
    updateUserRole,
    updateUserStatus,
    // Certification and Verification
    getPendingCertifications,
    approveCertification,
    rejectCertification,
    approveProduce,
    rejectProduce,
    // Content Moderation
    getPendingProduces,
    getAllPosts,
    approvePost,
    deletePost,
    getReports,
    resolveReport,
    // Transaction and Order Monitoring
    getAllOrders,
    getRentalAnalytics,
    getRevenueAnalytics,
    // Dashboard
    getDashboardStats,
    // System Settings
    getRateLimitLogs,
    createAnnouncement,
    getAnnouncements,
    deleteAnnouncement,
};
//# sourceMappingURL=admin.service.js.map