export declare const UserRole: {
    readonly Admin: "Admin";
    readonly Vendor: "Vendor";
    readonly Customer: "Customer";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly Active: "Active";
    readonly Pending: "Pending";
    readonly Suspended: "Suspended";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const CertificationStatus: {
    readonly Pending: "Pending";
    readonly Approved: "Approved";
    readonly Rejected: "Rejected";
};
export type CertificationStatus = (typeof CertificationStatus)[keyof typeof CertificationStatus];
export declare const OrderStatus: {
    readonly Pending: "Pending";
    readonly Confirmed: "Confirmed";
    readonly Shipped: "Shipped";
    readonly Delivered: "Delivered";
    readonly Cancelled: "Cancelled";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
//# sourceMappingURL=enums.d.ts.map