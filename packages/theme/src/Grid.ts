/**
 * Credits:
 * Thanks to the guys at https://github.com/tailwindlabs/tailwindcss for their awesome values
 */

export const gridAutoColumns = {
  auto: "auto",
  min: "min-content",
  max: "max-content",
  fr: "minmax(0, 1fr)"
} as const;

export const gridAutoRows = {
  auto: "auto",
  min: "min-content",
  max: "max-content",
  fr: "minmax(0, 1fr)"
} as const;

export const gridColumn = {
  auto: "auto",
  "span-1": "span 1 / span 1",
  "span-2": "span 2 / span 2",
  "span-3": "span 3 / span 3",
  "span-4": "span 4 / span 4",
  "span-5": "span 5 / span 5",
  "span-6": "span 6 / span 6",
  "span-7": "span 7 / span 7",
  "span-8": "span 8 / span 8",
  "span-9": "span 9 / span 9",
  "span-10": "span 10 / span 10",
  "span-11": "span 11 / span 11",
  "span-12": "span 12 / span 12",
  "span-full": "1 / -1"
} as const;

export const gridColumnEnd = {
  auto: "auto",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "11",
  12: "12",
  13: "13"
} as const;

export const gridColumnStart = {
  auto: "auto",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "11",
  12: "12",
  13: "13"
} as const;

export const gridRow = {
  auto: "auto",
  "span-1": "span 1 / span 1",
  "span-2": "span 2 / span 2",
  "span-3": "span 3 / span 3",
  "span-4": "span 4 / span 4",
  "span-5": "span 5 / span 5",
  "span-6": "span 6 / span 6",
  "span-full": "1 / -1"
} as const;

export const gridRowStart = {
  auto: "auto",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7"
} as const;

export const gridRowEnd = {
  auto: "auto",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7"
} as const;

export const gridTemplateColumns = {
  none: "none",
  1: "repeat(1, minmax(0, 1fr))",
  2: "repeat(2, minmax(0, 1fr))",
  3: "repeat(3, minmax(0, 1fr))",
  4: "repeat(4, minmax(0, 1fr))",
  5: "repeat(5, minmax(0, 1fr))",
  6: "repeat(6, minmax(0, 1fr))",
  7: "repeat(7, minmax(0, 1fr))",
  8: "repeat(8, minmax(0, 1fr))",
  9: "repeat(9, minmax(0, 1fr))",
  10: "repeat(10, minmax(0, 1fr))",
  11: "repeat(11, minmax(0, 1fr))",
  12: "repeat(12, minmax(0, 1fr))"
} as const;

export const gridTemplateRows = {
  none: "none",
  1: "repeat(1, minmax(0, 1fr))",
  2: "repeat(2, minmax(0, 1fr))",
  3: "repeat(3, minmax(0, 1fr))",
  4: "repeat(4, minmax(0, 1fr))",
  5: "repeat(5, minmax(0, 1fr))",
  6: "repeat(6, minmax(0, 1fr))"
} as const;

export type GridAutoColumns = keyof typeof gridAutoColumns;
export type GridAutoRows = keyof typeof gridAutoRows;
export type GridColumn = keyof typeof gridColumn;
export type GridColumnEnd = keyof typeof gridColumnEnd;
export type GridColumnStart = keyof typeof gridColumnStart;
export type GridRow = keyof typeof gridRow;
export type GridRowStart = keyof typeof gridRowStart;
export type GridRowEnd = keyof typeof gridRowEnd;
export type GridTemplateColumns = keyof typeof gridTemplateColumns;
export type GridTemplateRows = keyof typeof gridTemplateRows;
