import { HeightValue, WidthValue } from "@beyond-ui/theme";
import { Property } from "csstype";

export interface LayoutProps {
  /**
   * The CSS `display` property
   */
  display?: Property.Display;
  /**
   * The CSS `width` property
   */
  width?: WidthValue | string;
  /**
   * The CSS `width` and `height` property
   */
  boxSize?: WidthValue | number;
  /**
   * The CSS `max-width` property
   */
  maxWidth?: WidthValue | number;
  /**
   * The CSS `min-width` property
   */
  minWidth?: WidthValue | number;
  /**
   * The CSS `height` property
   */
  height?: HeightValue | number;
  /**
   * The CSS `max-height` property
   */
  maxHeight?: HeightValue | number;
  /**
   * The CSS `min-height` property
   */
  minHeight?: HeightValue | number;
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: Property.VerticalAlign;
  /**
   * The CSS `overflow` property
   */
  overflow?: Property.Overflow;
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: Property.OverflowX;
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: Property.OverflowY;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: Property.BoxSizing;
  /**
   * The CSS `box-decoration` property
   */
  boxDecorationBreak?: Property.BoxDecorationBreak;
  /**
   * The CSS `float` property
   */
  float?: Property.Float;
  /**
   * The CSS `object-fit` property
   */
  objectFit?: Property.ObjectFit;
  /**
   * The CSS `object-position` property
   */
  objectPosition?: Property.ObjectPosition;
  /**
   * The CSS `overscroll-behavior` property
   */
  overscrollBehavior?: Property.OverscrollBehavior;
  /**
   * The CSS `overscroll-behavior` property
   */
  overscroll?: Property.OverscrollBehavior;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollBehaviorX?: Property.OverscrollBehaviorX;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollX?: Property.OverscrollBehaviorX;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollBehaviorY?: Property.OverscrollBehaviorY;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollY?: Property.OverscrollBehaviorY;
  /**
   * The CSS `visibility` property
   */
  visibility?: Property.Visibility;
  /**
   * The CSS `isolation` property
   */
  isolation?: Property.Isolation;
}
