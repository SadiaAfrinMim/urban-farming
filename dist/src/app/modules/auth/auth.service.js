"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_js_1 = require("../../shared/prisma.js");
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_js_1 = __importDefault(require("../../errors/ApiError.js"));
const jwtHelper_js_1 = require("../../helpers/jwtHelper.js");
const index_js_1 = __importDefault(require("../../../config/index.js"));
const ensureAdminExists = async () => {
    const adminExists = await prisma_js_1.prisma.user.findFirst({
        where: { role: client_1.UserRole.Admin },
    });
    if (!adminExists) {
        const hashedPassword = await bcryptjs_1.default.hash('password123', 12);
        await prisma_js_1.prisma.user.create({
            data: {
                name: 'Admin User',
                email: 'admin@example.com',
                password: hashedPassword,
                role: client_1.UserRole.Admin,
                status: client_1.UserStatus.Active,
            },
        });
        console.log('Default admin user created: admin@example.com / password123');
    }
};
const registerUser = async (payload) => {
    const { name, email, password, role: roleString = 'Customer', adminCode, farmName, farmLocation } = payload;
    const role = roleString === 'Admin' ? client_1.UserRole.Admin : roleString === 'Vendor' ? client_1.UserRole.Vendor : client_1.UserRole.Customer;
    // Check if user already exists
    const existingUser = await prisma_js_1.prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new ApiError_js_1.default(http_status_1.default.CONFLICT, 'User with this email already exists');
    }
    const hashedPassword = await bcryptjs_1.default.hash(password, 12);
    const user = await prisma_js_1.prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role,
            status: client_1.UserStatus.Active,
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
        await prisma_js_1.prisma.vendorProfile.create({
            data: {
                farmName: farmName || '',
                farmLocation: farmLocation || '',
                userId: user.id,
                certificationStatus: client_1.CertificationStatus.Pending,
            },
        });
        // Notify admins about new vendor registration (async, non-blocking)
        process.nextTick(async () => {
            try {
                console.log('Creating vendor registration notification for user:', user.name);
                const NotificationService = (await Promise.resolve().then(() => __importStar(require('../notification/notification.service.js')))).NotificationService;
                const admins = await prisma_js_1.prisma.user.findMany({
                    where: { role: client_1.UserRole.Admin },
                });
                console.log('Found admins:', admins.length);
                for (const admin of admins) {
                    console.log('Creating notification for admin:', admin.id);
                    await NotificationService.createNotification(admin.id, 'SYSTEM', 'New Vendor Registration', `New vendor "${user.name}" has registered and needs certification approval.`, {
                        userId: user.id,
                        userName: user.name,
                        userEmail: user.email,
                        type: 'vendor_registration',
                    });
                }
            }
            catch (error) {
                console.error('Failed to create vendor registration notification:', error);
            }
        });
    }
    // Notify admins about new customer registration (async, non-blocking)
    if (roleString === 'Customer') {
        process.nextTick(async () => {
            try {
                console.log('Creating customer registration notification for user:', user.name);
                const NotificationService = (await Promise.resolve().then(() => __importStar(require('../notification/notification.service.js')))).NotificationService;
                const admins = await prisma_js_1.prisma.user.findMany({
                    where: { role: client_1.UserRole.Admin },
                });
                console.log('Found admins for customer notification:', admins.length);
                for (const admin of admins) {
                    console.log('Creating customer notification for admin:', admin.id);
                    await NotificationService.createNotification(admin.id, 'SYSTEM', 'New Customer Registration', `New customer "${user.name}" has registered.`, {
                        userId: user.id,
                        userName: user.name,
                        userEmail: user.email,
                        type: 'customer_registration',
                    });
                }
            }
            catch (error) {
                console.error('Failed to create customer registration notification:', error);
            }
        });
    }
    // Generate JWT tokens
    const jwtSecret = index_js_1.default.jwt.jwt_secret || 'default-secret';
    const accessExpiresIn = index_js_1.default.jwt.expires_in || '7d';
    const refreshExpiresIn = index_js_1.default.jwt.refresh_token_expires_in || '30d';
    const accessToken = jwtHelper_js_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, accessExpiresIn);
    const refreshToken = jwtHelper_js_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, refreshExpiresIn);
    return {
        user,
        accessToken,
        refreshToken,
    };
};
const loginUser = async (payload) => {
    const { email, password } = payload;
    // Ensure admin user exists before login attempt
    await ensureAdminExists();
    const user = await prisma_js_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    if (user.status !== client_1.UserStatus.Active) {
        throw new ApiError_js_1.default(http_status_1.default.FORBIDDEN, 'Account is not active');
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError_js_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid credentials');
    }
    // Generate JWT tokens
    const jwtSecret = index_js_1.default.jwt.jwt_secret || 'default-secret';
    const accessExpiresIn = index_js_1.default.jwt.expires_in || '7d';
    const refreshExpiresIn = index_js_1.default.jwt.refresh_token_expires_in || '30d';
    const accessToken = jwtHelper_js_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, accessExpiresIn);
    const refreshToken = jwtHelper_js_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, refreshExpiresIn);
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
        decoded = jwtHelper_js_1.jwtHelper.verifyToken(token, index_js_1.default.jwt.refresh_token_secret);
    }
    catch (error) {
        throw new ApiError_js_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid refresh token');
    }
    const user = await prisma_js_1.prisma.user.findUnique({
        where: { id: decoded.id },
    });
    if (!user) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    if (user.status !== client_1.UserStatus.Active) {
        throw new ApiError_js_1.default(http_status_1.default.FORBIDDEN, 'Account is not active');
    }
    // Generate new access token
    const jwtSecret = index_js_1.default.jwt.jwt_secret || 'default-secret';
    const accessExpiresIn = index_js_1.default.jwt.expires_in || '7d';
    const accessToken = jwtHelper_js_1.jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, accessExpiresIn);
    return {
        accessToken,
    };
};
const changePassword = async (user, payload) => {
    const { oldPassword, newPassword } = payload;
    const userIdNumber = parseInt(user.id, 10);
    if (isNaN(userIdNumber)) {
        throw new ApiError_js_1.default(http_status_1.default.BAD_REQUEST, 'Invalid user ID');
    }
    const existingUser = await prisma_js_1.prisma.user.findUnique({
        where: { id: userIdNumber },
    });
    if (!existingUser) {
        throw new ApiError_js_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const isOldPasswordValid = await bcryptjs_1.default.compare(oldPassword, existingUser.password);
    if (!isOldPasswordValid) {
        throw new ApiError_js_1.default(http_status_1.default.UNAUTHORIZED, 'Old password is incorrect');
    }
    const hashedNewPassword = await bcryptjs_1.default.hash(newPassword, 12);
    await prisma_js_1.prisma.user.update({
        where: { id: userIdNumber },
        data: { password: hashedNewPassword },
    });
};
exports.AuthService = {
    ensureAdminExists,
    registerUser,
    loginUser,
    refreshToken,
    changePassword,
};
//# sourceMappingURL=auth.service.js.map