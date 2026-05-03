"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation = void 0;
const zod_1 = require("zod");
const updateUserRoleZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        role: zod_1.z.enum(['Admin', 'Vendor', 'Customer'], {
            required_error: 'Role is required',
        }),
    }),
});
const updateUserStatusZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(['Active', 'Pending', 'Suspended'], {
            required_error: 'Status is required',
        }),
    }),
});
const rejectCertificationZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        vendorId: zod_1.z.string({
            required_error: 'Vendor ID is required',
        }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid vendor ID'),
    }),
    body: zod_1.z.object({
        reason: zod_1.z.string().optional(),
    }),
});
const createAnnouncementZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }).min(1, 'Title cannot be empty').max(200, 'Title too long'),
        content: zod_1.z.string({
            required_error: 'Content is required',
        }).min(1, 'Content cannot be empty').max(2000, 'Content too long'),
        target: zod_1.z.enum(['All', 'Vendors', 'Customers', 'Admins']).default('All'),
    }),
});
const deleteAnnouncementZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        announcementId: zod_1.z.string({
            required_error: 'Announcement ID is required',
        }).uuid('Invalid announcement ID'),
    }),
});
const resolveReportZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        reportId: zod_1.z.string({
            required_error: 'Report ID is required',
        }).uuid('Invalid report ID'),
    }),
});
const approvePostZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        postId: zod_1.z.string({
            required_error: 'Post ID is required',
        }).transform(val => parseInt(val)).refine(val => !isNaN(val), 'Invalid post ID'),
    }),
});
const deletePostZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        postId: zod_1.z.string({
            required_error: 'Post ID is required',
        }).transform(val => parseInt(val)).refine(val => !isNaN(val), 'Invalid post ID'),
    }),
});
const approveProduceZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        produceId: zod_1.z.string({
            required_error: 'Produce ID is required',
        }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid produce ID'),
    }),
});
const rejectProduceZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        produceId: zod_1.z.string({
            required_error: 'Produce ID is required',
        }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid produce ID'),
    }),
});
const approveCertificationZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        vendorId: zod_1.z.string({
            required_error: 'Vendor ID is required',
        }).transform(val => parseInt(val)).refine(val => !isNaN(val) && val > 0, 'Invalid vendor ID'),
    }),
});
const getUsersQuerySchema = zod_1.z.object({
    query: zod_1.z.object({
        searchTerm: zod_1.z.string().optional(),
        role: zod_1.z.enum(['Admin', 'Vendor', 'Customer']).optional(),
        status: zod_1.z.enum(['Active', 'Pending', 'Suspended']).optional(),
        limit: zod_1.z.string().transform(val => parseInt(val)).refine(val => val > 0 && val <= 100, 'Limit must be between 1-100').optional(),
        page: zod_1.z.string().transform(val => parseInt(val)).refine(val => val > 0, 'Page must be greater than 0').optional(),
        sortBy: zod_1.z.enum(['createdAt', 'name', 'email']).optional(),
        sortOrder: zod_1.z.enum(['asc', 'desc']).optional(),
    }),
});
const getOrdersQuerySchema = zod_1.z.object({
    query: zod_1.z.object({
        limit: zod_1.z.string().transform(val => parseInt(val)).refine(val => val > 0 && val <= 100, 'Limit must be between 1-100').optional(),
        page: zod_1.z.string().transform(val => parseInt(val)).refine(val => val > 0, 'Page must be greater than 0').optional(),
        sortBy: zod_1.z.enum(['orderDate', 'totalAmount', 'status']).optional(),
        sortOrder: zod_1.z.enum(['asc', 'desc']).optional(),
    }),
});
exports.AdminValidation = {
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
//# sourceMappingURL=admin.validation.js.map