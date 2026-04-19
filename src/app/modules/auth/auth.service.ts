
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import config from '../../../config';
import { prisma } from '../../shared/prisma';
import httpStatus from 'http-status';
import { IJWTPayload, UserRole } from '../../types/common';
import ApiError from '../../errors/ApiError';

const registerUser = async (payload: {
  name?: string;
  email: string;
  password: string;
  role?: UserRole;
}) => {
  const { name, email, password, role = UserRole.Customer } = payload;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name: name || null,
      email,
      password: hashedPassword,
      role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return user;
};

const loginUser = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;

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

  const accessToken = jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    config.jwt.jwt_secret!,
    { expiresIn: config.jwt.expires_in! }
  );

  const refreshToken = jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    config.jwt.refresh_token_secret!,
    { expiresIn: config.jwt.refresh_token_expires_in! }
  );

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
    decoded = jwt.verify(token, config.jwt.refresh_token_secret as string) as IJWTPayload;
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

  const accessToken = jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    config.jwt.jwt_secret!,
    { expiresIn: config.jwt.expires_in! }
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
};