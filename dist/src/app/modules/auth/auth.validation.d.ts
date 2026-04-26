import { z } from 'zod';
export declare const AuthValidation: {
    loginUserZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    registerUserZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodEnum<{
                Admin: "Admin";
                Vendor: "Vendor";
                Customer: "Customer";
            }>;
            farmName: z.ZodOptional<z.ZodString>;
            farmLocation: z.ZodOptional<z.ZodString>;
            adminCode: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    changePasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            oldPassword: z.ZodString;
            newPassword: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    forgotPasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    resetPasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            token: z.ZodString;
            newPassword: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map