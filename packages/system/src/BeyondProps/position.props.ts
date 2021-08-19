import { Property } from "csstype";

export interface PositionProps {
  /**
   * The CSS `z-index` property
   */
  zIndex?: Property.ZIndex;
  /**
   * The CSS `top` property
   */
  top?: Property.Top;
  insetBlockStart?: Property.InsetBlockStart;
  /**
   * The CSS `right` property
   */
  right?: Property.Right;
  /**
   * When the direction is `ltr`, `insetInlineEnd` is equivalent to `right`.
   * When the direction is `rtl`, `insetInlineEnd` is equivalent to `left`.
   */
  insetInlineEnd?: Property.InsetInlineEnd;
  /**
   * When the direction is `ltr`, `insetEnd` is equivalent to `right`.
   * When the direction is `rtl`, `insetEnd` is equivalent to `left`.
   */
  insetEnd?: Property.InsetInlineEnd;
  /**
   * The CSS `bottom` property
   */
  bottom?: Property.Bottom;
  insetBlockEnd?: Property.InsetBlockEnd;
  /**
   * The CSS `left` property
   */
  left?: Property.Left;
  insetInlineStart?: Property.InsetInlineStart;
  /**
   * When the direction is `start`, `end` is equivalent to `left`.
   * When the direction is `start`, `end` is equivalent to `right`.
   */
  insetStart?: Property.InsetInlineStart;
  /**
   * The CSS `left`, `right`, `top`, `bottom` property
   */
  inset?: Property.Left;
  /**
   * The CSS `left`, and `right` property
   */
  insetX?: Property.Left;
  /**
   * The CSS `top`, and `bottom` property
   */
  insetY?: Property.Left;
  /**
   * The CSS `position` property
   */
  pos?: Property.Position;
  /**
   * The CSS `position` property
   */
  position?: Property.Position;
  insetInline?: Property.InsetInline;
  insetBlock?: Property.InsetBlock;
}
