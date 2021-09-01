import { ColorName, extractColor, colors, Theme } from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { merge } from "@beyond-ui/utils";
import { Token } from "./types";

const colorResolver = () => (
  prop: ColorName | Property.Color,
  _props: SystemProps,
  theme?: Theme
): SystemProps => {
  const finalValue = extractColor(prop, merge(colors, theme?.colors || {}));
  return {
    color: finalValue
  };
};

export const colorPropsResolver = {
  textColor: colorResolver(),
  fill: colorResolver(),
  color: colorResolver()
};
export interface ColorProps {
  /**
   * The CSS `color` property
   */
  color?: Token<ColorName | Property.Color>;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: Token<ColorName | Property.Color>;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: Token<ColorName | Property.Stroke>;
}
