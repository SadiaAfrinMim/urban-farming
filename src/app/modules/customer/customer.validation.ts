import { z } from 'zod';

const createCustomerPostZodSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }).min(3, 'Title must be at least 3 characters long').max(100, 'Title must be less than 100 characters'),
  content: z.string({
    required_error: 'Content is required',
  }).min(10, 'Content must be at least 10 characters long').max(1000, 'Content must be less than 1000 characters'),
  category: z.enum(['Question', 'Discussion', 'Review', 'Suggestion'], {
    required_error: 'Category is required',
    invalid_type_error: 'Category must be one of: Question, Discussion, Review, Suggestion',
  }),
});

const updateCustomerPostZodSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long').max(100, 'Title must be less than 100 characters').optional(),
  content: z.string().min(10, 'Content must be at least 10 characters long').max(1000, 'Content must be less than 1000 characters').optional(),
  category: z.enum(['Question', 'Discussion', 'Review', 'Suggestion'], {
    invalid_type_error: 'Category must be one of: Question, Discussion, Review, Suggestion',
  }).optional(),
});

export const CustomerValidation = {
  createCustomerPostZodSchema,
  updateCustomerPostZodSchema,
};