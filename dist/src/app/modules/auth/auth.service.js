import bcrypt from 'bcryptjs';
import { prisma } from '../../shared/prisma.js';
import { UserRole, UserStatus, CertificationStatus } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError.js';
import { jwtHelper } from '../../helpers/jwtHelper.js';
import config from '../../../config/index.js';
const ensureAdminExists = async () => {
    const adminExists = await prisma.user.findFirst({
        where: { role: UserRole.Admin },
    });
    if (!adminExists) {
        const hashedPassword = await bcrypt.hash('password123', 12);
        await prisma.user.create({
            data: {
                name: 'Admin User',
                email: 'admin@example.com',
                password: hashedPassword,
                role: UserRole.Admin,
                status: UserStatus.Active,
            },
        });
        console.log('Default admin user created: admin@example.com / password123');
    }
};
const registerUser = async (payload) => {
    const { name, email, password, role: roleString = 'Customer', adminCode, farmName, farmLocation } = payload;
    const role = roleString === 'Admin' ? UserRole.Admin : roleString === 'Vendor' ? UserRole.Vendor : UserRole.Customer;
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new ApiError(httpStatus.CONFLICT, 'User with this email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: {
            name: name ?? email.split('@')[0] ?? 'User',
            email,
            password: hashedPassword,
            role,
            status: UserStatus.Active,
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
        await prisma.vendorProfile.create({
            data: {
                farmName: farmName || '',
                farmLocation: farmLocation || '',
                userId: user.id,
                certificationStatus: CertificationStatus.Pending,
            },
        });
        // Notify admins about new vendor registration (async, non-blocking)
        process.nextTick(async () => {
            try {
                console.log('Creating vendor registration notification for user:', user.name);
                const NotificationService = (await import('../notification/notification.service.js')).NotificationService;
                const admins = await prisma.user.findMany({
                    where: { role: UserRole.Admin },
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
                const NotificationService = (await import('../notification/notification.service.js')).NotificationService;
                const admins = await prisma.user.findMany({
                    where: { role: UserRole.Admin },
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
    const jwtSecret = config.jwt.jwt_secret || 'default-secret';
    const accessExpiresIn = config.jwt.expires_in || '7d';
    const refreshExpiresIn = config.jwt.refresh_token_expires_in || '30d';
    const accessToken = jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, accessExpiresIn);
    const refreshToken = jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, refreshExpiresIn);
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
    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    if (user.status !== UserStatus.Active) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Account is not active');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }
    // Generate JWT tokens
    const jwtSecret = config.jwt.jwt_secret || 'default-secret';
    const accessExpiresIn = config.jwt.expires_in || '7d';
    const refreshExpiresIn = config.jwt.refresh_token_expires_in || '30d';
    const accessToken = jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, accessExpiresIn);
    const refreshToken = jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, refreshExpiresIn);
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
        decoded = jwtHelper.verifyToken(token, config.jwt.refresh_token_secret);
    }
    catch (error) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid refresh token');
    }
    const user = await prisma.user.findUnique({
        where: { id: decoded.id },
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    if (user.status !== UserStatus.Active) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Account is not active');
    }
    // Generate new access token
    const jwtSecret = config.jwt.jwt_secret || 'default-secret';
    const accessExpiresIn = config.jwt.expires_in || '7d';
    const accessToken = jwtHelper.generateToken({ id: user.id, role: user.role, email: user.email }, jwtSecret, accessExpiresIn);
    return {
        accessToken,
    };
};
const changePassword = async (user, payload) => {
    const { oldPassword, newPassword } = payload;
    const userIdNumber = parseInt(user.id, 10);
    if (isNaN(userIdNumber)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid user ID');
    }
    const existingUser = await prisma.user.findUnique({
        where: { id: userIdNumber },
    });
    if (!existingUser) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    const isOldPasswordValid = await bcrypt.compare(oldPassword, existingUser.password);
    if (!isOldPasswordValid) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Old password is incorrect');
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 12);
    await prisma.user.update({
        where: { id: userIdNumber },
        data: { password: hashedNewPassword },
    });
};
export const AuthService = {
    ensureAdminExists,
    registerUser,
    loginUser,
    refreshToken,
    changePassword,
};
//# sourceMappingURL=auth.service.js.map