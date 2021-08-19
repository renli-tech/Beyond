import { ColorName } from "@beyond/theme";
import { Property } from "csstype";

export interface InteractionProps {
  /**
   * The CSS `appearance` property
   */
  appearance?: Property.Appearance;
  /**
   * The CSS `user-select` property
   */
  userSelect?: Property.UserSelect;
  /**
   * The CSS `pointer-events` property
   */
  pointerEvents?: Property.PointerEvents;
  /**
   * The CSS `resize` property
   */
  resize?: Property.Resize;
  /**
   * The CSS `cursor` property
   */
  cursor?: Property.Cursor;
  /**
   * The CSS `outline` property
   */
  outline?: Property.Outline;
  /**
   * The CSS `outline-offset` property
   */
  outlineOffset?: Property.OutlineOffset;
  /**
   * The CSS `outline-color` property
   */
  outlineColor?: ColorName | string;
}
