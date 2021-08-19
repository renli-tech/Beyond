import { Property } from "csstype";
import { OpacityValue } from "@beyond/theme";

export interface EffectProps {
  /**
   * The `box-shadow` property
   */
  boxShadow?: Property.BoxShadow | number;
  /**
   * The `box-shadow` property
   */
  shadow?: Property.BoxShadow | number;
  /**
   * The `mix-blend-mode` property
   */
  mixBlendMode?: Property.MixBlendMode;
  /**
   * The `blend-mode` property
   */
  blendMode?: Property.MixBlendMode;
  /**
   * The CSS `background-blend-mode` property
   */
  backgroundBlendMode?: Property.BackgroundBlendMode;
  /**
   * The CSS `background-blend-mode` property
   */
  bgBlendMode?: Property.BackgroundBlendMode;
  /**
   * The CSS `opacity` property
   */
  opacity?: OpacityValue | number;
}
