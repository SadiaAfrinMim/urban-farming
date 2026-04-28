import { z } from 'zod';
export declare const AuthValidation: {
    loginUserZodSchema: z.ZodObject<{
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
    registerUserZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodEnum<["Customer", "Vendor", "Admin"]>;
            farmName: z.ZodOptional<z.ZodString>;
            farmLocation: z.ZodOptional<z.ZodString>;
            adminCode: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email: string;
            password: string;
            role: "Admin" | "Vendor" | "Customer";
            adminCode?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
        }, {
            name: string;
            email: string;
            password: string;
            role: "Admin" | "Vendor" | "Customer";
            adminCode?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            name: string;
            email: string;
            password: string;
            role: "Admin" | "Vendor" | "Customer";
            adminCode?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
        };
    }, {
        body: {
            name: string;
            email: string;
            password: string;
            role: "Admin" | "Vendor" | "Customer";
            adminCode?: string | undefined;
            farmName?: string | undefined;
            farmLocation?: string | undefined;
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
    forgotPasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            email: string;
        }, {
            email: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            email: string;
        };
    }, {
        body: {
            email: string;
        };
    }>;
    resetPasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            token: z.ZodString;
            newPassword: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            token: string;
        }, {
            newPassword: string;
            token: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            newPassword: string;
            token: string;
        };
    }, {
        body: {
            newPassword: string;
            token: string;
        };
    }>;
};
//# sourceMappingURL=auth.validation.d.ts.map