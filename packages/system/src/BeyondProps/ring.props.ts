import {
  ColorName,
  defaultTheme,
  Theme,
  colors,
  extractColor
} from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { merge } from "@beyond-ui/utils";
import { Token } from "./types";

export const ringPropsResolvers = {
  ring: (
    prop: string | number,
    props: SystemProps,
    theme: Theme
  ): SystemProps => {
    const finalValue = extractColor(
      props.ringColor || defaultTheme?.defaults?.ring?.color,
      merge(colors, theme?.colors || {})
    );
    const boxShadow = `${
      props.ringInset ? "inset" : ""
    } 0px 0px 0px ${prop}px ${finalValue}`;
    return {
      boxShadow: boxShadow
    };
  },
  ringColor: "ringColor",
  ringInset: "ringInset"
};
export interface RingProps {
  /**
   * Creates outline rings with CSS `box-shadow` property
   */
  ring?: Token<string | number>;
  /**
   * The color of the outline ring
   */
  ringColor?: Token<ColorName | Property.Color>;
  ringInset?: Token<boolean>;
}
