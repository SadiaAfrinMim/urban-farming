import { z } from 'zod';

const updateUserRoleZodSchema = z.object({
  body: z.object({
    role: z.enum(['Admin', 'Vendor', 'Customer'], {
      required_error: 'Role is required',
    }),
  }),
});

const updateUserStatusZodSchema = z.object({
  body: z.object({
    status: z.enum(['Active', 'Pending', 'Suspended'], {
      required_error: 'Status is required',
    }),
  }),
});

const rejectCertificationZodSchema = z.object({
  params: z.object({
    vendorId: z.string({
      required_error: 'Vendor ID is required',
    }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid vendor ID'),
  }),
  body: z.object({
    reason: z.string().optional(),
  }),
});

const createAnnouncementZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).min(1, 'Title cannot be empty').max(200, 'Title too long'),
    content: z.string({
      required_error: 'Content is required',
    }).min(1, 'Content cannot be empty').max(2000, 'Content too long'),
    target: z.enum(['All', 'Vendors', 'Customers', 'Admins']).default('All'),
  }),
});

const deleteAnnouncementZodSchema = z.object({
  params: z.object({
    announcementId: z.string({
      required_error: 'Announcement ID is required',
    }).uuid('Invalid announcement ID'),
  }),
});

const resolveReportZodSchema = z.object({
  params: z.object({
    reportId: z.string({
      required_error: 'Report ID is required',
    }).uuid('Invalid report ID'),
  }),
});

const approvePostZodSchema = z.object({
  params: z.object({
    postId: z.string({
      required_error: 'Post ID is required',
    }).transform(val => parseInt(val)).refine(val => !isNaN(val), 'Invalid post ID'),
  }),
});

const deletePostZodSchema = z.object({
  params: z.object({
    postId: z.string({
      required_error: 'Post ID is required',
    }).transform(val => parseInt(val)).refine(val => !isNaN(val), 'Invalid post ID'),
  }),
});

const approveProduceZodSchema = z.object({
  params: z.object({
    produceId: z.string({
      required_error: 'Produce ID is required',
    }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid produce ID'),
  }),
});

const rejectProduceZodSchema = z.object({
  params: z.object({
    produceId: z.string({
      required_error: 'Produce ID is required',
    }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid produce ID'),
  }),
});

const approveCertificationZodSchema = z.object({
  params: z.object({
    vendorId: z.string({
      required_error: 'Vendor ID is required',
    }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid vendor ID'),
  }),
});

const getUsersQuerySchema = z.object({
  query: z.object({
    searchTerm: z.string().optional(),
    role: z.enum(['Admin', 'Vendor', 'Customer']).optional(),
    status: z.enum(['Active', 'Pending', 'Suspended']).optional(),
    limit: z.string().transform(val => parseInt(val)).refine(val => val > 0 && val <= 100, 'Limit must be between 1-100').optional(),
    page: z.string().transform(val => parseInt(val)).refine(val => val > 0, 'Page must be greater than 0').optional(),
    sortBy: z.enum(['createdAt', 'name', 'email']).optional(),
    sortOrder: z.enum(['asc', 'desc']).optional(),
  }),
});

const getOrdersQuerySchema = z.object({
  query: z.object({
    limit: z.string().transform(val => parseInt(val)).refine(val => val > 0 && val <= 100, 'Limit must be between 1-100').optional(),
    page: z.string().transform(val => parseInt(val)).refine(val => val > 0, 'Page must be greater than 0').optional(),
    sortBy: z.enum(['orderDate', 'totalAmount', 'status']).optional(),
    sortOrder: z.enum(['asc', 'desc']).optional(),
  }),
});

export const AdminValidation = {
  updateUserRoleZodSchema,
  updateUserStatusZodSchema,
  rejectCertificationZodSchema,
  createAnnouncementZodSchema,
  deleteAnnouncementZodSchema,
  resolveReportZodSchema,
  approvePostZodSchema,
  deletePostZodSchema,
  approveProduceZodSchema,
  rejectProduceZodSchema,
  approveCertificationZodSchema,
  getUsersQuerySchema,
  getOrdersQuerySchema,
};