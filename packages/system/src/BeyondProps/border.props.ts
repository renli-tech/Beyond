import {
  ColorName,
  RoundedValues,
  getRadius,
  Theme,
  extractColor,
  colors
} from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { merge } from "@beyond-ui/utils";
import { Token } from "./types";

const roundedResolver = (propVal: keyof BorderProps) => (
  prop: RoundedValues
): SystemProps => {
  const finalValue = getRadius(prop);
  return {
    [propVal]: finalValue
  };
};

const borderColorResolver = (propVal: keyof BorderProps) => (
  prop: ColorName | Property.Color,
  _props: SystemProps,
  theme?: Theme
): SystemProps => {
  const finalValue = extractColor(prop, merge(colors, theme?.colors || {}));
  return {
    [propVal]: finalValue
  };
};

export const borderPropsResolvers = {
  border: "border",
  borderWidth: "borderWidth",
  borderStyle: "borderStyle",
  borderColor: borderColorResolver("borderColor"),
  borderRadius: "borderRadius",
  rounded: roundedResolver("rounded"),
  borderTop: "borderTop",
  borderTopWidth: "borderTopWidth",
  borderBottomWidth: "borderBottomWidth",
  borderLeftWidth: "borderLeftWidth",
  borderRightWidth: "borderRightWidth",
  borderTopStyle: "borderTopStyle",
  borderBottomStyle: "borderBottomStyle",
  borderLeftStyle: "borderLeftStyle",
  borderRightStyle: "borderRightStyle",
  borderTopColor: borderColorResolver("borderTopColor"),
  borderBottomColor: borderColorResolver("borderBottomColor"),
  borderLeftColor: borderColorResolver("borderLeftColor"),
  borderRightColor: borderColorResolver("borderRightColor"),
  borderRight: "borderRight",
  borderBottom: "borderbottom",
  borderLeft: "borderLeft",
  borderTopRadius: "borderTopRadius",
  borderRightRadius: "borderRightRadius",
  borderBottomRadius: "borderBottomRadius",
  borderLeftRadius: "borderLeftRadius",
  borderTopLeftRadius: "borderTopLeftRadius",
  borderTopRightRadius: "borderTopRightRadius",
  borderBottomLeftRadius: "borderBottomLeftRadius",
  borderBottomRightRadius: "borderBottomRightRadius"
};
export interface BorderProps {
  /**
   * The CSS `border` property
   */
  border?: Token<Property.Border>;
  /**
   * The CSS `border-width` property
   */
  borderWidth?: Token<Property.BorderWidth>;
  /**
   * The CSS `border-style` property
   */
  borderStyle?: Token<Property.BorderStyle>;
  /**
   * The CSS `border-color` property
   */
  borderColor?: Token<Token<ColorName | string>>;
  /**
   * The CSS `border-radius` property
   */
  borderRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-radius` property
   */
  rounded?: Token<RoundedValues>;
  /**
   * The CSS `border-top` property
   */
  borderTop?: Token<Property.BorderTop>;
  /**
   * The CSS `border-top-width` property
   */
  borderTopWidth?: Token<Property.BorderTopWidth>;
  /**
   * The CSS `border-bottom-width` property
   */
  borderBottomWidth?: Token<Property.BorderBottomWidth>;
  /**
   * The CSS `border-left-width` property
   */
  borderLeftWidth?: Token<Property.BorderLeftWidth>;
  /**
   * The CSS `border-right-width` property
   */
  borderRightWidth?: Token<Property.BorderRightWidth>;
  /**
   * The CSS `border-top-style` property
   */
  borderTopStyle?: Token<Property.BorderTopStyle>;
  /**
   * The CSS `border-bottom-style` property
   */
  borderBottomStyle?: Token<Property.BorderBottomStyle>;
  /**
   * The CSS `border-left-style` property
   */
  borderLeftStyle?: Token<Property.BorderLeftStyle>;
  /**
   * The CSS `border-right-styles` property
   */
  borderRightStyle?: Token<Property.BorderRightStyle>;
  /**
   * The CSS `border-top-color` property
   */
  borderTopColor?: Token<Property.BorderTopColor>;
  /**
   * The CSS `border-bottom-color` property
   */
  borderBottomColor?: Token<Property.BorderBottomColor>;
  /**
   * The CSS `border-left-color` property
   */
  borderLeftColor?: Token<Property.BorderLeftColor>;
  /**
   * The CSS `border-right-color` property
   */
  borderRightColor?: Token<Property.BorderRightColor>;
  /**
   * The CSS `border-right` property
   */
  borderRight?: Token<Property.BorderRight>;
  /**
   * The CSS `border-bottom` property
   */
  borderBottom?: Token<Property.BorderBottom>;

  /**
   * The CSS `border-left` property
   */
  borderLeft?: Token<Property.BorderLeft>;
  /**
   * The CSS `border-top-radius` property
   */
  borderTopRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-right-radius` property
   */
  borderRightRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-bottom-radius` property
   */
  borderBottomRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-left-radius` property
   */
  borderLeftRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-top-left-radius` property
   */
  borderTopLeftRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: Token<Property.BorderRadius>;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: Token<Property.BorderRadius>;
}
