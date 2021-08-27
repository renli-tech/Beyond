/* eslint-disable @typescript-eslint/no-explicit-any */
export type Theme = {
  colors?: {
    [key: string]: any;
  };
  spacing?: {
    [key: string]: any;
  };
  defaults?: {
    [key: string]: any;
  };
};

export type ThemeType = keyof Theme;
