import { ColorName, RoundedValues } from "@beyond/theme";
import { Property } from "csstype";

export interface BorderProps {
  /**
   * The CSS `border` property
   */
  border?: Property.Border;
  /**
   * The CSS `border-width` property
   */
  borderWidth?: Property.BorderWidth;
  /**
   * The CSS `border-style` property
   */
  borderStyle?: Property.BorderStyle;
  /**
   * The CSS `border-color` property
   */
  borderColor?: ColorName | string;
  /**
   * The CSS `border-radius` property
   */
  borderRadius?: Property.BorderRadius;
  /**
   * The CSS `border-radius` property
   */
  rounded?: RoundedValues;
  /**
   * The CSS `border-top` property
   */
  borderTop?: Property.BorderTop;
  /**
   * The CSS `border-top-width` property
   */
  borderTopWidth?: Property.BorderTopWidth;
  /**
   * The CSS `border-bottom-width` property
   */
  borderBottomWidth?: Property.BorderBottomWidth;
  /**
   * The CSS `border-left-width` property
   */
  borderLeftWidth?: Property.BorderLeftWidth;
  /**
   * The CSS `border-right-width` property
   */
  borderRightWidth?: Property.BorderRightWidth;
  /**
   * The CSS `border-top-style` property
   */
  borderTopStyle?: Property.BorderTopStyle;
  /**
   * The CSS `border-bottom-style` property
   */
  borderBottomStyle?: Property.BorderBottomStyle;
  /**
   * The CSS `border-left-style` property
   */
  borderLeftStyle?: Property.BorderLeftStyle;
  /**
   * The CSS `border-right-styles` property
   */
  borderRightStyle?: Property.BorderRightStyle;
  /**
   * The CSS `border-top-color` property
   */
  borderTopColor?: Property.BorderTopColor;
  /**
   * The CSS `border-bottom-color` property
   */
  borderBottomColor?: Property.BorderBottomColor;
  /**
   * The CSS `border-left-color` property
   */
  borderLeftColor?: Property.BorderLeftColor;
  /**
   * The CSS `border-right-color` property
   */
  borderRightColor?: Property.BorderRightColor;
  /**
   * The CSS `border-right` property
   */
  borderRight?: Property.BorderRight;
  /**
   * The CSS `border-bottom` property
   */
  borderBottom?: Property.BorderBottom;

  /**
   * The CSS `border-left` property
   */
  borderLeft?: Property.BorderLeft;
  /**
   * The CSS `border-top-radius` property
   */
  borderTopRadius?: Property.BorderRadius;
  /**
   * The CSS `border-top-left-radius` property and `border-top-right-radius`
   */
  roundedTop?: RoundedValues;
  /**
   * The CSS `border-right-radius` property
   */
  borderRightRadius?: Property.BorderRadius;
  /**
   * The CSS `border-top-right-radius` property and `border-bottom-right-radius`
   */
  roundedRight?: RoundedValues;
  /**
   * The CSS `border-bottom-radius` property
   */
  borderBottomRadius?: Property.BorderRadius;
  /**
   * The CSS `border-left-radius` property
   */
  borderLeftRadius?: Property.BorderRadius;
  /**
   * The CSS `border-top-left-radius` property
   */
  borderTopLeftRadius?: Property.BorderRadius;
  /**
   * The CSS `border-top-left-radius` property
   */
  roundedTopLeft?: RoundedValues;
  /**
   * The CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: Property.BorderRadius;
  borderTopEndRadius?: Property.BorderRadius;
  borderStartEndRadius?: Property.BorderStartEndRadius;
  /**
   * The CSS `border-top-right-radius` property
   */
  roundedTopRight?: RoundedValues;
  /**
   * The CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: Property.BorderRadius;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: Property.BorderRadius;
  borderBottomEndRadius?: Property.BorderRadius;
  borderEndEndRadius?: Property.BorderEndEndRadius;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  roundedBottomRight?: RoundedValues;
  /**
   * The CSS `border-right` and `border-left` property
   */
  borderHorizontal?: Property.Border;
  /**
   * The CSS `border-top` and `border-bottom` property
   */
  borderVertical?: Property.Border;
  borderBlock?: Property.BorderBlock;
}
