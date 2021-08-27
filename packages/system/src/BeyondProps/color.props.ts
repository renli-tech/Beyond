import { ColorName, getColor, isOfTypeColor } from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { Token } from "./types";

const colorResolver = () => (prop: ColorName | Property.Color): SystemProps => {
  const finalValue = isOfTypeColor(prop) ? getColor(prop as ColorName) : prop;
  return {
    backgroundColor: finalValue
  };
};

export const colorPropsResolver = {
  textColor: colorResolver(),
  fill: colorResolver()
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
  stroke?: Token<ColorName | Property.Color>;
}
