/* eslint-disable @typescript-eslint/no-explicit-any */
export const rotate = {
  "-180": "-180deg",
  "-90": "-90deg",
  "-45": "-45deg",
  "-12": "-12deg",
  "-6": "-6deg",
  "-3": "-3deg",
  "-2": "-2deg",
  "-1": "-1deg",
  0: "0deg",
  1: "1deg",
  2: "2deg",
  3: "3deg",
  6: "6deg",
  12: "12deg",
  45: "45deg",
  90: "90deg",
  180: "180deg"
} as const;

export const skew = {
  "-12": "-12deg",
  "-6": "-6deg",
  "-3": "-3deg",
  "-2": "-2deg",
  "-1": "-1deg",
  0: "0deg",
  1: "1deg",
  2: "2deg",
  3: "3deg",
  6: "6deg",
  12: "12deg"
} as const;

export const transformOrigin = {
  center: "center",
  top: "top",
  "top-right": "top right",
  right: "right",
  "bottom-right": "bottom right",
  bottom: "bottom",
  "bottom-left": "bottom left",
  left: "left",
  "top-left": "top left"
} as const;

export type TransformOriginValue = keyof typeof transformOrigin;

export type SkewValue = keyof typeof skew;

export type RotateValue = keyof typeof rotate;

type SkewFunction = (name: SkewValue) => string;

export const getSkew: SkewFunction = name => {
  return skew[name];
};

type RotateFunction = (name: RotateValue) => string;

export const getRotate: RotateFunction = name => {
  return rotate[name];
};

type TransformOriginFunction = (name: TransformOriginValue) => string;

export const getTransformOrigin: TransformOriginFunction = name => {
  return transformOrigin[name];
};

export function isOfTypeRotateValue<T extends RotateValue = RotateValue>(
  k: any
): k is T {
  return Object.keys(rotate).includes(k);
}
export function isOfTypeSkewValue<T extends SkewValue = SkewValue>(
  k: any
): k is T {
  return Object.keys(skew).includes(k);
}
export function isOfTypeTransformOriginValue<
  T extends TransformOriginValue = TransformOriginValue
>(k: any): k is T {
  return Object.keys(transformOrigin).includes(k);
}
