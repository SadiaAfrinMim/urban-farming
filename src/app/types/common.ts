import { Request } from "express";

export enum UserRole {
  Admin = "Admin",
  Vendor = "Vendor",
  Customer = "Customer"
}

export enum UserStatus {
  Active = "Active",
  Pending = "Pending",
  Suspended = "Suspended"
}

export enum CertificationStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected"
}

export enum OrderStatus {
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
}

export interface AuthenticatedRequest extends Request {
    user: IJWTPayload;
}