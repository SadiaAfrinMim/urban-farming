import { z } from 'zod';

const loginUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }).email('Invalid email format'),
    password: z.string({
      required_error: 'Password is required',
    }).min(6, 'Password must be at least 6 characters'),
  }),
});

const registerUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }).min(2, 'Name must be at least 2 characters'),
    email: z.string({
      required_error: 'Email is required',
    }).email('Invalid email format'),
    password: z.string({
      required_error: 'Password is required',
    }).min(6, 'Password must be at least 6 characters'),
    role: z.enum(['Customer', 'Vendor', 'Admin'], {
      required_error: 'Role is required',
    }),
    farmName: z.string().optional(),
    farmLocation: z.string().optional(),
    adminCode: z.string().optional(),
  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z.string({
      required_error: 'New password is required',
    }).min(6, 'New password must be at least 6 characters'),
  }),
});

const forgotPasswordZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }).email('Invalid email format'),
  }),
});

const resetPasswordZodSchema = z.object({
  body: z.object({
    token: z.string({
      required_error: 'Token is required',
    }),
    newPassword: z.string({
      required_error: 'New password is required',
    }).min(6, 'New password must be at least 6 characters'),
  }),
});

export const AuthValidation = {
  loginUserZodSchema,
  registerUserZodSchema,
  changePasswordZodSchema,
  forgotPasswordZodSchema,
  resetPasswordZodSchema,
};