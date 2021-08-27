import { ColorName } from "@beyond-ui/theme";
import { Property } from "csstype";
import { Token } from "./types";

export interface InteractionProps {
  /**
   * The CSS `appearance` property
   */
  appearance?: Token<Property.Appearance>;
  /**
   * The CSS `user-select` property
   */
  userSelect?: Token<Property.UserSelect>;
  /**
   * The CSS `pointer-events` property
   */
  pointerEvents?: Token<Property.PointerEvents>;
  /**
   * The CSS `resize` property
   */
  resize?: Token<Property.Resize>;
  /**
   * The CSS `cursor` property
   */
  cursor?: Token<Property.Cursor>;
  /**
   * The CSS `outline` property
   */
  outline?: Token<Property.Outline>;
  /**
   * The CSS `outline-offset` property
   */
  outlineOffset?: Token<Property.OutlineOffset>;
  /**
   * The CSS `outline-color` property
   */
  outlineColor?: Token<ColorName | string>;
}
