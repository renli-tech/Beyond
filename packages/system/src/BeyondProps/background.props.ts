import { ColorName, Theme, extractColor, colors } from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { merge } from "@beyond-ui/utils";
import { Token } from "./types";

const backgroundColorResolver = () => (
  prop: ColorName | Property.Color,
  _props: SystemProps,
  theme?: Theme
): SystemProps => {
  const finalValue = extractColor(prop, merge(colors, theme?.colors || {}));
  return {
    backgroundColor: finalValue
  };
};

const backgroundResolver = () => (
  prop: ColorName | Property.Color,
  _props: SystemProps,
  theme?: Theme
): SystemProps => {
  const finalValue = extractColor(prop, merge(colors, theme?.colors || {}));
  return {
    background: finalValue
  };
};

/***
 *
 * used to resolve custom css properties
 */

export const backgroundPropsResolvers = {
  bg: backgroundResolver(),
  background: backgroundResolver(),
  bgcolor: backgroundColorResolver(),
  backgroundColor: backgroundColorResolver(),
  bgClip: "backgroundClip",
  backgroundClip: "backgroundClip",
  backgroundImage: "backgroundImage",
  bgImage: "backgroundImage",
  backgroundSize: "backgroundSize",
  bgSize: "backgroundSize",
  bgPos: "backgroundPosition",
  backgroundPosition: "backgroundPosition",
  bgPosition: "backgroundPosition",
  bgRepeat: "backgroundRepeat",
  backgroundRepeat: "backgroundRepeat",
  bgAttachment: "backgroundAttachment",
  backgroundAttachment: "backgroundAttachment"
};

export interface BackgroundProps {
  /**
   * The CSS `background` property
   */
  bg?: Property.Background;
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
  background?: Property.Background;
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
