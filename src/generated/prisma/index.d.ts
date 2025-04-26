
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
 * Model Slideshow
 * 
 */
export type Slideshow = $Result.DefaultSelection<Prisma.$SlideshowPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model SlideshowImage
 * 
 */
export type SlideshowImage = $Result.DefaultSelection<Prisma.$SlideshowImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Slideshows
 * const slideshows = await prisma.slideshow.findMany()
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
   * // Fetch zero or more Slideshows
   * const slideshows = await prisma.slideshow.findMany()
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
   * `prisma.slideshow`: Exposes CRUD operations for the **Slideshow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slideshows
    * const slideshows = await prisma.slideshow.findMany()
    * ```
    */
  get slideshow(): Prisma.SlideshowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slideshowImage`: Exposes CRUD operations for the **SlideshowImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlideshowImages
    * const slideshowImages = await prisma.slideshowImage.findMany()
    * ```
    */
  get slideshowImage(): Prisma.SlideshowImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Slideshow: 'Slideshow',
    Image: 'Image',
    SlideshowImage: 'SlideshowImage'
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
      modelProps: "slideshow" | "image" | "slideshowImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Slideshow: {
        payload: Prisma.$SlideshowPayload<ExtArgs>
        fields: Prisma.SlideshowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlideshowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlideshowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>
          }
          findFirst: {
            args: Prisma.SlideshowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlideshowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>
          }
          findMany: {
            args: Prisma.SlideshowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>[]
          }
          create: {
            args: Prisma.SlideshowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>
          }
          createMany: {
            args: Prisma.SlideshowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlideshowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>[]
          }
          delete: {
            args: Prisma.SlideshowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>
          }
          update: {
            args: Prisma.SlideshowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>
          }
          deleteMany: {
            args: Prisma.SlideshowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlideshowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlideshowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>[]
          }
          upsert: {
            args: Prisma.SlideshowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowPayload>
          }
          aggregate: {
            args: Prisma.SlideshowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlideshow>
          }
          groupBy: {
            args: Prisma.SlideshowGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlideshowGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlideshowCountArgs<ExtArgs>
            result: $Utils.Optional<SlideshowCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      SlideshowImage: {
        payload: Prisma.$SlideshowImagePayload<ExtArgs>
        fields: Prisma.SlideshowImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlideshowImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlideshowImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>
          }
          findFirst: {
            args: Prisma.SlideshowImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlideshowImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>
          }
          findMany: {
            args: Prisma.SlideshowImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>[]
          }
          create: {
            args: Prisma.SlideshowImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>
          }
          createMany: {
            args: Prisma.SlideshowImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlideshowImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>[]
          }
          delete: {
            args: Prisma.SlideshowImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>
          }
          update: {
            args: Prisma.SlideshowImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>
          }
          deleteMany: {
            args: Prisma.SlideshowImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlideshowImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlideshowImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>[]
          }
          upsert: {
            args: Prisma.SlideshowImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideshowImagePayload>
          }
          aggregate: {
            args: Prisma.SlideshowImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlideshowImage>
          }
          groupBy: {
            args: Prisma.SlideshowImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlideshowImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlideshowImageCountArgs<ExtArgs>
            result: $Utils.Optional<SlideshowImageCountAggregateOutputType> | number
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
    slideshow?: SlideshowOmit
    image?: ImageOmit
    slideshowImage?: SlideshowImageOmit
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
   * Count Type SlideshowCountOutputType
   */

  export type SlideshowCountOutputType = {
    images: number
  }

  export type SlideshowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | SlideshowCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SlideshowCountOutputType without action
   */
  export type SlideshowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowCountOutputType
     */
    select?: SlideshowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SlideshowCountOutputType without action
   */
  export type SlideshowCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideshowImageWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    slideshows: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slideshows?: boolean | ImageCountOutputTypeCountSlideshowsArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountSlideshowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideshowImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Slideshow
   */

  export type AggregateSlideshow = {
    _count: SlideshowCountAggregateOutputType | null
    _avg: SlideshowAvgAggregateOutputType | null
    _sum: SlideshowSumAggregateOutputType | null
    _min: SlideshowMinAggregateOutputType | null
    _max: SlideshowMaxAggregateOutputType | null
  }

  export type SlideshowAvgAggregateOutputType = {
    id: number | null
  }

  export type SlideshowSumAggregateOutputType = {
    id: number | null
  }

  export type SlideshowMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlideshowMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlideshowCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlideshowAvgAggregateInputType = {
    id?: true
  }

  export type SlideshowSumAggregateInputType = {
    id?: true
  }

  export type SlideshowMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlideshowMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlideshowCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlideshowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slideshow to aggregate.
     */
    where?: SlideshowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slideshows to fetch.
     */
    orderBy?: SlideshowOrderByWithRelationInput | SlideshowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlideshowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slideshows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slideshows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slideshows
    **/
    _count?: true | SlideshowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlideshowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlideshowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlideshowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlideshowMaxAggregateInputType
  }

  export type GetSlideshowAggregateType<T extends SlideshowAggregateArgs> = {
        [P in keyof T & keyof AggregateSlideshow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlideshow[P]>
      : GetScalarType<T[P], AggregateSlideshow[P]>
  }




  export type SlideshowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideshowWhereInput
    orderBy?: SlideshowOrderByWithAggregationInput | SlideshowOrderByWithAggregationInput[]
    by: SlideshowScalarFieldEnum[] | SlideshowScalarFieldEnum
    having?: SlideshowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlideshowCountAggregateInputType | true
    _avg?: SlideshowAvgAggregateInputType
    _sum?: SlideshowSumAggregateInputType
    _min?: SlideshowMinAggregateInputType
    _max?: SlideshowMaxAggregateInputType
  }

  export type SlideshowGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SlideshowCountAggregateOutputType | null
    _avg: SlideshowAvgAggregateOutputType | null
    _sum: SlideshowSumAggregateOutputType | null
    _min: SlideshowMinAggregateOutputType | null
    _max: SlideshowMaxAggregateOutputType | null
  }

  type GetSlideshowGroupByPayload<T extends SlideshowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlideshowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlideshowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlideshowGroupByOutputType[P]>
            : GetScalarType<T[P], SlideshowGroupByOutputType[P]>
        }
      >
    >


  export type SlideshowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Slideshow$imagesArgs<ExtArgs>
    _count?: boolean | SlideshowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slideshow"]>

  export type SlideshowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slideshow"]>

  export type SlideshowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["slideshow"]>

  export type SlideshowSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlideshowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["slideshow"]>
  export type SlideshowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Slideshow$imagesArgs<ExtArgs>
    _count?: boolean | SlideshowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SlideshowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SlideshowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SlideshowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slideshow"
    objects: {
      images: Prisma.$SlideshowImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slideshow"]>
    composites: {}
  }

  type SlideshowGetPayload<S extends boolean | null | undefined | SlideshowDefaultArgs> = $Result.GetResult<Prisma.$SlideshowPayload, S>

  type SlideshowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlideshowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlideshowCountAggregateInputType | true
    }

  export interface SlideshowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slideshow'], meta: { name: 'Slideshow' } }
    /**
     * Find zero or one Slideshow that matches the filter.
     * @param {SlideshowFindUniqueArgs} args - Arguments to find a Slideshow
     * @example
     * // Get one Slideshow
     * const slideshow = await prisma.slideshow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlideshowFindUniqueArgs>(args: SelectSubset<T, SlideshowFindUniqueArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Slideshow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlideshowFindUniqueOrThrowArgs} args - Arguments to find a Slideshow
     * @example
     * // Get one Slideshow
     * const slideshow = await prisma.slideshow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlideshowFindUniqueOrThrowArgs>(args: SelectSubset<T, SlideshowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slideshow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowFindFirstArgs} args - Arguments to find a Slideshow
     * @example
     * // Get one Slideshow
     * const slideshow = await prisma.slideshow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlideshowFindFirstArgs>(args?: SelectSubset<T, SlideshowFindFirstArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slideshow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowFindFirstOrThrowArgs} args - Arguments to find a Slideshow
     * @example
     * // Get one Slideshow
     * const slideshow = await prisma.slideshow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlideshowFindFirstOrThrowArgs>(args?: SelectSubset<T, SlideshowFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Slideshows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slideshows
     * const slideshows = await prisma.slideshow.findMany()
     * 
     * // Get first 10 Slideshows
     * const slideshows = await prisma.slideshow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slideshowWithIdOnly = await prisma.slideshow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlideshowFindManyArgs>(args?: SelectSubset<T, SlideshowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Slideshow.
     * @param {SlideshowCreateArgs} args - Arguments to create a Slideshow.
     * @example
     * // Create one Slideshow
     * const Slideshow = await prisma.slideshow.create({
     *   data: {
     *     // ... data to create a Slideshow
     *   }
     * })
     * 
     */
    create<T extends SlideshowCreateArgs>(args: SelectSubset<T, SlideshowCreateArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Slideshows.
     * @param {SlideshowCreateManyArgs} args - Arguments to create many Slideshows.
     * @example
     * // Create many Slideshows
     * const slideshow = await prisma.slideshow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlideshowCreateManyArgs>(args?: SelectSubset<T, SlideshowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slideshows and returns the data saved in the database.
     * @param {SlideshowCreateManyAndReturnArgs} args - Arguments to create many Slideshows.
     * @example
     * // Create many Slideshows
     * const slideshow = await prisma.slideshow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slideshows and only return the `id`
     * const slideshowWithIdOnly = await prisma.slideshow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlideshowCreateManyAndReturnArgs>(args?: SelectSubset<T, SlideshowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Slideshow.
     * @param {SlideshowDeleteArgs} args - Arguments to delete one Slideshow.
     * @example
     * // Delete one Slideshow
     * const Slideshow = await prisma.slideshow.delete({
     *   where: {
     *     // ... filter to delete one Slideshow
     *   }
     * })
     * 
     */
    delete<T extends SlideshowDeleteArgs>(args: SelectSubset<T, SlideshowDeleteArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Slideshow.
     * @param {SlideshowUpdateArgs} args - Arguments to update one Slideshow.
     * @example
     * // Update one Slideshow
     * const slideshow = await prisma.slideshow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlideshowUpdateArgs>(args: SelectSubset<T, SlideshowUpdateArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Slideshows.
     * @param {SlideshowDeleteManyArgs} args - Arguments to filter Slideshows to delete.
     * @example
     * // Delete a few Slideshows
     * const { count } = await prisma.slideshow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlideshowDeleteManyArgs>(args?: SelectSubset<T, SlideshowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slideshows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slideshows
     * const slideshow = await prisma.slideshow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlideshowUpdateManyArgs>(args: SelectSubset<T, SlideshowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slideshows and returns the data updated in the database.
     * @param {SlideshowUpdateManyAndReturnArgs} args - Arguments to update many Slideshows.
     * @example
     * // Update many Slideshows
     * const slideshow = await prisma.slideshow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Slideshows and only return the `id`
     * const slideshowWithIdOnly = await prisma.slideshow.updateManyAndReturn({
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
    updateManyAndReturn<T extends SlideshowUpdateManyAndReturnArgs>(args: SelectSubset<T, SlideshowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Slideshow.
     * @param {SlideshowUpsertArgs} args - Arguments to update or create a Slideshow.
     * @example
     * // Update or create a Slideshow
     * const slideshow = await prisma.slideshow.upsert({
     *   create: {
     *     // ... data to create a Slideshow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slideshow we want to update
     *   }
     * })
     */
    upsert<T extends SlideshowUpsertArgs>(args: SelectSubset<T, SlideshowUpsertArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Slideshows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowCountArgs} args - Arguments to filter Slideshows to count.
     * @example
     * // Count the number of Slideshows
     * const count = await prisma.slideshow.count({
     *   where: {
     *     // ... the filter for the Slideshows we want to count
     *   }
     * })
    **/
    count<T extends SlideshowCountArgs>(
      args?: Subset<T, SlideshowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlideshowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slideshow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlideshowAggregateArgs>(args: Subset<T, SlideshowAggregateArgs>): Prisma.PrismaPromise<GetSlideshowAggregateType<T>>

    /**
     * Group by Slideshow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowGroupByArgs} args - Group by arguments.
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
      T extends SlideshowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlideshowGroupByArgs['orderBy'] }
        : { orderBy?: SlideshowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlideshowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlideshowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slideshow model
   */
  readonly fields: SlideshowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slideshow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlideshowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Slideshow$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Slideshow$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Slideshow model
   */
  interface SlideshowFieldRefs {
    readonly id: FieldRef<"Slideshow", 'Int'>
    readonly name: FieldRef<"Slideshow", 'String'>
    readonly createdAt: FieldRef<"Slideshow", 'DateTime'>
    readonly updatedAt: FieldRef<"Slideshow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Slideshow findUnique
   */
  export type SlideshowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * Filter, which Slideshow to fetch.
     */
    where: SlideshowWhereUniqueInput
  }

  /**
   * Slideshow findUniqueOrThrow
   */
  export type SlideshowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * Filter, which Slideshow to fetch.
     */
    where: SlideshowWhereUniqueInput
  }

  /**
   * Slideshow findFirst
   */
  export type SlideshowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * Filter, which Slideshow to fetch.
     */
    where?: SlideshowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slideshows to fetch.
     */
    orderBy?: SlideshowOrderByWithRelationInput | SlideshowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slideshows.
     */
    cursor?: SlideshowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slideshows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slideshows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slideshows.
     */
    distinct?: SlideshowScalarFieldEnum | SlideshowScalarFieldEnum[]
  }

  /**
   * Slideshow findFirstOrThrow
   */
  export type SlideshowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * Filter, which Slideshow to fetch.
     */
    where?: SlideshowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slideshows to fetch.
     */
    orderBy?: SlideshowOrderByWithRelationInput | SlideshowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slideshows.
     */
    cursor?: SlideshowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slideshows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slideshows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slideshows.
     */
    distinct?: SlideshowScalarFieldEnum | SlideshowScalarFieldEnum[]
  }

  /**
   * Slideshow findMany
   */
  export type SlideshowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * Filter, which Slideshows to fetch.
     */
    where?: SlideshowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slideshows to fetch.
     */
    orderBy?: SlideshowOrderByWithRelationInput | SlideshowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slideshows.
     */
    cursor?: SlideshowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slideshows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slideshows.
     */
    skip?: number
    distinct?: SlideshowScalarFieldEnum | SlideshowScalarFieldEnum[]
  }

  /**
   * Slideshow create
   */
  export type SlideshowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * The data needed to create a Slideshow.
     */
    data: XOR<SlideshowCreateInput, SlideshowUncheckedCreateInput>
  }

  /**
   * Slideshow createMany
   */
  export type SlideshowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slideshows.
     */
    data: SlideshowCreateManyInput | SlideshowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slideshow createManyAndReturn
   */
  export type SlideshowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * The data used to create many Slideshows.
     */
    data: SlideshowCreateManyInput | SlideshowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slideshow update
   */
  export type SlideshowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * The data needed to update a Slideshow.
     */
    data: XOR<SlideshowUpdateInput, SlideshowUncheckedUpdateInput>
    /**
     * Choose, which Slideshow to update.
     */
    where: SlideshowWhereUniqueInput
  }

  /**
   * Slideshow updateMany
   */
  export type SlideshowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slideshows.
     */
    data: XOR<SlideshowUpdateManyMutationInput, SlideshowUncheckedUpdateManyInput>
    /**
     * Filter which Slideshows to update
     */
    where?: SlideshowWhereInput
    /**
     * Limit how many Slideshows to update.
     */
    limit?: number
  }

  /**
   * Slideshow updateManyAndReturn
   */
  export type SlideshowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * The data used to update Slideshows.
     */
    data: XOR<SlideshowUpdateManyMutationInput, SlideshowUncheckedUpdateManyInput>
    /**
     * Filter which Slideshows to update
     */
    where?: SlideshowWhereInput
    /**
     * Limit how many Slideshows to update.
     */
    limit?: number
  }

  /**
   * Slideshow upsert
   */
  export type SlideshowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * The filter to search for the Slideshow to update in case it exists.
     */
    where: SlideshowWhereUniqueInput
    /**
     * In case the Slideshow found by the `where` argument doesn't exist, create a new Slideshow with this data.
     */
    create: XOR<SlideshowCreateInput, SlideshowUncheckedCreateInput>
    /**
     * In case the Slideshow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlideshowUpdateInput, SlideshowUncheckedUpdateInput>
  }

  /**
   * Slideshow delete
   */
  export type SlideshowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
    /**
     * Filter which Slideshow to delete.
     */
    where: SlideshowWhereUniqueInput
  }

  /**
   * Slideshow deleteMany
   */
  export type SlideshowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slideshows to delete
     */
    where?: SlideshowWhereInput
    /**
     * Limit how many Slideshows to delete.
     */
    limit?: number
  }

  /**
   * Slideshow.images
   */
  export type Slideshow$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    where?: SlideshowImageWhereInput
    orderBy?: SlideshowImageOrderByWithRelationInput | SlideshowImageOrderByWithRelationInput[]
    cursor?: SlideshowImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlideshowImageScalarFieldEnum | SlideshowImageScalarFieldEnum[]
  }

  /**
   * Slideshow without action
   */
  export type SlideshowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slideshow
     */
    select?: SlideshowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slideshow
     */
    omit?: SlideshowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    src: string | null
    category: string | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    src: string | null
    category: string | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    src: number
    category: number
    createdAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    src?: true
    category?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    src?: true
    category?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    src?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    src: string
    category: string
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    category?: boolean
    createdAt?: boolean
    slideshows?: boolean | Image$slideshowsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    src?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "category" | "createdAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slideshows?: boolean | Image$slideshowsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      slideshows: Prisma.$SlideshowImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      src: string
      category: string
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slideshows<T extends Image$slideshowsArgs<ExtArgs> = {}>(args?: Subset<T, Image$slideshowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly src: FieldRef<"Image", 'String'>
    readonly category: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.slideshows
   */
  export type Image$slideshowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    where?: SlideshowImageWhereInput
    orderBy?: SlideshowImageOrderByWithRelationInput | SlideshowImageOrderByWithRelationInput[]
    cursor?: SlideshowImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlideshowImageScalarFieldEnum | SlideshowImageScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model SlideshowImage
   */

  export type AggregateSlideshowImage = {
    _count: SlideshowImageCountAggregateOutputType | null
    _avg: SlideshowImageAvgAggregateOutputType | null
    _sum: SlideshowImageSumAggregateOutputType | null
    _min: SlideshowImageMinAggregateOutputType | null
    _max: SlideshowImageMaxAggregateOutputType | null
  }

  export type SlideshowImageAvgAggregateOutputType = {
    id: number | null
    slideshowId: number | null
    imageId: number | null
    displayOrder: number | null
  }

  export type SlideshowImageSumAggregateOutputType = {
    id: number | null
    slideshowId: number | null
    imageId: number | null
    displayOrder: number | null
  }

  export type SlideshowImageMinAggregateOutputType = {
    id: number | null
    slideshowId: number | null
    imageId: number | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type SlideshowImageMaxAggregateOutputType = {
    id: number | null
    slideshowId: number | null
    imageId: number | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type SlideshowImageCountAggregateOutputType = {
    id: number
    slideshowId: number
    imageId: number
    displayOrder: number
    createdAt: number
    _all: number
  }


  export type SlideshowImageAvgAggregateInputType = {
    id?: true
    slideshowId?: true
    imageId?: true
    displayOrder?: true
  }

  export type SlideshowImageSumAggregateInputType = {
    id?: true
    slideshowId?: true
    imageId?: true
    displayOrder?: true
  }

  export type SlideshowImageMinAggregateInputType = {
    id?: true
    slideshowId?: true
    imageId?: true
    displayOrder?: true
    createdAt?: true
  }

  export type SlideshowImageMaxAggregateInputType = {
    id?: true
    slideshowId?: true
    imageId?: true
    displayOrder?: true
    createdAt?: true
  }

  export type SlideshowImageCountAggregateInputType = {
    id?: true
    slideshowId?: true
    imageId?: true
    displayOrder?: true
    createdAt?: true
    _all?: true
  }

  export type SlideshowImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlideshowImage to aggregate.
     */
    where?: SlideshowImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideshowImages to fetch.
     */
    orderBy?: SlideshowImageOrderByWithRelationInput | SlideshowImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlideshowImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideshowImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideshowImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlideshowImages
    **/
    _count?: true | SlideshowImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlideshowImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlideshowImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlideshowImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlideshowImageMaxAggregateInputType
  }

  export type GetSlideshowImageAggregateType<T extends SlideshowImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSlideshowImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlideshowImage[P]>
      : GetScalarType<T[P], AggregateSlideshowImage[P]>
  }




  export type SlideshowImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideshowImageWhereInput
    orderBy?: SlideshowImageOrderByWithAggregationInput | SlideshowImageOrderByWithAggregationInput[]
    by: SlideshowImageScalarFieldEnum[] | SlideshowImageScalarFieldEnum
    having?: SlideshowImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlideshowImageCountAggregateInputType | true
    _avg?: SlideshowImageAvgAggregateInputType
    _sum?: SlideshowImageSumAggregateInputType
    _min?: SlideshowImageMinAggregateInputType
    _max?: SlideshowImageMaxAggregateInputType
  }

  export type SlideshowImageGroupByOutputType = {
    id: number
    slideshowId: number
    imageId: number
    displayOrder: number
    createdAt: Date
    _count: SlideshowImageCountAggregateOutputType | null
    _avg: SlideshowImageAvgAggregateOutputType | null
    _sum: SlideshowImageSumAggregateOutputType | null
    _min: SlideshowImageMinAggregateOutputType | null
    _max: SlideshowImageMaxAggregateOutputType | null
  }

  type GetSlideshowImageGroupByPayload<T extends SlideshowImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlideshowImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlideshowImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlideshowImageGroupByOutputType[P]>
            : GetScalarType<T[P], SlideshowImageGroupByOutputType[P]>
        }
      >
    >


  export type SlideshowImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slideshowId?: boolean
    imageId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    slideshow?: boolean | SlideshowDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slideshowImage"]>

  export type SlideshowImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slideshowId?: boolean
    imageId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    slideshow?: boolean | SlideshowDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slideshowImage"]>

  export type SlideshowImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slideshowId?: boolean
    imageId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    slideshow?: boolean | SlideshowDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slideshowImage"]>

  export type SlideshowImageSelectScalar = {
    id?: boolean
    slideshowId?: boolean
    imageId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
  }

  export type SlideshowImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slideshowId" | "imageId" | "displayOrder" | "createdAt", ExtArgs["result"]["slideshowImage"]>
  export type SlideshowImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slideshow?: boolean | SlideshowDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type SlideshowImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slideshow?: boolean | SlideshowDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type SlideshowImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slideshow?: boolean | SlideshowDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $SlideshowImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlideshowImage"
    objects: {
      slideshow: Prisma.$SlideshowPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slideshowId: number
      imageId: number
      displayOrder: number
      createdAt: Date
    }, ExtArgs["result"]["slideshowImage"]>
    composites: {}
  }

  type SlideshowImageGetPayload<S extends boolean | null | undefined | SlideshowImageDefaultArgs> = $Result.GetResult<Prisma.$SlideshowImagePayload, S>

  type SlideshowImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlideshowImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlideshowImageCountAggregateInputType | true
    }

  export interface SlideshowImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlideshowImage'], meta: { name: 'SlideshowImage' } }
    /**
     * Find zero or one SlideshowImage that matches the filter.
     * @param {SlideshowImageFindUniqueArgs} args - Arguments to find a SlideshowImage
     * @example
     * // Get one SlideshowImage
     * const slideshowImage = await prisma.slideshowImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlideshowImageFindUniqueArgs>(args: SelectSubset<T, SlideshowImageFindUniqueArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlideshowImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlideshowImageFindUniqueOrThrowArgs} args - Arguments to find a SlideshowImage
     * @example
     * // Get one SlideshowImage
     * const slideshowImage = await prisma.slideshowImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlideshowImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SlideshowImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlideshowImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowImageFindFirstArgs} args - Arguments to find a SlideshowImage
     * @example
     * // Get one SlideshowImage
     * const slideshowImage = await prisma.slideshowImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlideshowImageFindFirstArgs>(args?: SelectSubset<T, SlideshowImageFindFirstArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlideshowImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowImageFindFirstOrThrowArgs} args - Arguments to find a SlideshowImage
     * @example
     * // Get one SlideshowImage
     * const slideshowImage = await prisma.slideshowImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlideshowImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SlideshowImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlideshowImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlideshowImages
     * const slideshowImages = await prisma.slideshowImage.findMany()
     * 
     * // Get first 10 SlideshowImages
     * const slideshowImages = await prisma.slideshowImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slideshowImageWithIdOnly = await prisma.slideshowImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlideshowImageFindManyArgs>(args?: SelectSubset<T, SlideshowImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlideshowImage.
     * @param {SlideshowImageCreateArgs} args - Arguments to create a SlideshowImage.
     * @example
     * // Create one SlideshowImage
     * const SlideshowImage = await prisma.slideshowImage.create({
     *   data: {
     *     // ... data to create a SlideshowImage
     *   }
     * })
     * 
     */
    create<T extends SlideshowImageCreateArgs>(args: SelectSubset<T, SlideshowImageCreateArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlideshowImages.
     * @param {SlideshowImageCreateManyArgs} args - Arguments to create many SlideshowImages.
     * @example
     * // Create many SlideshowImages
     * const slideshowImage = await prisma.slideshowImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlideshowImageCreateManyArgs>(args?: SelectSubset<T, SlideshowImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlideshowImages and returns the data saved in the database.
     * @param {SlideshowImageCreateManyAndReturnArgs} args - Arguments to create many SlideshowImages.
     * @example
     * // Create many SlideshowImages
     * const slideshowImage = await prisma.slideshowImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlideshowImages and only return the `id`
     * const slideshowImageWithIdOnly = await prisma.slideshowImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlideshowImageCreateManyAndReturnArgs>(args?: SelectSubset<T, SlideshowImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlideshowImage.
     * @param {SlideshowImageDeleteArgs} args - Arguments to delete one SlideshowImage.
     * @example
     * // Delete one SlideshowImage
     * const SlideshowImage = await prisma.slideshowImage.delete({
     *   where: {
     *     // ... filter to delete one SlideshowImage
     *   }
     * })
     * 
     */
    delete<T extends SlideshowImageDeleteArgs>(args: SelectSubset<T, SlideshowImageDeleteArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlideshowImage.
     * @param {SlideshowImageUpdateArgs} args - Arguments to update one SlideshowImage.
     * @example
     * // Update one SlideshowImage
     * const slideshowImage = await prisma.slideshowImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlideshowImageUpdateArgs>(args: SelectSubset<T, SlideshowImageUpdateArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlideshowImages.
     * @param {SlideshowImageDeleteManyArgs} args - Arguments to filter SlideshowImages to delete.
     * @example
     * // Delete a few SlideshowImages
     * const { count } = await prisma.slideshowImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlideshowImageDeleteManyArgs>(args?: SelectSubset<T, SlideshowImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlideshowImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlideshowImages
     * const slideshowImage = await prisma.slideshowImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlideshowImageUpdateManyArgs>(args: SelectSubset<T, SlideshowImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlideshowImages and returns the data updated in the database.
     * @param {SlideshowImageUpdateManyAndReturnArgs} args - Arguments to update many SlideshowImages.
     * @example
     * // Update many SlideshowImages
     * const slideshowImage = await prisma.slideshowImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlideshowImages and only return the `id`
     * const slideshowImageWithIdOnly = await prisma.slideshowImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SlideshowImageUpdateManyAndReturnArgs>(args: SelectSubset<T, SlideshowImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlideshowImage.
     * @param {SlideshowImageUpsertArgs} args - Arguments to update or create a SlideshowImage.
     * @example
     * // Update or create a SlideshowImage
     * const slideshowImage = await prisma.slideshowImage.upsert({
     *   create: {
     *     // ... data to create a SlideshowImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlideshowImage we want to update
     *   }
     * })
     */
    upsert<T extends SlideshowImageUpsertArgs>(args: SelectSubset<T, SlideshowImageUpsertArgs<ExtArgs>>): Prisma__SlideshowImageClient<$Result.GetResult<Prisma.$SlideshowImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlideshowImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowImageCountArgs} args - Arguments to filter SlideshowImages to count.
     * @example
     * // Count the number of SlideshowImages
     * const count = await prisma.slideshowImage.count({
     *   where: {
     *     // ... the filter for the SlideshowImages we want to count
     *   }
     * })
    **/
    count<T extends SlideshowImageCountArgs>(
      args?: Subset<T, SlideshowImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlideshowImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlideshowImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlideshowImageAggregateArgs>(args: Subset<T, SlideshowImageAggregateArgs>): Prisma.PrismaPromise<GetSlideshowImageAggregateType<T>>

    /**
     * Group by SlideshowImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideshowImageGroupByArgs} args - Group by arguments.
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
      T extends SlideshowImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlideshowImageGroupByArgs['orderBy'] }
        : { orderBy?: SlideshowImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlideshowImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlideshowImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlideshowImage model
   */
  readonly fields: SlideshowImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlideshowImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlideshowImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slideshow<T extends SlideshowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SlideshowDefaultArgs<ExtArgs>>): Prisma__SlideshowClient<$Result.GetResult<Prisma.$SlideshowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SlideshowImage model
   */
  interface SlideshowImageFieldRefs {
    readonly id: FieldRef<"SlideshowImage", 'Int'>
    readonly slideshowId: FieldRef<"SlideshowImage", 'Int'>
    readonly imageId: FieldRef<"SlideshowImage", 'Int'>
    readonly displayOrder: FieldRef<"SlideshowImage", 'Int'>
    readonly createdAt: FieldRef<"SlideshowImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlideshowImage findUnique
   */
  export type SlideshowImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * Filter, which SlideshowImage to fetch.
     */
    where: SlideshowImageWhereUniqueInput
  }

  /**
   * SlideshowImage findUniqueOrThrow
   */
  export type SlideshowImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * Filter, which SlideshowImage to fetch.
     */
    where: SlideshowImageWhereUniqueInput
  }

  /**
   * SlideshowImage findFirst
   */
  export type SlideshowImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * Filter, which SlideshowImage to fetch.
     */
    where?: SlideshowImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideshowImages to fetch.
     */
    orderBy?: SlideshowImageOrderByWithRelationInput | SlideshowImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlideshowImages.
     */
    cursor?: SlideshowImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideshowImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideshowImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlideshowImages.
     */
    distinct?: SlideshowImageScalarFieldEnum | SlideshowImageScalarFieldEnum[]
  }

  /**
   * SlideshowImage findFirstOrThrow
   */
  export type SlideshowImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * Filter, which SlideshowImage to fetch.
     */
    where?: SlideshowImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideshowImages to fetch.
     */
    orderBy?: SlideshowImageOrderByWithRelationInput | SlideshowImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlideshowImages.
     */
    cursor?: SlideshowImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideshowImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideshowImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlideshowImages.
     */
    distinct?: SlideshowImageScalarFieldEnum | SlideshowImageScalarFieldEnum[]
  }

  /**
   * SlideshowImage findMany
   */
  export type SlideshowImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * Filter, which SlideshowImages to fetch.
     */
    where?: SlideshowImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideshowImages to fetch.
     */
    orderBy?: SlideshowImageOrderByWithRelationInput | SlideshowImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlideshowImages.
     */
    cursor?: SlideshowImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideshowImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideshowImages.
     */
    skip?: number
    distinct?: SlideshowImageScalarFieldEnum | SlideshowImageScalarFieldEnum[]
  }

  /**
   * SlideshowImage create
   */
  export type SlideshowImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * The data needed to create a SlideshowImage.
     */
    data: XOR<SlideshowImageCreateInput, SlideshowImageUncheckedCreateInput>
  }

  /**
   * SlideshowImage createMany
   */
  export type SlideshowImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlideshowImages.
     */
    data: SlideshowImageCreateManyInput | SlideshowImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlideshowImage createManyAndReturn
   */
  export type SlideshowImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * The data used to create many SlideshowImages.
     */
    data: SlideshowImageCreateManyInput | SlideshowImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlideshowImage update
   */
  export type SlideshowImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * The data needed to update a SlideshowImage.
     */
    data: XOR<SlideshowImageUpdateInput, SlideshowImageUncheckedUpdateInput>
    /**
     * Choose, which SlideshowImage to update.
     */
    where: SlideshowImageWhereUniqueInput
  }

  /**
   * SlideshowImage updateMany
   */
  export type SlideshowImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlideshowImages.
     */
    data: XOR<SlideshowImageUpdateManyMutationInput, SlideshowImageUncheckedUpdateManyInput>
    /**
     * Filter which SlideshowImages to update
     */
    where?: SlideshowImageWhereInput
    /**
     * Limit how many SlideshowImages to update.
     */
    limit?: number
  }

  /**
   * SlideshowImage updateManyAndReturn
   */
  export type SlideshowImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * The data used to update SlideshowImages.
     */
    data: XOR<SlideshowImageUpdateManyMutationInput, SlideshowImageUncheckedUpdateManyInput>
    /**
     * Filter which SlideshowImages to update
     */
    where?: SlideshowImageWhereInput
    /**
     * Limit how many SlideshowImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlideshowImage upsert
   */
  export type SlideshowImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * The filter to search for the SlideshowImage to update in case it exists.
     */
    where: SlideshowImageWhereUniqueInput
    /**
     * In case the SlideshowImage found by the `where` argument doesn't exist, create a new SlideshowImage with this data.
     */
    create: XOR<SlideshowImageCreateInput, SlideshowImageUncheckedCreateInput>
    /**
     * In case the SlideshowImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlideshowImageUpdateInput, SlideshowImageUncheckedUpdateInput>
  }

  /**
   * SlideshowImage delete
   */
  export type SlideshowImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
    /**
     * Filter which SlideshowImage to delete.
     */
    where: SlideshowImageWhereUniqueInput
  }

  /**
   * SlideshowImage deleteMany
   */
  export type SlideshowImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlideshowImages to delete
     */
    where?: SlideshowImageWhereInput
    /**
     * Limit how many SlideshowImages to delete.
     */
    limit?: number
  }

  /**
   * SlideshowImage without action
   */
  export type SlideshowImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideshowImage
     */
    select?: SlideshowImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideshowImage
     */
    omit?: SlideshowImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideshowImageInclude<ExtArgs> | null
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


  export const SlideshowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlideshowScalarFieldEnum = (typeof SlideshowScalarFieldEnum)[keyof typeof SlideshowScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    src: 'src',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SlideshowImageScalarFieldEnum: {
    id: 'id',
    slideshowId: 'slideshowId',
    imageId: 'imageId',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt'
  };

  export type SlideshowImageScalarFieldEnum = (typeof SlideshowImageScalarFieldEnum)[keyof typeof SlideshowImageScalarFieldEnum]


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


  export type SlideshowWhereInput = {
    AND?: SlideshowWhereInput | SlideshowWhereInput[]
    OR?: SlideshowWhereInput[]
    NOT?: SlideshowWhereInput | SlideshowWhereInput[]
    id?: IntFilter<"Slideshow"> | number
    name?: StringFilter<"Slideshow"> | string
    createdAt?: DateTimeFilter<"Slideshow"> | Date | string
    updatedAt?: DateTimeFilter<"Slideshow"> | Date | string
    images?: SlideshowImageListRelationFilter
  }

  export type SlideshowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: SlideshowImageOrderByRelationAggregateInput
  }

  export type SlideshowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SlideshowWhereInput | SlideshowWhereInput[]
    OR?: SlideshowWhereInput[]
    NOT?: SlideshowWhereInput | SlideshowWhereInput[]
    name?: StringFilter<"Slideshow"> | string
    createdAt?: DateTimeFilter<"Slideshow"> | Date | string
    updatedAt?: DateTimeFilter<"Slideshow"> | Date | string
    images?: SlideshowImageListRelationFilter
  }, "id">

  export type SlideshowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlideshowCountOrderByAggregateInput
    _avg?: SlideshowAvgOrderByAggregateInput
    _max?: SlideshowMaxOrderByAggregateInput
    _min?: SlideshowMinOrderByAggregateInput
    _sum?: SlideshowSumOrderByAggregateInput
  }

  export type SlideshowScalarWhereWithAggregatesInput = {
    AND?: SlideshowScalarWhereWithAggregatesInput | SlideshowScalarWhereWithAggregatesInput[]
    OR?: SlideshowScalarWhereWithAggregatesInput[]
    NOT?: SlideshowScalarWhereWithAggregatesInput | SlideshowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Slideshow"> | number
    name?: StringWithAggregatesFilter<"Slideshow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Slideshow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Slideshow"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    src?: StringFilter<"Image"> | string
    category?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    slideshows?: SlideshowImageListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    slideshows?: SlideshowImageOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    src?: StringFilter<"Image"> | string
    category?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    slideshows?: SlideshowImageListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    src?: StringWithAggregatesFilter<"Image"> | string
    category?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type SlideshowImageWhereInput = {
    AND?: SlideshowImageWhereInput | SlideshowImageWhereInput[]
    OR?: SlideshowImageWhereInput[]
    NOT?: SlideshowImageWhereInput | SlideshowImageWhereInput[]
    id?: IntFilter<"SlideshowImage"> | number
    slideshowId?: IntFilter<"SlideshowImage"> | number
    imageId?: IntFilter<"SlideshowImage"> | number
    displayOrder?: IntFilter<"SlideshowImage"> | number
    createdAt?: DateTimeFilter<"SlideshowImage"> | Date | string
    slideshow?: XOR<SlideshowScalarRelationFilter, SlideshowWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type SlideshowImageOrderByWithRelationInput = {
    id?: SortOrder
    slideshowId?: SortOrder
    imageId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    slideshow?: SlideshowOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type SlideshowImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slideshowId_displayOrder?: SlideshowImageSlideshowIdDisplayOrderCompoundUniqueInput
    AND?: SlideshowImageWhereInput | SlideshowImageWhereInput[]
    OR?: SlideshowImageWhereInput[]
    NOT?: SlideshowImageWhereInput | SlideshowImageWhereInput[]
    slideshowId?: IntFilter<"SlideshowImage"> | number
    imageId?: IntFilter<"SlideshowImage"> | number
    displayOrder?: IntFilter<"SlideshowImage"> | number
    createdAt?: DateTimeFilter<"SlideshowImage"> | Date | string
    slideshow?: XOR<SlideshowScalarRelationFilter, SlideshowWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id" | "slideshowId_displayOrder">

  export type SlideshowImageOrderByWithAggregationInput = {
    id?: SortOrder
    slideshowId?: SortOrder
    imageId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    _count?: SlideshowImageCountOrderByAggregateInput
    _avg?: SlideshowImageAvgOrderByAggregateInput
    _max?: SlideshowImageMaxOrderByAggregateInput
    _min?: SlideshowImageMinOrderByAggregateInput
    _sum?: SlideshowImageSumOrderByAggregateInput
  }

  export type SlideshowImageScalarWhereWithAggregatesInput = {
    AND?: SlideshowImageScalarWhereWithAggregatesInput | SlideshowImageScalarWhereWithAggregatesInput[]
    OR?: SlideshowImageScalarWhereWithAggregatesInput[]
    NOT?: SlideshowImageScalarWhereWithAggregatesInput | SlideshowImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SlideshowImage"> | number
    slideshowId?: IntWithAggregatesFilter<"SlideshowImage"> | number
    imageId?: IntWithAggregatesFilter<"SlideshowImage"> | number
    displayOrder?: IntWithAggregatesFilter<"SlideshowImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SlideshowImage"> | Date | string
  }

  export type SlideshowCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: SlideshowImageCreateNestedManyWithoutSlideshowInput
  }

  export type SlideshowUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: SlideshowImageUncheckedCreateNestedManyWithoutSlideshowInput
  }

  export type SlideshowUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SlideshowImageUpdateManyWithoutSlideshowNestedInput
  }

  export type SlideshowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SlideshowImageUncheckedUpdateManyWithoutSlideshowNestedInput
  }

  export type SlideshowCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlideshowUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    src: string
    category: string
    createdAt?: Date | string
    slideshows?: SlideshowImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    src: string
    category: string
    createdAt?: Date | string
    slideshows?: SlideshowImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    src?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slideshows?: SlideshowImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slideshows?: SlideshowImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    src: string
    category: string
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    src?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowImageCreateInput = {
    displayOrder: number
    createdAt?: Date | string
    slideshow: SlideshowCreateNestedOneWithoutImagesInput
    image: ImageCreateNestedOneWithoutSlideshowsInput
  }

  export type SlideshowImageUncheckedCreateInput = {
    id?: number
    slideshowId: number
    imageId: number
    displayOrder: number
    createdAt?: Date | string
  }

  export type SlideshowImageUpdateInput = {
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slideshow?: SlideshowUpdateOneRequiredWithoutImagesNestedInput
    image?: ImageUpdateOneRequiredWithoutSlideshowsNestedInput
  }

  export type SlideshowImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slideshowId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowImageCreateManyInput = {
    id?: number
    slideshowId: number
    imageId: number
    displayOrder: number
    createdAt?: Date | string
  }

  export type SlideshowImageUpdateManyMutationInput = {
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slideshowId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SlideshowImageListRelationFilter = {
    every?: SlideshowImageWhereInput
    some?: SlideshowImageWhereInput
    none?: SlideshowImageWhereInput
  }

  export type SlideshowImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlideshowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlideshowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SlideshowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlideshowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlideshowSumOrderByAggregateInput = {
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

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SlideshowScalarRelationFilter = {
    is?: SlideshowWhereInput
    isNot?: SlideshowWhereInput
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type SlideshowImageSlideshowIdDisplayOrderCompoundUniqueInput = {
    slideshowId: number
    displayOrder: number
  }

  export type SlideshowImageCountOrderByAggregateInput = {
    id?: SortOrder
    slideshowId?: SortOrder
    imageId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SlideshowImageAvgOrderByAggregateInput = {
    id?: SortOrder
    slideshowId?: SortOrder
    imageId?: SortOrder
    displayOrder?: SortOrder
  }

  export type SlideshowImageMaxOrderByAggregateInput = {
    id?: SortOrder
    slideshowId?: SortOrder
    imageId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SlideshowImageMinOrderByAggregateInput = {
    id?: SortOrder
    slideshowId?: SortOrder
    imageId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SlideshowImageSumOrderByAggregateInput = {
    id?: SortOrder
    slideshowId?: SortOrder
    imageId?: SortOrder
    displayOrder?: SortOrder
  }

  export type SlideshowImageCreateNestedManyWithoutSlideshowInput = {
    create?: XOR<SlideshowImageCreateWithoutSlideshowInput, SlideshowImageUncheckedCreateWithoutSlideshowInput> | SlideshowImageCreateWithoutSlideshowInput[] | SlideshowImageUncheckedCreateWithoutSlideshowInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutSlideshowInput | SlideshowImageCreateOrConnectWithoutSlideshowInput[]
    createMany?: SlideshowImageCreateManySlideshowInputEnvelope
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
  }

  export type SlideshowImageUncheckedCreateNestedManyWithoutSlideshowInput = {
    create?: XOR<SlideshowImageCreateWithoutSlideshowInput, SlideshowImageUncheckedCreateWithoutSlideshowInput> | SlideshowImageCreateWithoutSlideshowInput[] | SlideshowImageUncheckedCreateWithoutSlideshowInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutSlideshowInput | SlideshowImageCreateOrConnectWithoutSlideshowInput[]
    createMany?: SlideshowImageCreateManySlideshowInputEnvelope
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SlideshowImageUpdateManyWithoutSlideshowNestedInput = {
    create?: XOR<SlideshowImageCreateWithoutSlideshowInput, SlideshowImageUncheckedCreateWithoutSlideshowInput> | SlideshowImageCreateWithoutSlideshowInput[] | SlideshowImageUncheckedCreateWithoutSlideshowInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutSlideshowInput | SlideshowImageCreateOrConnectWithoutSlideshowInput[]
    upsert?: SlideshowImageUpsertWithWhereUniqueWithoutSlideshowInput | SlideshowImageUpsertWithWhereUniqueWithoutSlideshowInput[]
    createMany?: SlideshowImageCreateManySlideshowInputEnvelope
    set?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    disconnect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    delete?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    update?: SlideshowImageUpdateWithWhereUniqueWithoutSlideshowInput | SlideshowImageUpdateWithWhereUniqueWithoutSlideshowInput[]
    updateMany?: SlideshowImageUpdateManyWithWhereWithoutSlideshowInput | SlideshowImageUpdateManyWithWhereWithoutSlideshowInput[]
    deleteMany?: SlideshowImageScalarWhereInput | SlideshowImageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SlideshowImageUncheckedUpdateManyWithoutSlideshowNestedInput = {
    create?: XOR<SlideshowImageCreateWithoutSlideshowInput, SlideshowImageUncheckedCreateWithoutSlideshowInput> | SlideshowImageCreateWithoutSlideshowInput[] | SlideshowImageUncheckedCreateWithoutSlideshowInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutSlideshowInput | SlideshowImageCreateOrConnectWithoutSlideshowInput[]
    upsert?: SlideshowImageUpsertWithWhereUniqueWithoutSlideshowInput | SlideshowImageUpsertWithWhereUniqueWithoutSlideshowInput[]
    createMany?: SlideshowImageCreateManySlideshowInputEnvelope
    set?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    disconnect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    delete?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    update?: SlideshowImageUpdateWithWhereUniqueWithoutSlideshowInput | SlideshowImageUpdateWithWhereUniqueWithoutSlideshowInput[]
    updateMany?: SlideshowImageUpdateManyWithWhereWithoutSlideshowInput | SlideshowImageUpdateManyWithWhereWithoutSlideshowInput[]
    deleteMany?: SlideshowImageScalarWhereInput | SlideshowImageScalarWhereInput[]
  }

  export type SlideshowImageCreateNestedManyWithoutImageInput = {
    create?: XOR<SlideshowImageCreateWithoutImageInput, SlideshowImageUncheckedCreateWithoutImageInput> | SlideshowImageCreateWithoutImageInput[] | SlideshowImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutImageInput | SlideshowImageCreateOrConnectWithoutImageInput[]
    createMany?: SlideshowImageCreateManyImageInputEnvelope
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
  }

  export type SlideshowImageUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<SlideshowImageCreateWithoutImageInput, SlideshowImageUncheckedCreateWithoutImageInput> | SlideshowImageCreateWithoutImageInput[] | SlideshowImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutImageInput | SlideshowImageCreateOrConnectWithoutImageInput[]
    createMany?: SlideshowImageCreateManyImageInputEnvelope
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
  }

  export type SlideshowImageUpdateManyWithoutImageNestedInput = {
    create?: XOR<SlideshowImageCreateWithoutImageInput, SlideshowImageUncheckedCreateWithoutImageInput> | SlideshowImageCreateWithoutImageInput[] | SlideshowImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutImageInput | SlideshowImageCreateOrConnectWithoutImageInput[]
    upsert?: SlideshowImageUpsertWithWhereUniqueWithoutImageInput | SlideshowImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: SlideshowImageCreateManyImageInputEnvelope
    set?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    disconnect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    delete?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    update?: SlideshowImageUpdateWithWhereUniqueWithoutImageInput | SlideshowImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: SlideshowImageUpdateManyWithWhereWithoutImageInput | SlideshowImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: SlideshowImageScalarWhereInput | SlideshowImageScalarWhereInput[]
  }

  export type SlideshowImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<SlideshowImageCreateWithoutImageInput, SlideshowImageUncheckedCreateWithoutImageInput> | SlideshowImageCreateWithoutImageInput[] | SlideshowImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: SlideshowImageCreateOrConnectWithoutImageInput | SlideshowImageCreateOrConnectWithoutImageInput[]
    upsert?: SlideshowImageUpsertWithWhereUniqueWithoutImageInput | SlideshowImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: SlideshowImageCreateManyImageInputEnvelope
    set?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    disconnect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    delete?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    connect?: SlideshowImageWhereUniqueInput | SlideshowImageWhereUniqueInput[]
    update?: SlideshowImageUpdateWithWhereUniqueWithoutImageInput | SlideshowImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: SlideshowImageUpdateManyWithWhereWithoutImageInput | SlideshowImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: SlideshowImageScalarWhereInput | SlideshowImageScalarWhereInput[]
  }

  export type SlideshowCreateNestedOneWithoutImagesInput = {
    create?: XOR<SlideshowCreateWithoutImagesInput, SlideshowUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SlideshowCreateOrConnectWithoutImagesInput
    connect?: SlideshowWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutSlideshowsInput = {
    create?: XOR<ImageCreateWithoutSlideshowsInput, ImageUncheckedCreateWithoutSlideshowsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutSlideshowsInput
    connect?: ImageWhereUniqueInput
  }

  export type SlideshowUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SlideshowCreateWithoutImagesInput, SlideshowUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SlideshowCreateOrConnectWithoutImagesInput
    upsert?: SlideshowUpsertWithoutImagesInput
    connect?: SlideshowWhereUniqueInput
    update?: XOR<XOR<SlideshowUpdateToOneWithWhereWithoutImagesInput, SlideshowUpdateWithoutImagesInput>, SlideshowUncheckedUpdateWithoutImagesInput>
  }

  export type ImageUpdateOneRequiredWithoutSlideshowsNestedInput = {
    create?: XOR<ImageCreateWithoutSlideshowsInput, ImageUncheckedCreateWithoutSlideshowsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutSlideshowsInput
    upsert?: ImageUpsertWithoutSlideshowsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutSlideshowsInput, ImageUpdateWithoutSlideshowsInput>, ImageUncheckedUpdateWithoutSlideshowsInput>
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

  export type SlideshowImageCreateWithoutSlideshowInput = {
    displayOrder: number
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutSlideshowsInput
  }

  export type SlideshowImageUncheckedCreateWithoutSlideshowInput = {
    id?: number
    imageId: number
    displayOrder: number
    createdAt?: Date | string
  }

  export type SlideshowImageCreateOrConnectWithoutSlideshowInput = {
    where: SlideshowImageWhereUniqueInput
    create: XOR<SlideshowImageCreateWithoutSlideshowInput, SlideshowImageUncheckedCreateWithoutSlideshowInput>
  }

  export type SlideshowImageCreateManySlideshowInputEnvelope = {
    data: SlideshowImageCreateManySlideshowInput | SlideshowImageCreateManySlideshowInput[]
    skipDuplicates?: boolean
  }

  export type SlideshowImageUpsertWithWhereUniqueWithoutSlideshowInput = {
    where: SlideshowImageWhereUniqueInput
    update: XOR<SlideshowImageUpdateWithoutSlideshowInput, SlideshowImageUncheckedUpdateWithoutSlideshowInput>
    create: XOR<SlideshowImageCreateWithoutSlideshowInput, SlideshowImageUncheckedCreateWithoutSlideshowInput>
  }

  export type SlideshowImageUpdateWithWhereUniqueWithoutSlideshowInput = {
    where: SlideshowImageWhereUniqueInput
    data: XOR<SlideshowImageUpdateWithoutSlideshowInput, SlideshowImageUncheckedUpdateWithoutSlideshowInput>
  }

  export type SlideshowImageUpdateManyWithWhereWithoutSlideshowInput = {
    where: SlideshowImageScalarWhereInput
    data: XOR<SlideshowImageUpdateManyMutationInput, SlideshowImageUncheckedUpdateManyWithoutSlideshowInput>
  }

  export type SlideshowImageScalarWhereInput = {
    AND?: SlideshowImageScalarWhereInput | SlideshowImageScalarWhereInput[]
    OR?: SlideshowImageScalarWhereInput[]
    NOT?: SlideshowImageScalarWhereInput | SlideshowImageScalarWhereInput[]
    id?: IntFilter<"SlideshowImage"> | number
    slideshowId?: IntFilter<"SlideshowImage"> | number
    imageId?: IntFilter<"SlideshowImage"> | number
    displayOrder?: IntFilter<"SlideshowImage"> | number
    createdAt?: DateTimeFilter<"SlideshowImage"> | Date | string
  }

  export type SlideshowImageCreateWithoutImageInput = {
    displayOrder: number
    createdAt?: Date | string
    slideshow: SlideshowCreateNestedOneWithoutImagesInput
  }

  export type SlideshowImageUncheckedCreateWithoutImageInput = {
    id?: number
    slideshowId: number
    displayOrder: number
    createdAt?: Date | string
  }

  export type SlideshowImageCreateOrConnectWithoutImageInput = {
    where: SlideshowImageWhereUniqueInput
    create: XOR<SlideshowImageCreateWithoutImageInput, SlideshowImageUncheckedCreateWithoutImageInput>
  }

  export type SlideshowImageCreateManyImageInputEnvelope = {
    data: SlideshowImageCreateManyImageInput | SlideshowImageCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type SlideshowImageUpsertWithWhereUniqueWithoutImageInput = {
    where: SlideshowImageWhereUniqueInput
    update: XOR<SlideshowImageUpdateWithoutImageInput, SlideshowImageUncheckedUpdateWithoutImageInput>
    create: XOR<SlideshowImageCreateWithoutImageInput, SlideshowImageUncheckedCreateWithoutImageInput>
  }

  export type SlideshowImageUpdateWithWhereUniqueWithoutImageInput = {
    where: SlideshowImageWhereUniqueInput
    data: XOR<SlideshowImageUpdateWithoutImageInput, SlideshowImageUncheckedUpdateWithoutImageInput>
  }

  export type SlideshowImageUpdateManyWithWhereWithoutImageInput = {
    where: SlideshowImageScalarWhereInput
    data: XOR<SlideshowImageUpdateManyMutationInput, SlideshowImageUncheckedUpdateManyWithoutImageInput>
  }

  export type SlideshowCreateWithoutImagesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlideshowUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlideshowCreateOrConnectWithoutImagesInput = {
    where: SlideshowWhereUniqueInput
    create: XOR<SlideshowCreateWithoutImagesInput, SlideshowUncheckedCreateWithoutImagesInput>
  }

  export type ImageCreateWithoutSlideshowsInput = {
    src: string
    category: string
    createdAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutSlideshowsInput = {
    id?: number
    src: string
    category: string
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutSlideshowsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSlideshowsInput, ImageUncheckedCreateWithoutSlideshowsInput>
  }

  export type SlideshowUpsertWithoutImagesInput = {
    update: XOR<SlideshowUpdateWithoutImagesInput, SlideshowUncheckedUpdateWithoutImagesInput>
    create: XOR<SlideshowCreateWithoutImagesInput, SlideshowUncheckedCreateWithoutImagesInput>
    where?: SlideshowWhereInput
  }

  export type SlideshowUpdateToOneWithWhereWithoutImagesInput = {
    where?: SlideshowWhereInput
    data: XOR<SlideshowUpdateWithoutImagesInput, SlideshowUncheckedUpdateWithoutImagesInput>
  }

  export type SlideshowUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpsertWithoutSlideshowsInput = {
    update: XOR<ImageUpdateWithoutSlideshowsInput, ImageUncheckedUpdateWithoutSlideshowsInput>
    create: XOR<ImageCreateWithoutSlideshowsInput, ImageUncheckedCreateWithoutSlideshowsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutSlideshowsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutSlideshowsInput, ImageUncheckedUpdateWithoutSlideshowsInput>
  }

  export type ImageUpdateWithoutSlideshowsInput = {
    src?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutSlideshowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowImageCreateManySlideshowInput = {
    id?: number
    imageId: number
    displayOrder: number
    createdAt?: Date | string
  }

  export type SlideshowImageUpdateWithoutSlideshowInput = {
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutSlideshowsNestedInput
  }

  export type SlideshowImageUncheckedUpdateWithoutSlideshowInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowImageUncheckedUpdateManyWithoutSlideshowInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowImageCreateManyImageInput = {
    id?: number
    slideshowId: number
    displayOrder: number
    createdAt?: Date | string
  }

  export type SlideshowImageUpdateWithoutImageInput = {
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slideshow?: SlideshowUpdateOneRequiredWithoutImagesNestedInput
  }

  export type SlideshowImageUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    slideshowId?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideshowImageUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    slideshowId?: IntFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
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