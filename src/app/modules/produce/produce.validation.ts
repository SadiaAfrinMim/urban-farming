import { z } from 'zod';

const createProduce = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().optional(),
    price: z.number().positive('Price must be positive'),
    category: z.string().min(1, 'Category is required'),
    availableQuantity: z.number().int().min(0, 'Quantity must be non-negative'),
  }),
});

const updateProduce = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().positive().optional(),
    category: z.string().optional(),
    availableQuantity: z.number().int().min(0).optional(),
  }),
});

export const ProduceValidation = {
  createProduce,
  updateProduce,
};