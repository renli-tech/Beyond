/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * Credits:
 * Thanks to the guys at https://github.com/tailwindlabs/tailwindcss for their awesome values
 */

export const scale = {
  0: "0",
  50: ".5",
  75: ".75",
  90: ".9",
  95: ".95",
  100: "1",
  105: "1.05",
  110: "1.1",
  125: "1.25",
  150: "1.5"
} as const;

export const width = {
  auto: "auto",
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  full: "100%",
  screen: "100vw",
  min: "min-content",
  max: "max-content"
} as const;

export const height = {
  auto: "auto",
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  full: "100%",
  screen: "100vh"
};

export type Sizing = "xs" | "sm" | "md" | "base" | "lg" | "xl" | "2xl";

export type ScaleValue = keyof typeof scale;
export type WidthValue = keyof typeof width;
export type HeightValue = keyof typeof height;

export const getScale = (s: ScaleValue) => {
  return scale[s];
};

export const getWidth = (w: WidthValue) => {
  return width[w];
};

export const getHeight = (h: HeightValue) => {
  return height[h];
};
