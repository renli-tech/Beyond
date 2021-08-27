import { Property } from "csstype";
import { OpacityValue } from "@beyond-ui/theme";
import { Token } from "./types";

export const effectPropsResolver = {
  shadow: "boxShadow",
  bgBlendMode: "backgroundBlendMode"
};

export interface EffectProps {
  /**
   * The `box-shadow` property
   */
  boxShadow?: Token<Property.BoxShadow | number>;
  /**
   * The `box-shadow` property
   */
  shadow?: Token<Property.BoxShadow | number>;
  /**
   * The `mix-blend-mode` property
   */
  mixBlendMode?: Token<Property.MixBlendMode>;
  /**
   * The `blend-mode` property
   */
  blendMode?: Token<Property.MixBlendMode>;
  /**
   * The CSS `background-blend-mode` property
   */
  backgroundBlendMode?: Token<Property.BackgroundBlendMode>;
  /**
   * The CSS `background-blend-mode` property
   */
  bgBlendMode?: Token<Property.BackgroundBlendMode>;
  /**
   * The CSS `opacity` property
   */
  opacity?: Token<OpacityValue | number>;
}
