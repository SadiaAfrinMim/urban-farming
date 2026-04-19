import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["Admin", "Vendor", "Customer"]).optional(),
  }),
});

const loginZodSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
  }),
});

const refreshTokenZodSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, "Refresh token is required"),
  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
  }),
});

const updateProfileZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    email: z.string().email("Invalid email address").optional(),
    profilePhoto: z.string().url("Invalid profile photo URL").optional(),
    farmName: z.string().min(1, "Farm name is required").optional(),
    certificationStatus: z.enum(["Pending", "Approved", "Rejected"]).optional(),
    farmLocation: z.string().min(1, "Farm location is required").optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  loginZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
  updateProfileZodSchema,
};