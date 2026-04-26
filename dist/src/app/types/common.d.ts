import { Request } from "express";
export declare enum UserRole {
    Admin = "Admin",
    Vendor = "Vendor",
    Customer = "Customer"
}
export declare enum UserStatus {
    Active = "Active",
    Pending = "Pending",
    Suspended = "Suspended"
}
export declare enum CertificationStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected"
}
export declare enum OrderStatus {
    Pending = "Pending",
    Confirmed = "Confirmed",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}
export type IJWTPayload = {
    id: string;
    role: UserRole;
    email?: string;
};
export interface AuthenticatedRequest extends Request {
    user: IJWTPayload;
}
//# sourceMappingURL=common.d.ts.map