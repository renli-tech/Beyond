import { ColorName, defaultTheme } from "@beyond-ui/theme";
import { SystemProps } from ".";
import { Token } from "./types";

export const ringPropsResolvers = {
  ring: (prop: string | number, props: SystemProps): SystemProps => {
    const boxShadow = `${
      props.ringInset ? "inset" : ""
    } 0px 0px 0px ${prop}px ${props.ringColor ||
      defaultTheme?.defaults?.ring?.color}`;
    return {
      boxShadow: boxShadow
    };
  }
};
export interface RingProps {
  /**
   * Creates outline rings with CSS `box-shadow` property
   */
  ring?: Token<string | number>;
  /**
   * The color of the outline ring
   */
  ringColor?: Token<ColorName | string>;
  ringInset?: Token<boolean>;
}
