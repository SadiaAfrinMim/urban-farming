import { z } from "zod";
export declare const UserValidation: {
    createUserZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodOptional<z.ZodEnum<{
                Admin: "Admin";
                Vendor: "Vendor";
                Customer: "Customer";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    loginZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    refreshTokenZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            refreshToken: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    changePasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            oldPassword: z.ZodString;
            newPassword: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=user.validation.d.ts.map