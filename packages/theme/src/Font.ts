/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * Credits:
 * Thanks to the guys at https://github.com/tailwindlabs/tailwindcss for their awesome values
 */
export const fontFamily = {
  sans: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ],
  serif: [
    "ui-serif",
    "Georgia",
    "Cambria",
    '"Times New Roman"',
    "Times",
    "serif"
  ],
  mono: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace"
  ]
} as const;

export const fontSize = {
  xs: ["0.75rem", { lineHeight: "1rem" }],
  sm: ["0.875rem", { lineHeight: "1.25rem" }],
  base: ["1rem", { lineHeight: "1.5rem" }],
  lg: ["1.125rem", { lineHeight: "1.75rem" }],
  xl: ["1.25rem", { lineHeight: "1.75rem" }],
  "2xl": ["1.5rem", { lineHeight: "2rem" }],
  "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
  "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
  "5xl": ["3rem", { lineHeight: "1" }],
  "6xl": ["3.75rem", { lineHeight: "1" }],
  "7xl": ["4.5rem", { lineHeight: "1" }],
  "8xl": ["6rem", { lineHeight: "1" }],
  "9xl": ["8rem", { lineHeight: "1" }]
} as const;

export const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
} as const;

export type FontFamilyValue = keyof typeof fontFamily;
export type FontSizeValue = keyof typeof fontSize;
export type FontWeightValue = keyof typeof fontWeight;

export type FontSizeFunction = (
  size: FontSizeValue
) => { fontSize: string; lineHeight: string };

export type SizeFunction = (
  size: FontSizeValue
) => {
  width: string;
  height: string;
};
export const getFontFamily = (fam: FontFamilyValue): string => {
  return fontFamily[fam].toString();
};

export const getFontSize: FontSizeFunction = (size: FontSizeValue) => {
  const sz = fontSize[size];

  return {
    fontSize: sz[0],
    lineHeight: sz[1].lineHeight
  };
};

export const getSize: SizeFunction = (size: FontSizeValue) => {
  const sz = fontSize[size];

  return {
    width: sz[0],
    height: sz[0]
  };
};

export const getFontWeight = (weight: FontWeightValue) => {
  return fontWeight[weight];
};
