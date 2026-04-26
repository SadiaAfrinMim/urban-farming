import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    role: z.enum(['Admin', 'Vendor', 'Customer']).optional(),
    adminCode: z.string().optional(),
  }),
});

const createVendorZodSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    farmName: z.string().min(1, 'Farm name is required'),
    farmLocation: z.string().min(1, 'Farm location is required'),
  }),
});

const updateProfileZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    farmName: z.string().optional(),
    farmLocation: z.string().optional(),
  }),
});

const loginZodSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  }),
});

const refreshTokenZodSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, 'Refresh token is required'),
  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string().min(1, 'Old password is required'),
    newPassword: z.string().min(6, 'New password must be at least 6 characters'),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  createVendorZodSchema,
  updateProfileZodSchema,
  loginZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
};