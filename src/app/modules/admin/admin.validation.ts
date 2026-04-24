import { z } from 'zod';

const updateUserRole = z.object({
  body: z.object({
    role: z.enum(['Admin', 'Vendor', 'Customer']),
  }),
});

const updateUserStatus = z.object({
  body: z.object({
    status: z.enum(['Active', 'Pending', 'Suspended']),
  }),
});

const rejectCertification = z.object({
  body: z.object({
    reason: z.string().optional(),
  }),
});

const createAnnouncement = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required'),
    target: z.enum(['all', 'vendors', 'customers']).default('all'),
  }),
});

export const AdminValidation = {
  updateUserRole,
  updateUserStatus,
  rejectCertification,
  createAnnouncement,
};