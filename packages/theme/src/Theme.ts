export type BaseTheme = {
  [key: string]: unknown;
};

export type Theme = BaseTheme & {
  colors?: {
    [key: string]: unknown;
  };
  spacing?: {
    [key: string]: unknown;
  };
};
