import { SystemProps } from "./index";
import { breakpoints } from "@beyond-ui/theme";
import { Token } from "./types";

export const mediaQueriesPropsResolver = {
  sm: (prop: SystemProps | {}): SystemProps => {
    const key = `@media (min-width: ${breakpoints["sm"]})`;
    return {
      [key]: prop
    };
  },
  md: (prop: SystemProps | {}): SystemProps => {
    const key = `@media (min-width: ${breakpoints["md"]})`;
    return {
      [key]: prop
    };
  },
  lg: (prop: SystemProps | {}): SystemProps => {
    const key = `@media (min-width: ${breakpoints["lg"]})`;
    return {
      [key]: prop
    };
  },
  xl: (prop: SystemProps | {}): SystemProps => {
    const key = `@media (min-width: ${breakpoints["xl"]})`;
    return {
      [key]: prop
    };
  },
  _2xl: (prop: SystemProps | {}): SystemProps => {
    const key = `@media (min-width: ${breakpoints["2xl"]})`;
    return {
      [key]: prop
    };
  },
  print: (prop: SystemProps | {}): SystemProps => {
    const key = `@media print${""}`;
    return {
      [key]: prop
    };
  },
  portrait: (prop: SystemProps | {}): SystemProps => {
    const key = `@media (orientation: portrait)${""}`;
    return {
      [key]: prop
    };
  },
  landscape: (prop: SystemProps | {}): SystemProps => {
    const key = `@media (orientation: landscape)${""}`;
    return {
      [key]: prop
    };
  }
};

export interface MediaQueriesProps {
  /**
   * @media (min-width: 640px)
   */
  sm?: Token<SystemProps | {}>;
  /**
   * @media (min-width: 768px)
   */
  md?: Token<SystemProps | {}>;
  /**
   * @media (min-width: 1024px)
   */
  lg?: Token<SystemProps | {}>;
  /**
   * @media (min-width: 1280px)
   */
  xl?: Token<SystemProps | {}>;
  /**
   * `@media (min-width: 1536px)
   */
  _2xl?: Token<SystemProps | {}>;
  /**
   * `@media print`
   */
  print?: Token<SystemProps | {}>;
  /**
   * `@media (orientation : portrait)`
   */
  portrait?: Token<SystemProps | {}>;
  /**
   * `@media (orientation : portrait)`
   */
  landscape?: Token<SystemProps | {}>;
}
