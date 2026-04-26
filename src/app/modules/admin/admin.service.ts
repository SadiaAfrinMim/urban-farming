import { prisma } from '../../shared/prisma';
import { UserRole, UserStatus, CertificationStatus } from '../../../../prisma/prisma/generated';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

// User Management
const getAllUsers = async (filters: any, options: any) => {
  const { searchTerm, ...filterData } = filters;
  const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = options;

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

  const result = await prisma.user.findMany({
    where: whereConditions,
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      vendorProfile: true,
    },
  });

  const total = await prisma.user.count({ where: whereConditions });

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

const updateUserRole = async (userId: string, role: UserRole) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { role },
    include: { vendorProfile: true },
  });

  return updatedUser;
};

const updateUserStatus = async (userId: string, status: UserStatus) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { status },
    include: { vendorProfile: true },
  });

  return updatedUser;
};

// Certification and Verification
const getPendingCertifications = async () => {
  const vendors = await prisma.vendorProfile.findMany({
    where: { certificationStatus: CertificationStatus.Pending },
    include: {
      user: true,
      certifications: true,
    },
  });
  return vendors;
};

const approveCertification = async (vendorId: string) => {
  const id = parseInt(vendorId);
  if (isNaN(id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid vendor ID');
  }

  const vendor = await prisma.vendorProfile.findUnique({ where: { id } });
  if (!vendor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor not found');
  }

  const updatedVendor = await prisma.vendorProfile.update({
    where: { id },
    data: { certificationStatus: CertificationStatus.Approved },
    include: { user: true },
  });

  return updatedVendor;
};

const rejectCertification = async (vendorId: string, reason?: string) => {
  const id = parseInt(vendorId);
  if (isNaN(id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid vendor ID');
  }

  const vendor = await prisma.vendorProfile.findUnique({ where: { id } });
  if (!vendor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor not found');
  }

  const updatedVendor = await prisma.vendorProfile.update({
    where: { id },
    data: { certificationStatus: CertificationStatus.Rejected },
    include: { user: true },
  });

  // TODO: Send notification to vendor with reason

  return updatedVendor;
};

const approveProduce = async (produceId: string) => {
  const id = parseInt(produceId);
  if (isNaN(id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid produce ID');
  }

  const produce = await prisma.produce.findUnique({ where: { id } });
  if (!produce) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
  }

  const updatedProduce = await prisma.produce.update({
    where: { id },
    data: { certificationStatus: CertificationStatus.Approved },
    include: { vendor: { include: { user: true } } },
  });

  return updatedProduce;
};

const rejectProduce = async (produceId: string) => {
  const id = parseInt(produceId);
  if (isNaN(id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid produce ID');
  }

  const produce = await prisma.produce.findUnique({ where: { id } });
  if (!produce) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Produce not found');
  }

  const updatedProduce = await prisma.produce.update({
    where: { id },
    data: { certificationStatus: CertificationStatus.Rejected },
    include: { vendor: { include: { user: true } } },
  });

  return updatedProduce;
};

// Content Moderation
const getPendingProduces = async () => {
  const produces = await prisma.produce.findMany({
    where: { certificationStatus: CertificationStatus.Pending },
    include: {
      vendor: { include: { user: true } },
    },
  });
  return produces;
};

const getAllPosts = async () => {
  const posts = await prisma.communityPost.findMany({
    include: {
      user: true,
      reports: true,
    },
    orderBy: { postDate: 'desc' },
  });
  return posts;
};

const approvePost = async (postId: string, adminId: string) => {
  const id = parseInt(postId);
  if (isNaN(id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid post ID');
  }

  const post = await prisma.communityPost.findUnique({ where: { id } });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }

  const updatedPost = await prisma.communityPost.update({
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

const deletePost = async (postId: string) => {
  const id = parseInt(postId);
  if (isNaN(id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid post ID');
  }

  const post = await prisma.communityPost.findUnique({ where: { id } });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }

  await prisma.communityPost.delete({ where: { id } });
  return { message: 'Post deleted successfully' };
};

const getReports = async () => {
  // TODO: Implement Report model in database schema
  // For now, return empty array
  console.warn('Report functionality not implemented - missing Report model in schema');
  return [];
};

const resolveReport = async (reportId: string, adminId: string) => {
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
const getAllOrders = async (filters: any, options: any) => {
  const { page = 1, limit = 10, sortBy = 'orderDate', sortOrder = 'desc' } = options;

  const result = await prisma.order.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      user: true,
      produce: true,
      vendor: { include: { user: true } },
    },
  });

  const total = await prisma.order.count();

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

const getRentalAnalytics = async () => {
  const totalSpaces = await prisma.rentalSpace.count();
  const rentedSpaces = await prisma.rentalSpace.count({
    where: { available: false },
  });

  const rentedPercentage = totalSpaces > 0 ? (rentedSpaces / totalSpaces) * 100 : 0;

  return {
    totalSpaces,
    rentedSpaces,
    rentedPercentage,
  };
};

const getRevenueAnalytics = async () => {
  const orders = await prisma.order.findMany({
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
const getRateLimitLogs = async (options: any) => {
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
      page,
      limit,
      total: 1,
      totalPages: 1,
    },
  };
};

const createAnnouncement = async (adminId: string, data: { title: string; content: string; target: string }) => {
  const announcement = await prisma.announcement.create({
    data: {
      ...data,
      adminId,
    },
  });

  return announcement;
};

const getAnnouncements = async () => {
  const announcements = await prisma.announcement.findMany({
    include: { admin: { select: { name: true, email: true } } },
    orderBy: { createdAt: 'desc' },
  });

  return announcements;
};

const deleteAnnouncement = async (announcementId: string) => {
  const announcement = await prisma.announcement.findUnique({ where: { id: announcementId } });
  if (!announcement) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Announcement not found');
  }

  await prisma.announcement.delete({ where: { id: announcementId } });
  return { message: 'Announcement deleted successfully' };
};

export const AdminService = {
  // User Management
  getAllUsers,
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

  // System Settings
  getRateLimitLogs,
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
};