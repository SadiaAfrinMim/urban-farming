import { z } from 'zod';
export declare const CustomerValidation: {
    createCustomerPostZodSchema: z.ZodObject<{
        title: z.ZodString;
        content: z.ZodString;
        category: z.ZodEnum<["Question", "Discussion", "Review", "Suggestion"]>;
    }, "strip", z.ZodTypeAny, {
        category: "Question" | "Discussion" | "Review" | "Suggestion";
        content: string;
        title: string;
    }, {
        category: "Question" | "Discussion" | "Review" | "Suggestion";
        content: string;
        title: string;
    }>;
    updateCustomerPostZodSchema: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodEnum<["Question", "Discussion", "Review", "Suggestion"]>>;
    }, "strip", z.ZodTypeAny, {
        category?: "Question" | "Discussion" | "Review" | "Suggestion" | undefined;
        content?: string | undefined;
        title?: string | undefined;
    }, {
        category?: "Question" | "Discussion" | "Review" | "Suggestion" | undefined;
        content?: string | undefined;
        title?: string | undefined;
    }>;
};
//# sourceMappingURL=customer.validation.d.ts.map