import { Property } from "csstype";
import { SystemProps } from ".";
import { Token } from "./types";

export const positionPropsResolvers = {
  inset: (prop: Property.Left): SystemProps => {
    return {
      left: prop,
      right: prop,
      top: prop,
      bottom: prop
    };
  },
  insetX: (prop: Property.Left): SystemProps => {
    return {
      left: prop,
      right: prop
    };
  },
  insetY: (prop: Property.Top): SystemProps => {
    return {
      top: prop,
      bottom: prop
    };
  },
  pos: "position",
  zIndex: "zIndex",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
  position: "position"
};

export interface PositionProps {
  /**
   * The CSS `z-index` property
   */
  zIndex?: Token<Property.ZIndex>;
  /**
   * The CSS `top` property
   */
  top?: Token<Property.Top>;
  /**
   * The CSS `right` property
   */
  right?: Token<Property.Right>;
  /**
   * The CSS `bottom` property
   */
  bottom?: Token<Property.Bottom>;
  /**
   * The CSS `left` property
   */
  left?: Token<Property.Left>;
  /**
   * The CSS `left`, `right`, `top`, `bottom` property
   */
  inset?: Token<Property.Left>;
  /**
   * The CSS `left`, and `right` property
   */
  insetX?: Token<Property.Left>;
  /**
   * The CSS `top`, and `bottom` property
   */
  insetY?: Token<Property.Left>;
  /**
   * The CSS `position` property
   */
  pos?: Token<Property.Position>;
  /**
   * The CSS `position` property
   */
  position?: Token<Property.Position>;
}
