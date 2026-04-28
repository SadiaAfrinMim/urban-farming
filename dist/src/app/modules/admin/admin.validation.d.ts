import { z } from 'zod';
export declare const AdminValidation: {
    updateUserRoleZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            role: z.ZodEnum<["Admin", "Vendor", "Customer"]>;
        }, "strip", z.ZodTypeAny, {
            role: "Admin" | "Vendor" | "Customer";
        }, {
            role: "Admin" | "Vendor" | "Customer";
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            role: "Admin" | "Vendor" | "Customer";
        };
    }, {
        body: {
            role: "Admin" | "Vendor" | "Customer";
        };
    }>;
    updateUserStatusZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            status: z.ZodEnum<["Active", "Pending", "Suspended"]>;
        }, "strip", z.ZodTypeAny, {
            status: "Active" | "Pending" | "Suspended";
        }, {
            status: "Active" | "Pending" | "Suspended";
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            status: "Active" | "Pending" | "Suspended";
        };
    }, {
        body: {
            status: "Active" | "Pending" | "Suspended";
        };
    }>;
    rejectCertificationZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            vendorId: z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>;
        }, "strip", z.ZodTypeAny, {
            vendorId: number;
        }, {
            vendorId: string;
        }>;
        body: z.ZodObject<{
            reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reason?: string | undefined;
        }, {
            reason?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            vendorId: number;
        };
        body: {
            reason?: string | undefined;
        };
    }, {
        params: {
            vendorId: string;
        };
        body: {
            reason?: string | undefined;
        };
    }>;
    createAnnouncementZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            content: z.ZodString;
            target: z.ZodDefault<z.ZodEnum<["All", "Vendors", "Customers", "Admins"]>>;
        }, "strip", z.ZodTypeAny, {
            content: string;
            title: string;
            target: "All" | "Vendors" | "Customers" | "Admins";
        }, {
            content: string;
            title: string;
            target?: "All" | "Vendors" | "Customers" | "Admins" | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            content: string;
            title: string;
            target: "All" | "Vendors" | "Customers" | "Admins";
        };
    }, {
        body: {
            content: string;
            title: string;
            target?: "All" | "Vendors" | "Customers" | "Admins" | undefined;
        };
    }>;
    deleteAnnouncementZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            announcementId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            announcementId: string;
        }, {
            announcementId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            announcementId: string;
        };
    }, {
        params: {
            announcementId: string;
        };
    }>;
    resolveReportZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            reportId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reportId: string;
        }, {
            reportId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            reportId: string;
        };
    }, {
        params: {
            reportId: string;
        };
    }>;
    approvePostZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            postId: z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>;
        }, "strip", z.ZodTypeAny, {
            postId: number;
        }, {
            postId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            postId: number;
        };
    }, {
        params: {
            postId: string;
        };
    }>;
    deletePostZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            postId: z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>;
        }, "strip", z.ZodTypeAny, {
            postId: number;
        }, {
            postId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            postId: number;
        };
    }, {
        params: {
            postId: string;
        };
    }>;
    approveProduceZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            produceId: z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>;
        }, "strip", z.ZodTypeAny, {
            produceId: number;
        }, {
            produceId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            produceId: number;
        };
    }, {
        params: {
            produceId: string;
        };
    }>;
    rejectProduceZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            produceId: z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>;
        }, "strip", z.ZodTypeAny, {
            produceId: number;
        }, {
            produceId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            produceId: number;
        };
    }, {
        params: {
            produceId: string;
        };
    }>;
    approveCertificationZodSchema: z.ZodObject<{
        params: z.ZodObject<{
            vendorId: z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>;
        }, "strip", z.ZodTypeAny, {
            vendorId: number;
        }, {
            vendorId: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        params: {
            vendorId: number;
        };
    }, {
        params: {
            vendorId: string;
        };
    }>;
    getUsersQuerySchema: z.ZodObject<{
        query: z.ZodObject<{
            searchTerm: z.ZodOptional<z.ZodString>;
            role: z.ZodOptional<z.ZodEnum<["Admin", "Vendor", "Customer"]>>;
            status: z.ZodOptional<z.ZodEnum<["Active", "Pending", "Suspended"]>>;
            limit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>>;
            page: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>>;
            sortBy: z.ZodOptional<z.ZodEnum<["createdAt", "name", "email"]>>;
            sortOrder: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        }, "strip", z.ZodTypeAny, {
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            status?: "Active" | "Pending" | "Suspended" | undefined;
            limit?: number | undefined;
            page?: number | undefined;
            searchTerm?: string | undefined;
            sortBy?: "name" | "email" | "createdAt" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }, {
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            status?: "Active" | "Pending" | "Suspended" | undefined;
            limit?: string | undefined;
            page?: string | undefined;
            searchTerm?: string | undefined;
            sortBy?: "name" | "email" | "createdAt" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        query: {
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            status?: "Active" | "Pending" | "Suspended" | undefined;
            limit?: number | undefined;
            page?: number | undefined;
            searchTerm?: string | undefined;
            sortBy?: "name" | "email" | "createdAt" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        };
    }, {
        query: {
            role?: "Admin" | "Vendor" | "Customer" | undefined;
            status?: "Active" | "Pending" | "Suspended" | undefined;
            limit?: string | undefined;
            page?: string | undefined;
            searchTerm?: string | undefined;
            sortBy?: "name" | "email" | "createdAt" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        };
    }>;
    getOrdersQuerySchema: z.ZodObject<{
        query: z.ZodObject<{
            limit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>>;
            page: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>>;
            sortBy: z.ZodOptional<z.ZodEnum<["orderDate", "totalAmount", "status"]>>;
            sortOrder: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        }, "strip", z.ZodTypeAny, {
            limit?: number | undefined;
            page?: number | undefined;
            sortBy?: "status" | "orderDate" | "totalAmount" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }, {
            limit?: string | undefined;
            page?: string | undefined;
            sortBy?: "status" | "orderDate" | "totalAmount" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        query: {
            limit?: number | undefined;
            page?: number | undefined;
            sortBy?: "status" | "orderDate" | "totalAmount" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        };
    }, {
        query: {
            limit?: string | undefined;
            page?: string | undefined;
            sortBy?: "status" | "orderDate" | "totalAmount" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        };
    }>;
};
//# sourceMappingURL=admin.validation.d.ts.map