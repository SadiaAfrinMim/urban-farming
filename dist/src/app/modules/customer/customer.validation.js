"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidation = void 0;
const zod_1 = require("zod");
const createCustomerPostZodSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: 'Title is required',
    }).min(3, 'Title must be at least 3 characters long').max(100, 'Title must be less than 100 characters'),
    content: zod_1.z.string({
        required_error: 'Content is required',
    }).min(10, 'Content must be at least 10 characters long').max(1000, 'Content must be less than 1000 characters'),
    category: zod_1.z.enum(['Question', 'Discussion', 'Review', 'Suggestion'], {
        required_error: 'Category is required',
        invalid_type_error: 'Category must be one of: Question, Discussion, Review, Suggestion',
    }),
});
const updateCustomerPostZodSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, 'Title must be at least 3 characters long').max(100, 'Title must be less than 100 characters').optional(),
    content: zod_1.z.string().min(10, 'Content must be at least 10 characters long').max(1000, 'Content must be less than 1000 characters').optional(),
    category: zod_1.z.enum(['Question', 'Discussion', 'Review', 'Suggestion'], {
        invalid_type_error: 'Category must be one of: Question, Discussion, Review, Suggestion',
    }).optional(),
});
exports.CustomerValidation = {
    createCustomerPostZodSchema,
    updateCustomerPostZodSchema,
};
//# sourceMappingURL=customer.validation.js.map