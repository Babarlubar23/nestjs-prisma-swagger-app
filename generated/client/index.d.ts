
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Booster
 * 
 */
export type Booster = $Result.DefaultSelection<Prisma.$BoosterPayload>
/**
 * Model BrendanCaneHistory
 * 
 */
export type BrendanCaneHistory = $Result.DefaultSelection<Prisma.$BrendanCaneHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Owners
 * const owners = await prisma.owner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booster`: Exposes CRUD operations for the **Booster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boosters
    * const boosters = await prisma.booster.findMany()
    * ```
    */
  get booster(): Prisma.BoosterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brendanCaneHistory`: Exposes CRUD operations for the **BrendanCaneHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrendanCaneHistories
    * const brendanCaneHistories = await prisma.brendanCaneHistory.findMany()
    * ```
    */
  get brendanCaneHistory(): Prisma.BrendanCaneHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Owner: 'Owner',
    Pet: 'Pet',
    Booster: 'Booster',
    BrendanCaneHistory: 'BrendanCaneHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "owner" | "pet" | "booster" | "brendanCaneHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Booster: {
        payload: Prisma.$BoosterPayload<ExtArgs>
        fields: Prisma.BoosterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoosterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoosterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>
          }
          findFirst: {
            args: Prisma.BoosterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoosterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>
          }
          findMany: {
            args: Prisma.BoosterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>[]
          }
          create: {
            args: Prisma.BoosterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>
          }
          createMany: {
            args: Prisma.BoosterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoosterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>[]
          }
          delete: {
            args: Prisma.BoosterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>
          }
          update: {
            args: Prisma.BoosterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>
          }
          deleteMany: {
            args: Prisma.BoosterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoosterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoosterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>[]
          }
          upsert: {
            args: Prisma.BoosterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoosterPayload>
          }
          aggregate: {
            args: Prisma.BoosterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooster>
          }
          groupBy: {
            args: Prisma.BoosterGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoosterGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoosterCountArgs<ExtArgs>
            result: $Utils.Optional<BoosterCountAggregateOutputType> | number
          }
        }
      }
      BrendanCaneHistory: {
        payload: Prisma.$BrendanCaneHistoryPayload<ExtArgs>
        fields: Prisma.BrendanCaneHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrendanCaneHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrendanCaneHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>
          }
          findFirst: {
            args: Prisma.BrendanCaneHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrendanCaneHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>
          }
          findMany: {
            args: Prisma.BrendanCaneHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>[]
          }
          create: {
            args: Prisma.BrendanCaneHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>
          }
          createMany: {
            args: Prisma.BrendanCaneHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrendanCaneHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>[]
          }
          delete: {
            args: Prisma.BrendanCaneHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>
          }
          update: {
            args: Prisma.BrendanCaneHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>
          }
          deleteMany: {
            args: Prisma.BrendanCaneHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrendanCaneHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrendanCaneHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>[]
          }
          upsert: {
            args: Prisma.BrendanCaneHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrendanCaneHistoryPayload>
          }
          aggregate: {
            args: Prisma.BrendanCaneHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrendanCaneHistory>
          }
          groupBy: {
            args: Prisma.BrendanCaneHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrendanCaneHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrendanCaneHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<BrendanCaneHistoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    owner?: OwnerOmit
    pet?: PetOmit
    booster?: BoosterOmit
    brendanCaneHistory?: BrendanCaneHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    pets: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | OwnerCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    boosters: number
    brendanCane: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boosters?: boolean | PetCountOutputTypeCountBoostersArgs
    brendanCane?: boolean | PetCountOutputTypeCountBrendanCaneArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountBoostersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoosterWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountBrendanCaneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrendanCaneHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerAvgAggregateOutputType = {
    id: number | null
  }

  export type OwnerSumAggregateOutputType = {
    id: number | null
  }

  export type OwnerMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    address: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    address: string | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    address: number
    _all: number
  }


  export type OwnerAvgAggregateInputType = {
    id?: true
  }

  export type OwnerSumAggregateInputType = {
    id?: true
  }

  export type OwnerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    address?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    address?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    address?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _avg?: OwnerAvgAggregateInputType
    _sum?: OwnerSumAggregateInputType
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    address: string | null
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    pets?: boolean | Owner$petsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "address", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Owner$petsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
      address: string | null
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
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
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Owner$petsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'Int'>
    readonly firstName: FieldRef<"Owner", 'String'>
    readonly lastName: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly phone: FieldRef<"Owner", 'String'>
    readonly address: FieldRef<"Owner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.pets
   */
  export type Owner$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    name: string | null
    species: string | null
    breed: string | null
    birthDate: Date | null
    vaccinated: boolean | null
    vaccinationDate: Date | null
    ownerId: number | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    species: string | null
    breed: string | null
    birthDate: Date | null
    vaccinated: boolean | null
    vaccinationDate: Date | null
    ownerId: number | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    species: number
    breed: number
    birthDate: number
    vaccinated: number
    vaccinationDate: number
    ownerId: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    vaccinated?: true
    vaccinationDate?: true
    ownerId?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    vaccinated?: true
    vaccinationDate?: true
    ownerId?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    birthDate?: true
    vaccinated?: true
    vaccinationDate?: true
    ownerId?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    name: string
    species: string
    breed: string | null
    birthDate: Date | null
    vaccinated: boolean
    vaccinationDate: Date | null
    ownerId: number
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    vaccinated?: boolean
    vaccinationDate?: boolean
    ownerId?: boolean
    boosters?: boolean | Pet$boostersArgs<ExtArgs>
    brendanCane?: boolean | Pet$brendanCaneArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    vaccinated?: boolean
    vaccinationDate?: boolean
    ownerId?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    vaccinated?: boolean
    vaccinationDate?: boolean
    ownerId?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    birthDate?: boolean
    vaccinated?: boolean
    vaccinationDate?: boolean
    ownerId?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species" | "breed" | "birthDate" | "vaccinated" | "vaccinationDate" | "ownerId", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boosters?: boolean | Pet$boostersArgs<ExtArgs>
    brendanCane?: boolean | Pet$brendanCaneArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      boosters: Prisma.$BoosterPayload<ExtArgs>[]
      brendanCane: Prisma.$BrendanCaneHistoryPayload<ExtArgs>[]
      owner: Prisma.$OwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      species: string
      breed: string | null
      birthDate: Date | null
      vaccinated: boolean
      vaccinationDate: Date | null
      ownerId: number
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boosters<T extends Pet$boostersArgs<ExtArgs> = {}>(args?: Subset<T, Pet$boostersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brendanCane<T extends Pet$brendanCaneArgs<ExtArgs> = {}>(args?: Subset<T, Pet$brendanCaneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'Int'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly species: FieldRef<"Pet", 'String'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly birthDate: FieldRef<"Pet", 'DateTime'>
    readonly vaccinated: FieldRef<"Pet", 'Boolean'>
    readonly vaccinationDate: FieldRef<"Pet", 'DateTime'>
    readonly ownerId: FieldRef<"Pet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.boosters
   */
  export type Pet$boostersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    where?: BoosterWhereInput
    orderBy?: BoosterOrderByWithRelationInput | BoosterOrderByWithRelationInput[]
    cursor?: BoosterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoosterScalarFieldEnum | BoosterScalarFieldEnum[]
  }

  /**
   * Pet.brendanCane
   */
  export type Pet$brendanCaneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    where?: BrendanCaneHistoryWhereInput
    orderBy?: BrendanCaneHistoryOrderByWithRelationInput | BrendanCaneHistoryOrderByWithRelationInput[]
    cursor?: BrendanCaneHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrendanCaneHistoryScalarFieldEnum | BrendanCaneHistoryScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Booster
   */

  export type AggregateBooster = {
    _count: BoosterCountAggregateOutputType | null
    _avg: BoosterAvgAggregateOutputType | null
    _sum: BoosterSumAggregateOutputType | null
    _min: BoosterMinAggregateOutputType | null
    _max: BoosterMaxAggregateOutputType | null
  }

  export type BoosterAvgAggregateOutputType = {
    id: number | null
    petId: number | null
  }

  export type BoosterSumAggregateOutputType = {
    id: number | null
    petId: number | null
  }

  export type BoosterMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    petId: number | null
  }

  export type BoosterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    petId: number | null
  }

  export type BoosterCountAggregateOutputType = {
    id: number
    name: number
    date: number
    petId: number
    _all: number
  }


  export type BoosterAvgAggregateInputType = {
    id?: true
    petId?: true
  }

  export type BoosterSumAggregateInputType = {
    id?: true
    petId?: true
  }

  export type BoosterMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    petId?: true
  }

  export type BoosterMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    petId?: true
  }

  export type BoosterCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    petId?: true
    _all?: true
  }

  export type BoosterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booster to aggregate.
     */
    where?: BoosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosters to fetch.
     */
    orderBy?: BoosterOrderByWithRelationInput | BoosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boosters
    **/
    _count?: true | BoosterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoosterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoosterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoosterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoosterMaxAggregateInputType
  }

  export type GetBoosterAggregateType<T extends BoosterAggregateArgs> = {
        [P in keyof T & keyof AggregateBooster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooster[P]>
      : GetScalarType<T[P], AggregateBooster[P]>
  }




  export type BoosterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoosterWhereInput
    orderBy?: BoosterOrderByWithAggregationInput | BoosterOrderByWithAggregationInput[]
    by: BoosterScalarFieldEnum[] | BoosterScalarFieldEnum
    having?: BoosterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoosterCountAggregateInputType | true
    _avg?: BoosterAvgAggregateInputType
    _sum?: BoosterSumAggregateInputType
    _min?: BoosterMinAggregateInputType
    _max?: BoosterMaxAggregateInputType
  }

  export type BoosterGroupByOutputType = {
    id: number
    name: string
    date: Date
    petId: number
    _count: BoosterCountAggregateOutputType | null
    _avg: BoosterAvgAggregateOutputType | null
    _sum: BoosterSumAggregateOutputType | null
    _min: BoosterMinAggregateOutputType | null
    _max: BoosterMaxAggregateOutputType | null
  }

  type GetBoosterGroupByPayload<T extends BoosterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoosterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoosterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoosterGroupByOutputType[P]>
            : GetScalarType<T[P], BoosterGroupByOutputType[P]>
        }
      >
    >


  export type BoosterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booster"]>

  export type BoosterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booster"]>

  export type BoosterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booster"]>

  export type BoosterSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    petId?: boolean
  }

  export type BoosterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "petId", ExtArgs["result"]["booster"]>
  export type BoosterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type BoosterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type BoosterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $BoosterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booster"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date: Date
      petId: number
    }, ExtArgs["result"]["booster"]>
    composites: {}
  }

  type BoosterGetPayload<S extends boolean | null | undefined | BoosterDefaultArgs> = $Result.GetResult<Prisma.$BoosterPayload, S>

  type BoosterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoosterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoosterCountAggregateInputType | true
    }

  export interface BoosterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booster'], meta: { name: 'Booster' } }
    /**
     * Find zero or one Booster that matches the filter.
     * @param {BoosterFindUniqueArgs} args - Arguments to find a Booster
     * @example
     * // Get one Booster
     * const booster = await prisma.booster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoosterFindUniqueArgs>(args: SelectSubset<T, BoosterFindUniqueArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoosterFindUniqueOrThrowArgs} args - Arguments to find a Booster
     * @example
     * // Get one Booster
     * const booster = await prisma.booster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoosterFindUniqueOrThrowArgs>(args: SelectSubset<T, BoosterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoosterFindFirstArgs} args - Arguments to find a Booster
     * @example
     * // Get one Booster
     * const booster = await prisma.booster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoosterFindFirstArgs>(args?: SelectSubset<T, BoosterFindFirstArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoosterFindFirstOrThrowArgs} args - Arguments to find a Booster
     * @example
     * // Get one Booster
     * const booster = await prisma.booster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoosterFindFirstOrThrowArgs>(args?: SelectSubset<T, BoosterFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boosters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoosterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boosters
     * const boosters = await prisma.booster.findMany()
     * 
     * // Get first 10 Boosters
     * const boosters = await prisma.booster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boosterWithIdOnly = await prisma.booster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoosterFindManyArgs>(args?: SelectSubset<T, BoosterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booster.
     * @param {BoosterCreateArgs} args - Arguments to create a Booster.
     * @example
     * // Create one Booster
     * const Booster = await prisma.booster.create({
     *   data: {
     *     // ... data to create a Booster
     *   }
     * })
     * 
     */
    create<T extends BoosterCreateArgs>(args: SelectSubset<T, BoosterCreateArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boosters.
     * @param {BoosterCreateManyArgs} args - Arguments to create many Boosters.
     * @example
     * // Create many Boosters
     * const booster = await prisma.booster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoosterCreateManyArgs>(args?: SelectSubset<T, BoosterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boosters and returns the data saved in the database.
     * @param {BoosterCreateManyAndReturnArgs} args - Arguments to create many Boosters.
     * @example
     * // Create many Boosters
     * const booster = await prisma.booster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boosters and only return the `id`
     * const boosterWithIdOnly = await prisma.booster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoosterCreateManyAndReturnArgs>(args?: SelectSubset<T, BoosterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booster.
     * @param {BoosterDeleteArgs} args - Arguments to delete one Booster.
     * @example
     * // Delete one Booster
     * const Booster = await prisma.booster.delete({
     *   where: {
     *     // ... filter to delete one Booster
     *   }
     * })
     * 
     */
    delete<T extends BoosterDeleteArgs>(args: SelectSubset<T, BoosterDeleteArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booster.
     * @param {BoosterUpdateArgs} args - Arguments to update one Booster.
     * @example
     * // Update one Booster
     * const booster = await prisma.booster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoosterUpdateArgs>(args: SelectSubset<T, BoosterUpdateArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boosters.
     * @param {BoosterDeleteManyArgs} args - Arguments to filter Boosters to delete.
     * @example
     * // Delete a few Boosters
     * const { count } = await prisma.booster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoosterDeleteManyArgs>(args?: SelectSubset<T, BoosterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boosters
     * const booster = await prisma.booster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoosterUpdateManyArgs>(args: SelectSubset<T, BoosterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boosters and returns the data updated in the database.
     * @param {BoosterUpdateManyAndReturnArgs} args - Arguments to update many Boosters.
     * @example
     * // Update many Boosters
     * const booster = await prisma.booster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boosters and only return the `id`
     * const boosterWithIdOnly = await prisma.booster.updateManyAndReturn({
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
    updateManyAndReturn<T extends BoosterUpdateManyAndReturnArgs>(args: SelectSubset<T, BoosterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booster.
     * @param {BoosterUpsertArgs} args - Arguments to update or create a Booster.
     * @example
     * // Update or create a Booster
     * const booster = await prisma.booster.upsert({
     *   create: {
     *     // ... data to create a Booster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booster we want to update
     *   }
     * })
     */
    upsert<T extends BoosterUpsertArgs>(args: SelectSubset<T, BoosterUpsertArgs<ExtArgs>>): Prisma__BoosterClient<$Result.GetResult<Prisma.$BoosterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoosterCountArgs} args - Arguments to filter Boosters to count.
     * @example
     * // Count the number of Boosters
     * const count = await prisma.booster.count({
     *   where: {
     *     // ... the filter for the Boosters we want to count
     *   }
     * })
    **/
    count<T extends BoosterCountArgs>(
      args?: Subset<T, BoosterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoosterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoosterAggregateArgs>(args: Subset<T, BoosterAggregateArgs>): Prisma.PrismaPromise<GetBoosterAggregateType<T>>

    /**
     * Group by Booster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoosterGroupByArgs} args - Group by arguments.
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
      T extends BoosterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoosterGroupByArgs['orderBy'] }
        : { orderBy?: BoosterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoosterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoosterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booster model
   */
  readonly fields: BoosterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoosterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booster model
   */
  interface BoosterFieldRefs {
    readonly id: FieldRef<"Booster", 'Int'>
    readonly name: FieldRef<"Booster", 'String'>
    readonly date: FieldRef<"Booster", 'DateTime'>
    readonly petId: FieldRef<"Booster", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Booster findUnique
   */
  export type BoosterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * Filter, which Booster to fetch.
     */
    where: BoosterWhereUniqueInput
  }

  /**
   * Booster findUniqueOrThrow
   */
  export type BoosterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * Filter, which Booster to fetch.
     */
    where: BoosterWhereUniqueInput
  }

  /**
   * Booster findFirst
   */
  export type BoosterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * Filter, which Booster to fetch.
     */
    where?: BoosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosters to fetch.
     */
    orderBy?: BoosterOrderByWithRelationInput | BoosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boosters.
     */
    cursor?: BoosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boosters.
     */
    distinct?: BoosterScalarFieldEnum | BoosterScalarFieldEnum[]
  }

  /**
   * Booster findFirstOrThrow
   */
  export type BoosterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * Filter, which Booster to fetch.
     */
    where?: BoosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosters to fetch.
     */
    orderBy?: BoosterOrderByWithRelationInput | BoosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boosters.
     */
    cursor?: BoosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boosters.
     */
    distinct?: BoosterScalarFieldEnum | BoosterScalarFieldEnum[]
  }

  /**
   * Booster findMany
   */
  export type BoosterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * Filter, which Boosters to fetch.
     */
    where?: BoosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boosters to fetch.
     */
    orderBy?: BoosterOrderByWithRelationInput | BoosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boosters.
     */
    cursor?: BoosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boosters.
     */
    skip?: number
    distinct?: BoosterScalarFieldEnum | BoosterScalarFieldEnum[]
  }

  /**
   * Booster create
   */
  export type BoosterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * The data needed to create a Booster.
     */
    data: XOR<BoosterCreateInput, BoosterUncheckedCreateInput>
  }

  /**
   * Booster createMany
   */
  export type BoosterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boosters.
     */
    data: BoosterCreateManyInput | BoosterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booster createManyAndReturn
   */
  export type BoosterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * The data used to create many Boosters.
     */
    data: BoosterCreateManyInput | BoosterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booster update
   */
  export type BoosterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * The data needed to update a Booster.
     */
    data: XOR<BoosterUpdateInput, BoosterUncheckedUpdateInput>
    /**
     * Choose, which Booster to update.
     */
    where: BoosterWhereUniqueInput
  }

  /**
   * Booster updateMany
   */
  export type BoosterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boosters.
     */
    data: XOR<BoosterUpdateManyMutationInput, BoosterUncheckedUpdateManyInput>
    /**
     * Filter which Boosters to update
     */
    where?: BoosterWhereInput
    /**
     * Limit how many Boosters to update.
     */
    limit?: number
  }

  /**
   * Booster updateManyAndReturn
   */
  export type BoosterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * The data used to update Boosters.
     */
    data: XOR<BoosterUpdateManyMutationInput, BoosterUncheckedUpdateManyInput>
    /**
     * Filter which Boosters to update
     */
    where?: BoosterWhereInput
    /**
     * Limit how many Boosters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booster upsert
   */
  export type BoosterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * The filter to search for the Booster to update in case it exists.
     */
    where: BoosterWhereUniqueInput
    /**
     * In case the Booster found by the `where` argument doesn't exist, create a new Booster with this data.
     */
    create: XOR<BoosterCreateInput, BoosterUncheckedCreateInput>
    /**
     * In case the Booster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoosterUpdateInput, BoosterUncheckedUpdateInput>
  }

  /**
   * Booster delete
   */
  export type BoosterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
    /**
     * Filter which Booster to delete.
     */
    where: BoosterWhereUniqueInput
  }

  /**
   * Booster deleteMany
   */
  export type BoosterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boosters to delete
     */
    where?: BoosterWhereInput
    /**
     * Limit how many Boosters to delete.
     */
    limit?: number
  }

  /**
   * Booster without action
   */
  export type BoosterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booster
     */
    select?: BoosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booster
     */
    omit?: BoosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoosterInclude<ExtArgs> | null
  }


  /**
   * Model BrendanCaneHistory
   */

  export type AggregateBrendanCaneHistory = {
    _count: BrendanCaneHistoryCountAggregateOutputType | null
    _avg: BrendanCaneHistoryAvgAggregateOutputType | null
    _sum: BrendanCaneHistorySumAggregateOutputType | null
    _min: BrendanCaneHistoryMinAggregateOutputType | null
    _max: BrendanCaneHistoryMaxAggregateOutputType | null
  }

  export type BrendanCaneHistoryAvgAggregateOutputType = {
    id: number | null
    petId: number | null
  }

  export type BrendanCaneHistorySumAggregateOutputType = {
    id: number | null
    petId: number | null
  }

  export type BrendanCaneHistoryMinAggregateOutputType = {
    id: number | null
    date: Date | null
    notes: string | null
    petId: number | null
  }

  export type BrendanCaneHistoryMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    notes: string | null
    petId: number | null
  }

  export type BrendanCaneHistoryCountAggregateOutputType = {
    id: number
    date: number
    notes: number
    petId: number
    _all: number
  }


  export type BrendanCaneHistoryAvgAggregateInputType = {
    id?: true
    petId?: true
  }

  export type BrendanCaneHistorySumAggregateInputType = {
    id?: true
    petId?: true
  }

  export type BrendanCaneHistoryMinAggregateInputType = {
    id?: true
    date?: true
    notes?: true
    petId?: true
  }

  export type BrendanCaneHistoryMaxAggregateInputType = {
    id?: true
    date?: true
    notes?: true
    petId?: true
  }

  export type BrendanCaneHistoryCountAggregateInputType = {
    id?: true
    date?: true
    notes?: true
    petId?: true
    _all?: true
  }

  export type BrendanCaneHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrendanCaneHistory to aggregate.
     */
    where?: BrendanCaneHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrendanCaneHistories to fetch.
     */
    orderBy?: BrendanCaneHistoryOrderByWithRelationInput | BrendanCaneHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrendanCaneHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrendanCaneHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrendanCaneHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrendanCaneHistories
    **/
    _count?: true | BrendanCaneHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrendanCaneHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrendanCaneHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrendanCaneHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrendanCaneHistoryMaxAggregateInputType
  }

  export type GetBrendanCaneHistoryAggregateType<T extends BrendanCaneHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBrendanCaneHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrendanCaneHistory[P]>
      : GetScalarType<T[P], AggregateBrendanCaneHistory[P]>
  }




  export type BrendanCaneHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrendanCaneHistoryWhereInput
    orderBy?: BrendanCaneHistoryOrderByWithAggregationInput | BrendanCaneHistoryOrderByWithAggregationInput[]
    by: BrendanCaneHistoryScalarFieldEnum[] | BrendanCaneHistoryScalarFieldEnum
    having?: BrendanCaneHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrendanCaneHistoryCountAggregateInputType | true
    _avg?: BrendanCaneHistoryAvgAggregateInputType
    _sum?: BrendanCaneHistorySumAggregateInputType
    _min?: BrendanCaneHistoryMinAggregateInputType
    _max?: BrendanCaneHistoryMaxAggregateInputType
  }

  export type BrendanCaneHistoryGroupByOutputType = {
    id: number
    date: Date
    notes: string | null
    petId: number
    _count: BrendanCaneHistoryCountAggregateOutputType | null
    _avg: BrendanCaneHistoryAvgAggregateOutputType | null
    _sum: BrendanCaneHistorySumAggregateOutputType | null
    _min: BrendanCaneHistoryMinAggregateOutputType | null
    _max: BrendanCaneHistoryMaxAggregateOutputType | null
  }

  type GetBrendanCaneHistoryGroupByPayload<T extends BrendanCaneHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrendanCaneHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrendanCaneHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrendanCaneHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], BrendanCaneHistoryGroupByOutputType[P]>
        }
      >
    >


  export type BrendanCaneHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    notes?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brendanCaneHistory"]>

  export type BrendanCaneHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    notes?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brendanCaneHistory"]>

  export type BrendanCaneHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    notes?: boolean
    petId?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brendanCaneHistory"]>

  export type BrendanCaneHistorySelectScalar = {
    id?: boolean
    date?: boolean
    notes?: boolean
    petId?: boolean
  }

  export type BrendanCaneHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "notes" | "petId", ExtArgs["result"]["brendanCaneHistory"]>
  export type BrendanCaneHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type BrendanCaneHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type BrendanCaneHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $BrendanCaneHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrendanCaneHistory"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      notes: string | null
      petId: number
    }, ExtArgs["result"]["brendanCaneHistory"]>
    composites: {}
  }

  type BrendanCaneHistoryGetPayload<S extends boolean | null | undefined | BrendanCaneHistoryDefaultArgs> = $Result.GetResult<Prisma.$BrendanCaneHistoryPayload, S>

  type BrendanCaneHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrendanCaneHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrendanCaneHistoryCountAggregateInputType | true
    }

  export interface BrendanCaneHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrendanCaneHistory'], meta: { name: 'BrendanCaneHistory' } }
    /**
     * Find zero or one BrendanCaneHistory that matches the filter.
     * @param {BrendanCaneHistoryFindUniqueArgs} args - Arguments to find a BrendanCaneHistory
     * @example
     * // Get one BrendanCaneHistory
     * const brendanCaneHistory = await prisma.brendanCaneHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrendanCaneHistoryFindUniqueArgs>(args: SelectSubset<T, BrendanCaneHistoryFindUniqueArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrendanCaneHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrendanCaneHistoryFindUniqueOrThrowArgs} args - Arguments to find a BrendanCaneHistory
     * @example
     * // Get one BrendanCaneHistory
     * const brendanCaneHistory = await prisma.brendanCaneHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrendanCaneHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BrendanCaneHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrendanCaneHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrendanCaneHistoryFindFirstArgs} args - Arguments to find a BrendanCaneHistory
     * @example
     * // Get one BrendanCaneHistory
     * const brendanCaneHistory = await prisma.brendanCaneHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrendanCaneHistoryFindFirstArgs>(args?: SelectSubset<T, BrendanCaneHistoryFindFirstArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrendanCaneHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrendanCaneHistoryFindFirstOrThrowArgs} args - Arguments to find a BrendanCaneHistory
     * @example
     * // Get one BrendanCaneHistory
     * const brendanCaneHistory = await prisma.brendanCaneHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrendanCaneHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BrendanCaneHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrendanCaneHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrendanCaneHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrendanCaneHistories
     * const brendanCaneHistories = await prisma.brendanCaneHistory.findMany()
     * 
     * // Get first 10 BrendanCaneHistories
     * const brendanCaneHistories = await prisma.brendanCaneHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brendanCaneHistoryWithIdOnly = await prisma.brendanCaneHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrendanCaneHistoryFindManyArgs>(args?: SelectSubset<T, BrendanCaneHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrendanCaneHistory.
     * @param {BrendanCaneHistoryCreateArgs} args - Arguments to create a BrendanCaneHistory.
     * @example
     * // Create one BrendanCaneHistory
     * const BrendanCaneHistory = await prisma.brendanCaneHistory.create({
     *   data: {
     *     // ... data to create a BrendanCaneHistory
     *   }
     * })
     * 
     */
    create<T extends BrendanCaneHistoryCreateArgs>(args: SelectSubset<T, BrendanCaneHistoryCreateArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrendanCaneHistories.
     * @param {BrendanCaneHistoryCreateManyArgs} args - Arguments to create many BrendanCaneHistories.
     * @example
     * // Create many BrendanCaneHistories
     * const brendanCaneHistory = await prisma.brendanCaneHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrendanCaneHistoryCreateManyArgs>(args?: SelectSubset<T, BrendanCaneHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrendanCaneHistories and returns the data saved in the database.
     * @param {BrendanCaneHistoryCreateManyAndReturnArgs} args - Arguments to create many BrendanCaneHistories.
     * @example
     * // Create many BrendanCaneHistories
     * const brendanCaneHistory = await prisma.brendanCaneHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrendanCaneHistories and only return the `id`
     * const brendanCaneHistoryWithIdOnly = await prisma.brendanCaneHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrendanCaneHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BrendanCaneHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrendanCaneHistory.
     * @param {BrendanCaneHistoryDeleteArgs} args - Arguments to delete one BrendanCaneHistory.
     * @example
     * // Delete one BrendanCaneHistory
     * const BrendanCaneHistory = await prisma.brendanCaneHistory.delete({
     *   where: {
     *     // ... filter to delete one BrendanCaneHistory
     *   }
     * })
     * 
     */
    delete<T extends BrendanCaneHistoryDeleteArgs>(args: SelectSubset<T, BrendanCaneHistoryDeleteArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrendanCaneHistory.
     * @param {BrendanCaneHistoryUpdateArgs} args - Arguments to update one BrendanCaneHistory.
     * @example
     * // Update one BrendanCaneHistory
     * const brendanCaneHistory = await prisma.brendanCaneHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrendanCaneHistoryUpdateArgs>(args: SelectSubset<T, BrendanCaneHistoryUpdateArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrendanCaneHistories.
     * @param {BrendanCaneHistoryDeleteManyArgs} args - Arguments to filter BrendanCaneHistories to delete.
     * @example
     * // Delete a few BrendanCaneHistories
     * const { count } = await prisma.brendanCaneHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrendanCaneHistoryDeleteManyArgs>(args?: SelectSubset<T, BrendanCaneHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrendanCaneHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrendanCaneHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrendanCaneHistories
     * const brendanCaneHistory = await prisma.brendanCaneHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrendanCaneHistoryUpdateManyArgs>(args: SelectSubset<T, BrendanCaneHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrendanCaneHistories and returns the data updated in the database.
     * @param {BrendanCaneHistoryUpdateManyAndReturnArgs} args - Arguments to update many BrendanCaneHistories.
     * @example
     * // Update many BrendanCaneHistories
     * const brendanCaneHistory = await prisma.brendanCaneHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrendanCaneHistories and only return the `id`
     * const brendanCaneHistoryWithIdOnly = await prisma.brendanCaneHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrendanCaneHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BrendanCaneHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrendanCaneHistory.
     * @param {BrendanCaneHistoryUpsertArgs} args - Arguments to update or create a BrendanCaneHistory.
     * @example
     * // Update or create a BrendanCaneHistory
     * const brendanCaneHistory = await prisma.brendanCaneHistory.upsert({
     *   create: {
     *     // ... data to create a BrendanCaneHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrendanCaneHistory we want to update
     *   }
     * })
     */
    upsert<T extends BrendanCaneHistoryUpsertArgs>(args: SelectSubset<T, BrendanCaneHistoryUpsertArgs<ExtArgs>>): Prisma__BrendanCaneHistoryClient<$Result.GetResult<Prisma.$BrendanCaneHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrendanCaneHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrendanCaneHistoryCountArgs} args - Arguments to filter BrendanCaneHistories to count.
     * @example
     * // Count the number of BrendanCaneHistories
     * const count = await prisma.brendanCaneHistory.count({
     *   where: {
     *     // ... the filter for the BrendanCaneHistories we want to count
     *   }
     * })
    **/
    count<T extends BrendanCaneHistoryCountArgs>(
      args?: Subset<T, BrendanCaneHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrendanCaneHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrendanCaneHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrendanCaneHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrendanCaneHistoryAggregateArgs>(args: Subset<T, BrendanCaneHistoryAggregateArgs>): Prisma.PrismaPromise<GetBrendanCaneHistoryAggregateType<T>>

    /**
     * Group by BrendanCaneHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrendanCaneHistoryGroupByArgs} args - Group by arguments.
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
      T extends BrendanCaneHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrendanCaneHistoryGroupByArgs['orderBy'] }
        : { orderBy?: BrendanCaneHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrendanCaneHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrendanCaneHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrendanCaneHistory model
   */
  readonly fields: BrendanCaneHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrendanCaneHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrendanCaneHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrendanCaneHistory model
   */
  interface BrendanCaneHistoryFieldRefs {
    readonly id: FieldRef<"BrendanCaneHistory", 'Int'>
    readonly date: FieldRef<"BrendanCaneHistory", 'DateTime'>
    readonly notes: FieldRef<"BrendanCaneHistory", 'String'>
    readonly petId: FieldRef<"BrendanCaneHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BrendanCaneHistory findUnique
   */
  export type BrendanCaneHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BrendanCaneHistory to fetch.
     */
    where: BrendanCaneHistoryWhereUniqueInput
  }

  /**
   * BrendanCaneHistory findUniqueOrThrow
   */
  export type BrendanCaneHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BrendanCaneHistory to fetch.
     */
    where: BrendanCaneHistoryWhereUniqueInput
  }

  /**
   * BrendanCaneHistory findFirst
   */
  export type BrendanCaneHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BrendanCaneHistory to fetch.
     */
    where?: BrendanCaneHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrendanCaneHistories to fetch.
     */
    orderBy?: BrendanCaneHistoryOrderByWithRelationInput | BrendanCaneHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrendanCaneHistories.
     */
    cursor?: BrendanCaneHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrendanCaneHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrendanCaneHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrendanCaneHistories.
     */
    distinct?: BrendanCaneHistoryScalarFieldEnum | BrendanCaneHistoryScalarFieldEnum[]
  }

  /**
   * BrendanCaneHistory findFirstOrThrow
   */
  export type BrendanCaneHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BrendanCaneHistory to fetch.
     */
    where?: BrendanCaneHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrendanCaneHistories to fetch.
     */
    orderBy?: BrendanCaneHistoryOrderByWithRelationInput | BrendanCaneHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrendanCaneHistories.
     */
    cursor?: BrendanCaneHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrendanCaneHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrendanCaneHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrendanCaneHistories.
     */
    distinct?: BrendanCaneHistoryScalarFieldEnum | BrendanCaneHistoryScalarFieldEnum[]
  }

  /**
   * BrendanCaneHistory findMany
   */
  export type BrendanCaneHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BrendanCaneHistories to fetch.
     */
    where?: BrendanCaneHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrendanCaneHistories to fetch.
     */
    orderBy?: BrendanCaneHistoryOrderByWithRelationInput | BrendanCaneHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrendanCaneHistories.
     */
    cursor?: BrendanCaneHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrendanCaneHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrendanCaneHistories.
     */
    skip?: number
    distinct?: BrendanCaneHistoryScalarFieldEnum | BrendanCaneHistoryScalarFieldEnum[]
  }

  /**
   * BrendanCaneHistory create
   */
  export type BrendanCaneHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BrendanCaneHistory.
     */
    data: XOR<BrendanCaneHistoryCreateInput, BrendanCaneHistoryUncheckedCreateInput>
  }

  /**
   * BrendanCaneHistory createMany
   */
  export type BrendanCaneHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrendanCaneHistories.
     */
    data: BrendanCaneHistoryCreateManyInput | BrendanCaneHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrendanCaneHistory createManyAndReturn
   */
  export type BrendanCaneHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many BrendanCaneHistories.
     */
    data: BrendanCaneHistoryCreateManyInput | BrendanCaneHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrendanCaneHistory update
   */
  export type BrendanCaneHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BrendanCaneHistory.
     */
    data: XOR<BrendanCaneHistoryUpdateInput, BrendanCaneHistoryUncheckedUpdateInput>
    /**
     * Choose, which BrendanCaneHistory to update.
     */
    where: BrendanCaneHistoryWhereUniqueInput
  }

  /**
   * BrendanCaneHistory updateMany
   */
  export type BrendanCaneHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrendanCaneHistories.
     */
    data: XOR<BrendanCaneHistoryUpdateManyMutationInput, BrendanCaneHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BrendanCaneHistories to update
     */
    where?: BrendanCaneHistoryWhereInput
    /**
     * Limit how many BrendanCaneHistories to update.
     */
    limit?: number
  }

  /**
   * BrendanCaneHistory updateManyAndReturn
   */
  export type BrendanCaneHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * The data used to update BrendanCaneHistories.
     */
    data: XOR<BrendanCaneHistoryUpdateManyMutationInput, BrendanCaneHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BrendanCaneHistories to update
     */
    where?: BrendanCaneHistoryWhereInput
    /**
     * Limit how many BrendanCaneHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrendanCaneHistory upsert
   */
  export type BrendanCaneHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BrendanCaneHistory to update in case it exists.
     */
    where: BrendanCaneHistoryWhereUniqueInput
    /**
     * In case the BrendanCaneHistory found by the `where` argument doesn't exist, create a new BrendanCaneHistory with this data.
     */
    create: XOR<BrendanCaneHistoryCreateInput, BrendanCaneHistoryUncheckedCreateInput>
    /**
     * In case the BrendanCaneHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrendanCaneHistoryUpdateInput, BrendanCaneHistoryUncheckedUpdateInput>
  }

  /**
   * BrendanCaneHistory delete
   */
  export type BrendanCaneHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
    /**
     * Filter which BrendanCaneHistory to delete.
     */
    where: BrendanCaneHistoryWhereUniqueInput
  }

  /**
   * BrendanCaneHistory deleteMany
   */
  export type BrendanCaneHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrendanCaneHistories to delete
     */
    where?: BrendanCaneHistoryWhereInput
    /**
     * Limit how many BrendanCaneHistories to delete.
     */
    limit?: number
  }

  /**
   * BrendanCaneHistory without action
   */
  export type BrendanCaneHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrendanCaneHistory
     */
    select?: BrendanCaneHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrendanCaneHistory
     */
    omit?: BrendanCaneHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrendanCaneHistoryInclude<ExtArgs> | null
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


  export const OwnerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    species: 'species',
    breed: 'breed',
    birthDate: 'birthDate',
    vaccinated: 'vaccinated',
    vaccinationDate: 'vaccinationDate',
    ownerId: 'ownerId'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const BoosterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    petId: 'petId'
  };

  export type BoosterScalarFieldEnum = (typeof BoosterScalarFieldEnum)[keyof typeof BoosterScalarFieldEnum]


  export const BrendanCaneHistoryScalarFieldEnum: {
    id: 'id',
    date: 'date',
    notes: 'notes',
    petId: 'petId'
  };

  export type BrendanCaneHistoryScalarFieldEnum = (typeof BrendanCaneHistoryScalarFieldEnum)[keyof typeof BrendanCaneHistoryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: IntFilter<"Owner"> | number
    firstName?: StringFilter<"Owner"> | string
    lastName?: StringFilter<"Owner"> | string
    email?: StringFilter<"Owner"> | string
    phone?: StringNullableFilter<"Owner"> | string | null
    address?: StringNullableFilter<"Owner"> | string | null
    pets?: PetListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    pets?: PetOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    firstName?: StringFilter<"Owner"> | string
    lastName?: StringFilter<"Owner"> | string
    phone?: StringNullableFilter<"Owner"> | string | null
    address?: StringNullableFilter<"Owner"> | string | null
    pets?: PetListRelationFilter
  }, "id" | "email">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _avg?: OwnerAvgOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
    _sum?: OwnerSumOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Owner"> | number
    firstName?: StringWithAggregatesFilter<"Owner"> | string
    lastName?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringWithAggregatesFilter<"Owner"> | string
    phone?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    address?: StringNullableWithAggregatesFilter<"Owner"> | string | null
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    vaccinated?: BoolFilter<"Pet"> | boolean
    vaccinationDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    ownerId?: IntFilter<"Pet"> | number
    boosters?: BoosterListRelationFilter
    brendanCane?: BrendanCaneHistoryListRelationFilter
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    vaccinated?: SortOrder
    vaccinationDate?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    boosters?: BoosterOrderByRelationAggregateInput
    brendanCane?: BrendanCaneHistoryOrderByRelationAggregateInput
    owner?: OwnerOrderByWithRelationInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    vaccinated?: BoolFilter<"Pet"> | boolean
    vaccinationDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    ownerId?: IntFilter<"Pet"> | number
    boosters?: BoosterListRelationFilter
    brendanCane?: BrendanCaneHistoryListRelationFilter
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    vaccinated?: SortOrder
    vaccinationDate?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pet"> | number
    name?: StringWithAggregatesFilter<"Pet"> | string
    species?: StringWithAggregatesFilter<"Pet"> | string
    breed?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    vaccinated?: BoolWithAggregatesFilter<"Pet"> | boolean
    vaccinationDate?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    ownerId?: IntWithAggregatesFilter<"Pet"> | number
  }

  export type BoosterWhereInput = {
    AND?: BoosterWhereInput | BoosterWhereInput[]
    OR?: BoosterWhereInput[]
    NOT?: BoosterWhereInput | BoosterWhereInput[]
    id?: IntFilter<"Booster"> | number
    name?: StringFilter<"Booster"> | string
    date?: DateTimeFilter<"Booster"> | Date | string
    petId?: IntFilter<"Booster"> | number
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type BoosterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    petId?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type BoosterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoosterWhereInput | BoosterWhereInput[]
    OR?: BoosterWhereInput[]
    NOT?: BoosterWhereInput | BoosterWhereInput[]
    name?: StringFilter<"Booster"> | string
    date?: DateTimeFilter<"Booster"> | Date | string
    petId?: IntFilter<"Booster"> | number
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type BoosterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    petId?: SortOrder
    _count?: BoosterCountOrderByAggregateInput
    _avg?: BoosterAvgOrderByAggregateInput
    _max?: BoosterMaxOrderByAggregateInput
    _min?: BoosterMinOrderByAggregateInput
    _sum?: BoosterSumOrderByAggregateInput
  }

  export type BoosterScalarWhereWithAggregatesInput = {
    AND?: BoosterScalarWhereWithAggregatesInput | BoosterScalarWhereWithAggregatesInput[]
    OR?: BoosterScalarWhereWithAggregatesInput[]
    NOT?: BoosterScalarWhereWithAggregatesInput | BoosterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booster"> | number
    name?: StringWithAggregatesFilter<"Booster"> | string
    date?: DateTimeWithAggregatesFilter<"Booster"> | Date | string
    petId?: IntWithAggregatesFilter<"Booster"> | number
  }

  export type BrendanCaneHistoryWhereInput = {
    AND?: BrendanCaneHistoryWhereInput | BrendanCaneHistoryWhereInput[]
    OR?: BrendanCaneHistoryWhereInput[]
    NOT?: BrendanCaneHistoryWhereInput | BrendanCaneHistoryWhereInput[]
    id?: IntFilter<"BrendanCaneHistory"> | number
    date?: DateTimeFilter<"BrendanCaneHistory"> | Date | string
    notes?: StringNullableFilter<"BrendanCaneHistory"> | string | null
    petId?: IntFilter<"BrendanCaneHistory"> | number
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type BrendanCaneHistoryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    petId?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type BrendanCaneHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BrendanCaneHistoryWhereInput | BrendanCaneHistoryWhereInput[]
    OR?: BrendanCaneHistoryWhereInput[]
    NOT?: BrendanCaneHistoryWhereInput | BrendanCaneHistoryWhereInput[]
    date?: DateTimeFilter<"BrendanCaneHistory"> | Date | string
    notes?: StringNullableFilter<"BrendanCaneHistory"> | string | null
    petId?: IntFilter<"BrendanCaneHistory"> | number
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type BrendanCaneHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    petId?: SortOrder
    _count?: BrendanCaneHistoryCountOrderByAggregateInput
    _avg?: BrendanCaneHistoryAvgOrderByAggregateInput
    _max?: BrendanCaneHistoryMaxOrderByAggregateInput
    _min?: BrendanCaneHistoryMinOrderByAggregateInput
    _sum?: BrendanCaneHistorySumOrderByAggregateInput
  }

  export type BrendanCaneHistoryScalarWhereWithAggregatesInput = {
    AND?: BrendanCaneHistoryScalarWhereWithAggregatesInput | BrendanCaneHistoryScalarWhereWithAggregatesInput[]
    OR?: BrendanCaneHistoryScalarWhereWithAggregatesInput[]
    NOT?: BrendanCaneHistoryScalarWhereWithAggregatesInput | BrendanCaneHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BrendanCaneHistory"> | number
    date?: DateTimeWithAggregatesFilter<"BrendanCaneHistory"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"BrendanCaneHistory"> | string | null
    petId?: IntWithAggregatesFilter<"BrendanCaneHistory"> | number
  }

  export type OwnerCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    address?: string | null
    pets?: PetCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    address?: string | null
    pets?: PetUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    address?: string | null
  }

  export type OwnerUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetCreateInput = {
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    boosters?: BoosterCreateNestedManyWithoutPetInput
    brendanCane?: BrendanCaneHistoryCreateNestedManyWithoutPetInput
    owner: OwnerCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    ownerId: number
    boosters?: BoosterUncheckedCreateNestedManyWithoutPetInput
    brendanCane?: BrendanCaneHistoryUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosters?: BoosterUpdateManyWithoutPetNestedInput
    brendanCane?: BrendanCaneHistoryUpdateManyWithoutPetNestedInput
    owner?: OwnerUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    boosters?: BoosterUncheckedUpdateManyWithoutPetNestedInput
    brendanCane?: BrendanCaneHistoryUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    ownerId: number
  }

  export type PetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type BoosterCreateInput = {
    name: string
    date: Date | string
    pet: PetCreateNestedOneWithoutBoostersInput
  }

  export type BoosterUncheckedCreateInput = {
    id?: number
    name: string
    date: Date | string
    petId: number
  }

  export type BoosterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutBoostersNestedInput
  }

  export type BoosterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type BoosterCreateManyInput = {
    id?: number
    name: string
    date: Date | string
    petId: number
  }

  export type BoosterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoosterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type BrendanCaneHistoryCreateInput = {
    date: Date | string
    notes?: string | null
    pet: PetCreateNestedOneWithoutBrendanCaneInput
  }

  export type BrendanCaneHistoryUncheckedCreateInput = {
    id?: number
    date: Date | string
    notes?: string | null
    petId: number
  }

  export type BrendanCaneHistoryUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pet?: PetUpdateOneRequiredWithoutBrendanCaneNestedInput
  }

  export type BrendanCaneHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type BrendanCaneHistoryCreateManyInput = {
    id?: number
    date: Date | string
    notes?: string | null
    petId: number
  }

  export type BrendanCaneHistoryUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrendanCaneHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    petId?: IntFieldUpdateOperationsInput | number
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

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
  }

  export type OwnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
  }

  export type OwnerSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoosterListRelationFilter = {
    every?: BoosterWhereInput
    some?: BoosterWhereInput
    none?: BoosterWhereInput
  }

  export type BrendanCaneHistoryListRelationFilter = {
    every?: BrendanCaneHistoryWhereInput
    some?: BrendanCaneHistoryWhereInput
    none?: BrendanCaneHistoryWhereInput
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type BoosterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrendanCaneHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    vaccinated?: SortOrder
    vaccinationDate?: SortOrder
    ownerId?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    vaccinated?: SortOrder
    vaccinationDate?: SortOrder
    ownerId?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    birthDate?: SortOrder
    vaccinated?: SortOrder
    vaccinationDate?: SortOrder
    ownerId?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type BoosterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    petId?: SortOrder
  }

  export type BoosterAvgOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
  }

  export type BoosterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    petId?: SortOrder
  }

  export type BoosterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    petId?: SortOrder
  }

  export type BoosterSumOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
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

  export type BrendanCaneHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    petId?: SortOrder
  }

  export type BrendanCaneHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
  }

  export type BrendanCaneHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    petId?: SortOrder
  }

  export type BrendanCaneHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    petId?: SortOrder
  }

  export type BrendanCaneHistorySumOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
  }

  export type PetCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PetUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOwnerInput | PetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOwnerInput | PetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOwnerInput | PetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOwnerInput | PetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOwnerInput | PetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOwnerInput | PetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type BoosterCreateNestedManyWithoutPetInput = {
    create?: XOR<BoosterCreateWithoutPetInput, BoosterUncheckedCreateWithoutPetInput> | BoosterCreateWithoutPetInput[] | BoosterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BoosterCreateOrConnectWithoutPetInput | BoosterCreateOrConnectWithoutPetInput[]
    createMany?: BoosterCreateManyPetInputEnvelope
    connect?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
  }

  export type BrendanCaneHistoryCreateNestedManyWithoutPetInput = {
    create?: XOR<BrendanCaneHistoryCreateWithoutPetInput, BrendanCaneHistoryUncheckedCreateWithoutPetInput> | BrendanCaneHistoryCreateWithoutPetInput[] | BrendanCaneHistoryUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BrendanCaneHistoryCreateOrConnectWithoutPetInput | BrendanCaneHistoryCreateOrConnectWithoutPetInput[]
    createMany?: BrendanCaneHistoryCreateManyPetInputEnvelope
    connect?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
  }

  export type OwnerCreateNestedOneWithoutPetsInput = {
    create?: XOR<OwnerCreateWithoutPetsInput, OwnerUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutPetsInput
    connect?: OwnerWhereUniqueInput
  }

  export type BoosterUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<BoosterCreateWithoutPetInput, BoosterUncheckedCreateWithoutPetInput> | BoosterCreateWithoutPetInput[] | BoosterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BoosterCreateOrConnectWithoutPetInput | BoosterCreateOrConnectWithoutPetInput[]
    createMany?: BoosterCreateManyPetInputEnvelope
    connect?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
  }

  export type BrendanCaneHistoryUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<BrendanCaneHistoryCreateWithoutPetInput, BrendanCaneHistoryUncheckedCreateWithoutPetInput> | BrendanCaneHistoryCreateWithoutPetInput[] | BrendanCaneHistoryUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BrendanCaneHistoryCreateOrConnectWithoutPetInput | BrendanCaneHistoryCreateOrConnectWithoutPetInput[]
    createMany?: BrendanCaneHistoryCreateManyPetInputEnvelope
    connect?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BoosterUpdateManyWithoutPetNestedInput = {
    create?: XOR<BoosterCreateWithoutPetInput, BoosterUncheckedCreateWithoutPetInput> | BoosterCreateWithoutPetInput[] | BoosterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BoosterCreateOrConnectWithoutPetInput | BoosterCreateOrConnectWithoutPetInput[]
    upsert?: BoosterUpsertWithWhereUniqueWithoutPetInput | BoosterUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: BoosterCreateManyPetInputEnvelope
    set?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    disconnect?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    delete?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    connect?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    update?: BoosterUpdateWithWhereUniqueWithoutPetInput | BoosterUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: BoosterUpdateManyWithWhereWithoutPetInput | BoosterUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: BoosterScalarWhereInput | BoosterScalarWhereInput[]
  }

  export type BrendanCaneHistoryUpdateManyWithoutPetNestedInput = {
    create?: XOR<BrendanCaneHistoryCreateWithoutPetInput, BrendanCaneHistoryUncheckedCreateWithoutPetInput> | BrendanCaneHistoryCreateWithoutPetInput[] | BrendanCaneHistoryUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BrendanCaneHistoryCreateOrConnectWithoutPetInput | BrendanCaneHistoryCreateOrConnectWithoutPetInput[]
    upsert?: BrendanCaneHistoryUpsertWithWhereUniqueWithoutPetInput | BrendanCaneHistoryUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: BrendanCaneHistoryCreateManyPetInputEnvelope
    set?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    disconnect?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    delete?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    connect?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    update?: BrendanCaneHistoryUpdateWithWhereUniqueWithoutPetInput | BrendanCaneHistoryUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: BrendanCaneHistoryUpdateManyWithWhereWithoutPetInput | BrendanCaneHistoryUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: BrendanCaneHistoryScalarWhereInput | BrendanCaneHistoryScalarWhereInput[]
  }

  export type OwnerUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<OwnerCreateWithoutPetsInput, OwnerUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutPetsInput
    upsert?: OwnerUpsertWithoutPetsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutPetsInput, OwnerUpdateWithoutPetsInput>, OwnerUncheckedUpdateWithoutPetsInput>
  }

  export type BoosterUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<BoosterCreateWithoutPetInput, BoosterUncheckedCreateWithoutPetInput> | BoosterCreateWithoutPetInput[] | BoosterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BoosterCreateOrConnectWithoutPetInput | BoosterCreateOrConnectWithoutPetInput[]
    upsert?: BoosterUpsertWithWhereUniqueWithoutPetInput | BoosterUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: BoosterCreateManyPetInputEnvelope
    set?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    disconnect?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    delete?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    connect?: BoosterWhereUniqueInput | BoosterWhereUniqueInput[]
    update?: BoosterUpdateWithWhereUniqueWithoutPetInput | BoosterUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: BoosterUpdateManyWithWhereWithoutPetInput | BoosterUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: BoosterScalarWhereInput | BoosterScalarWhereInput[]
  }

  export type BrendanCaneHistoryUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<BrendanCaneHistoryCreateWithoutPetInput, BrendanCaneHistoryUncheckedCreateWithoutPetInput> | BrendanCaneHistoryCreateWithoutPetInput[] | BrendanCaneHistoryUncheckedCreateWithoutPetInput[]
    connectOrCreate?: BrendanCaneHistoryCreateOrConnectWithoutPetInput | BrendanCaneHistoryCreateOrConnectWithoutPetInput[]
    upsert?: BrendanCaneHistoryUpsertWithWhereUniqueWithoutPetInput | BrendanCaneHistoryUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: BrendanCaneHistoryCreateManyPetInputEnvelope
    set?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    disconnect?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    delete?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    connect?: BrendanCaneHistoryWhereUniqueInput | BrendanCaneHistoryWhereUniqueInput[]
    update?: BrendanCaneHistoryUpdateWithWhereUniqueWithoutPetInput | BrendanCaneHistoryUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: BrendanCaneHistoryUpdateManyWithWhereWithoutPetInput | BrendanCaneHistoryUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: BrendanCaneHistoryScalarWhereInput | BrendanCaneHistoryScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutBoostersInput = {
    create?: XOR<PetCreateWithoutBoostersInput, PetUncheckedCreateWithoutBoostersInput>
    connectOrCreate?: PetCreateOrConnectWithoutBoostersInput
    connect?: PetWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PetUpdateOneRequiredWithoutBoostersNestedInput = {
    create?: XOR<PetCreateWithoutBoostersInput, PetUncheckedCreateWithoutBoostersInput>
    connectOrCreate?: PetCreateOrConnectWithoutBoostersInput
    upsert?: PetUpsertWithoutBoostersInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutBoostersInput, PetUpdateWithoutBoostersInput>, PetUncheckedUpdateWithoutBoostersInput>
  }

  export type PetCreateNestedOneWithoutBrendanCaneInput = {
    create?: XOR<PetCreateWithoutBrendanCaneInput, PetUncheckedCreateWithoutBrendanCaneInput>
    connectOrCreate?: PetCreateOrConnectWithoutBrendanCaneInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutBrendanCaneNestedInput = {
    create?: XOR<PetCreateWithoutBrendanCaneInput, PetUncheckedCreateWithoutBrendanCaneInput>
    connectOrCreate?: PetCreateOrConnectWithoutBrendanCaneInput
    upsert?: PetUpsertWithoutBrendanCaneInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutBrendanCaneInput, PetUpdateWithoutBrendanCaneInput>, PetUncheckedUpdateWithoutBrendanCaneInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PetCreateWithoutOwnerInput = {
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    boosters?: BoosterCreateNestedManyWithoutPetInput
    brendanCane?: BrendanCaneHistoryCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    boosters?: BoosterUncheckedCreateNestedManyWithoutPetInput
    brendanCane?: BrendanCaneHistoryUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutOwnerInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput>
  }

  export type PetCreateManyOwnerInputEnvelope = {
    data: PetCreateManyOwnerInput | PetCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutOwnerInput, PetUncheckedUpdateWithoutOwnerInput>
    create: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput>
  }

  export type PetUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutOwnerInput, PetUncheckedUpdateWithoutOwnerInput>
  }

  export type PetUpdateManyWithWhereWithoutOwnerInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    species?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    vaccinated?: BoolFilter<"Pet"> | boolean
    vaccinationDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    ownerId?: IntFilter<"Pet"> | number
  }

  export type BoosterCreateWithoutPetInput = {
    name: string
    date: Date | string
  }

  export type BoosterUncheckedCreateWithoutPetInput = {
    id?: number
    name: string
    date: Date | string
  }

  export type BoosterCreateOrConnectWithoutPetInput = {
    where: BoosterWhereUniqueInput
    create: XOR<BoosterCreateWithoutPetInput, BoosterUncheckedCreateWithoutPetInput>
  }

  export type BoosterCreateManyPetInputEnvelope = {
    data: BoosterCreateManyPetInput | BoosterCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type BrendanCaneHistoryCreateWithoutPetInput = {
    date: Date | string
    notes?: string | null
  }

  export type BrendanCaneHistoryUncheckedCreateWithoutPetInput = {
    id?: number
    date: Date | string
    notes?: string | null
  }

  export type BrendanCaneHistoryCreateOrConnectWithoutPetInput = {
    where: BrendanCaneHistoryWhereUniqueInput
    create: XOR<BrendanCaneHistoryCreateWithoutPetInput, BrendanCaneHistoryUncheckedCreateWithoutPetInput>
  }

  export type BrendanCaneHistoryCreateManyPetInputEnvelope = {
    data: BrendanCaneHistoryCreateManyPetInput | BrendanCaneHistoryCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type OwnerCreateWithoutPetsInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    address?: string | null
  }

  export type OwnerUncheckedCreateWithoutPetsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    address?: string | null
  }

  export type OwnerCreateOrConnectWithoutPetsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutPetsInput, OwnerUncheckedCreateWithoutPetsInput>
  }

  export type BoosterUpsertWithWhereUniqueWithoutPetInput = {
    where: BoosterWhereUniqueInput
    update: XOR<BoosterUpdateWithoutPetInput, BoosterUncheckedUpdateWithoutPetInput>
    create: XOR<BoosterCreateWithoutPetInput, BoosterUncheckedCreateWithoutPetInput>
  }

  export type BoosterUpdateWithWhereUniqueWithoutPetInput = {
    where: BoosterWhereUniqueInput
    data: XOR<BoosterUpdateWithoutPetInput, BoosterUncheckedUpdateWithoutPetInput>
  }

  export type BoosterUpdateManyWithWhereWithoutPetInput = {
    where: BoosterScalarWhereInput
    data: XOR<BoosterUpdateManyMutationInput, BoosterUncheckedUpdateManyWithoutPetInput>
  }

  export type BoosterScalarWhereInput = {
    AND?: BoosterScalarWhereInput | BoosterScalarWhereInput[]
    OR?: BoosterScalarWhereInput[]
    NOT?: BoosterScalarWhereInput | BoosterScalarWhereInput[]
    id?: IntFilter<"Booster"> | number
    name?: StringFilter<"Booster"> | string
    date?: DateTimeFilter<"Booster"> | Date | string
    petId?: IntFilter<"Booster"> | number
  }

  export type BrendanCaneHistoryUpsertWithWhereUniqueWithoutPetInput = {
    where: BrendanCaneHistoryWhereUniqueInput
    update: XOR<BrendanCaneHistoryUpdateWithoutPetInput, BrendanCaneHistoryUncheckedUpdateWithoutPetInput>
    create: XOR<BrendanCaneHistoryCreateWithoutPetInput, BrendanCaneHistoryUncheckedCreateWithoutPetInput>
  }

  export type BrendanCaneHistoryUpdateWithWhereUniqueWithoutPetInput = {
    where: BrendanCaneHistoryWhereUniqueInput
    data: XOR<BrendanCaneHistoryUpdateWithoutPetInput, BrendanCaneHistoryUncheckedUpdateWithoutPetInput>
  }

  export type BrendanCaneHistoryUpdateManyWithWhereWithoutPetInput = {
    where: BrendanCaneHistoryScalarWhereInput
    data: XOR<BrendanCaneHistoryUpdateManyMutationInput, BrendanCaneHistoryUncheckedUpdateManyWithoutPetInput>
  }

  export type BrendanCaneHistoryScalarWhereInput = {
    AND?: BrendanCaneHistoryScalarWhereInput | BrendanCaneHistoryScalarWhereInput[]
    OR?: BrendanCaneHistoryScalarWhereInput[]
    NOT?: BrendanCaneHistoryScalarWhereInput | BrendanCaneHistoryScalarWhereInput[]
    id?: IntFilter<"BrendanCaneHistory"> | number
    date?: DateTimeFilter<"BrendanCaneHistory"> | Date | string
    notes?: StringNullableFilter<"BrendanCaneHistory"> | string | null
    petId?: IntFilter<"BrendanCaneHistory"> | number
  }

  export type OwnerUpsertWithoutPetsInput = {
    update: XOR<OwnerUpdateWithoutPetsInput, OwnerUncheckedUpdateWithoutPetsInput>
    create: XOR<OwnerCreateWithoutPetsInput, OwnerUncheckedCreateWithoutPetsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutPetsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutPetsInput, OwnerUncheckedUpdateWithoutPetsInput>
  }

  export type OwnerUpdateWithoutPetsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetCreateWithoutBoostersInput = {
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    brendanCane?: BrendanCaneHistoryCreateNestedManyWithoutPetInput
    owner: OwnerCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutBoostersInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    ownerId: number
    brendanCane?: BrendanCaneHistoryUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutBoostersInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutBoostersInput, PetUncheckedCreateWithoutBoostersInput>
  }

  export type PetUpsertWithoutBoostersInput = {
    update: XOR<PetUpdateWithoutBoostersInput, PetUncheckedUpdateWithoutBoostersInput>
    create: XOR<PetCreateWithoutBoostersInput, PetUncheckedCreateWithoutBoostersInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutBoostersInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutBoostersInput, PetUncheckedUpdateWithoutBoostersInput>
  }

  export type PetUpdateWithoutBoostersInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brendanCane?: BrendanCaneHistoryUpdateManyWithoutPetNestedInput
    owner?: OwnerUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutBoostersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    brendanCane?: BrendanCaneHistoryUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateWithoutBrendanCaneInput = {
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    boosters?: BoosterCreateNestedManyWithoutPetInput
    owner: OwnerCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutBrendanCaneInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
    ownerId: number
    boosters?: BoosterUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutBrendanCaneInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutBrendanCaneInput, PetUncheckedCreateWithoutBrendanCaneInput>
  }

  export type PetUpsertWithoutBrendanCaneInput = {
    update: XOR<PetUpdateWithoutBrendanCaneInput, PetUncheckedUpdateWithoutBrendanCaneInput>
    create: XOR<PetCreateWithoutBrendanCaneInput, PetUncheckedCreateWithoutBrendanCaneInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutBrendanCaneInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutBrendanCaneInput, PetUncheckedUpdateWithoutBrendanCaneInput>
  }

  export type PetUpdateWithoutBrendanCaneInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosters?: BoosterUpdateManyWithoutPetNestedInput
    owner?: OwnerUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutBrendanCaneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    boosters?: BoosterUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyOwnerInput = {
    id?: number
    name: string
    species: string
    breed?: string | null
    birthDate?: Date | string | null
    vaccinated?: boolean
    vaccinationDate?: Date | string | null
  }

  export type PetUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosters?: BoosterUpdateManyWithoutPetNestedInput
    brendanCane?: BrendanCaneHistoryUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosters?: BoosterUncheckedUpdateManyWithoutPetNestedInput
    brendanCane?: BrendanCaneHistoryUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaccinated?: BoolFieldUpdateOperationsInput | boolean
    vaccinationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoosterCreateManyPetInput = {
    id?: number
    name: string
    date: Date | string
  }

  export type BrendanCaneHistoryCreateManyPetInput = {
    id?: number
    date: Date | string
    notes?: string | null
  }

  export type BoosterUpdateWithoutPetInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoosterUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoosterUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrendanCaneHistoryUpdateWithoutPetInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrendanCaneHistoryUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrendanCaneHistoryUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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