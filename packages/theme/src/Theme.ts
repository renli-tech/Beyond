export type Theme = {
  colors?: {
    [key: string]: unknown;
  };
  spacing?: {
    [key: string]: unknown;
  };
};

export type ThemeType = keyof Theme;
