import { ColorName, getColor, isOfTypeColor } from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { Token } from "./types";

const backgroundColorResolver = () => (
  prop: ColorName | Property.Color
): SystemProps => {
  const finalValue = isOfTypeColor(prop) ? getColor(prop as ColorName) : prop;
  return {
    backgroundColor: finalValue
  };
};

/***
 *
 * used to resolve custom css properties
 */

export const backgroundPropsResolvers = {
  bg: backgroundColorResolver(),
  bgcolor: backgroundColorResolver(),
  bgPosition: "backgroundPosition",
  bgPos: "backgroundPosition",
  bgRepeat: "backgroundRepeat",
  bgSize: "backgroundSize",
  bgImage: "backgroundSize",
  bgClip: "backgroundClip"
};

export interface BackgroundProps {
  /**
   * The CSS `background` property
   */
  bg?: Token<ColorName | Property.Color>;
  /**
   * The CSS `background-clip` property
   */
  bgClip?: Token<Property.BackgroundClip>;
  /**
   * The CSS `background-clip` property
   */
  backgroundClip?: Token<Property.BackgroundClip>;
  /**
   * The CSS `background` property
   */
  background?: Token<ColorName | Property.Color>;
  /**
   * The CSS `background-color` property
   */
  bgcolor?: Token<ColorName | Property.Color>;
  /**
   * The CSS `background-color` property
   */
  backgroundColor?: Token<ColorName | Property.Color>;
  /**
   * The CSS `background-image` property
   */
  backgroundImage?: Token<Property.BackgroundImage>;
  /**
   * The CSS `background-size` property
   */
  backgroundSize?: Token<Property.BackgroundSize>;
  /**
   * The CSS `background-position` property
   */
  bgPos?: Token<Property.BackgroundPosition>;
  /**
   * The CSS `background-position` property
   */
  backgroundPosition?: Token<Property.BackgroundPosition>;
  /**
   * The CSS `background-image` property
   */
  bgImage?: Token<Property.BackgroundImage>;
  /**
   * The CSS `background-repeat` property
   */
  bgRepeat?: Token<Property.BackgroundRepeat>;
  /**
   * The CSS `background-repeat` property
   */
  backgroundRepeat?: Token<Property.BackgroundRepeat>;
  /**
   * The CSS `background-size` property
   */
  bgSize?: Token<Property.BackgroundSize>;
  /**
   * The CSS `background-attachment` property
   */
  bgAttachment?: Token<Property.BackgroundAttachment>;
  /**
   * The CSS `background-attachment` property
   */
  backgroundAttachment?: Token<Property.BackgroundAttachment>;
  /**
   * The CSS `background-position` property
   */
  bgPosition?: Token<Property.BackgroundPosition>;
}
