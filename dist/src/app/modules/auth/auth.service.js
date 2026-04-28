"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../../../config"));
const prisma_1 = require("../../shared/prisma");
const http_status_1 = __importDefault(require("http-status"));
const common_1 = require("../../types/common");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const jwtHelper_1 = require("../../helpers/jwtHelper");
const ensureAdminExists = async () => {
    const adminExists = await prisma_1.prisma.user.findFirst({
        where: { role: common_1.UserRole.Admin },
    });
    if (!adminExists) {
        const hashedPassword = await bcryptjs_1.default.hash('password123', 12);
        await prisma_1.prisma.user.create({
            data: {
                name: 'Admin User',
                email: 'admin@example.com',
                password: hashedPassword,
                role: common_1.UserRole.Admin,
                status: common_1.UserStatus.Active,
            },
        });
        console.log('Default admin user created: admin@example.com / password123');
    }
};
const registerUser = async (payload) => {
    const { name, email, password, role: roleString = 'Customer', adminCode, farmName, farmLocation } = payload;
    const role = roleString === 'Admin' ? common_1.UserRole.Admin : roleString === 'Vendor' ? common_1.UserRole.Vendor : common_1.UserRole.Customer;
    // Admin role registration is now allowed without code for development
    // if (roleString === 'Admin') {
    //   if (adminCode !== 'ADMIN123') {
    //     throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid admin code');
    //   }
    // }
    // Check if user already exists
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'User with this email already exists');
    }
    const hashedPassword = await bcryptjs_1.default.hash(password, 12);
    const user = await prisma_1.prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role,
            status: common_1.UserStatus.Active,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    if (roleString === 'Vendor') {
        await prisma_1.prisma.vendorProfile.create({
            data: {
                farmName: farmName || '',
                farmLocation: farmLocation || '',
                userId: user.id,
                certificationStatus: common_1.CertificationStatus.Pending,
            },
        });
    }
    return user;
};
const loginUser = async (payload) => {
    const { email, password } = payload;
    // Ensure admin user exists before login attempt
    await ensureAdminExists();
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid credentials');
    }
    const jwtSecret = config_1.default.jwt.jwt_secret || 'default-secret';
    const expiresIn = config_1.default.jwt.expires_in || '7d';
    const refreshSecret = config_1.default.jwt.refresh_token_secret || 'default-refresh-secret';
    const refreshExpiresIn = config_1.default.jwt.refresh_token_expires_in || '1y';
    console.log('JWT Config Debug:', {
        jwtSecret: jwtSecret ? jwtSecret.substring(0, 10) + '...' : 'undefined',
        expiresIn,
        refreshSecret: refreshSecret ? refreshSecret.substring(0, 10) + '...' : 'undefined',
        refreshExpiresIn
    });
    const accessToken = jwtHelper_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, expiresIn);
    const refreshToken = jwtHelper_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, refreshSecret, refreshExpiresIn);
    console.log('Generated Tokens:', {
        accessTokenLength: accessToken.length,
        accessTokenStart: accessToken.substring(0, 20) + '...',
        refreshTokenLength: refreshToken.length,
        refreshTokenStart: refreshToken.substring(0, 20) + '...'
    });
    return {
        accessToken,
        refreshToken,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
};
const refreshToken = async (token) => {
    let decoded;
    try {
        decoded = jwtHelper_1.jwtHelper.verifyToken(token, config_1.default.jwt.refresh_token_secret);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid refresh token');
    }
    const { id } = decoded;
    const userIdNumber = parseInt(id, 10);
    if (isNaN(userIdNumber)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID in token');
    }
    const user = await prisma_1.prisma.user.findUnique({
        where: { id: userIdNumber },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const jwtSecret = config_1.default.jwt.jwt_secret || 'default-secret';
    const expiresIn = config_1.default.jwt.expires_in || '7d';
    const accessToken = jwtHelper_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, expiresIn);
    return {
        accessToken,
    };
};
const changePassword = async (user, payload) => {
    const { oldPassword, newPassword } = payload;
    const userIdNumber = parseInt(user.id, 10);
    if (isNaN(userIdNumber)) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
    }
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { id: userIdNumber },
    });
    if (!existingUser) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const isOldPasswordValid = await bcryptjs_1.default.compare(oldPassword, existingUser.password);
    if (!isOldPasswordValid) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Old password is incorrect');
    }
    const hashedNewPassword = await bcryptjs_1.default.hash(newPassword, 12);
    await prisma_1.prisma.user.update({
        where: { id: userIdNumber },
        data: { password: hashedNewPassword },
    });
};
exports.AuthService = {
    registerUser,
    loginUser,
    refreshToken,
    changePassword,
    ensureAdminExists,
};
//# sourceMappingURL=auth.service.js.map