import { ScaleValue, SpacingName } from "@beyond-ui/theme";
import { Property } from "csstype";

export interface TransformProps {
  /**
   * The CSS `transform` property
   */
  transform?: Property.Transform;
  /**
   * The CSS `transform-origin` property
   */
  transformOrigin?: Property.TransformOrigin | number;
  /**
   * The CSS `clip-path` property.
   *
   * It creates a clipping region that sets what part of an element should be shown.
   */
  clipPath?: Property.ClipPath;
  /**
   * Translate value of an elements in the x-direction
   */
  translateX?: SpacingName | (string | number);
  /**
   * Translate value of an elements in the y-direction.
   * - Only works if `transform=auto`
   * - It sets the value of `--chakra-translate-y`
   */
  translateY?: SpacingName | (string | number);
  /**
   * Sets the rotate value of the element
   */
  rotate?: number;
  /**
   * Skew value of an elements in the x-direction.
   */
  skewX?: string;
  /**
   * Skew value of an elements in the y-direction.
   */
  skewY?: string;
  /**
   * Scale value of an elements in the x-direction.
   */
  scaleX?: ScaleValue | number;
  /**
   * Scale value of an elements in the y-direction.
   */
  scaleY?: ScaleValue | number;
  /**
   * Sets the scale value of the element
   */
  scale?: ScaleValue | number;
}
