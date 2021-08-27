import { Theme } from "@beyond-ui/theme";

export type Token<T> = T | ((theme: Theme) => T);
