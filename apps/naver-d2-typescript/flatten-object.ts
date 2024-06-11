function flattenObject<T extends object>(obj: T, result: any = {}): Roll<FlattendObject<T>> {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      // @ts-ignore
      flattenObject(obj[key], result);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

const ret = flattenObject({
  x: 2,
  y: "bb",
  z: ["hi"],
  a: {
    b: {
      c: null,
    },
    d: undefined,
  },
  h: {
    hh: {
      hhh: [1, 2, 3],
    },
  },
});

console.log("ret", ret);

type SimpleFlattenObject<T extends object> = {
  [K in FilterPrimitiveKeys<T, keyof T>]: T[K];
};

type FilterPrimitiveKeys<T, K> = K extends keyof T
  ? T[K] extends object
    ? T[K] extends unknown[]
      ? K
      : never
    : K
  : never;

type NestedObject<T extends object> = {
  [K in FilterNestedKeys<T, keyof T>]: T[K];
};

type FilterNestedKeys<T, K> = K extends keyof T
  ? T[K] extends object
    ? T[K] extends unknown[]
      ? never
      : K
    : never
  : never;

type Values<T extends object> = T[keyof T];
type UnwrappedObject<T extends object> = ToIntersection<RecursionHelper<Values<NestedObject<T>>>>;

type RecursionHelper<T> = T extends object ? FlattendObject<T> : never;

type ToIntersection<T> = (T extends any ? (_: T) => void : never) extends (_: infer S) => void
  ? S
  : never;

type FlattendObject<T extends object> = SimpleFlattenObject<T> & UnwrappedObject<T>;

type X = Roll<
  FlattendObject<{
    x: number;
    y: {
      z: string;
    };
    a: null;
    b: [1];
    h: {
      hh: {
        hhh: 3;
      };
    };
  }>
>;

type Roll<T> = {
  [K in keyof T]: T[K];
} & {};
