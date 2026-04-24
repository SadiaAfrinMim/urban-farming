
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VendorProfile
 * 
 */
export type VendorProfile = $Result.DefaultSelection<Prisma.$VendorProfilePayload>
/**
 * Model Produce
 * 
 */
export type Produce = $Result.DefaultSelection<Prisma.$ProducePayload>
/**
 * Model RentalSpace
 * 
 */
export type RentalSpace = $Result.DefaultSelection<Prisma.$RentalSpacePayload>
/**
 * Model CommunityPost
 * 
 */
export type CommunityPost = $Result.DefaultSelection<Prisma.$CommunityPostPayload>
/**
 * Model SustainabilityTip
 * 
 */
export type SustainabilityTip = $Result.DefaultSelection<Prisma.$SustainabilityTipPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model RateLimitLog
 * 
 */
export type RateLimitLog = $Result.DefaultSelection<Prisma.$RateLimitLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  Admin: 'Admin',
  Vendor: 'Vendor',
  Customer: 'Customer'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  Active: 'Active',
  Pending: 'Pending',
  Suspended: 'Suspended'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const CertificationStatus: {
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected'
};

export type CertificationStatus = (typeof CertificationStatus)[keyof typeof CertificationStatus]


export const OrderStatus: {
  Pending: 'Pending',
  Confirmed: 'Confirmed',
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type CertificationStatus = $Enums.CertificationStatus

export const CertificationStatus: typeof $Enums.CertificationStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendorProfile`: Exposes CRUD operations for the **VendorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorProfiles
    * const vendorProfiles = await prisma.vendorProfile.findMany()
    * ```
    */
  get vendorProfile(): Prisma.VendorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produce`: Exposes CRUD operations for the **Produce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produces
    * const produces = await prisma.produce.findMany()
    * ```
    */
  get produce(): Prisma.ProduceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalSpace`: Exposes CRUD operations for the **RentalSpace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalSpaces
    * const rentalSpaces = await prisma.rentalSpace.findMany()
    * ```
    */
  get rentalSpace(): Prisma.RentalSpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityPost`: Exposes CRUD operations for the **CommunityPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityPosts
    * const communityPosts = await prisma.communityPost.findMany()
    * ```
    */
  get communityPost(): Prisma.CommunityPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sustainabilityTip`: Exposes CRUD operations for the **SustainabilityTip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SustainabilityTips
    * const sustainabilityTips = await prisma.sustainabilityTip.findMany()
    * ```
    */
  get sustainabilityTip(): Prisma.SustainabilityTipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateLimitLog`: Exposes CRUD operations for the **RateLimitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateLimitLogs
    * const rateLimitLogs = await prisma.rateLimitLog.findMany()
    * ```
    */
  get rateLimitLog(): Prisma.RateLimitLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VendorProfile: 'VendorProfile',
    Produce: 'Produce',
    RentalSpace: 'RentalSpace',
    CommunityPost: 'CommunityPost',
    SustainabilityTip: 'SustainabilityTip',
    Order: 'Order',
    Report: 'Report',
    Announcement: 'Announcement',
    RateLimitLog: 'RateLimitLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vendorProfile" | "produce" | "rentalSpace" | "communityPost" | "sustainabilityTip" | "order" | "report" | "announcement" | "rateLimitLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VendorProfile: {
        payload: Prisma.$VendorProfilePayload<ExtArgs>
        fields: Prisma.VendorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findFirst: {
            args: Prisma.VendorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findMany: {
            args: Prisma.VendorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          create: {
            args: Prisma.VendorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          createMany: {
            args: Prisma.VendorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          delete: {
            args: Prisma.VendorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          update: {
            args: Prisma.VendorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          deleteMany: {
            args: Prisma.VendorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          upsert: {
            args: Prisma.VendorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          aggregate: {
            args: Prisma.VendorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorProfile>
          }
          groupBy: {
            args: Prisma.VendorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileCountAggregateOutputType> | number
          }
        }
      }
      Produce: {
        payload: Prisma.$ProducePayload<ExtArgs>
        fields: Prisma.ProduceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findFirst: {
            args: Prisma.ProduceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findMany: {
            args: Prisma.ProduceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          create: {
            args: Prisma.ProduceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          createMany: {
            args: Prisma.ProduceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          delete: {
            args: Prisma.ProduceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          update: {
            args: Prisma.ProduceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          deleteMany: {
            args: Prisma.ProduceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProduceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          upsert: {
            args: Prisma.ProduceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          aggregate: {
            args: Prisma.ProduceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduce>
          }
          groupBy: {
            args: Prisma.ProduceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduceCountArgs<ExtArgs>
            result: $Utils.Optional<ProduceCountAggregateOutputType> | number
          }
        }
      }
      RentalSpace: {
        payload: Prisma.$RentalSpacePayload<ExtArgs>
        fields: Prisma.RentalSpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalSpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalSpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          findFirst: {
            args: Prisma.RentalSpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalSpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          findMany: {
            args: Prisma.RentalSpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          create: {
            args: Prisma.RentalSpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          createMany: {
            args: Prisma.RentalSpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalSpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          delete: {
            args: Prisma.RentalSpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          update: {
            args: Prisma.RentalSpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          deleteMany: {
            args: Prisma.RentalSpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalSpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalSpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          upsert: {
            args: Prisma.RentalSpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          aggregate: {
            args: Prisma.RentalSpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalSpace>
          }
          groupBy: {
            args: Prisma.RentalSpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalSpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalSpaceCountArgs<ExtArgs>
            result: $Utils.Optional<RentalSpaceCountAggregateOutputType> | number
          }
        }
      }
      CommunityPost: {
        payload: Prisma.$CommunityPostPayload<ExtArgs>
        fields: Prisma.CommunityPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findFirst: {
            args: Prisma.CommunityPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findMany: {
            args: Prisma.CommunityPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          create: {
            args: Prisma.CommunityPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          createMany: {
            args: Prisma.CommunityPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          delete: {
            args: Prisma.CommunityPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          update: {
            args: Prisma.CommunityPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          deleteMany: {
            args: Prisma.CommunityPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          upsert: {
            args: Prisma.CommunityPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          aggregate: {
            args: Prisma.CommunityPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityPost>
          }
          groupBy: {
            args: Prisma.CommunityPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityPostCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostCountAggregateOutputType> | number
          }
        }
      }
      SustainabilityTip: {
        payload: Prisma.$SustainabilityTipPayload<ExtArgs>
        fields: Prisma.SustainabilityTipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SustainabilityTipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SustainabilityTipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>
          }
          findFirst: {
            args: Prisma.SustainabilityTipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SustainabilityTipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>
          }
          findMany: {
            args: Prisma.SustainabilityTipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>[]
          }
          create: {
            args: Prisma.SustainabilityTipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>
          }
          createMany: {
            args: Prisma.SustainabilityTipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SustainabilityTipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>[]
          }
          delete: {
            args: Prisma.SustainabilityTipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>
          }
          update: {
            args: Prisma.SustainabilityTipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>
          }
          deleteMany: {
            args: Prisma.SustainabilityTipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SustainabilityTipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SustainabilityTipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>[]
          }
          upsert: {
            args: Prisma.SustainabilityTipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityTipPayload>
          }
          aggregate: {
            args: Prisma.SustainabilityTipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSustainabilityTip>
          }
          groupBy: {
            args: Prisma.SustainabilityTipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SustainabilityTipGroupByOutputType>[]
          }
          count: {
            args: Prisma.SustainabilityTipCountArgs<ExtArgs>
            result: $Utils.Optional<SustainabilityTipCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      RateLimitLog: {
        payload: Prisma.$RateLimitLogPayload<ExtArgs>
        fields: Prisma.RateLimitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateLimitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateLimitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>
          }
          findFirst: {
            args: Prisma.RateLimitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateLimitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>
          }
          findMany: {
            args: Prisma.RateLimitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>[]
          }
          create: {
            args: Prisma.RateLimitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>
          }
          createMany: {
            args: Prisma.RateLimitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateLimitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>[]
          }
          delete: {
            args: Prisma.RateLimitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>
          }
          update: {
            args: Prisma.RateLimitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>
          }
          deleteMany: {
            args: Prisma.RateLimitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateLimitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateLimitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>[]
          }
          upsert: {
            args: Prisma.RateLimitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitLogPayload>
          }
          aggregate: {
            args: Prisma.RateLimitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateLimitLog>
          }
          groupBy: {
            args: Prisma.RateLimitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateLimitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateLimitLogCountArgs<ExtArgs>
            result: $Utils.Optional<RateLimitLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vendorProfile?: VendorProfileOmit
    produce?: ProduceOmit
    rentalSpace?: RentalSpaceOmit
    communityPost?: CommunityPostOmit
    sustainabilityTip?: SustainabilityTipOmit
    order?: OrderOmit
    report?: ReportOmit
    announcement?: AnnouncementOmit
    rateLimitLog?: RateLimitLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    communityPosts: number
    reportsMade: number
    reportsAgainst: number
    announcements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    communityPosts?: boolean | UserCountOutputTypeCountCommunityPostsArgs
    reportsMade?: boolean | UserCountOutputTypeCountReportsMadeArgs
    reportsAgainst?: boolean | UserCountOutputTypeCountReportsAgainstArgs
    announcements?: boolean | UserCountOutputTypeCountAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsAgainstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }


  /**
   * Count Type VendorProfileCountOutputType
   */

  export type VendorProfileCountOutputType = {
    produces: number
    rentalSpaces: number
    orders: number
  }

  export type VendorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produces?: boolean | VendorProfileCountOutputTypeCountProducesArgs
    rentalSpaces?: boolean | VendorProfileCountOutputTypeCountRentalSpacesArgs
    orders?: boolean | VendorProfileCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfileCountOutputType
     */
    select?: VendorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountProducesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountRentalSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalSpaceWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProduceCountOutputType
   */

  export type ProduceCountOutputType = {
    orders: number
  }

  export type ProduceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProduceCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProduceCountOutputType without action
   */
  export type ProduceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduceCountOutputType
     */
    select?: ProduceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduceCountOutputType without action
   */
  export type ProduceCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CommunityPostCountOutputType
   */

  export type CommunityPostCountOutputType = {
    reports: number
  }

  export type CommunityPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | CommunityPostCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * CommunityPostCountOutputType without action
   */
  export type CommunityPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPostCountOutputType
     */
    select?: CommunityPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityPostCountOutputType without action
   */
  export type CommunityPostCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    reportsMade?: boolean | User$reportsMadeArgs<ExtArgs>
    reportsAgainst?: boolean | User$reportsAgainstArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    reportsMade?: boolean | User$reportsMadeArgs<ExtArgs>
    reportsAgainst?: boolean | User$reportsAgainstArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vendorProfile: Prisma.$VendorProfilePayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      communityPosts: Prisma.$CommunityPostPayload<ExtArgs>[]
      reportsMade: Prisma.$ReportPayload<ExtArgs>[]
      reportsAgainst: Prisma.$ReportPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorProfile<T extends User$vendorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorProfileArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communityPosts<T extends User$communityPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$communityPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsMade<T extends User$reportsMadeArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsAgainst<T extends User$reportsAgainstArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsAgainstArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends User$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vendorProfile
   */
  export type User$vendorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    where?: VendorProfileWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.communityPosts
   */
  export type User$communityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    cursor?: CommunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * User.reportsMade
   */
  export type User$reportsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.reportsAgainst
   */
  export type User$reportsAgainstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.announcements
   */
  export type User$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VendorProfile
   */

  export type AggregateVendorProfile = {
    _count: VendorProfileCountAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  export type VendorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    farmName: string | null
    farmLocation: string | null
    certificationStatus: $Enums.CertificationStatus | null
    profilePhoto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    farmName: string | null
    farmLocation: string | null
    certificationStatus: $Enums.CertificationStatus | null
    profilePhoto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorProfileCountAggregateOutputType = {
    id: number
    userId: number
    farmName: number
    farmLocation: number
    certificationStatus: number
    profilePhoto: number
    certifications: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    farmLocation?: true
    certificationStatus?: true
    profilePhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    farmLocation?: true
    certificationStatus?: true
    profilePhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    farmLocation?: true
    certificationStatus?: true
    profilePhoto?: true
    certifications?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfile to aggregate.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorProfiles
    **/
    _count?: true | VendorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorProfileMaxAggregateInputType
  }

  export type GetVendorProfileAggregateType<T extends VendorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorProfile[P]>
      : GetScalarType<T[P], AggregateVendorProfile[P]>
  }




  export type VendorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorProfileWhereInput
    orderBy?: VendorProfileOrderByWithAggregationInput | VendorProfileOrderByWithAggregationInput[]
    by: VendorProfileScalarFieldEnum[] | VendorProfileScalarFieldEnum
    having?: VendorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorProfileCountAggregateInputType | true
    _min?: VendorProfileMinAggregateInputType
    _max?: VendorProfileMaxAggregateInputType
  }

  export type VendorProfileGroupByOutputType = {
    id: string
    userId: string
    farmName: string
    farmLocation: string
    certificationStatus: $Enums.CertificationStatus
    profilePhoto: string | null
    certifications: string[]
    createdAt: Date
    updatedAt: Date
    _count: VendorProfileCountAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  type GetVendorProfileGroupByPayload<T extends VendorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
        }
      >
    >


  export type VendorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    farmLocation?: boolean
    certificationStatus?: boolean
    profilePhoto?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produces?: boolean | VendorProfile$producesArgs<ExtArgs>
    rentalSpaces?: boolean | VendorProfile$rentalSpacesArgs<ExtArgs>
    orders?: boolean | VendorProfile$ordersArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    farmLocation?: boolean
    certificationStatus?: boolean
    profilePhoto?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    farmLocation?: boolean
    certificationStatus?: boolean
    profilePhoto?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    farmName?: boolean
    farmLocation?: boolean
    certificationStatus?: boolean
    profilePhoto?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "farmName" | "farmLocation" | "certificationStatus" | "profilePhoto" | "certifications" | "createdAt" | "updatedAt", ExtArgs["result"]["vendorProfile"]>
  export type VendorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produces?: boolean | VendorProfile$producesArgs<ExtArgs>
    rentalSpaces?: boolean | VendorProfile$rentalSpacesArgs<ExtArgs>
    orders?: boolean | VendorProfile$ordersArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VendorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VendorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      produces: Prisma.$ProducePayload<ExtArgs>[]
      rentalSpaces: Prisma.$RentalSpacePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      farmName: string
      farmLocation: string
      certificationStatus: $Enums.CertificationStatus
      profilePhoto: string | null
      certifications: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendorProfile"]>
    composites: {}
  }

  type VendorProfileGetPayload<S extends boolean | null | undefined | VendorProfileDefaultArgs> = $Result.GetResult<Prisma.$VendorProfilePayload, S>

  type VendorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorProfileCountAggregateInputType | true
    }

  export interface VendorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorProfile'], meta: { name: 'VendorProfile' } }
    /**
     * Find zero or one VendorProfile that matches the filter.
     * @param {VendorProfileFindUniqueArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorProfileFindUniqueArgs>(args: SelectSubset<T, VendorProfileFindUniqueArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorProfileFindUniqueOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorProfileFindFirstArgs>(args?: SelectSubset<T, VendorProfileFindFirstArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany()
     * 
     * // Get first 10 VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorProfileFindManyArgs>(args?: SelectSubset<T, VendorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorProfile.
     * @param {VendorProfileCreateArgs} args - Arguments to create a VendorProfile.
     * @example
     * // Create one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.create({
     *   data: {
     *     // ... data to create a VendorProfile
     *   }
     * })
     * 
     */
    create<T extends VendorProfileCreateArgs>(args: SelectSubset<T, VendorProfileCreateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorProfiles.
     * @param {VendorProfileCreateManyArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorProfileCreateManyArgs>(args?: SelectSubset<T, VendorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorProfiles and returns the data saved in the database.
     * @param {VendorProfileCreateManyAndReturnArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorProfiles and only return the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendorProfile.
     * @param {VendorProfileDeleteArgs} args - Arguments to delete one VendorProfile.
     * @example
     * // Delete one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.delete({
     *   where: {
     *     // ... filter to delete one VendorProfile
     *   }
     * })
     * 
     */
    delete<T extends VendorProfileDeleteArgs>(args: SelectSubset<T, VendorProfileDeleteArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorProfile.
     * @param {VendorProfileUpdateArgs} args - Arguments to update one VendorProfile.
     * @example
     * // Update one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorProfileUpdateArgs>(args: SelectSubset<T, VendorProfileUpdateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorProfiles.
     * @param {VendorProfileDeleteManyArgs} args - Arguments to filter VendorProfiles to delete.
     * @example
     * // Delete a few VendorProfiles
     * const { count } = await prisma.vendorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorProfileDeleteManyArgs>(args?: SelectSubset<T, VendorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorProfileUpdateManyArgs>(args: SelectSubset<T, VendorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorProfiles and returns the data updated in the database.
     * @param {VendorProfileUpdateManyAndReturnArgs} args - Arguments to update many VendorProfiles.
     * @example
     * // Update many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendorProfiles and only return the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendorProfile.
     * @param {VendorProfileUpsertArgs} args - Arguments to update or create a VendorProfile.
     * @example
     * // Update or create a VendorProfile
     * const vendorProfile = await prisma.vendorProfile.upsert({
     *   create: {
     *     // ... data to create a VendorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorProfile we want to update
     *   }
     * })
     */
    upsert<T extends VendorProfileUpsertArgs>(args: SelectSubset<T, VendorProfileUpsertArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileCountArgs} args - Arguments to filter VendorProfiles to count.
     * @example
     * // Count the number of VendorProfiles
     * const count = await prisma.vendorProfile.count({
     *   where: {
     *     // ... the filter for the VendorProfiles we want to count
     *   }
     * })
    **/
    count<T extends VendorProfileCountArgs>(
      args?: Subset<T, VendorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorProfileAggregateArgs>(args: Subset<T, VendorProfileAggregateArgs>): Prisma.PrismaPromise<GetVendorProfileAggregateType<T>>

    /**
     * Group by VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorProfileGroupByArgs['orderBy'] }
        : { orderBy?: VendorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorProfile model
   */
  readonly fields: VendorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produces<T extends VendorProfile$producesArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$producesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentalSpaces<T extends VendorProfile$rentalSpacesArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$rentalSpacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends VendorProfile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorProfile model
   */
  interface VendorProfileFieldRefs {
    readonly id: FieldRef<"VendorProfile", 'String'>
    readonly userId: FieldRef<"VendorProfile", 'String'>
    readonly farmName: FieldRef<"VendorProfile", 'String'>
    readonly farmLocation: FieldRef<"VendorProfile", 'String'>
    readonly certificationStatus: FieldRef<"VendorProfile", 'CertificationStatus'>
    readonly profilePhoto: FieldRef<"VendorProfile", 'String'>
    readonly certifications: FieldRef<"VendorProfile", 'String[]'>
    readonly createdAt: FieldRef<"VendorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"VendorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VendorProfile findUnique
   */
  export type VendorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findUniqueOrThrow
   */
  export type VendorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findFirst
   */
  export type VendorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findFirstOrThrow
   */
  export type VendorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findMany
   */
  export type VendorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfiles to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile create
   */
  export type VendorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorProfile.
     */
    data: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
  }

  /**
   * VendorProfile createMany
   */
  export type VendorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorProfile createManyAndReturn
   */
  export type VendorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorProfile update
   */
  export type VendorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorProfile.
     */
    data: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
    /**
     * Choose, which VendorProfile to update.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile updateMany
   */
  export type VendorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorProfiles.
     */
    data: XOR<VendorProfileUpdateManyMutationInput, VendorProfileUncheckedUpdateManyInput>
    /**
     * Filter which VendorProfiles to update
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to update.
     */
    limit?: number
  }

  /**
   * VendorProfile updateManyAndReturn
   */
  export type VendorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * The data used to update VendorProfiles.
     */
    data: XOR<VendorProfileUpdateManyMutationInput, VendorProfileUncheckedUpdateManyInput>
    /**
     * Filter which VendorProfiles to update
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorProfile upsert
   */
  export type VendorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorProfile to update in case it exists.
     */
    where: VendorProfileWhereUniqueInput
    /**
     * In case the VendorProfile found by the `where` argument doesn't exist, create a new VendorProfile with this data.
     */
    create: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
    /**
     * In case the VendorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
  }

  /**
   * VendorProfile delete
   */
  export type VendorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter which VendorProfile to delete.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile deleteMany
   */
  export type VendorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfiles to delete
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to delete.
     */
    limit?: number
  }

  /**
   * VendorProfile.produces
   */
  export type VendorProfile$producesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    cursor?: ProduceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * VendorProfile.rentalSpaces
   */
  export type VendorProfile$rentalSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    where?: RentalSpaceWhereInput
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    cursor?: RentalSpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * VendorProfile.orders
   */
  export type VendorProfile$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * VendorProfile without action
   */
  export type VendorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Produce
   */

  export type AggregateProduce = {
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  export type ProduceAvgAggregateOutputType = {
    price: number | null
    availableQuantity: number | null
  }

  export type ProduceSumAggregateOutputType = {
    price: number | null
    availableQuantity: number | null
  }

  export type ProduceMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    price: number | null
    image: string | null
    category: string | null
    availableQuantity: number | null
    certificationStatus: $Enums.CertificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProduceMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    price: number | null
    image: string | null
    category: string | null
    availableQuantity: number | null
    certificationStatus: $Enums.CertificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProduceCountAggregateOutputType = {
    id: number
    vendorId: number
    name: number
    description: number
    price: number
    image: number
    category: number
    availableQuantity: number
    certificationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProduceAvgAggregateInputType = {
    price?: true
    availableQuantity?: true
  }

  export type ProduceSumAggregateInputType = {
    price?: true
    availableQuantity?: true
  }

  export type ProduceMinAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    image?: true
    category?: true
    availableQuantity?: true
    certificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProduceMaxAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    image?: true
    category?: true
    availableQuantity?: true
    certificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProduceCountAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    image?: true
    category?: true
    availableQuantity?: true
    certificationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProduceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produce to aggregate.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produces
    **/
    _count?: true | ProduceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduceMaxAggregateInputType
  }

  export type GetProduceAggregateType<T extends ProduceAggregateArgs> = {
        [P in keyof T & keyof AggregateProduce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduce[P]>
      : GetScalarType<T[P], AggregateProduce[P]>
  }




  export type ProduceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithAggregationInput | ProduceOrderByWithAggregationInput[]
    by: ProduceScalarFieldEnum[] | ProduceScalarFieldEnum
    having?: ProduceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduceCountAggregateInputType | true
    _avg?: ProduceAvgAggregateInputType
    _sum?: ProduceSumAggregateInputType
    _min?: ProduceMinAggregateInputType
    _max?: ProduceMaxAggregateInputType
  }

  export type ProduceGroupByOutputType = {
    id: string
    vendorId: string
    name: string
    description: string | null
    price: number
    image: string | null
    category: string
    availableQuantity: number
    certificationStatus: $Enums.CertificationStatus
    createdAt: Date
    updatedAt: Date
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  type GetProduceGroupByPayload<T extends ProduceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduceGroupByOutputType[P]>
            : GetScalarType<T[P], ProduceGroupByOutputType[P]>
        }
      >
    >


  export type ProduceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    category?: boolean
    availableQuantity?: boolean
    certificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    orders?: boolean | Produce$ordersArgs<ExtArgs>
    _count?: boolean | ProduceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    category?: boolean
    availableQuantity?: boolean
    certificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    category?: boolean
    availableQuantity?: boolean
    certificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    category?: boolean
    availableQuantity?: boolean
    certificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProduceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "name" | "description" | "price" | "image" | "category" | "availableQuantity" | "certificationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["produce"]>
  export type ProduceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    orders?: boolean | Produce$ordersArgs<ExtArgs>
    _count?: boolean | ProduceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProduceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type ProduceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $ProducePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produce"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      name: string
      description: string | null
      price: number
      image: string | null
      category: string
      availableQuantity: number
      certificationStatus: $Enums.CertificationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["produce"]>
    composites: {}
  }

  type ProduceGetPayload<S extends boolean | null | undefined | ProduceDefaultArgs> = $Result.GetResult<Prisma.$ProducePayload, S>

  type ProduceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProduceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduceCountAggregateInputType | true
    }

  export interface ProduceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produce'], meta: { name: 'Produce' } }
    /**
     * Find zero or one Produce that matches the filter.
     * @param {ProduceFindUniqueArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduceFindUniqueArgs>(args: SelectSubset<T, ProduceFindUniqueArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProduceFindUniqueOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduceFindFirstArgs>(args?: SelectSubset<T, ProduceFindFirstArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produces
     * const produces = await prisma.produce.findMany()
     * 
     * // Get first 10 Produces
     * const produces = await prisma.produce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produceWithIdOnly = await prisma.produce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduceFindManyArgs>(args?: SelectSubset<T, ProduceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produce.
     * @param {ProduceCreateArgs} args - Arguments to create a Produce.
     * @example
     * // Create one Produce
     * const Produce = await prisma.produce.create({
     *   data: {
     *     // ... data to create a Produce
     *   }
     * })
     * 
     */
    create<T extends ProduceCreateArgs>(args: SelectSubset<T, ProduceCreateArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produces.
     * @param {ProduceCreateManyArgs} args - Arguments to create many Produces.
     * @example
     * // Create many Produces
     * const produce = await prisma.produce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduceCreateManyArgs>(args?: SelectSubset<T, ProduceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produces and returns the data saved in the database.
     * @param {ProduceCreateManyAndReturnArgs} args - Arguments to create many Produces.
     * @example
     * // Create many Produces
     * const produce = await prisma.produce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produces and only return the `id`
     * const produceWithIdOnly = await prisma.produce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produce.
     * @param {ProduceDeleteArgs} args - Arguments to delete one Produce.
     * @example
     * // Delete one Produce
     * const Produce = await prisma.produce.delete({
     *   where: {
     *     // ... filter to delete one Produce
     *   }
     * })
     * 
     */
    delete<T extends ProduceDeleteArgs>(args: SelectSubset<T, ProduceDeleteArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produce.
     * @param {ProduceUpdateArgs} args - Arguments to update one Produce.
     * @example
     * // Update one Produce
     * const produce = await prisma.produce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduceUpdateArgs>(args: SelectSubset<T, ProduceUpdateArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produces.
     * @param {ProduceDeleteManyArgs} args - Arguments to filter Produces to delete.
     * @example
     * // Delete a few Produces
     * const { count } = await prisma.produce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduceDeleteManyArgs>(args?: SelectSubset<T, ProduceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produces
     * const produce = await prisma.produce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduceUpdateManyArgs>(args: SelectSubset<T, ProduceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produces and returns the data updated in the database.
     * @param {ProduceUpdateManyAndReturnArgs} args - Arguments to update many Produces.
     * @example
     * // Update many Produces
     * const produce = await prisma.produce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produces and only return the `id`
     * const produceWithIdOnly = await prisma.produce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProduceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProduceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produce.
     * @param {ProduceUpsertArgs} args - Arguments to update or create a Produce.
     * @example
     * // Update or create a Produce
     * const produce = await prisma.produce.upsert({
     *   create: {
     *     // ... data to create a Produce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produce we want to update
     *   }
     * })
     */
    upsert<T extends ProduceUpsertArgs>(args: SelectSubset<T, ProduceUpsertArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceCountArgs} args - Arguments to filter Produces to count.
     * @example
     * // Count the number of Produces
     * const count = await prisma.produce.count({
     *   where: {
     *     // ... the filter for the Produces we want to count
     *   }
     * })
    **/
    count<T extends ProduceCountArgs>(
      args?: Subset<T, ProduceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduceAggregateArgs>(args: Subset<T, ProduceAggregateArgs>): Prisma.PrismaPromise<GetProduceAggregateType<T>>

    /**
     * Group by Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProduceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduceGroupByArgs['orderBy'] }
        : { orderBy?: ProduceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProduceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produce model
   */
  readonly fields: ProduceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Produce$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Produce$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produce model
   */
  interface ProduceFieldRefs {
    readonly id: FieldRef<"Produce", 'String'>
    readonly vendorId: FieldRef<"Produce", 'String'>
    readonly name: FieldRef<"Produce", 'String'>
    readonly description: FieldRef<"Produce", 'String'>
    readonly price: FieldRef<"Produce", 'Float'>
    readonly image: FieldRef<"Produce", 'String'>
    readonly category: FieldRef<"Produce", 'String'>
    readonly availableQuantity: FieldRef<"Produce", 'Int'>
    readonly certificationStatus: FieldRef<"Produce", 'CertificationStatus'>
    readonly createdAt: FieldRef<"Produce", 'DateTime'>
    readonly updatedAt: FieldRef<"Produce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produce findUnique
   */
  export type ProduceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce findUniqueOrThrow
   */
  export type ProduceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce findFirst
   */
  export type ProduceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce findFirstOrThrow
   */
  export type ProduceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce findMany
   */
  export type ProduceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produces to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce create
   */
  export type ProduceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to create a Produce.
     */
    data: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
  }

  /**
   * Produce createMany
   */
  export type ProduceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produces.
     */
    data: ProduceCreateManyInput | ProduceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produce createManyAndReturn
   */
  export type ProduceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * The data used to create many Produces.
     */
    data: ProduceCreateManyInput | ProduceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produce update
   */
  export type ProduceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to update a Produce.
     */
    data: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
    /**
     * Choose, which Produce to update.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce updateMany
   */
  export type ProduceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produces.
     */
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyInput>
    /**
     * Filter which Produces to update
     */
    where?: ProduceWhereInput
    /**
     * Limit how many Produces to update.
     */
    limit?: number
  }

  /**
   * Produce updateManyAndReturn
   */
  export type ProduceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * The data used to update Produces.
     */
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyInput>
    /**
     * Filter which Produces to update
     */
    where?: ProduceWhereInput
    /**
     * Limit how many Produces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produce upsert
   */
  export type ProduceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The filter to search for the Produce to update in case it exists.
     */
    where: ProduceWhereUniqueInput
    /**
     * In case the Produce found by the `where` argument doesn't exist, create a new Produce with this data.
     */
    create: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
    /**
     * In case the Produce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
  }

  /**
   * Produce delete
   */
  export type ProduceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter which Produce to delete.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce deleteMany
   */
  export type ProduceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produces to delete
     */
    where?: ProduceWhereInput
    /**
     * Limit how many Produces to delete.
     */
    limit?: number
  }

  /**
   * Produce.orders
   */
  export type Produce$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Produce without action
   */
  export type ProduceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
  }


  /**
   * Model RentalSpace
   */

  export type AggregateRentalSpace = {
    _count: RentalSpaceCountAggregateOutputType | null
    _avg: RentalSpaceAvgAggregateOutputType | null
    _sum: RentalSpaceSumAggregateOutputType | null
    _min: RentalSpaceMinAggregateOutputType | null
    _max: RentalSpaceMaxAggregateOutputType | null
  }

  export type RentalSpaceAvgAggregateOutputType = {
    price: number | null
  }

  export type RentalSpaceSumAggregateOutputType = {
    price: number | null
  }

  export type RentalSpaceMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    price: number | null
    location: string | null
    size: string | null
    image: string | null
    available: boolean | null
    rentedBy: string | null
    rentalStart: Date | null
    rentalEnd: Date | null
    plantStatus: string | null
    lastWatered: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalSpaceMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    price: number | null
    location: string | null
    size: string | null
    image: string | null
    available: boolean | null
    rentedBy: string | null
    rentalStart: Date | null
    rentalEnd: Date | null
    plantStatus: string | null
    lastWatered: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalSpaceCountAggregateOutputType = {
    id: number
    vendorId: number
    name: number
    description: number
    price: number
    location: number
    size: number
    image: number
    available: number
    rentedBy: number
    rentalStart: number
    rentalEnd: number
    plantStatus: number
    lastWatered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalSpaceAvgAggregateInputType = {
    price?: true
  }

  export type RentalSpaceSumAggregateInputType = {
    price?: true
  }

  export type RentalSpaceMinAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    location?: true
    size?: true
    image?: true
    available?: true
    rentedBy?: true
    rentalStart?: true
    rentalEnd?: true
    plantStatus?: true
    lastWatered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalSpaceMaxAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    location?: true
    size?: true
    image?: true
    available?: true
    rentedBy?: true
    rentalStart?: true
    rentalEnd?: true
    plantStatus?: true
    lastWatered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalSpaceCountAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    location?: true
    size?: true
    image?: true
    available?: true
    rentedBy?: true
    rentalStart?: true
    rentalEnd?: true
    plantStatus?: true
    lastWatered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalSpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSpace to aggregate.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalSpaces
    **/
    _count?: true | RentalSpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalSpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalSpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalSpaceMaxAggregateInputType
  }

  export type GetRentalSpaceAggregateType<T extends RentalSpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalSpace[P]>
      : GetScalarType<T[P], AggregateRentalSpace[P]>
  }




  export type RentalSpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalSpaceWhereInput
    orderBy?: RentalSpaceOrderByWithAggregationInput | RentalSpaceOrderByWithAggregationInput[]
    by: RentalSpaceScalarFieldEnum[] | RentalSpaceScalarFieldEnum
    having?: RentalSpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalSpaceCountAggregateInputType | true
    _avg?: RentalSpaceAvgAggregateInputType
    _sum?: RentalSpaceSumAggregateInputType
    _min?: RentalSpaceMinAggregateInputType
    _max?: RentalSpaceMaxAggregateInputType
  }

  export type RentalSpaceGroupByOutputType = {
    id: string
    vendorId: string
    name: string
    description: string | null
    price: number
    location: string
    size: string
    image: string | null
    available: boolean
    rentedBy: string | null
    rentalStart: Date | null
    rentalEnd: Date | null
    plantStatus: string | null
    lastWatered: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RentalSpaceCountAggregateOutputType | null
    _avg: RentalSpaceAvgAggregateOutputType | null
    _sum: RentalSpaceSumAggregateOutputType | null
    _min: RentalSpaceMinAggregateOutputType | null
    _max: RentalSpaceMaxAggregateOutputType | null
  }

  type GetRentalSpaceGroupByPayload<T extends RentalSpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalSpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalSpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], RentalSpaceGroupByOutputType[P]>
        }
      >
    >


  export type RentalSpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    size?: boolean
    image?: boolean
    available?: boolean
    rentedBy?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    plantStatus?: boolean
    lastWatered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    size?: boolean
    image?: boolean
    available?: boolean
    rentedBy?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    plantStatus?: boolean
    lastWatered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    size?: boolean
    image?: boolean
    available?: boolean
    rentedBy?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    plantStatus?: boolean
    lastWatered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    size?: boolean
    image?: boolean
    available?: boolean
    rentedBy?: boolean
    rentalStart?: boolean
    rentalEnd?: boolean
    plantStatus?: boolean
    lastWatered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalSpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "name" | "description" | "price" | "location" | "size" | "image" | "available" | "rentedBy" | "rentalStart" | "rentalEnd" | "plantStatus" | "lastWatered" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalSpace"]>
  export type RentalSpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type RentalSpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type RentalSpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $RentalSpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalSpace"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      name: string
      description: string | null
      price: number
      location: string
      size: string
      image: string | null
      available: boolean
      rentedBy: string | null
      rentalStart: Date | null
      rentalEnd: Date | null
      plantStatus: string | null
      lastWatered: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalSpace"]>
    composites: {}
  }

  type RentalSpaceGetPayload<S extends boolean | null | undefined | RentalSpaceDefaultArgs> = $Result.GetResult<Prisma.$RentalSpacePayload, S>

  type RentalSpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalSpaceCountAggregateInputType | true
    }

  export interface RentalSpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalSpace'], meta: { name: 'RentalSpace' } }
    /**
     * Find zero or one RentalSpace that matches the filter.
     * @param {RentalSpaceFindUniqueArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalSpaceFindUniqueArgs>(args: SelectSubset<T, RentalSpaceFindUniqueArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalSpace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalSpaceFindUniqueOrThrowArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalSpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindFirstArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalSpaceFindFirstArgs>(args?: SelectSubset<T, RentalSpaceFindFirstArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindFirstOrThrowArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalSpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalSpaces
     * const rentalSpaces = await prisma.rentalSpace.findMany()
     * 
     * // Get first 10 RentalSpaces
     * const rentalSpaces = await prisma.rentalSpace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalSpaceFindManyArgs>(args?: SelectSubset<T, RentalSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalSpace.
     * @param {RentalSpaceCreateArgs} args - Arguments to create a RentalSpace.
     * @example
     * // Create one RentalSpace
     * const RentalSpace = await prisma.rentalSpace.create({
     *   data: {
     *     // ... data to create a RentalSpace
     *   }
     * })
     * 
     */
    create<T extends RentalSpaceCreateArgs>(args: SelectSubset<T, RentalSpaceCreateArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalSpaces.
     * @param {RentalSpaceCreateManyArgs} args - Arguments to create many RentalSpaces.
     * @example
     * // Create many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalSpaceCreateManyArgs>(args?: SelectSubset<T, RentalSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalSpaces and returns the data saved in the database.
     * @param {RentalSpaceCreateManyAndReturnArgs} args - Arguments to create many RentalSpaces.
     * @example
     * // Create many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalSpaces and only return the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalSpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalSpace.
     * @param {RentalSpaceDeleteArgs} args - Arguments to delete one RentalSpace.
     * @example
     * // Delete one RentalSpace
     * const RentalSpace = await prisma.rentalSpace.delete({
     *   where: {
     *     // ... filter to delete one RentalSpace
     *   }
     * })
     * 
     */
    delete<T extends RentalSpaceDeleteArgs>(args: SelectSubset<T, RentalSpaceDeleteArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalSpace.
     * @param {RentalSpaceUpdateArgs} args - Arguments to update one RentalSpace.
     * @example
     * // Update one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalSpaceUpdateArgs>(args: SelectSubset<T, RentalSpaceUpdateArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalSpaces.
     * @param {RentalSpaceDeleteManyArgs} args - Arguments to filter RentalSpaces to delete.
     * @example
     * // Delete a few RentalSpaces
     * const { count } = await prisma.rentalSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalSpaceDeleteManyArgs>(args?: SelectSubset<T, RentalSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalSpaceUpdateManyArgs>(args: SelectSubset<T, RentalSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalSpaces and returns the data updated in the database.
     * @param {RentalSpaceUpdateManyAndReturnArgs} args - Arguments to update many RentalSpaces.
     * @example
     * // Update many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalSpaces and only return the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalSpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalSpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalSpace.
     * @param {RentalSpaceUpsertArgs} args - Arguments to update or create a RentalSpace.
     * @example
     * // Update or create a RentalSpace
     * const rentalSpace = await prisma.rentalSpace.upsert({
     *   create: {
     *     // ... data to create a RentalSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalSpace we want to update
     *   }
     * })
     */
    upsert<T extends RentalSpaceUpsertArgs>(args: SelectSubset<T, RentalSpaceUpsertArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceCountArgs} args - Arguments to filter RentalSpaces to count.
     * @example
     * // Count the number of RentalSpaces
     * const count = await prisma.rentalSpace.count({
     *   where: {
     *     // ... the filter for the RentalSpaces we want to count
     *   }
     * })
    **/
    count<T extends RentalSpaceCountArgs>(
      args?: Subset<T, RentalSpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalSpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalSpaceAggregateArgs>(args: Subset<T, RentalSpaceAggregateArgs>): Prisma.PrismaPromise<GetRentalSpaceAggregateType<T>>

    /**
     * Group by RentalSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalSpaceGroupByArgs['orderBy'] }
        : { orderBy?: RentalSpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalSpace model
   */
  readonly fields: RentalSpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalSpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalSpace model
   */
  interface RentalSpaceFieldRefs {
    readonly id: FieldRef<"RentalSpace", 'String'>
    readonly vendorId: FieldRef<"RentalSpace", 'String'>
    readonly name: FieldRef<"RentalSpace", 'String'>
    readonly description: FieldRef<"RentalSpace", 'String'>
    readonly price: FieldRef<"RentalSpace", 'Float'>
    readonly location: FieldRef<"RentalSpace", 'String'>
    readonly size: FieldRef<"RentalSpace", 'String'>
    readonly image: FieldRef<"RentalSpace", 'String'>
    readonly available: FieldRef<"RentalSpace", 'Boolean'>
    readonly rentedBy: FieldRef<"RentalSpace", 'String'>
    readonly rentalStart: FieldRef<"RentalSpace", 'DateTime'>
    readonly rentalEnd: FieldRef<"RentalSpace", 'DateTime'>
    readonly plantStatus: FieldRef<"RentalSpace", 'String'>
    readonly lastWatered: FieldRef<"RentalSpace", 'DateTime'>
    readonly createdAt: FieldRef<"RentalSpace", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalSpace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalSpace findUnique
   */
  export type RentalSpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace findUniqueOrThrow
   */
  export type RentalSpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace findFirst
   */
  export type RentalSpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace findFirstOrThrow
   */
  export type RentalSpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace findMany
   */
  export type RentalSpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpaces to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace create
   */
  export type RentalSpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalSpace.
     */
    data: XOR<RentalSpaceCreateInput, RentalSpaceUncheckedCreateInput>
  }

  /**
   * RentalSpace createMany
   */
  export type RentalSpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalSpaces.
     */
    data: RentalSpaceCreateManyInput | RentalSpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalSpace createManyAndReturn
   */
  export type RentalSpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * The data used to create many RentalSpaces.
     */
    data: RentalSpaceCreateManyInput | RentalSpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalSpace update
   */
  export type RentalSpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalSpace.
     */
    data: XOR<RentalSpaceUpdateInput, RentalSpaceUncheckedUpdateInput>
    /**
     * Choose, which RentalSpace to update.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace updateMany
   */
  export type RentalSpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalSpaces.
     */
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyInput>
    /**
     * Filter which RentalSpaces to update
     */
    where?: RentalSpaceWhereInput
    /**
     * Limit how many RentalSpaces to update.
     */
    limit?: number
  }

  /**
   * RentalSpace updateManyAndReturn
   */
  export type RentalSpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * The data used to update RentalSpaces.
     */
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyInput>
    /**
     * Filter which RentalSpaces to update
     */
    where?: RentalSpaceWhereInput
    /**
     * Limit how many RentalSpaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalSpace upsert
   */
  export type RentalSpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalSpace to update in case it exists.
     */
    where: RentalSpaceWhereUniqueInput
    /**
     * In case the RentalSpace found by the `where` argument doesn't exist, create a new RentalSpace with this data.
     */
    create: XOR<RentalSpaceCreateInput, RentalSpaceUncheckedCreateInput>
    /**
     * In case the RentalSpace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalSpaceUpdateInput, RentalSpaceUncheckedUpdateInput>
  }

  /**
   * RentalSpace delete
   */
  export type RentalSpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter which RentalSpace to delete.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace deleteMany
   */
  export type RentalSpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSpaces to delete
     */
    where?: RentalSpaceWhereInput
    /**
     * Limit how many RentalSpaces to delete.
     */
    limit?: number
  }

  /**
   * RentalSpace without action
   */
  export type RentalSpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
  }


  /**
   * Model CommunityPost
   */

  export type AggregateCommunityPost = {
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  export type CommunityPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postContent: string | null
    postDate: Date | null
    isApproved: boolean | null
    moderatedBy: string | null
    moderatedAt: Date | null
  }

  export type CommunityPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postContent: string | null
    postDate: Date | null
    isApproved: boolean | null
    moderatedBy: string | null
    moderatedAt: Date | null
  }

  export type CommunityPostCountAggregateOutputType = {
    id: number
    userId: number
    postContent: number
    postDate: number
    isApproved: number
    moderatedBy: number
    moderatedAt: number
    _all: number
  }


  export type CommunityPostMinAggregateInputType = {
    id?: true
    userId?: true
    postContent?: true
    postDate?: true
    isApproved?: true
    moderatedBy?: true
    moderatedAt?: true
  }

  export type CommunityPostMaxAggregateInputType = {
    id?: true
    userId?: true
    postContent?: true
    postDate?: true
    isApproved?: true
    moderatedBy?: true
    moderatedAt?: true
  }

  export type CommunityPostCountAggregateInputType = {
    id?: true
    userId?: true
    postContent?: true
    postDate?: true
    isApproved?: true
    moderatedBy?: true
    moderatedAt?: true
    _all?: true
  }

  export type CommunityPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPost to aggregate.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityPosts
    **/
    _count?: true | CommunityPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityPostMaxAggregateInputType
  }

  export type GetCommunityPostAggregateType<T extends CommunityPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityPost[P]>
      : GetScalarType<T[P], AggregateCommunityPost[P]>
  }




  export type CommunityPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithAggregationInput | CommunityPostOrderByWithAggregationInput[]
    by: CommunityPostScalarFieldEnum[] | CommunityPostScalarFieldEnum
    having?: CommunityPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityPostCountAggregateInputType | true
    _min?: CommunityPostMinAggregateInputType
    _max?: CommunityPostMaxAggregateInputType
  }

  export type CommunityPostGroupByOutputType = {
    id: string
    userId: string
    postContent: string
    postDate: Date
    isApproved: boolean
    moderatedBy: string | null
    moderatedAt: Date | null
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  type GetCommunityPostGroupByPayload<T extends CommunityPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
        }
      >
    >


  export type CommunityPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
    isApproved?: boolean
    moderatedBy?: boolean
    moderatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reports?: boolean | CommunityPost$reportsArgs<ExtArgs>
    _count?: boolean | CommunityPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
    isApproved?: boolean
    moderatedBy?: boolean
    moderatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
    isApproved?: boolean
    moderatedBy?: boolean
    moderatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectScalar = {
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
    isApproved?: boolean
    moderatedBy?: boolean
    moderatedAt?: boolean
  }

  export type CommunityPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postContent" | "postDate" | "isApproved" | "moderatedBy" | "moderatedAt", ExtArgs["result"]["communityPost"]>
  export type CommunityPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reports?: boolean | CommunityPost$reportsArgs<ExtArgs>
    _count?: boolean | CommunityPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postContent: string
      postDate: Date
      isApproved: boolean
      moderatedBy: string | null
      moderatedAt: Date | null
    }, ExtArgs["result"]["communityPost"]>
    composites: {}
  }

  type CommunityPostGetPayload<S extends boolean | null | undefined | CommunityPostDefaultArgs> = $Result.GetResult<Prisma.$CommunityPostPayload, S>

  type CommunityPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityPostCountAggregateInputType | true
    }

  export interface CommunityPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityPost'], meta: { name: 'CommunityPost' } }
    /**
     * Find zero or one CommunityPost that matches the filter.
     * @param {CommunityPostFindUniqueArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityPostFindUniqueArgs>(args: SelectSubset<T, CommunityPostFindUniqueArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityPostFindUniqueOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityPostFindFirstArgs>(args?: SelectSubset<T, CommunityPostFindFirstArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany()
     * 
     * // Get first 10 CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityPostFindManyArgs>(args?: SelectSubset<T, CommunityPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityPost.
     * @param {CommunityPostCreateArgs} args - Arguments to create a CommunityPost.
     * @example
     * // Create one CommunityPost
     * const CommunityPost = await prisma.communityPost.create({
     *   data: {
     *     // ... data to create a CommunityPost
     *   }
     * })
     * 
     */
    create<T extends CommunityPostCreateArgs>(args: SelectSubset<T, CommunityPostCreateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityPosts.
     * @param {CommunityPostCreateManyArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityPostCreateManyArgs>(args?: SelectSubset<T, CommunityPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityPosts and returns the data saved in the database.
     * @param {CommunityPostCreateManyAndReturnArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityPost.
     * @param {CommunityPostDeleteArgs} args - Arguments to delete one CommunityPost.
     * @example
     * // Delete one CommunityPost
     * const CommunityPost = await prisma.communityPost.delete({
     *   where: {
     *     // ... filter to delete one CommunityPost
     *   }
     * })
     * 
     */
    delete<T extends CommunityPostDeleteArgs>(args: SelectSubset<T, CommunityPostDeleteArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityPost.
     * @param {CommunityPostUpdateArgs} args - Arguments to update one CommunityPost.
     * @example
     * // Update one CommunityPost
     * const communityPost = await prisma.communityPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityPostUpdateArgs>(args: SelectSubset<T, CommunityPostUpdateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityPosts.
     * @param {CommunityPostDeleteManyArgs} args - Arguments to filter CommunityPosts to delete.
     * @example
     * // Delete a few CommunityPosts
     * const { count } = await prisma.communityPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityPostDeleteManyArgs>(args?: SelectSubset<T, CommunityPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityPostUpdateManyArgs>(args: SelectSubset<T, CommunityPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts and returns the data updated in the database.
     * @param {CommunityPostUpdateManyAndReturnArgs} args - Arguments to update many CommunityPosts.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityPostUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityPost.
     * @param {CommunityPostUpsertArgs} args - Arguments to update or create a CommunityPost.
     * @example
     * // Update or create a CommunityPost
     * const communityPost = await prisma.communityPost.upsert({
     *   create: {
     *     // ... data to create a CommunityPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityPost we want to update
     *   }
     * })
     */
    upsert<T extends CommunityPostUpsertArgs>(args: SelectSubset<T, CommunityPostUpsertArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostCountArgs} args - Arguments to filter CommunityPosts to count.
     * @example
     * // Count the number of CommunityPosts
     * const count = await prisma.communityPost.count({
     *   where: {
     *     // ... the filter for the CommunityPosts we want to count
     *   }
     * })
    **/
    count<T extends CommunityPostCountArgs>(
      args?: Subset<T, CommunityPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityPostAggregateArgs>(args: Subset<T, CommunityPostAggregateArgs>): Prisma.PrismaPromise<GetCommunityPostAggregateType<T>>

    /**
     * Group by CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityPostGroupByArgs['orderBy'] }
        : { orderBy?: CommunityPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityPost model
   */
  readonly fields: CommunityPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reports<T extends CommunityPost$reportsArgs<ExtArgs> = {}>(args?: Subset<T, CommunityPost$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityPost model
   */
  interface CommunityPostFieldRefs {
    readonly id: FieldRef<"CommunityPost", 'String'>
    readonly userId: FieldRef<"CommunityPost", 'String'>
    readonly postContent: FieldRef<"CommunityPost", 'String'>
    readonly postDate: FieldRef<"CommunityPost", 'DateTime'>
    readonly isApproved: FieldRef<"CommunityPost", 'Boolean'>
    readonly moderatedBy: FieldRef<"CommunityPost", 'String'>
    readonly moderatedAt: FieldRef<"CommunityPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityPost findUnique
   */
  export type CommunityPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findUniqueOrThrow
   */
  export type CommunityPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findFirst
   */
  export type CommunityPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findFirstOrThrow
   */
  export type CommunityPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findMany
   */
  export type CommunityPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPosts to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost create
   */
  export type CommunityPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityPost.
     */
    data: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
  }

  /**
   * CommunityPost createMany
   */
  export type CommunityPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityPost createManyAndReturn
   */
  export type CommunityPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost update
   */
  export type CommunityPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityPost.
     */
    data: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
    /**
     * Choose, which CommunityPost to update.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost updateMany
   */
  export type CommunityPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
  }

  /**
   * CommunityPost updateManyAndReturn
   */
  export type CommunityPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost upsert
   */
  export type CommunityPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityPost to update in case it exists.
     */
    where: CommunityPostWhereUniqueInput
    /**
     * In case the CommunityPost found by the `where` argument doesn't exist, create a new CommunityPost with this data.
     */
    create: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
    /**
     * In case the CommunityPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
  }

  /**
   * CommunityPost delete
   */
  export type CommunityPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter which CommunityPost to delete.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost deleteMany
   */
  export type CommunityPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPosts to delete
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to delete.
     */
    limit?: number
  }

  /**
   * CommunityPost.reports
   */
  export type CommunityPost$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * CommunityPost without action
   */
  export type CommunityPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
  }


  /**
   * Model SustainabilityTip
   */

  export type AggregateSustainabilityTip = {
    _count: SustainabilityTipCountAggregateOutputType | null
    _min: SustainabilityTipMinAggregateOutputType | null
    _max: SustainabilityTipMaxAggregateOutputType | null
  }

  export type SustainabilityTipMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
  }

  export type SustainabilityTipMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
  }

  export type SustainabilityTipCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    createdAt: number
    _all: number
  }


  export type SustainabilityTipMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    createdAt?: true
  }

  export type SustainabilityTipMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    createdAt?: true
  }

  export type SustainabilityTipCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type SustainabilityTipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SustainabilityTip to aggregate.
     */
    where?: SustainabilityTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityTips to fetch.
     */
    orderBy?: SustainabilityTipOrderByWithRelationInput | SustainabilityTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SustainabilityTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SustainabilityTips
    **/
    _count?: true | SustainabilityTipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SustainabilityTipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SustainabilityTipMaxAggregateInputType
  }

  export type GetSustainabilityTipAggregateType<T extends SustainabilityTipAggregateArgs> = {
        [P in keyof T & keyof AggregateSustainabilityTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSustainabilityTip[P]>
      : GetScalarType<T[P], AggregateSustainabilityTip[P]>
  }




  export type SustainabilityTipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SustainabilityTipWhereInput
    orderBy?: SustainabilityTipOrderByWithAggregationInput | SustainabilityTipOrderByWithAggregationInput[]
    by: SustainabilityTipScalarFieldEnum[] | SustainabilityTipScalarFieldEnum
    having?: SustainabilityTipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SustainabilityTipCountAggregateInputType | true
    _min?: SustainabilityTipMinAggregateInputType
    _max?: SustainabilityTipMaxAggregateInputType
  }

  export type SustainabilityTipGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    createdAt: Date
    _count: SustainabilityTipCountAggregateOutputType | null
    _min: SustainabilityTipMinAggregateOutputType | null
    _max: SustainabilityTipMaxAggregateOutputType | null
  }

  type GetSustainabilityTipGroupByPayload<T extends SustainabilityTipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SustainabilityTipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SustainabilityTipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SustainabilityTipGroupByOutputType[P]>
            : GetScalarType<T[P], SustainabilityTipGroupByOutputType[P]>
        }
      >
    >


  export type SustainabilityTipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sustainabilityTip"]>

  export type SustainabilityTipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sustainabilityTip"]>

  export type SustainabilityTipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sustainabilityTip"]>

  export type SustainabilityTipSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type SustainabilityTipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "createdAt", ExtArgs["result"]["sustainabilityTip"]>

  export type $SustainabilityTipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SustainabilityTip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      createdAt: Date
    }, ExtArgs["result"]["sustainabilityTip"]>
    composites: {}
  }

  type SustainabilityTipGetPayload<S extends boolean | null | undefined | SustainabilityTipDefaultArgs> = $Result.GetResult<Prisma.$SustainabilityTipPayload, S>

  type SustainabilityTipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SustainabilityTipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SustainabilityTipCountAggregateInputType | true
    }

  export interface SustainabilityTipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SustainabilityTip'], meta: { name: 'SustainabilityTip' } }
    /**
     * Find zero or one SustainabilityTip that matches the filter.
     * @param {SustainabilityTipFindUniqueArgs} args - Arguments to find a SustainabilityTip
     * @example
     * // Get one SustainabilityTip
     * const sustainabilityTip = await prisma.sustainabilityTip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SustainabilityTipFindUniqueArgs>(args: SelectSubset<T, SustainabilityTipFindUniqueArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SustainabilityTip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SustainabilityTipFindUniqueOrThrowArgs} args - Arguments to find a SustainabilityTip
     * @example
     * // Get one SustainabilityTip
     * const sustainabilityTip = await prisma.sustainabilityTip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SustainabilityTipFindUniqueOrThrowArgs>(args: SelectSubset<T, SustainabilityTipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SustainabilityTip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityTipFindFirstArgs} args - Arguments to find a SustainabilityTip
     * @example
     * // Get one SustainabilityTip
     * const sustainabilityTip = await prisma.sustainabilityTip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SustainabilityTipFindFirstArgs>(args?: SelectSubset<T, SustainabilityTipFindFirstArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SustainabilityTip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityTipFindFirstOrThrowArgs} args - Arguments to find a SustainabilityTip
     * @example
     * // Get one SustainabilityTip
     * const sustainabilityTip = await prisma.sustainabilityTip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SustainabilityTipFindFirstOrThrowArgs>(args?: SelectSubset<T, SustainabilityTipFindFirstOrThrowArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SustainabilityTips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityTipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SustainabilityTips
     * const sustainabilityTips = await prisma.sustainabilityTip.findMany()
     * 
     * // Get first 10 SustainabilityTips
     * const sustainabilityTips = await prisma.sustainabilityTip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sustainabilityTipWithIdOnly = await prisma.sustainabilityTip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SustainabilityTipFindManyArgs>(args?: SelectSubset<T, SustainabilityTipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SustainabilityTip.
     * @param {SustainabilityTipCreateArgs} args - Arguments to create a SustainabilityTip.
     * @example
     * // Create one SustainabilityTip
     * const SustainabilityTip = await prisma.sustainabilityTip.create({
     *   data: {
     *     // ... data to create a SustainabilityTip
     *   }
     * })
     * 
     */
    create<T extends SustainabilityTipCreateArgs>(args: SelectSubset<T, SustainabilityTipCreateArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SustainabilityTips.
     * @param {SustainabilityTipCreateManyArgs} args - Arguments to create many SustainabilityTips.
     * @example
     * // Create many SustainabilityTips
     * const sustainabilityTip = await prisma.sustainabilityTip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SustainabilityTipCreateManyArgs>(args?: SelectSubset<T, SustainabilityTipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SustainabilityTips and returns the data saved in the database.
     * @param {SustainabilityTipCreateManyAndReturnArgs} args - Arguments to create many SustainabilityTips.
     * @example
     * // Create many SustainabilityTips
     * const sustainabilityTip = await prisma.sustainabilityTip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SustainabilityTips and only return the `id`
     * const sustainabilityTipWithIdOnly = await prisma.sustainabilityTip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SustainabilityTipCreateManyAndReturnArgs>(args?: SelectSubset<T, SustainabilityTipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SustainabilityTip.
     * @param {SustainabilityTipDeleteArgs} args - Arguments to delete one SustainabilityTip.
     * @example
     * // Delete one SustainabilityTip
     * const SustainabilityTip = await prisma.sustainabilityTip.delete({
     *   where: {
     *     // ... filter to delete one SustainabilityTip
     *   }
     * })
     * 
     */
    delete<T extends SustainabilityTipDeleteArgs>(args: SelectSubset<T, SustainabilityTipDeleteArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SustainabilityTip.
     * @param {SustainabilityTipUpdateArgs} args - Arguments to update one SustainabilityTip.
     * @example
     * // Update one SustainabilityTip
     * const sustainabilityTip = await prisma.sustainabilityTip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SustainabilityTipUpdateArgs>(args: SelectSubset<T, SustainabilityTipUpdateArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SustainabilityTips.
     * @param {SustainabilityTipDeleteManyArgs} args - Arguments to filter SustainabilityTips to delete.
     * @example
     * // Delete a few SustainabilityTips
     * const { count } = await prisma.sustainabilityTip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SustainabilityTipDeleteManyArgs>(args?: SelectSubset<T, SustainabilityTipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SustainabilityTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityTipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SustainabilityTips
     * const sustainabilityTip = await prisma.sustainabilityTip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SustainabilityTipUpdateManyArgs>(args: SelectSubset<T, SustainabilityTipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SustainabilityTips and returns the data updated in the database.
     * @param {SustainabilityTipUpdateManyAndReturnArgs} args - Arguments to update many SustainabilityTips.
     * @example
     * // Update many SustainabilityTips
     * const sustainabilityTip = await prisma.sustainabilityTip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SustainabilityTips and only return the `id`
     * const sustainabilityTipWithIdOnly = await prisma.sustainabilityTip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SustainabilityTipUpdateManyAndReturnArgs>(args: SelectSubset<T, SustainabilityTipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SustainabilityTip.
     * @param {SustainabilityTipUpsertArgs} args - Arguments to update or create a SustainabilityTip.
     * @example
     * // Update or create a SustainabilityTip
     * const sustainabilityTip = await prisma.sustainabilityTip.upsert({
     *   create: {
     *     // ... data to create a SustainabilityTip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SustainabilityTip we want to update
     *   }
     * })
     */
    upsert<T extends SustainabilityTipUpsertArgs>(args: SelectSubset<T, SustainabilityTipUpsertArgs<ExtArgs>>): Prisma__SustainabilityTipClient<$Result.GetResult<Prisma.$SustainabilityTipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SustainabilityTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityTipCountArgs} args - Arguments to filter SustainabilityTips to count.
     * @example
     * // Count the number of SustainabilityTips
     * const count = await prisma.sustainabilityTip.count({
     *   where: {
     *     // ... the filter for the SustainabilityTips we want to count
     *   }
     * })
    **/
    count<T extends SustainabilityTipCountArgs>(
      args?: Subset<T, SustainabilityTipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SustainabilityTipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SustainabilityTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityTipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SustainabilityTipAggregateArgs>(args: Subset<T, SustainabilityTipAggregateArgs>): Prisma.PrismaPromise<GetSustainabilityTipAggregateType<T>>

    /**
     * Group by SustainabilityTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityTipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SustainabilityTipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SustainabilityTipGroupByArgs['orderBy'] }
        : { orderBy?: SustainabilityTipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SustainabilityTipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSustainabilityTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SustainabilityTip model
   */
  readonly fields: SustainabilityTipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SustainabilityTip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SustainabilityTipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SustainabilityTip model
   */
  interface SustainabilityTipFieldRefs {
    readonly id: FieldRef<"SustainabilityTip", 'String'>
    readonly title: FieldRef<"SustainabilityTip", 'String'>
    readonly description: FieldRef<"SustainabilityTip", 'String'>
    readonly category: FieldRef<"SustainabilityTip", 'String'>
    readonly createdAt: FieldRef<"SustainabilityTip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SustainabilityTip findUnique
   */
  export type SustainabilityTipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * Filter, which SustainabilityTip to fetch.
     */
    where: SustainabilityTipWhereUniqueInput
  }

  /**
   * SustainabilityTip findUniqueOrThrow
   */
  export type SustainabilityTipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * Filter, which SustainabilityTip to fetch.
     */
    where: SustainabilityTipWhereUniqueInput
  }

  /**
   * SustainabilityTip findFirst
   */
  export type SustainabilityTipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * Filter, which SustainabilityTip to fetch.
     */
    where?: SustainabilityTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityTips to fetch.
     */
    orderBy?: SustainabilityTipOrderByWithRelationInput | SustainabilityTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SustainabilityTips.
     */
    cursor?: SustainabilityTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityTips.
     */
    distinct?: SustainabilityTipScalarFieldEnum | SustainabilityTipScalarFieldEnum[]
  }

  /**
   * SustainabilityTip findFirstOrThrow
   */
  export type SustainabilityTipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * Filter, which SustainabilityTip to fetch.
     */
    where?: SustainabilityTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityTips to fetch.
     */
    orderBy?: SustainabilityTipOrderByWithRelationInput | SustainabilityTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SustainabilityTips.
     */
    cursor?: SustainabilityTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityTips.
     */
    distinct?: SustainabilityTipScalarFieldEnum | SustainabilityTipScalarFieldEnum[]
  }

  /**
   * SustainabilityTip findMany
   */
  export type SustainabilityTipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * Filter, which SustainabilityTips to fetch.
     */
    where?: SustainabilityTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityTips to fetch.
     */
    orderBy?: SustainabilityTipOrderByWithRelationInput | SustainabilityTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SustainabilityTips.
     */
    cursor?: SustainabilityTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityTips.
     */
    distinct?: SustainabilityTipScalarFieldEnum | SustainabilityTipScalarFieldEnum[]
  }

  /**
   * SustainabilityTip create
   */
  export type SustainabilityTipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * The data needed to create a SustainabilityTip.
     */
    data: XOR<SustainabilityTipCreateInput, SustainabilityTipUncheckedCreateInput>
  }

  /**
   * SustainabilityTip createMany
   */
  export type SustainabilityTipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SustainabilityTips.
     */
    data: SustainabilityTipCreateManyInput | SustainabilityTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SustainabilityTip createManyAndReturn
   */
  export type SustainabilityTipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * The data used to create many SustainabilityTips.
     */
    data: SustainabilityTipCreateManyInput | SustainabilityTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SustainabilityTip update
   */
  export type SustainabilityTipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * The data needed to update a SustainabilityTip.
     */
    data: XOR<SustainabilityTipUpdateInput, SustainabilityTipUncheckedUpdateInput>
    /**
     * Choose, which SustainabilityTip to update.
     */
    where: SustainabilityTipWhereUniqueInput
  }

  /**
   * SustainabilityTip updateMany
   */
  export type SustainabilityTipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SustainabilityTips.
     */
    data: XOR<SustainabilityTipUpdateManyMutationInput, SustainabilityTipUncheckedUpdateManyInput>
    /**
     * Filter which SustainabilityTips to update
     */
    where?: SustainabilityTipWhereInput
    /**
     * Limit how many SustainabilityTips to update.
     */
    limit?: number
  }

  /**
   * SustainabilityTip updateManyAndReturn
   */
  export type SustainabilityTipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * The data used to update SustainabilityTips.
     */
    data: XOR<SustainabilityTipUpdateManyMutationInput, SustainabilityTipUncheckedUpdateManyInput>
    /**
     * Filter which SustainabilityTips to update
     */
    where?: SustainabilityTipWhereInput
    /**
     * Limit how many SustainabilityTips to update.
     */
    limit?: number
  }

  /**
   * SustainabilityTip upsert
   */
  export type SustainabilityTipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * The filter to search for the SustainabilityTip to update in case it exists.
     */
    where: SustainabilityTipWhereUniqueInput
    /**
     * In case the SustainabilityTip found by the `where` argument doesn't exist, create a new SustainabilityTip with this data.
     */
    create: XOR<SustainabilityTipCreateInput, SustainabilityTipUncheckedCreateInput>
    /**
     * In case the SustainabilityTip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SustainabilityTipUpdateInput, SustainabilityTipUncheckedUpdateInput>
  }

  /**
   * SustainabilityTip delete
   */
  export type SustainabilityTipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
    /**
     * Filter which SustainabilityTip to delete.
     */
    where: SustainabilityTipWhereUniqueInput
  }

  /**
   * SustainabilityTip deleteMany
   */
  export type SustainabilityTipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SustainabilityTips to delete
     */
    where?: SustainabilityTipWhereInput
    /**
     * Limit how many SustainabilityTips to delete.
     */
    limit?: number
  }

  /**
   * SustainabilityTip without action
   */
  export type SustainabilityTipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityTip
     */
    select?: SustainabilityTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityTip
     */
    omit?: SustainabilityTipOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    produceId: string | null
    vendorId: string | null
    status: $Enums.OrderStatus | null
    orderDate: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    produceId: string | null
    vendorId: string | null
    status: $Enums.OrderStatus | null
    orderDate: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    produceId: number
    vendorId: number
    status: number
    orderDate: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    status?: true
    orderDate?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    status?: true
    orderDate?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    status?: true
    orderDate?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    produceId: string
    vendorId: string
    status: $Enums.OrderStatus
    orderDate: Date
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "produceId" | "vendorId" | "status" | "orderDate", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      produce: Prisma.$ProducePayload<ExtArgs>
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      produceId: string
      vendorId: string
      status: $Enums.OrderStatus
      orderDate: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produce<T extends ProduceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduceDefaultArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly produceId: FieldRef<"Order", 'String'>
    readonly vendorId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    reporterId: string | null
    reportedId: string | null
    postId: string | null
    reason: string | null
    description: string | null
    status: string | null
    adminId: string | null
    resolvedAt: Date | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    reporterId: string | null
    reportedId: string | null
    postId: string | null
    reason: string | null
    description: string | null
    status: string | null
    adminId: string | null
    resolvedAt: Date | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    reporterId: number
    reportedId: number
    postId: number
    reason: number
    description: number
    status: number
    adminId: number
    resolvedAt: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    reporterId?: true
    reportedId?: true
    postId?: true
    reason?: true
    description?: true
    status?: true
    adminId?: true
    resolvedAt?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    reporterId?: true
    reportedId?: true
    postId?: true
    reason?: true
    description?: true
    status?: true
    adminId?: true
    resolvedAt?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    reporterId?: true
    reportedId?: true
    postId?: true
    reason?: true
    description?: true
    status?: true
    adminId?: true
    resolvedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    reporterId: string
    reportedId: string | null
    postId: string | null
    reason: string
    description: string | null
    status: string
    adminId: string | null
    resolvedAt: Date | null
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    reportedId?: boolean
    postId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    adminId?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    reported?: boolean | Report$reportedArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    reportedId?: boolean
    postId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    adminId?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    reported?: boolean | Report$reportedArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    reportedId?: boolean
    postId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    adminId?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    reported?: boolean | Report$reportedArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    reporterId?: boolean
    reportedId?: boolean
    postId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    adminId?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporterId" | "reportedId" | "postId" | "reason" | "description" | "status" | "adminId" | "resolvedAt" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    reported?: boolean | Report$reportedArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    reported?: boolean | Report$reportedArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    reported?: boolean | Report$reportedArgs<ExtArgs>
    post?: boolean | Report$postArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      reporter: Prisma.$UserPayload<ExtArgs>
      reported: Prisma.$UserPayload<ExtArgs> | null
      post: Prisma.$CommunityPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reporterId: string
      reportedId: string | null
      postId: string | null
      reason: string
      description: string | null
      status: string
      adminId: string | null
      resolvedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reported<T extends Report$reportedArgs<ExtArgs> = {}>(args?: Subset<T, Report$reportedArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends Report$postArgs<ExtArgs> = {}>(args?: Subset<T, Report$postArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly reporterId: FieldRef<"Report", 'String'>
    readonly reportedId: FieldRef<"Report", 'String'>
    readonly postId: FieldRef<"Report", 'String'>
    readonly reason: FieldRef<"Report", 'String'>
    readonly description: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'String'>
    readonly adminId: FieldRef<"Report", 'String'>
    readonly resolvedAt: FieldRef<"Report", 'DateTime'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.reported
   */
  export type Report$reportedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Report.post
   */
  export type Report$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    where?: CommunityPostWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    target: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    target: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    target: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    target?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    target?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    target?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    target: string
    adminId: string
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    target?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    target?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    target?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    target?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "target" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      target: string
      adminId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly target: FieldRef<"Announcement", 'String'>
    readonly adminId: FieldRef<"Announcement", 'String'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model RateLimitLog
   */

  export type AggregateRateLimitLog = {
    _count: RateLimitLogCountAggregateOutputType | null
    _avg: RateLimitLogAvgAggregateOutputType | null
    _sum: RateLimitLogSumAggregateOutputType | null
    _min: RateLimitLogMinAggregateOutputType | null
    _max: RateLimitLogMaxAggregateOutputType | null
  }

  export type RateLimitLogAvgAggregateOutputType = {
    count: number | null
  }

  export type RateLimitLogSumAggregateOutputType = {
    count: number | null
  }

  export type RateLimitLogMinAggregateOutputType = {
    id: string | null
    ip: string | null
    endpoint: string | null
    method: string | null
    userId: string | null
    count: number | null
    windowStart: Date | null
    createdAt: Date | null
  }

  export type RateLimitLogMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    endpoint: string | null
    method: string | null
    userId: string | null
    count: number | null
    windowStart: Date | null
    createdAt: Date | null
  }

  export type RateLimitLogCountAggregateOutputType = {
    id: number
    ip: number
    endpoint: number
    method: number
    userId: number
    count: number
    windowStart: number
    createdAt: number
    _all: number
  }


  export type RateLimitLogAvgAggregateInputType = {
    count?: true
  }

  export type RateLimitLogSumAggregateInputType = {
    count?: true
  }

  export type RateLimitLogMinAggregateInputType = {
    id?: true
    ip?: true
    endpoint?: true
    method?: true
    userId?: true
    count?: true
    windowStart?: true
    createdAt?: true
  }

  export type RateLimitLogMaxAggregateInputType = {
    id?: true
    ip?: true
    endpoint?: true
    method?: true
    userId?: true
    count?: true
    windowStart?: true
    createdAt?: true
  }

  export type RateLimitLogCountAggregateInputType = {
    id?: true
    ip?: true
    endpoint?: true
    method?: true
    userId?: true
    count?: true
    windowStart?: true
    createdAt?: true
    _all?: true
  }

  export type RateLimitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitLog to aggregate.
     */
    where?: RateLimitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitLogs to fetch.
     */
    orderBy?: RateLimitLogOrderByWithRelationInput | RateLimitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateLimitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateLimitLogs
    **/
    _count?: true | RateLimitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateLimitLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateLimitLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateLimitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateLimitLogMaxAggregateInputType
  }

  export type GetRateLimitLogAggregateType<T extends RateLimitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRateLimitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateLimitLog[P]>
      : GetScalarType<T[P], AggregateRateLimitLog[P]>
  }




  export type RateLimitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateLimitLogWhereInput
    orderBy?: RateLimitLogOrderByWithAggregationInput | RateLimitLogOrderByWithAggregationInput[]
    by: RateLimitLogScalarFieldEnum[] | RateLimitLogScalarFieldEnum
    having?: RateLimitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateLimitLogCountAggregateInputType | true
    _avg?: RateLimitLogAvgAggregateInputType
    _sum?: RateLimitLogSumAggregateInputType
    _min?: RateLimitLogMinAggregateInputType
    _max?: RateLimitLogMaxAggregateInputType
  }

  export type RateLimitLogGroupByOutputType = {
    id: string
    ip: string
    endpoint: string
    method: string
    userId: string | null
    count: number
    windowStart: Date
    createdAt: Date
    _count: RateLimitLogCountAggregateOutputType | null
    _avg: RateLimitLogAvgAggregateOutputType | null
    _sum: RateLimitLogSumAggregateOutputType | null
    _min: RateLimitLogMinAggregateOutputType | null
    _max: RateLimitLogMaxAggregateOutputType | null
  }

  type GetRateLimitLogGroupByPayload<T extends RateLimitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateLimitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateLimitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateLimitLogGroupByOutputType[P]>
            : GetScalarType<T[P], RateLimitLogGroupByOutputType[P]>
        }
      >
    >


  export type RateLimitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    endpoint?: boolean
    method?: boolean
    userId?: boolean
    count?: boolean
    windowStart?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rateLimitLog"]>

  export type RateLimitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    endpoint?: boolean
    method?: boolean
    userId?: boolean
    count?: boolean
    windowStart?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rateLimitLog"]>

  export type RateLimitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    endpoint?: boolean
    method?: boolean
    userId?: boolean
    count?: boolean
    windowStart?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rateLimitLog"]>

  export type RateLimitLogSelectScalar = {
    id?: boolean
    ip?: boolean
    endpoint?: boolean
    method?: boolean
    userId?: boolean
    count?: boolean
    windowStart?: boolean
    createdAt?: boolean
  }

  export type RateLimitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "endpoint" | "method" | "userId" | "count" | "windowStart" | "createdAt", ExtArgs["result"]["rateLimitLog"]>

  export type $RateLimitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateLimitLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      endpoint: string
      method: string
      userId: string | null
      count: number
      windowStart: Date
      createdAt: Date
    }, ExtArgs["result"]["rateLimitLog"]>
    composites: {}
  }

  type RateLimitLogGetPayload<S extends boolean | null | undefined | RateLimitLogDefaultArgs> = $Result.GetResult<Prisma.$RateLimitLogPayload, S>

  type RateLimitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateLimitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateLimitLogCountAggregateInputType | true
    }

  export interface RateLimitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateLimitLog'], meta: { name: 'RateLimitLog' } }
    /**
     * Find zero or one RateLimitLog that matches the filter.
     * @param {RateLimitLogFindUniqueArgs} args - Arguments to find a RateLimitLog
     * @example
     * // Get one RateLimitLog
     * const rateLimitLog = await prisma.rateLimitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateLimitLogFindUniqueArgs>(args: SelectSubset<T, RateLimitLogFindUniqueArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateLimitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateLimitLogFindUniqueOrThrowArgs} args - Arguments to find a RateLimitLog
     * @example
     * // Get one RateLimitLog
     * const rateLimitLog = await prisma.rateLimitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateLimitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RateLimitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitLogFindFirstArgs} args - Arguments to find a RateLimitLog
     * @example
     * // Get one RateLimitLog
     * const rateLimitLog = await prisma.rateLimitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateLimitLogFindFirstArgs>(args?: SelectSubset<T, RateLimitLogFindFirstArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitLogFindFirstOrThrowArgs} args - Arguments to find a RateLimitLog
     * @example
     * // Get one RateLimitLog
     * const rateLimitLog = await prisma.rateLimitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateLimitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RateLimitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateLimitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateLimitLogs
     * const rateLimitLogs = await prisma.rateLimitLog.findMany()
     * 
     * // Get first 10 RateLimitLogs
     * const rateLimitLogs = await prisma.rateLimitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateLimitLogWithIdOnly = await prisma.rateLimitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RateLimitLogFindManyArgs>(args?: SelectSubset<T, RateLimitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateLimitLog.
     * @param {RateLimitLogCreateArgs} args - Arguments to create a RateLimitLog.
     * @example
     * // Create one RateLimitLog
     * const RateLimitLog = await prisma.rateLimitLog.create({
     *   data: {
     *     // ... data to create a RateLimitLog
     *   }
     * })
     * 
     */
    create<T extends RateLimitLogCreateArgs>(args: SelectSubset<T, RateLimitLogCreateArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateLimitLogs.
     * @param {RateLimitLogCreateManyArgs} args - Arguments to create many RateLimitLogs.
     * @example
     * // Create many RateLimitLogs
     * const rateLimitLog = await prisma.rateLimitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateLimitLogCreateManyArgs>(args?: SelectSubset<T, RateLimitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateLimitLogs and returns the data saved in the database.
     * @param {RateLimitLogCreateManyAndReturnArgs} args - Arguments to create many RateLimitLogs.
     * @example
     * // Create many RateLimitLogs
     * const rateLimitLog = await prisma.rateLimitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateLimitLogs and only return the `id`
     * const rateLimitLogWithIdOnly = await prisma.rateLimitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateLimitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RateLimitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateLimitLog.
     * @param {RateLimitLogDeleteArgs} args - Arguments to delete one RateLimitLog.
     * @example
     * // Delete one RateLimitLog
     * const RateLimitLog = await prisma.rateLimitLog.delete({
     *   where: {
     *     // ... filter to delete one RateLimitLog
     *   }
     * })
     * 
     */
    delete<T extends RateLimitLogDeleteArgs>(args: SelectSubset<T, RateLimitLogDeleteArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateLimitLog.
     * @param {RateLimitLogUpdateArgs} args - Arguments to update one RateLimitLog.
     * @example
     * // Update one RateLimitLog
     * const rateLimitLog = await prisma.rateLimitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateLimitLogUpdateArgs>(args: SelectSubset<T, RateLimitLogUpdateArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateLimitLogs.
     * @param {RateLimitLogDeleteManyArgs} args - Arguments to filter RateLimitLogs to delete.
     * @example
     * // Delete a few RateLimitLogs
     * const { count } = await prisma.rateLimitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateLimitLogDeleteManyArgs>(args?: SelectSubset<T, RateLimitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateLimitLogs
     * const rateLimitLog = await prisma.rateLimitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateLimitLogUpdateManyArgs>(args: SelectSubset<T, RateLimitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitLogs and returns the data updated in the database.
     * @param {RateLimitLogUpdateManyAndReturnArgs} args - Arguments to update many RateLimitLogs.
     * @example
     * // Update many RateLimitLogs
     * const rateLimitLog = await prisma.rateLimitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateLimitLogs and only return the `id`
     * const rateLimitLogWithIdOnly = await prisma.rateLimitLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateLimitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, RateLimitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateLimitLog.
     * @param {RateLimitLogUpsertArgs} args - Arguments to update or create a RateLimitLog.
     * @example
     * // Update or create a RateLimitLog
     * const rateLimitLog = await prisma.rateLimitLog.upsert({
     *   create: {
     *     // ... data to create a RateLimitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateLimitLog we want to update
     *   }
     * })
     */
    upsert<T extends RateLimitLogUpsertArgs>(args: SelectSubset<T, RateLimitLogUpsertArgs<ExtArgs>>): Prisma__RateLimitLogClient<$Result.GetResult<Prisma.$RateLimitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateLimitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitLogCountArgs} args - Arguments to filter RateLimitLogs to count.
     * @example
     * // Count the number of RateLimitLogs
     * const count = await prisma.rateLimitLog.count({
     *   where: {
     *     // ... the filter for the RateLimitLogs we want to count
     *   }
     * })
    **/
    count<T extends RateLimitLogCountArgs>(
      args?: Subset<T, RateLimitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateLimitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateLimitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateLimitLogAggregateArgs>(args: Subset<T, RateLimitLogAggregateArgs>): Prisma.PrismaPromise<GetRateLimitLogAggregateType<T>>

    /**
     * Group by RateLimitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateLimitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateLimitLogGroupByArgs['orderBy'] }
        : { orderBy?: RateLimitLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateLimitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateLimitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateLimitLog model
   */
  readonly fields: RateLimitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateLimitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateLimitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RateLimitLog model
   */
  interface RateLimitLogFieldRefs {
    readonly id: FieldRef<"RateLimitLog", 'String'>
    readonly ip: FieldRef<"RateLimitLog", 'String'>
    readonly endpoint: FieldRef<"RateLimitLog", 'String'>
    readonly method: FieldRef<"RateLimitLog", 'String'>
    readonly userId: FieldRef<"RateLimitLog", 'String'>
    readonly count: FieldRef<"RateLimitLog", 'Int'>
    readonly windowStart: FieldRef<"RateLimitLog", 'DateTime'>
    readonly createdAt: FieldRef<"RateLimitLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RateLimitLog findUnique
   */
  export type RateLimitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitLog to fetch.
     */
    where: RateLimitLogWhereUniqueInput
  }

  /**
   * RateLimitLog findUniqueOrThrow
   */
  export type RateLimitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitLog to fetch.
     */
    where: RateLimitLogWhereUniqueInput
  }

  /**
   * RateLimitLog findFirst
   */
  export type RateLimitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitLog to fetch.
     */
    where?: RateLimitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitLogs to fetch.
     */
    orderBy?: RateLimitLogOrderByWithRelationInput | RateLimitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitLogs.
     */
    cursor?: RateLimitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitLogs.
     */
    distinct?: RateLimitLogScalarFieldEnum | RateLimitLogScalarFieldEnum[]
  }

  /**
   * RateLimitLog findFirstOrThrow
   */
  export type RateLimitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitLog to fetch.
     */
    where?: RateLimitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitLogs to fetch.
     */
    orderBy?: RateLimitLogOrderByWithRelationInput | RateLimitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitLogs.
     */
    cursor?: RateLimitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitLogs.
     */
    distinct?: RateLimitLogScalarFieldEnum | RateLimitLogScalarFieldEnum[]
  }

  /**
   * RateLimitLog findMany
   */
  export type RateLimitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitLogs to fetch.
     */
    where?: RateLimitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitLogs to fetch.
     */
    orderBy?: RateLimitLogOrderByWithRelationInput | RateLimitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateLimitLogs.
     */
    cursor?: RateLimitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitLogs.
     */
    distinct?: RateLimitLogScalarFieldEnum | RateLimitLogScalarFieldEnum[]
  }

  /**
   * RateLimitLog create
   */
  export type RateLimitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * The data needed to create a RateLimitLog.
     */
    data: XOR<RateLimitLogCreateInput, RateLimitLogUncheckedCreateInput>
  }

  /**
   * RateLimitLog createMany
   */
  export type RateLimitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateLimitLogs.
     */
    data: RateLimitLogCreateManyInput | RateLimitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitLog createManyAndReturn
   */
  export type RateLimitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * The data used to create many RateLimitLogs.
     */
    data: RateLimitLogCreateManyInput | RateLimitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitLog update
   */
  export type RateLimitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * The data needed to update a RateLimitLog.
     */
    data: XOR<RateLimitLogUpdateInput, RateLimitLogUncheckedUpdateInput>
    /**
     * Choose, which RateLimitLog to update.
     */
    where: RateLimitLogWhereUniqueInput
  }

  /**
   * RateLimitLog updateMany
   */
  export type RateLimitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateLimitLogs.
     */
    data: XOR<RateLimitLogUpdateManyMutationInput, RateLimitLogUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitLogs to update
     */
    where?: RateLimitLogWhereInput
    /**
     * Limit how many RateLimitLogs to update.
     */
    limit?: number
  }

  /**
   * RateLimitLog updateManyAndReturn
   */
  export type RateLimitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * The data used to update RateLimitLogs.
     */
    data: XOR<RateLimitLogUpdateManyMutationInput, RateLimitLogUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitLogs to update
     */
    where?: RateLimitLogWhereInput
    /**
     * Limit how many RateLimitLogs to update.
     */
    limit?: number
  }

  /**
   * RateLimitLog upsert
   */
  export type RateLimitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * The filter to search for the RateLimitLog to update in case it exists.
     */
    where: RateLimitLogWhereUniqueInput
    /**
     * In case the RateLimitLog found by the `where` argument doesn't exist, create a new RateLimitLog with this data.
     */
    create: XOR<RateLimitLogCreateInput, RateLimitLogUncheckedCreateInput>
    /**
     * In case the RateLimitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateLimitLogUpdateInput, RateLimitLogUncheckedUpdateInput>
  }

  /**
   * RateLimitLog delete
   */
  export type RateLimitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
    /**
     * Filter which RateLimitLog to delete.
     */
    where: RateLimitLogWhereUniqueInput
  }

  /**
   * RateLimitLog deleteMany
   */
  export type RateLimitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitLogs to delete
     */
    where?: RateLimitLogWhereInput
    /**
     * Limit how many RateLimitLogs to delete.
     */
    limit?: number
  }

  /**
   * RateLimitLog without action
   */
  export type RateLimitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitLog
     */
    select?: RateLimitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitLog
     */
    omit?: RateLimitLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    farmName: 'farmName',
    farmLocation: 'farmLocation',
    certificationStatus: 'certificationStatus',
    profilePhoto: 'profilePhoto',
    certifications: 'certifications',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorProfileScalarFieldEnum = (typeof VendorProfileScalarFieldEnum)[keyof typeof VendorProfileScalarFieldEnum]


  export const ProduceScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    name: 'name',
    description: 'description',
    price: 'price',
    image: 'image',
    category: 'category',
    availableQuantity: 'availableQuantity',
    certificationStatus: 'certificationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProduceScalarFieldEnum = (typeof ProduceScalarFieldEnum)[keyof typeof ProduceScalarFieldEnum]


  export const RentalSpaceScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    name: 'name',
    description: 'description',
    price: 'price',
    location: 'location',
    size: 'size',
    image: 'image',
    available: 'available',
    rentedBy: 'rentedBy',
    rentalStart: 'rentalStart',
    rentalEnd: 'rentalEnd',
    plantStatus: 'plantStatus',
    lastWatered: 'lastWatered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalSpaceScalarFieldEnum = (typeof RentalSpaceScalarFieldEnum)[keyof typeof RentalSpaceScalarFieldEnum]


  export const CommunityPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postContent: 'postContent',
    postDate: 'postDate',
    isApproved: 'isApproved',
    moderatedBy: 'moderatedBy',
    moderatedAt: 'moderatedAt'
  };

  export type CommunityPostScalarFieldEnum = (typeof CommunityPostScalarFieldEnum)[keyof typeof CommunityPostScalarFieldEnum]


  export const SustainabilityTipScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type SustainabilityTipScalarFieldEnum = (typeof SustainabilityTipScalarFieldEnum)[keyof typeof SustainabilityTipScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    produceId: 'produceId',
    vendorId: 'vendorId',
    status: 'status',
    orderDate: 'orderDate'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    reporterId: 'reporterId',
    reportedId: 'reportedId',
    postId: 'postId',
    reason: 'reason',
    description: 'description',
    status: 'status',
    adminId: 'adminId',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    target: 'target',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const RateLimitLogScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    endpoint: 'endpoint',
    method: 'method',
    userId: 'userId',
    count: 'count',
    windowStart: 'windowStart',
    createdAt: 'createdAt'
  };

  export type RateLimitLogScalarFieldEnum = (typeof RateLimitLogScalarFieldEnum)[keyof typeof RateLimitLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CertificationStatus'
   */
  export type EnumCertificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificationStatus'>
    


  /**
   * Reference to a field of type 'CertificationStatus[]'
   */
  export type ListEnumCertificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableScalarRelationFilter, VendorProfileWhereInput> | null
    orders?: OrderListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    reportsMade?: ReportListRelationFilter
    reportsAgainst?: ReportListRelationFilter
    announcements?: AnnouncementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorProfile?: VendorProfileOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    communityPosts?: CommunityPostOrderByRelationAggregateInput
    reportsMade?: ReportOrderByRelationAggregateInput
    reportsAgainst?: ReportOrderByRelationAggregateInput
    announcements?: AnnouncementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableScalarRelationFilter, VendorProfileWhereInput> | null
    orders?: OrderListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    reportsMade?: ReportListRelationFilter
    reportsAgainst?: ReportListRelationFilter
    announcements?: AnnouncementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VendorProfileWhereInput = {
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    id?: StringFilter<"VendorProfile"> | string
    userId?: StringFilter<"VendorProfile"> | string
    farmName?: StringFilter<"VendorProfile"> | string
    farmLocation?: StringFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertificationStatusFilter<"VendorProfile"> | $Enums.CertificationStatus
    profilePhoto?: StringNullableFilter<"VendorProfile"> | string | null
    certifications?: StringNullableListFilter<"VendorProfile">
    createdAt?: DateTimeFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VendorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produces?: ProduceListRelationFilter
    rentalSpaces?: RentalSpaceListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type VendorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    farmLocation?: SortOrder
    certificationStatus?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    produces?: ProduceOrderByRelationAggregateInput
    rentalSpaces?: RentalSpaceOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type VendorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    farmName?: StringFilter<"VendorProfile"> | string
    farmLocation?: StringFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertificationStatusFilter<"VendorProfile"> | $Enums.CertificationStatus
    profilePhoto?: StringNullableFilter<"VendorProfile"> | string | null
    certifications?: StringNullableListFilter<"VendorProfile">
    createdAt?: DateTimeFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VendorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produces?: ProduceListRelationFilter
    rentalSpaces?: RentalSpaceListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "userId">

  export type VendorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    farmLocation?: SortOrder
    certificationStatus?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorProfileCountOrderByAggregateInput
    _max?: VendorProfileMaxOrderByAggregateInput
    _min?: VendorProfileMinOrderByAggregateInput
  }

  export type VendorProfileScalarWhereWithAggregatesInput = {
    AND?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    OR?: VendorProfileScalarWhereWithAggregatesInput[]
    NOT?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VendorProfile"> | string
    userId?: StringWithAggregatesFilter<"VendorProfile"> | string
    farmName?: StringWithAggregatesFilter<"VendorProfile"> | string
    farmLocation?: StringWithAggregatesFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertificationStatusWithAggregatesFilter<"VendorProfile"> | $Enums.CertificationStatus
    profilePhoto?: StringNullableWithAggregatesFilter<"VendorProfile"> | string | null
    certifications?: StringNullableListFilter<"VendorProfile">
    createdAt?: DateTimeWithAggregatesFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VendorProfile"> | Date | string
  }

  export type ProduceWhereInput = {
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    id?: StringFilter<"Produce"> | string
    vendorId?: StringFilter<"Produce"> | string
    name?: StringFilter<"Produce"> | string
    description?: StringNullableFilter<"Produce"> | string | null
    price?: FloatFilter<"Produce"> | number
    image?: StringNullableFilter<"Produce"> | string | null
    category?: StringFilter<"Produce"> | string
    availableQuantity?: IntFilter<"Produce"> | number
    certificationStatus?: EnumCertificationStatusFilter<"Produce"> | $Enums.CertificationStatus
    createdAt?: DateTimeFilter<"Produce"> | Date | string
    updatedAt?: DateTimeFilter<"Produce"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
    orders?: OrderListRelationFilter
  }

  export type ProduceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    availableQuantity?: SortOrder
    certificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ProduceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    vendorId?: StringFilter<"Produce"> | string
    name?: StringFilter<"Produce"> | string
    description?: StringNullableFilter<"Produce"> | string | null
    price?: FloatFilter<"Produce"> | number
    image?: StringNullableFilter<"Produce"> | string | null
    category?: StringFilter<"Produce"> | string
    availableQuantity?: IntFilter<"Produce"> | number
    certificationStatus?: EnumCertificationStatusFilter<"Produce"> | $Enums.CertificationStatus
    createdAt?: DateTimeFilter<"Produce"> | Date | string
    updatedAt?: DateTimeFilter<"Produce"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type ProduceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    availableQuantity?: SortOrder
    certificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProduceCountOrderByAggregateInput
    _avg?: ProduceAvgOrderByAggregateInput
    _max?: ProduceMaxOrderByAggregateInput
    _min?: ProduceMinOrderByAggregateInput
    _sum?: ProduceSumOrderByAggregateInput
  }

  export type ProduceScalarWhereWithAggregatesInput = {
    AND?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    OR?: ProduceScalarWhereWithAggregatesInput[]
    NOT?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produce"> | string
    vendorId?: StringWithAggregatesFilter<"Produce"> | string
    name?: StringWithAggregatesFilter<"Produce"> | string
    description?: StringNullableWithAggregatesFilter<"Produce"> | string | null
    price?: FloatWithAggregatesFilter<"Produce"> | number
    image?: StringNullableWithAggregatesFilter<"Produce"> | string | null
    category?: StringWithAggregatesFilter<"Produce"> | string
    availableQuantity?: IntWithAggregatesFilter<"Produce"> | number
    certificationStatus?: EnumCertificationStatusWithAggregatesFilter<"Produce"> | $Enums.CertificationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Produce"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Produce"> | Date | string
  }

  export type RentalSpaceWhereInput = {
    AND?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    OR?: RentalSpaceWhereInput[]
    NOT?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    id?: StringFilter<"RentalSpace"> | string
    vendorId?: StringFilter<"RentalSpace"> | string
    name?: StringFilter<"RentalSpace"> | string
    description?: StringNullableFilter<"RentalSpace"> | string | null
    price?: FloatFilter<"RentalSpace"> | number
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    image?: StringNullableFilter<"RentalSpace"> | string | null
    available?: BoolFilter<"RentalSpace"> | boolean
    rentedBy?: StringNullableFilter<"RentalSpace"> | string | null
    rentalStart?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    rentalEnd?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    plantStatus?: StringNullableFilter<"RentalSpace"> | string | null
    lastWatered?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    createdAt?: DateTimeFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeFilter<"RentalSpace"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type RentalSpaceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    location?: SortOrder
    size?: SortOrder
    image?: SortOrderInput | SortOrder
    available?: SortOrder
    rentedBy?: SortOrderInput | SortOrder
    rentalStart?: SortOrderInput | SortOrder
    rentalEnd?: SortOrderInput | SortOrder
    plantStatus?: SortOrderInput | SortOrder
    lastWatered?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type RentalSpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    OR?: RentalSpaceWhereInput[]
    NOT?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    vendorId?: StringFilter<"RentalSpace"> | string
    name?: StringFilter<"RentalSpace"> | string
    description?: StringNullableFilter<"RentalSpace"> | string | null
    price?: FloatFilter<"RentalSpace"> | number
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    image?: StringNullableFilter<"RentalSpace"> | string | null
    available?: BoolFilter<"RentalSpace"> | boolean
    rentedBy?: StringNullableFilter<"RentalSpace"> | string | null
    rentalStart?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    rentalEnd?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    plantStatus?: StringNullableFilter<"RentalSpace"> | string | null
    lastWatered?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    createdAt?: DateTimeFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeFilter<"RentalSpace"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type RentalSpaceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    location?: SortOrder
    size?: SortOrder
    image?: SortOrderInput | SortOrder
    available?: SortOrder
    rentedBy?: SortOrderInput | SortOrder
    rentalStart?: SortOrderInput | SortOrder
    rentalEnd?: SortOrderInput | SortOrder
    plantStatus?: SortOrderInput | SortOrder
    lastWatered?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalSpaceCountOrderByAggregateInput
    _avg?: RentalSpaceAvgOrderByAggregateInput
    _max?: RentalSpaceMaxOrderByAggregateInput
    _min?: RentalSpaceMinOrderByAggregateInput
    _sum?: RentalSpaceSumOrderByAggregateInput
  }

  export type RentalSpaceScalarWhereWithAggregatesInput = {
    AND?: RentalSpaceScalarWhereWithAggregatesInput | RentalSpaceScalarWhereWithAggregatesInput[]
    OR?: RentalSpaceScalarWhereWithAggregatesInput[]
    NOT?: RentalSpaceScalarWhereWithAggregatesInput | RentalSpaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalSpace"> | string
    vendorId?: StringWithAggregatesFilter<"RentalSpace"> | string
    name?: StringWithAggregatesFilter<"RentalSpace"> | string
    description?: StringNullableWithAggregatesFilter<"RentalSpace"> | string | null
    price?: FloatWithAggregatesFilter<"RentalSpace"> | number
    location?: StringWithAggregatesFilter<"RentalSpace"> | string
    size?: StringWithAggregatesFilter<"RentalSpace"> | string
    image?: StringNullableWithAggregatesFilter<"RentalSpace"> | string | null
    available?: BoolWithAggregatesFilter<"RentalSpace"> | boolean
    rentedBy?: StringNullableWithAggregatesFilter<"RentalSpace"> | string | null
    rentalStart?: DateTimeNullableWithAggregatesFilter<"RentalSpace"> | Date | string | null
    rentalEnd?: DateTimeNullableWithAggregatesFilter<"RentalSpace"> | Date | string | null
    plantStatus?: StringNullableWithAggregatesFilter<"RentalSpace"> | string | null
    lastWatered?: DateTimeNullableWithAggregatesFilter<"RentalSpace"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalSpace"> | Date | string
  }

  export type CommunityPostWhereInput = {
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    userId?: StringFilter<"CommunityPost"> | string
    postContent?: StringFilter<"CommunityPost"> | string
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    isApproved?: BoolFilter<"CommunityPost"> | boolean
    moderatedBy?: StringNullableFilter<"CommunityPost"> | string | null
    moderatedAt?: DateTimeNullableFilter<"CommunityPost"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reports?: ReportListRelationFilter
  }

  export type CommunityPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    isApproved?: SortOrder
    moderatedBy?: SortOrderInput | SortOrder
    moderatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type CommunityPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    userId?: StringFilter<"CommunityPost"> | string
    postContent?: StringFilter<"CommunityPost"> | string
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    isApproved?: BoolFilter<"CommunityPost"> | boolean
    moderatedBy?: StringNullableFilter<"CommunityPost"> | string | null
    moderatedAt?: DateTimeNullableFilter<"CommunityPost"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reports?: ReportListRelationFilter
  }, "id">

  export type CommunityPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    isApproved?: SortOrder
    moderatedBy?: SortOrderInput | SortOrder
    moderatedAt?: SortOrderInput | SortOrder
    _count?: CommunityPostCountOrderByAggregateInput
    _max?: CommunityPostMaxOrderByAggregateInput
    _min?: CommunityPostMinOrderByAggregateInput
  }

  export type CommunityPostScalarWhereWithAggregatesInput = {
    AND?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    OR?: CommunityPostScalarWhereWithAggregatesInput[]
    NOT?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityPost"> | string
    userId?: StringWithAggregatesFilter<"CommunityPost"> | string
    postContent?: StringWithAggregatesFilter<"CommunityPost"> | string
    postDate?: DateTimeWithAggregatesFilter<"CommunityPost"> | Date | string
    isApproved?: BoolWithAggregatesFilter<"CommunityPost"> | boolean
    moderatedBy?: StringNullableWithAggregatesFilter<"CommunityPost"> | string | null
    moderatedAt?: DateTimeNullableWithAggregatesFilter<"CommunityPost"> | Date | string | null
  }

  export type SustainabilityTipWhereInput = {
    AND?: SustainabilityTipWhereInput | SustainabilityTipWhereInput[]
    OR?: SustainabilityTipWhereInput[]
    NOT?: SustainabilityTipWhereInput | SustainabilityTipWhereInput[]
    id?: StringFilter<"SustainabilityTip"> | string
    title?: StringFilter<"SustainabilityTip"> | string
    description?: StringFilter<"SustainabilityTip"> | string
    category?: StringFilter<"SustainabilityTip"> | string
    createdAt?: DateTimeFilter<"SustainabilityTip"> | Date | string
  }

  export type SustainabilityTipOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type SustainabilityTipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SustainabilityTipWhereInput | SustainabilityTipWhereInput[]
    OR?: SustainabilityTipWhereInput[]
    NOT?: SustainabilityTipWhereInput | SustainabilityTipWhereInput[]
    title?: StringFilter<"SustainabilityTip"> | string
    description?: StringFilter<"SustainabilityTip"> | string
    category?: StringFilter<"SustainabilityTip"> | string
    createdAt?: DateTimeFilter<"SustainabilityTip"> | Date | string
  }, "id">

  export type SustainabilityTipOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: SustainabilityTipCountOrderByAggregateInput
    _max?: SustainabilityTipMaxOrderByAggregateInput
    _min?: SustainabilityTipMinOrderByAggregateInput
  }

  export type SustainabilityTipScalarWhereWithAggregatesInput = {
    AND?: SustainabilityTipScalarWhereWithAggregatesInput | SustainabilityTipScalarWhereWithAggregatesInput[]
    OR?: SustainabilityTipScalarWhereWithAggregatesInput[]
    NOT?: SustainabilityTipScalarWhereWithAggregatesInput | SustainabilityTipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SustainabilityTip"> | string
    title?: StringWithAggregatesFilter<"SustainabilityTip"> | string
    description?: StringWithAggregatesFilter<"SustainabilityTip"> | string
    category?: StringWithAggregatesFilter<"SustainabilityTip"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SustainabilityTip"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    produceId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produce?: XOR<ProduceScalarRelationFilter, ProduceWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    user?: UserOrderByWithRelationInput
    produce?: ProduceOrderByWithRelationInput
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    produceId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produce?: XOR<ProduceScalarRelationFilter, ProduceWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    produceId?: StringWithAggregatesFilter<"Order"> | string
    vendorId?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    reporterId?: StringFilter<"Report"> | string
    reportedId?: StringNullableFilter<"Report"> | string | null
    postId?: StringNullableFilter<"Report"> | string | null
    reason?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    status?: StringFilter<"Report"> | string
    adminId?: StringNullableFilter<"Report"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    reported?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    post?: XOR<CommunityPostNullableScalarRelationFilter, CommunityPostWhereInput> | null
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    reporterId?: SortOrder
    reportedId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    reason?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    adminId?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reporter?: UserOrderByWithRelationInput
    reported?: UserOrderByWithRelationInput
    post?: CommunityPostOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    reporterId?: StringFilter<"Report"> | string
    reportedId?: StringNullableFilter<"Report"> | string | null
    postId?: StringNullableFilter<"Report"> | string | null
    reason?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    status?: StringFilter<"Report"> | string
    adminId?: StringNullableFilter<"Report"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    reported?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    post?: XOR<CommunityPostNullableScalarRelationFilter, CommunityPostWhereInput> | null
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    reporterId?: SortOrder
    reportedId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    reason?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    adminId?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    reporterId?: StringWithAggregatesFilter<"Report"> | string
    reportedId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    postId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    reason?: StringWithAggregatesFilter<"Report"> | string
    description?: StringNullableWithAggregatesFilter<"Report"> | string | null
    status?: StringWithAggregatesFilter<"Report"> | string
    adminId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    target?: StringFilter<"Announcement"> | string
    adminId?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    target?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    target?: StringFilter<"Announcement"> | string
    adminId?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    target?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    target?: StringWithAggregatesFilter<"Announcement"> | string
    adminId?: StringWithAggregatesFilter<"Announcement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type RateLimitLogWhereInput = {
    AND?: RateLimitLogWhereInput | RateLimitLogWhereInput[]
    OR?: RateLimitLogWhereInput[]
    NOT?: RateLimitLogWhereInput | RateLimitLogWhereInput[]
    id?: StringFilter<"RateLimitLog"> | string
    ip?: StringFilter<"RateLimitLog"> | string
    endpoint?: StringFilter<"RateLimitLog"> | string
    method?: StringFilter<"RateLimitLog"> | string
    userId?: StringNullableFilter<"RateLimitLog"> | string | null
    count?: IntFilter<"RateLimitLog"> | number
    windowStart?: DateTimeFilter<"RateLimitLog"> | Date | string
    createdAt?: DateTimeFilter<"RateLimitLog"> | Date | string
  }

  export type RateLimitLogOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    userId?: SortOrderInput | SortOrder
    count?: SortOrder
    windowStart?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RateLimitLogWhereInput | RateLimitLogWhereInput[]
    OR?: RateLimitLogWhereInput[]
    NOT?: RateLimitLogWhereInput | RateLimitLogWhereInput[]
    ip?: StringFilter<"RateLimitLog"> | string
    endpoint?: StringFilter<"RateLimitLog"> | string
    method?: StringFilter<"RateLimitLog"> | string
    userId?: StringNullableFilter<"RateLimitLog"> | string | null
    count?: IntFilter<"RateLimitLog"> | number
    windowStart?: DateTimeFilter<"RateLimitLog"> | Date | string
    createdAt?: DateTimeFilter<"RateLimitLog"> | Date | string
  }, "id">

  export type RateLimitLogOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    userId?: SortOrderInput | SortOrder
    count?: SortOrder
    windowStart?: SortOrder
    createdAt?: SortOrder
    _count?: RateLimitLogCountOrderByAggregateInput
    _avg?: RateLimitLogAvgOrderByAggregateInput
    _max?: RateLimitLogMaxOrderByAggregateInput
    _min?: RateLimitLogMinOrderByAggregateInput
    _sum?: RateLimitLogSumOrderByAggregateInput
  }

  export type RateLimitLogScalarWhereWithAggregatesInput = {
    AND?: RateLimitLogScalarWhereWithAggregatesInput | RateLimitLogScalarWhereWithAggregatesInput[]
    OR?: RateLimitLogScalarWhereWithAggregatesInput[]
    NOT?: RateLimitLogScalarWhereWithAggregatesInput | RateLimitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RateLimitLog"> | string
    ip?: StringWithAggregatesFilter<"RateLimitLog"> | string
    endpoint?: StringWithAggregatesFilter<"RateLimitLog"> | string
    method?: StringWithAggregatesFilter<"RateLimitLog"> | string
    userId?: StringNullableWithAggregatesFilter<"RateLimitLog"> | string | null
    count?: IntWithAggregatesFilter<"RateLimitLog"> | number
    windowStart?: DateTimeWithAggregatesFilter<"RateLimitLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RateLimitLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    reportsMade?: ReportCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportUncheckedCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileCreateInput = {
    id?: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produces?: ProduceCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileCreateManyInput = {
    id?: string
    userId: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduceCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutProducesInput
    orders?: OrderCreateNestedManyWithoutProduceInput
  }

  export type ProduceUncheckedCreateInput = {
    id?: string
    vendorId: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProduceInput
  }

  export type ProduceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutProducesNestedInput
    orders?: OrderUpdateManyWithoutProduceNestedInput
  }

  export type ProduceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProduceNestedInput
  }

  export type ProduceCreateManyInput = {
    id?: string
    vendorId: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    location: string
    size: string
    image?: string | null
    available?: boolean
    rentedBy?: string | null
    rentalStart?: Date | string | null
    rentalEnd?: Date | string | null
    plantStatus?: string | null
    lastWatered?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutRentalSpacesInput
  }

  export type RentalSpaceUncheckedCreateInput = {
    id?: string
    vendorId: string
    name: string
    description?: string | null
    price: number
    location: string
    size: string
    image?: string | null
    available?: boolean
    rentedBy?: string | null
    rentalStart?: Date | string | null
    rentalEnd?: Date | string | null
    plantStatus?: string | null
    lastWatered?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalSpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    rentedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rentalStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentalEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plantStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastWatered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput
  }

  export type RentalSpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    rentedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rentalStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentalEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plantStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastWatered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceCreateManyInput = {
    id?: string
    vendorId: string
    name: string
    description?: string | null
    price: number
    location: string
    size: string
    image?: string | null
    available?: boolean
    rentedBy?: string | null
    rentalStart?: Date | string | null
    rentalEnd?: Date | string | null
    plantStatus?: string | null
    lastWatered?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalSpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    rentedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rentalStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentalEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plantStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastWatered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    rentedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rentalStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentalEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plantStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastWatered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateInput = {
    id?: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommunityPostsInput
    reports?: ReportCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUncheckedCreateInput = {
    id?: string
    userId: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
    reports?: ReportUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostCreateManyInput = {
    id?: string
    userId: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
  }

  export type CommunityPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunityPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SustainabilityTipCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    createdAt?: Date | string
  }

  export type SustainabilityTipUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    createdAt?: Date | string
  }

  export type SustainabilityTipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityTipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityTipCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    createdAt?: Date | string
  }

  export type SustainabilityTipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityTipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    produce: ProduceCreateNestedOneWithoutOrdersInput
    vendor: VendorProfileCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    produceId: string
    vendorId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    produce?: ProduceUpdateOneRequiredWithoutOrdersNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    produceId: string
    vendorId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsMadeInput
    reported?: UserCreateNestedOneWithoutReportsAgainstInput
    post?: CommunityPostCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    reporterId: string
    reportedId?: string | null
    postId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsMadeNestedInput
    reported?: UserUpdateOneWithoutReportsAgainstNestedInput
    post?: CommunityPostUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    reporterId: string
    reportedId?: string | null
    postId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    target?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    target?: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    target?: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitLogCreateInput = {
    id?: string
    ip: string
    endpoint: string
    method: string
    userId?: string | null
    count?: number
    windowStart: Date | string
    createdAt?: Date | string
  }

  export type RateLimitLogUncheckedCreateInput = {
    id?: string
    ip: string
    endpoint: string
    method: string
    userId?: string | null
    count?: number
    windowStart: Date | string
    createdAt?: Date | string
  }

  export type RateLimitLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitLogCreateManyInput = {
    id?: string
    ip: string
    endpoint: string
    method: string
    userId?: string | null
    count?: number
    windowStart: Date | string
    createdAt?: Date | string
  }

  export type RateLimitLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VendorProfileNullableScalarRelationFilter = {
    is?: VendorProfileWhereInput | null
    isNot?: VendorProfileWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CommunityPostListRelationFilter = {
    every?: CommunityPostWhereInput
    some?: CommunityPostWhereInput
    none?: CommunityPostWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCertificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusFilter<$PrismaModel> | $Enums.CertificationStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProduceListRelationFilter = {
    every?: ProduceWhereInput
    some?: ProduceWhereInput
    none?: ProduceWhereInput
  }

  export type RentalSpaceListRelationFilter = {
    every?: RentalSpaceWhereInput
    some?: RentalSpaceWhereInput
    none?: RentalSpaceWhereInput
  }

  export type ProduceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    farmLocation?: SortOrder
    certificationStatus?: SortOrder
    profilePhoto?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    farmLocation?: SortOrder
    certificationStatus?: SortOrder
    profilePhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    farmLocation?: SortOrder
    certificationStatus?: SortOrder
    profilePhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCertificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificationStatusFilter<$PrismaModel>
    _max?: NestedEnumCertificationStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VendorProfileScalarRelationFilter = {
    is?: VendorProfileWhereInput
    isNot?: VendorProfileWhereInput
  }

  export type ProduceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    availableQuantity?: SortOrder
    certificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduceAvgOrderByAggregateInput = {
    price?: SortOrder
    availableQuantity?: SortOrder
  }

  export type ProduceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    availableQuantity?: SortOrder
    certificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduceMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    category?: SortOrder
    availableQuantity?: SortOrder
    certificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduceSumOrderByAggregateInput = {
    price?: SortOrder
    availableQuantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RentalSpaceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    size?: SortOrder
    image?: SortOrder
    available?: SortOrder
    rentedBy?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    plantStatus?: SortOrder
    lastWatered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSpaceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type RentalSpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    size?: SortOrder
    image?: SortOrder
    available?: SortOrder
    rentedBy?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    plantStatus?: SortOrder
    lastWatered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSpaceMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    size?: SortOrder
    image?: SortOrder
    available?: SortOrder
    rentedBy?: SortOrder
    rentalStart?: SortOrder
    rentalEnd?: SortOrder
    plantStatus?: SortOrder
    lastWatered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSpaceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CommunityPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    isApproved?: SortOrder
    moderatedBy?: SortOrder
    moderatedAt?: SortOrder
  }

  export type CommunityPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    isApproved?: SortOrder
    moderatedBy?: SortOrder
    moderatedAt?: SortOrder
  }

  export type CommunityPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    isApproved?: SortOrder
    moderatedBy?: SortOrder
    moderatedAt?: SortOrder
  }

  export type SustainabilityTipCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type SustainabilityTipMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type SustainabilityTipMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type ProduceScalarRelationFilter = {
    is?: ProduceWhereInput
    isNot?: ProduceWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CommunityPostNullableScalarRelationFilter = {
    is?: CommunityPostWhereInput | null
    isNot?: CommunityPostWhereInput | null
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    reportedId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    reportedId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    reportedId?: SortOrder
    postId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    adminId?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    target?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    target?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    target?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RateLimitLogCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    userId?: SortOrder
    count?: SortOrder
    windowStart?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitLogAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type RateLimitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    userId?: SortOrder
    count?: SortOrder
    windowStart?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitLogMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    userId?: SortOrder
    count?: SortOrder
    windowStart?: SortOrder
    createdAt?: SortOrder
  }

  export type RateLimitLogSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type VendorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CommunityPostCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutReportedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutAdminInput = {
    create?: XOR<AnnouncementCreateWithoutAdminInput, AnnouncementUncheckedCreateWithoutAdminInput> | AnnouncementCreateWithoutAdminInput[] | AnnouncementUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAdminInput | AnnouncementCreateOrConnectWithoutAdminInput[]
    createMany?: AnnouncementCreateManyAdminInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type VendorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CommunityPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutReportedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AnnouncementCreateWithoutAdminInput, AnnouncementUncheckedCreateWithoutAdminInput> | AnnouncementCreateWithoutAdminInput[] | AnnouncementUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAdminInput | AnnouncementCreateOrConnectWithoutAdminInput[]
    createMany?: AnnouncementCreateManyAdminInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CommunityPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutReportedNestedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReportedInput | ReportUpsertWithWhereUniqueWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReportedInput | ReportUpdateWithWhereUniqueWithoutReportedInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReportedInput | ReportUpdateManyWithWhereWithoutReportedInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AnnouncementCreateWithoutAdminInput, AnnouncementUncheckedCreateWithoutAdminInput> | AnnouncementCreateWithoutAdminInput[] | AnnouncementUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAdminInput | AnnouncementCreateOrConnectWithoutAdminInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutAdminInput | AnnouncementUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AnnouncementCreateManyAdminInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutAdminInput | AnnouncementUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutAdminInput | AnnouncementUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type VendorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutReportedNestedInput = {
    create?: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput> | ReportCreateWithoutReportedInput[] | ReportUncheckedCreateWithoutReportedInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReportedInput | ReportCreateOrConnectWithoutReportedInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReportedInput | ReportUpsertWithWhereUniqueWithoutReportedInput[]
    createMany?: ReportCreateManyReportedInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReportedInput | ReportUpdateWithWhereUniqueWithoutReportedInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReportedInput | ReportUpdateManyWithWhereWithoutReportedInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AnnouncementCreateWithoutAdminInput, AnnouncementUncheckedCreateWithoutAdminInput> | AnnouncementCreateWithoutAdminInput[] | AnnouncementUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAdminInput | AnnouncementCreateOrConnectWithoutAdminInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutAdminInput | AnnouncementUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AnnouncementCreateManyAdminInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutAdminInput | AnnouncementUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutAdminInput | AnnouncementUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type VendorProfileCreatecertificationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutVendorProfileInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProduceCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type RentalSpaceCreateNestedManyWithoutVendorInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProduceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type RentalSpaceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumCertificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CertificationStatus
  }

  export type VendorProfileUpdatecertificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutVendorProfileNestedInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    upsert?: UserUpsertWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorProfileInput, UserUpdateWithoutVendorProfileInput>, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type ProduceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutVendorInput | ProduceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutVendorInput | ProduceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutVendorInput | ProduceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type RentalSpaceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    upsert?: RentalSpaceUpsertWithWhereUniqueWithoutVendorInput | RentalSpaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    set?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    disconnect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    delete?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    update?: RentalSpaceUpdateWithWhereUniqueWithoutVendorInput | RentalSpaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RentalSpaceUpdateManyWithWhereWithoutVendorInput | RentalSpaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProduceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutVendorInput | ProduceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutVendorInput | ProduceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutVendorInput | ProduceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    upsert?: RentalSpaceUpsertWithWhereUniqueWithoutVendorInput | RentalSpaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    set?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    disconnect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    delete?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    update?: RentalSpaceUpdateWithWhereUniqueWithoutVendorInput | RentalSpaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RentalSpaceUpdateManyWithWhereWithoutVendorInput | RentalSpaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VendorProfileCreateNestedOneWithoutProducesInput = {
    create?: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutProducesInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutProduceInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProduceInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorProfileUpdateOneRequiredWithoutProducesNestedInput = {
    create?: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutProducesInput
    upsert?: VendorProfileUpsertWithoutProducesInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutProducesInput, VendorProfileUpdateWithoutProducesInput>, VendorProfileUncheckedUpdateWithoutProducesInput>
  }

  export type OrderUpdateManyWithoutProduceNestedInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProduceInput | OrderUpsertWithWhereUniqueWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProduceInput | OrderUpdateWithWhereUniqueWithoutProduceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProduceInput | OrderUpdateManyWithWhereWithoutProduceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProduceNestedInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProduceInput | OrderUpsertWithWhereUniqueWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProduceInput | OrderUpdateWithWhereUniqueWithoutProduceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProduceInput | OrderUpdateManyWithWhereWithoutProduceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VendorProfileCreateNestedOneWithoutRentalSpacesInput = {
    create?: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutRentalSpacesInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput = {
    create?: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutRentalSpacesInput
    upsert?: VendorProfileUpsertWithoutRentalSpacesInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutRentalSpacesInput, VendorProfileUpdateWithoutRentalSpacesInput>, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
  }

  export type UserCreateNestedOneWithoutCommunityPostsInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommunityPostsNestedInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    upsert?: UserUpsertWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityPostsInput, UserUpdateWithoutCommunityPostsInput>, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type ReportUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPostInput | ReportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPostInput | ReportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPostInput | ReportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput> | ReportCreateWithoutPostInput[] | ReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPostInput | ReportCreateOrConnectWithoutPostInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPostInput | ReportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReportCreateManyPostInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPostInput | ReportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPostInput | ReportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ProduceCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProduceCreateOrConnectWithoutOrdersInput
    connect?: ProduceWhereUniqueInput
  }

  export type VendorProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutOrdersInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type ProduceUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProduceCreateOrConnectWithoutOrdersInput
    upsert?: ProduceUpsertWithoutOrdersInput
    connect?: ProduceWhereUniqueInput
    update?: XOR<XOR<ProduceUpdateToOneWithWhereWithoutOrdersInput, ProduceUpdateWithoutOrdersInput>, ProduceUncheckedUpdateWithoutOrdersInput>
  }

  export type VendorProfileUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutOrdersInput
    upsert?: VendorProfileUpsertWithoutOrdersInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutOrdersInput, VendorProfileUpdateWithoutOrdersInput>, VendorProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type UserCreateNestedOneWithoutReportsMadeInput = {
    create?: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsMadeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsAgainstInput = {
    create?: XOR<UserCreateWithoutReportsAgainstInput, UserUncheckedCreateWithoutReportsAgainstInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsAgainstInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityPostCreateNestedOneWithoutReportsInput = {
    create?: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutReportsInput
    connect?: CommunityPostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReportsMadeNestedInput = {
    create?: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsMadeInput
    upsert?: UserUpsertWithoutReportsMadeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsMadeInput, UserUpdateWithoutReportsMadeInput>, UserUncheckedUpdateWithoutReportsMadeInput>
  }

  export type UserUpdateOneWithoutReportsAgainstNestedInput = {
    create?: XOR<UserCreateWithoutReportsAgainstInput, UserUncheckedCreateWithoutReportsAgainstInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsAgainstInput
    upsert?: UserUpsertWithoutReportsAgainstInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsAgainstInput, UserUpdateWithoutReportsAgainstInput>, UserUncheckedUpdateWithoutReportsAgainstInput>
  }

  export type CommunityPostUpdateOneWithoutReportsNestedInput = {
    create?: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutReportsInput
    upsert?: CommunityPostUpsertWithoutReportsInput
    disconnect?: CommunityPostWhereInput | boolean
    delete?: CommunityPostWhereInput | boolean
    connect?: CommunityPostWhereUniqueInput
    update?: XOR<XOR<CommunityPostUpdateToOneWithWhereWithoutReportsInput, CommunityPostUpdateWithoutReportsInput>, CommunityPostUncheckedUpdateWithoutReportsInput>
  }

  export type UserCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    upsert?: UserUpsertWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementsInput, UserUpdateWithoutAnnouncementsInput>, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCertificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusFilter<$PrismaModel> | $Enums.CertificationStatus
  }

  export type NestedEnumCertificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificationStatusFilter<$PrismaModel>
    _max?: NestedEnumCertificationStatusFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type VendorProfileCreateWithoutUserInput = {
    id?: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutUserInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    produce: ProduceCreateNestedOneWithoutOrdersInput
    vendor: VendorProfileCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    produceId: string
    vendorId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityPostCreateWithoutUserInput = {
    id?: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
    reports?: ReportCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUncheckedCreateWithoutUserInput = {
    id?: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type CommunityPostCreateOrConnectWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostCreateManyUserInputEnvelope = {
    data: CommunityPostCreateManyUserInput | CommunityPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutReporterInput = {
    id?: string
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    reported?: UserCreateNestedOneWithoutReportsAgainstInput
    post?: CommunityPostCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutReporterInput = {
    id?: string
    reportedId?: string | null
    postId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutReporterInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportCreateManyReporterInputEnvelope = {
    data: ReportCreateManyReporterInput | ReportCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutReportedInput = {
    id?: string
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsMadeInput
    post?: CommunityPostCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutReportedInput = {
    id?: string
    reporterId: string
    postId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutReportedInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput>
  }

  export type ReportCreateManyReportedInputEnvelope = {
    data: ReportCreateManyReportedInput | ReportCreateManyReportedInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    target?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    target?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementCreateOrConnectWithoutAdminInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutAdminInput, AnnouncementUncheckedCreateWithoutAdminInput>
  }

  export type AnnouncementCreateManyAdminInputEnvelope = {
    data: AnnouncementCreateManyAdminInput | AnnouncementCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type VendorProfileUpsertWithoutUserInput = {
    update: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type VendorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    produceId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
  }

  export type CommunityPostUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    update: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    data: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
  }

  export type CommunityPostUpdateManyWithWhereWithoutUserInput = {
    where: CommunityPostScalarWhereInput
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityPostScalarWhereInput = {
    AND?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    OR?: CommunityPostScalarWhereInput[]
    NOT?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    userId?: StringFilter<"CommunityPost"> | string
    postContent?: StringFilter<"CommunityPost"> | string
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    isApproved?: BoolFilter<"CommunityPost"> | boolean
    moderatedBy?: StringNullableFilter<"CommunityPost"> | string | null
    moderatedAt?: DateTimeNullableFilter<"CommunityPost"> | Date | string | null
  }

  export type ReportUpsertWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
  }

  export type ReportUpdateManyWithWhereWithoutReporterInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReporterInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    reporterId?: StringFilter<"Report"> | string
    reportedId?: StringNullableFilter<"Report"> | string | null
    postId?: StringNullableFilter<"Report"> | string | null
    reason?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    status?: StringFilter<"Report"> | string
    adminId?: StringNullableFilter<"Report"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutReportedInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReportedInput, ReportUncheckedUpdateWithoutReportedInput>
    create: XOR<ReportCreateWithoutReportedInput, ReportUncheckedCreateWithoutReportedInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReportedInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReportedInput, ReportUncheckedUpdateWithoutReportedInput>
  }

  export type ReportUpdateManyWithWhereWithoutReportedInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReportedInput>
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutAdminInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutAdminInput, AnnouncementUncheckedUpdateWithoutAdminInput>
    create: XOR<AnnouncementCreateWithoutAdminInput, AnnouncementUncheckedCreateWithoutAdminInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutAdminInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutAdminInput, AnnouncementUncheckedUpdateWithoutAdminInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutAdminInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutAdminInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    target?: StringFilter<"Announcement"> | string
    adminId?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type UserCreateWithoutVendorProfileInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    reportsMade?: ReportCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutVendorProfileInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportUncheckedCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutVendorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
  }

  export type ProduceCreateWithoutVendorInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProduceInput
  }

  export type ProduceUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProduceInput
  }

  export type ProduceCreateOrConnectWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    create: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput>
  }

  export type ProduceCreateManyVendorInputEnvelope = {
    data: ProduceCreateManyVendorInput | ProduceCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type RentalSpaceCreateWithoutVendorInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    location: string
    size: string
    image?: string | null
    available?: boolean
    rentedBy?: string | null
    rentalStart?: Date | string | null
    rentalEnd?: Date | string | null
    plantStatus?: string | null
    lastWatered?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalSpaceUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    location: string
    size: string
    image?: string | null
    available?: boolean
    rentedBy?: string | null
    rentalStart?: Date | string | null
    rentalEnd?: Date | string | null
    plantStatus?: string | null
    lastWatered?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalSpaceCreateOrConnectWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    create: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput>
  }

  export type RentalSpaceCreateManyVendorInputEnvelope = {
    data: RentalSpaceCreateManyVendorInput | RentalSpaceCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutVendorInput = {
    id?: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    produce: ProduceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutVendorInput = {
    id?: string
    userId: string
    produceId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type OrderCreateOrConnectWithoutVendorInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderCreateManyVendorInputEnvelope = {
    data: OrderCreateManyVendorInput | OrderCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorProfileInput = {
    update: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type UserUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProduceUpsertWithWhereUniqueWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    update: XOR<ProduceUpdateWithoutVendorInput, ProduceUncheckedUpdateWithoutVendorInput>
    create: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput>
  }

  export type ProduceUpdateWithWhereUniqueWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    data: XOR<ProduceUpdateWithoutVendorInput, ProduceUncheckedUpdateWithoutVendorInput>
  }

  export type ProduceUpdateManyWithWhereWithoutVendorInput = {
    where: ProduceScalarWhereInput
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyWithoutVendorInput>
  }

  export type ProduceScalarWhereInput = {
    AND?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    OR?: ProduceScalarWhereInput[]
    NOT?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    id?: StringFilter<"Produce"> | string
    vendorId?: StringFilter<"Produce"> | string
    name?: StringFilter<"Produce"> | string
    description?: StringNullableFilter<"Produce"> | string | null
    price?: FloatFilter<"Produce"> | number
    image?: StringNullableFilter<"Produce"> | string | null
    category?: StringFilter<"Produce"> | string
    availableQuantity?: IntFilter<"Produce"> | number
    certificationStatus?: EnumCertificationStatusFilter<"Produce"> | $Enums.CertificationStatus
    createdAt?: DateTimeFilter<"Produce"> | Date | string
    updatedAt?: DateTimeFilter<"Produce"> | Date | string
  }

  export type RentalSpaceUpsertWithWhereUniqueWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    update: XOR<RentalSpaceUpdateWithoutVendorInput, RentalSpaceUncheckedUpdateWithoutVendorInput>
    create: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput>
  }

  export type RentalSpaceUpdateWithWhereUniqueWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    data: XOR<RentalSpaceUpdateWithoutVendorInput, RentalSpaceUncheckedUpdateWithoutVendorInput>
  }

  export type RentalSpaceUpdateManyWithWhereWithoutVendorInput = {
    where: RentalSpaceScalarWhereInput
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyWithoutVendorInput>
  }

  export type RentalSpaceScalarWhereInput = {
    AND?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
    OR?: RentalSpaceScalarWhereInput[]
    NOT?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
    id?: StringFilter<"RentalSpace"> | string
    vendorId?: StringFilter<"RentalSpace"> | string
    name?: StringFilter<"RentalSpace"> | string
    description?: StringNullableFilter<"RentalSpace"> | string | null
    price?: FloatFilter<"RentalSpace"> | number
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    image?: StringNullableFilter<"RentalSpace"> | string | null
    available?: BoolFilter<"RentalSpace"> | boolean
    rentedBy?: StringNullableFilter<"RentalSpace"> | string | null
    rentalStart?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    rentalEnd?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    plantStatus?: StringNullableFilter<"RentalSpace"> | string | null
    lastWatered?: DateTimeNullableFilter<"RentalSpace"> | Date | string | null
    createdAt?: DateTimeFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeFilter<"RentalSpace"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
  }

  export type OrderUpdateManyWithWhereWithoutVendorInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutVendorInput>
  }

  export type VendorProfileCreateWithoutProducesInput = {
    id?: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutProducesInput = {
    id?: string
    userId: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutProducesInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
  }

  export type OrderCreateWithoutProduceInput = {
    id?: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    vendor: VendorProfileCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutProduceInput = {
    id?: string
    userId: string
    vendorId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type OrderCreateOrConnectWithoutProduceInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput>
  }

  export type OrderCreateManyProduceInputEnvelope = {
    data: OrderCreateManyProduceInput | OrderCreateManyProduceInput[]
    skipDuplicates?: boolean
  }

  export type VendorProfileUpsertWithoutProducesInput = {
    update: XOR<VendorProfileUpdateWithoutProducesInput, VendorProfileUncheckedUpdateWithoutProducesInput>
    create: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutProducesInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutProducesInput, VendorProfileUncheckedUpdateWithoutProducesInput>
  }

  export type VendorProfileUpdateWithoutProducesInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutProducesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutProduceInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProduceInput, OrderUncheckedUpdateWithoutProduceInput>
    create: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProduceInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProduceInput, OrderUncheckedUpdateWithoutProduceInput>
  }

  export type OrderUpdateManyWithWhereWithoutProduceInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProduceInput>
  }

  export type VendorProfileCreateWithoutRentalSpacesInput = {
    id?: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produces?: ProduceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutRentalSpacesInput = {
    id?: string
    userId: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutRentalSpacesInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
  }

  export type VendorProfileUpsertWithoutRentalSpacesInput = {
    update: XOR<VendorProfileUpdateWithoutRentalSpacesInput, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
    create: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutRentalSpacesInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutRentalSpacesInput, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
  }

  export type VendorProfileUpdateWithoutRentalSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutRentalSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutCommunityPostsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reportsMade?: ReportCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutCommunityPostsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportUncheckedCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutCommunityPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
  }

  export type ReportCreateWithoutPostInput = {
    id?: string
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsMadeInput
    reported?: UserCreateNestedOneWithoutReportsAgainstInput
  }

  export type ReportUncheckedCreateWithoutPostInput = {
    id?: string
    reporterId: string
    reportedId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutPostInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput>
  }

  export type ReportCreateManyPostInputEnvelope = {
    data: ReportCreateManyPostInput | ReportCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommunityPostsInput = {
    update: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type UserUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ReportUpsertWithWhereUniqueWithoutPostInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutPostInput, ReportUncheckedUpdateWithoutPostInput>
    create: XOR<ReportCreateWithoutPostInput, ReportUncheckedCreateWithoutPostInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutPostInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutPostInput, ReportUncheckedUpdateWithoutPostInput>
  }

  export type ReportUpdateManyWithWhereWithoutPostInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    reportsMade?: ReportCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportUncheckedCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ProduceCreateWithoutOrdersInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutProducesInput
  }

  export type ProduceUncheckedCreateWithoutOrdersInput = {
    id?: string
    vendorId: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduceCreateOrConnectWithoutOrdersInput = {
    where: ProduceWhereUniqueInput
    create: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
  }

  export type VendorProfileCreateWithoutOrdersInput = {
    id?: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produces?: ProduceCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutOrdersInput = {
    id?: string
    userId: string
    farmName: string
    farmLocation: string
    certificationStatus?: $Enums.CertificationStatus
    profilePhoto?: string | null
    certifications?: VendorProfileCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutOrdersInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProduceUpsertWithoutOrdersInput = {
    update: XOR<ProduceUpdateWithoutOrdersInput, ProduceUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
    where?: ProduceWhereInput
  }

  export type ProduceUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProduceWhereInput
    data: XOR<ProduceUpdateWithoutOrdersInput, ProduceUncheckedUpdateWithoutOrdersInput>
  }

  export type ProduceUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutProducesNestedInput
  }

  export type ProduceUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileUpsertWithoutOrdersInput = {
    update: XOR<VendorProfileUpdateWithoutOrdersInput, VendorProfileUncheckedUpdateWithoutOrdersInput>
    create: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutOrdersInput, VendorProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type VendorProfileUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    farmLocation?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VendorProfileUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutReportsMadeInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    reportsAgainst?: ReportCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutReportsMadeInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    reportsAgainst?: ReportUncheckedCreateNestedManyWithoutReportedInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutReportsMadeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
  }

  export type UserCreateWithoutReportsAgainstInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    reportsMade?: ReportCreateNestedManyWithoutReporterInput
    announcements?: AnnouncementCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutReportsAgainstInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutReporterInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutReportsAgainstInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsAgainstInput, UserUncheckedCreateWithoutReportsAgainstInput>
  }

  export type CommunityPostCreateWithoutReportsInput = {
    id?: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommunityPostsInput
  }

  export type CommunityPostUncheckedCreateWithoutReportsInput = {
    id?: string
    userId: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
  }

  export type CommunityPostCreateOrConnectWithoutReportsInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
  }

  export type UserUpsertWithoutReportsMadeInput = {
    update: XOR<UserUpdateWithoutReportsMadeInput, UserUncheckedUpdateWithoutReportsMadeInput>
    create: XOR<UserCreateWithoutReportsMadeInput, UserUncheckedCreateWithoutReportsMadeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsMadeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsMadeInput, UserUncheckedUpdateWithoutReportsMadeInput>
  }

  export type UserUpdateWithoutReportsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    reportsAgainst?: ReportUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    reportsAgainst?: ReportUncheckedUpdateManyWithoutReportedNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserUpsertWithoutReportsAgainstInput = {
    update: XOR<UserUpdateWithoutReportsAgainstInput, UserUncheckedUpdateWithoutReportsAgainstInput>
    create: XOR<UserCreateWithoutReportsAgainstInput, UserUncheckedCreateWithoutReportsAgainstInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsAgainstInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsAgainstInput, UserUncheckedUpdateWithoutReportsAgainstInput>
  }

  export type UserUpdateWithoutReportsAgainstInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUpdateManyWithoutReporterNestedInput
    announcements?: AnnouncementUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsAgainstInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CommunityPostUpsertWithoutReportsInput = {
    update: XOR<CommunityPostUpdateWithoutReportsInput, CommunityPostUncheckedUpdateWithoutReportsInput>
    create: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
    where?: CommunityPostWhereInput
  }

  export type CommunityPostUpdateToOneWithWhereWithoutReportsInput = {
    where?: CommunityPostWhereInput
    data: XOR<CommunityPostUpdateWithoutReportsInput, CommunityPostUncheckedUpdateWithoutReportsInput>
  }

  export type CommunityPostUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutAnnouncementsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    reportsMade?: ReportCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportCreateNestedManyWithoutReportedInput
  }

  export type UserUncheckedCreateWithoutAnnouncementsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    reportsMade?: ReportUncheckedCreateNestedManyWithoutReporterInput
    reportsAgainst?: ReportUncheckedCreateNestedManyWithoutReportedInput
  }

  export type UserCreateOrConnectWithoutAnnouncementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
  }

  export type UserUpsertWithoutAnnouncementsInput = {
    update: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UserUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUpdateManyWithoutReportedNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    reportsMade?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    reportsAgainst?: ReportUncheckedUpdateManyWithoutReportedNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    produceId: string
    vendorId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type CommunityPostCreateManyUserInput = {
    id?: string
    postContent: string
    postDate?: Date | string
    isApproved?: boolean
    moderatedBy?: string | null
    moderatedAt?: Date | string | null
  }

  export type ReportCreateManyReporterInput = {
    id?: string
    reportedId?: string | null
    postId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportCreateManyReportedInput = {
    id?: string
    reporterId: string
    postId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementCreateManyAdminInput = {
    id?: string
    title: string
    content: string
    target?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    produce?: ProduceUpdateOneRequiredWithoutOrdersNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reported?: UserUpdateOneWithoutReportsAgainstNestedInput
    post?: CommunityPostUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportedId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsMadeNestedInput
    post?: CommunityPostUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutReportedInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduceCreateManyVendorInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    image?: string | null
    category: string
    availableQuantity?: number
    certificationStatus?: $Enums.CertificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalSpaceCreateManyVendorInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    location: string
    size: string
    image?: string | null
    available?: boolean
    rentedBy?: string | null
    rentalStart?: Date | string | null
    rentalEnd?: Date | string | null
    plantStatus?: string | null
    lastWatered?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyVendorInput = {
    id?: string
    userId: string
    produceId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type ProduceUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProduceNestedInput
  }

  export type ProduceUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProduceNestedInput
  }

  export type ProduceUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    availableQuantity?: IntFieldUpdateOperationsInput | number
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    rentedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rentalStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentalEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plantStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastWatered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    rentedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rentalStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentalEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plantStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastWatered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    rentedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rentalStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rentalEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plantStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastWatered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    produce?: ProduceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyProduceInput = {
    id?: string
    userId: string
    vendorId: string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
  }

  export type OrderUpdateWithoutProduceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutProduceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutProduceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyPostInput = {
    id?: string
    reporterId: string
    reportedId?: string | null
    reason: string
    description?: string | null
    status?: string
    adminId?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReportUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsMadeNestedInput
    reported?: UserUpdateOneWithoutReportsAgainstNestedInput
  }

  export type ReportUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}