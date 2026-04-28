import { z } from 'zod';
export declare const UserValidation: {
    createUserZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodOptional<z.ZodEnum<["Admin", "Vendor", "Customer"]>>;
            adminCode: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            password: string;
            name?: string | undefined;
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            adminCode?: string | undefined;
        }, {
            email: string;
            password: string;
            name?: string | undefined;
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            adminCode?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            email: string;
            password: string;
            name?: string | undefined;
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            adminCode?: string | undefined;
        };
    }, {
        body: {
            email: string;
            password: string;
            name?: string | undefined;
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            adminCode?: string | undefined;
        };
    }>;
    createVendorZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
            password: z.ZodString;
            farmName: z.ZodString;
            farmLocation: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email: string;
            password: string;
            farmName: string;
            farmLocation: string;
        }, {
            name: string;
            email: string;
            password: string;
            farmName: string;
            farmLocation: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            name: string;
            email: string;
            password: string;
            farmName: string;
            farmLocation: string;
        };
    }, {
        body: {
            name: string;
            email: string;
            password: string;
            farmName: string;
            farmLocation: string;
        };
    }>;
    updateProfileZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            farmName: z.ZodOptional<z.ZodString>;
            farmLocation: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            email?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
        }, {
            name?: string | undefined;
            email?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            name?: string | undefined;
            email?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
        };
    }, {
        body: {
            name?: string | undefined;
            email?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
        };
    }>;
    loginZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
            password: string;
        }, {
            email: string;
            password: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            email: string;
            password: string;
        };
    }, {
        body: {
            email: string;
            password: string;
        };
    }>;
    refreshTokenZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            refreshToken: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            refreshToken: string;
        }, {
            refreshToken: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            refreshToken: string;
        };
    }, {
        body: {
            refreshToken: string;
        };
    }>;
    changePasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            oldPassword: z.ZodString;
            newPassword: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            oldPassword: string;
            newPassword: string;
        }, {
            oldPassword: string;
            newPassword: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            oldPassword: string;
            newPassword: string;
        };
    }, {
        body: {
            oldPassword: string;
            newPassword: string;
        };
    }>;
};
//# sourceMappingURL=user.validation.d.ts.map