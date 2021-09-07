/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Property } from "csstype";
import {
  boxShadow,
  BoxShadow,
  dropShadow,
  DropShadow,
  OpacityValue
} from "@beyond-ui/theme";
import { Token } from "./types";

export const effectPropsResolver = {
  shadow: (prop: BoxShadow) => ({
    boxShadow: boxShadow[prop]
  }),
  dropShadow: (prop: DropShadow) => ({
    dropShadow: dropShadow[prop]
  }),
  bgBlendMode: "backgroundBlendMode",
  boxShadow: "boxShadow",
  mixBlendMode: "mixBlendMode",
  blendMode: "mixBlendMode",
  backgroundBlendMode: "backgroundBlendMode",
  opacity: "opacity"
};

export interface EffectProps {
  /**
   * The `box-shadow` property
   */
  boxShadow?: Token<Property.BoxShadow>;
  /**
   * The `box-shadow` property
   */
  shadow?: Token<BoxShadow>;
  /**
   * The `box-shadow` property
   */
  dropShadow?: Token<DropShadow>;
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
