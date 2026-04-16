import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model VendorProfile
 *
 */
export type VendorProfile = Prisma.VendorProfileModel;
/**
 * Model Produce
 *
 */
export type Produce = Prisma.ProduceModel;
/**
 * Model RentalSpace
 *
 */
export type RentalSpace = Prisma.RentalSpaceModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model CommunityPost
 *
 */
export type CommunityPost = Prisma.CommunityPostModel;
/**
 * Model SustainabilityCert
 *
 */
export type SustainabilityCert = Prisma.SustainabilityCertModel;
//# sourceMappingURL=client.d.ts.map