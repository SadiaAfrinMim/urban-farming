import { z } from 'zod';
export declare const AdminValidation: {
    updateUserRoleZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            role: z.ZodEnum<{
                Admin: "Admin";
                Vendor: "Vendor";
                Customer: "Customer";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateUserStatusZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            status: z.ZodEnum<{
                Active: "Active";
                Pending: "Pending";
                Suspended: "Suspended";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    rejectCertificationZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            vendorId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        body: z.ZodObject<{
            reason: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    createAnnouncementZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            content: z.ZodString;
            target: z.ZodDefault<z.ZodEnum<{
                All: "All";
                Vendors: "Vendors";
                Customers: "Customers";
                Admins: "Admins";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    deleteAnnouncementZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            announcementId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    resolveReportZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            reportId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    approvePostZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            postId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    deletePostZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            postId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    approveProduceZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            produceId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    rejectProduceZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            produceId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    approveCertificationZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            vendorId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    getUsersQuerySchema: z.ZodObject<{
        query: z.ZodObject<{
            searchTerm: z.ZodOptional<z.ZodString>;
            role: z.ZodOptional<z.ZodEnum<{
                Admin: "Admin";
                Vendor: "Vendor";
                Customer: "Customer";
            }>>;
            status: z.ZodOptional<z.ZodEnum<{
                Active: "Active";
                Pending: "Pending";
                Suspended: "Suspended";
            }>>;
            limit: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
            page: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
            sortBy: z.ZodOptional<z.ZodEnum<{
                name: "name";
                email: "email";
                createdAt: "createdAt";
            }>>;
            sortOrder: z.ZodOptional<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    getOrdersQuerySchema: z.ZodObject<{
        query: z.ZodObject<{
            limit: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
            page: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
            sortBy: z.ZodOptional<z.ZodEnum<{
                status: "status";
                orderDate: "orderDate";
                totalAmount: "totalAmount";
            }>>;
            sortOrder: z.ZodOptional<z.ZodEnum<{
                asc: "asc";
                desc: "desc";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=admin.validation.d.ts.map