import {
  HeightValue,
  WidthValue,
  isOfTypeWidthValue,
  isOfTypeHeightValue,
  getWidth,
  getHeight
} from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { Token } from "./types";

const widthResolver = (prop: WidthValue | Property.Width): SystemProps => {
  const finalValue = isOfTypeWidthValue(prop)
    ? getWidth(prop as WidthValue)
    : prop;
  return {
    width: finalValue
  };
};

const heightResolver = (prop: HeightValue | Property.Height): SystemProps => {
  const finalValue = isOfTypeHeightValue(prop)
    ? getHeight(prop as HeightValue)
    : prop;
  return {
    height: finalValue
  };
};

export const layoutPropsResolver = {
  w: widthResolver,
  width: widthResolver,
  maxWidth: widthResolver,
  minWidth: widthResolver,
  h: heightResolver,
  maxHeight: heightResolver,
  minHeight: heightResolver,
  height: heightResolver,
  boxSize: (prop: WidthValue | Property.Width): SystemProps => {
    // using the width values for both height and width to prevent conflict
    return {
      height: widthResolver(prop).width,
      width: widthResolver(prop).width
    };
  },
  display: "display",
  verticalAlign: "verticalDisplay",
  overflow: "overflow",
  overflowX: "overflowX",
  overflowY: "overflowY",
  boxSizing: "boxSizing",
  boxDecorationBreak: "boxDecorationBreak",
  float: "float",
  objectFit: "objectFit",
  objectPosition: "objectPosition",
  overscrollBehavior: "overscrollBehavior",
  overscroll: "overscrollBehavior",
  overscrollBehaviorX: "overscrollBehaviorX",
  overscrollX: "overscrollBehaviorX",
  overscrollBehaviorY: "overscrollBehaviorY",
  overscrollY: "overscrollBehaviorY",
  visibility: "visibility",
  isolation: "isolation"
};

export interface LayoutProps {
  /**
   * The CSS `display` property
   */
  display?: Token<Property.Display>;
  /**
   * The CSS `width` property
   */
  w?: Token<WidthValue | Property.Width>;
  /**
   * The CSS `width` property
   */
  width?: Token<WidthValue | Property.Width>;
  /**
   * The CSS `width` and `height` property
   */
  boxSize?: Token<WidthValue | number>;
  /**
   * The CSS `max-width` property
   */
  maxWidth?: Token<WidthValue | number>;
  /**
   * The CSS `min-width` property
   */
  minWidth?: Token<WidthValue | number>;
  /**
   * The CSS `height` property
   */
  h?: Token<HeightValue | Property.Height>;
  /**
   * The CSS `height` property
   */
  height?: Token<HeightValue | Property.Height>;
  /**
   * The CSS `max-height` property
   */
  maxHeight?: Token<HeightValue | Property.Height>;
  /**
   * The CSS `min-height` property
   */
  minHeight?: Token<HeightValue | Property.Height>;
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: Token<Property.VerticalAlign>;
  /**
   * The CSS `overflow` property
   */
  overflow?: Token<Property.Overflow>;
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: Token<Property.OverflowX>;
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: Token<Property.OverflowY>;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: Token<Property.BoxSizing>;
  /**
   * The CSS `box-decoration-break` property
   */
  boxDecorationBreak?: Token<Property.BoxDecorationBreak>;
  /**
   * The CSS `float` property
   */
  float?: Token<Property.Float>;
  /**
   * The CSS `object-fit` property
   */
  objectFit?: Token<Property.ObjectFit>;
  /**
   * The CSS `object-position` property
   */
  objectPosition?: Token<Property.ObjectPosition>;
  /**
   * The CSS `overscroll-behavior` property
   */
  overscrollBehavior?: Token<Property.OverscrollBehavior>;
  /**
   * The CSS `overscroll-behavior` property
   */
  overscroll?: Token<Property.OverscrollBehavior>;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollBehaviorX?: Token<Property.OverscrollBehaviorX>;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollX?: Token<Property.OverscrollBehaviorX>;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollBehaviorY?: Token<Property.OverscrollBehaviorY>;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollY?: Token<Property.OverscrollBehaviorY>;
  /**
   * The CSS `visibility` property
   */
  visibility?: Token<Property.Visibility>;
  /**
   * The CSS `isolation` property
   */
  isolation?: Token<Property.Isolation>;
}
