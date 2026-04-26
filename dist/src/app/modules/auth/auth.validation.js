"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required',
        }).email('Invalid email format'),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }).min(6, 'Password must be at least 6 characters'),
    }),
});
const registerUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }).min(2, 'Name must be at least 2 characters'),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }).email('Invalid email format'),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }).min(6, 'Password must be at least 6 characters'),
        role: zod_1.z.enum(['Customer', 'Vendor', 'Admin'], {
            required_error: 'Role is required',
        }),
        farmName: zod_1.z.string().optional(),
        farmLocation: zod_1.z.string().optional(),
        adminCode: zod_1.z.string().optional(),
    }),
});
const changePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string({
            required_error: 'Old password is required',
        }),
        newPassword: zod_1.z.string({
            required_error: 'New password is required',
        }).min(6, 'New password must be at least 6 characters'),
    }),
});
const forgotPasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required',
        }).email('Invalid email format'),
    }),
});
const resetPasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        token: zod_1.z.string({
            required_error: 'Token is required',
        }),
        newPassword: zod_1.z.string({
            required_error: 'New password is required',
        }).min(6, 'New password must be at least 6 characters'),
    }),
});
exports.AuthValidation = {
    loginUserZodSchema,
    registerUserZodSchema,
    changePasswordZodSchema,
    forgotPasswordZodSchema,
    resetPasswordZodSchema,
};
//# sourceMappingURL=auth.validation.js.map