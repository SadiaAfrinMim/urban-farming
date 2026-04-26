
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import type { SignOptions } from 'jsonwebtoken';
import { prisma } from '../../shared/prisma';
import httpStatus from 'http-status';
import { IJWTPayload, UserRole, CertificationStatus, UserStatus } from '../../types/common';
import ApiError from '../../errors/ApiError';
import { jwtHelper } from '../../helpers/jwtHelper';

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

const registerUser = async (payload: {
  name?: string;
  email: string;
  password: string;
  role?: string;
  adminCode?: string;
  farmName?: string;
  farmLocation?: string;
}) => {
  const { name, email, password, role: roleString = 'Customer', adminCode, farmName, farmLocation } = payload;

  const role = roleString === 'Admin' ? UserRole.Admin : roleString === 'Vendor' ? UserRole.Vendor : UserRole.Customer;

  // Admin role registration is now allowed without code for development
  // if (roleString === 'Admin') {
  //   if (adminCode !== 'ADMIN123') {
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid admin code');
  //   }
  // }

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
      name,
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
  }

  return user;
};

const loginUser = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;

  // Ensure admin user exists before login attempt
  await ensureAdminExists();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }

  const jwtSecret = config.jwt.jwt_secret || 'default-secret';
  const expiresIn = config.jwt.expires_in || '7d';
  const refreshSecret = config.jwt.refresh_token_secret || 'default-refresh-secret';
  const refreshExpiresIn = config.jwt.refresh_token_expires_in || '1y';

  console.log('JWT Config Debug:', {
    jwtSecret: jwtSecret ? jwtSecret.substring(0, 10) + '...' : 'undefined',
    expiresIn,
    refreshSecret: refreshSecret ? refreshSecret.substring(0, 10) + '...' : 'undefined',
    refreshExpiresIn
  });

  const accessToken = jwtHelper.generateToken(
    { id: user.id, role: user.role, email: user.email },
    jwtSecret,
    expiresIn as string
  );

  const refreshToken = jwtHelper.generateToken(
    { id: user.id, role: user.role, email: user.email },
    refreshSecret,
    refreshExpiresIn as string
  );

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

const refreshToken = async (token: string) => {
  let decoded;
  try {
    decoded = jwtHelper.verifyToken(token, config.jwt.refresh_token_secret as string);
  } catch (err) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid refresh token');
  }

  const { id } = decoded;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const jwtSecret = config.jwt.jwt_secret || 'default-secret';
  const expiresIn = config.jwt.expires_in || '7d';

  const accessToken = jwtHelper.generateToken(
    { id: user.id, role: user.role, email: user.email },
    jwtSecret,
    expiresIn as string
  );

  return {
    accessToken,
  };
};

const changePassword = async (
  user: IJWTPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  const { oldPassword, newPassword } = payload;

  const existingUser = await prisma.user.findUnique({
    where: { id: user.id },
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
    where: { id: user.id },
    data: { password: hashedNewPassword },
  });
};

export const AuthService = {
  registerUser,
  loginUser,
  refreshToken,
  changePassword,
  ensureAdminExists,
};