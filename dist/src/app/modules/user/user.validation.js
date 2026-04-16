"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email("Invalid email address"),
        password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
        role: zod_1.z.enum(["Admin", "Vendor", "Customer"]).optional(),
    }),
});
const loginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email("Invalid email address"),
        password: zod_1.z.string().min(1, "Password is required"),
    }),
});
const refreshTokenZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        refreshToken: zod_1.z.string().min(1, "Refresh token is required"),
    }),
});
const changePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string().min(1, "Old password is required"),
        newPassword: zod_1.z.string().min(6, "New password must be at least 6 characters"),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    loginZodSchema,
    refreshTokenZodSchema,
    changePasswordZodSchema,
};
//# sourceMappingURL=user.validation.js.map