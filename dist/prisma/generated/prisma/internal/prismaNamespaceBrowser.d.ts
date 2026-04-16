import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: new (secret: never) => any;
    JsonNull: new (secret: never) => any;
    AnyNull: new (secret: never) => any;
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly VendorProfile: "VendorProfile";
    readonly Produce: "Produce";
    readonly RentalSpace: "RentalSpace";
    readonly Order: "Order";
    readonly CommunityPost: "CommunityPost";
    readonly SustainabilityCert: "SustainabilityCert";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const VendorProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly farmName: "farmName";
    readonly certificationStatus: "certificationStatus";
    readonly farmLocation: "farmLocation";
};
export type VendorProfileScalarFieldEnum = (typeof VendorProfileScalarFieldEnum)[keyof typeof VendorProfileScalarFieldEnum];
export declare const ProduceScalarFieldEnum: {
    readonly id: "id";
    readonly vendorId: "vendorId";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly category: "category";
    readonly certificationStatus: "certificationStatus";
    readonly availableQuantity: "availableQuantity";
};
export type ProduceScalarFieldEnum = (typeof ProduceScalarFieldEnum)[keyof typeof ProduceScalarFieldEnum];
export declare const RentalSpaceScalarFieldEnum: {
    readonly id: "id";
    readonly vendorId: "vendorId";
    readonly location: "location";
    readonly size: "size";
    readonly price: "price";
    readonly availability: "availability";
};
export type RentalSpaceScalarFieldEnum = (typeof RentalSpaceScalarFieldEnum)[keyof typeof RentalSpaceScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly produceId: "produceId";
    readonly vendorId: "vendorId";
    readonly status: "status";
    readonly orderDate: "orderDate";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const CommunityPostScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly postContent: "postContent";
    readonly postDate: "postDate";
};
export type CommunityPostScalarFieldEnum = (typeof CommunityPostScalarFieldEnum)[keyof typeof CommunityPostScalarFieldEnum];
export declare const SustainabilityCertScalarFieldEnum: {
    readonly id: "id";
    readonly vendorId: "vendorId";
    readonly certifyingAgency: "certifyingAgency";
    readonly certificationDate: "certificationDate";
};
export type SustainabilityCertScalarFieldEnum = (typeof SustainabilityCertScalarFieldEnum)[keyof typeof SustainabilityCertScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map