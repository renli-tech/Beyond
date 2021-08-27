import {
  getSpacing,
  ScaleValue,
  SpacingName,
  isOfTypeSpacing,
  isOfTypeScaleValue,
  SkewValue,
  RotateValue,
  TransformOriginValue,
  isOfTypeSkewValue,
  isOfTypeRotateValue,
  isOfTypeTransformOriginValue,
  getSkew,
  getRotate,
  getTransformOrigin,
  getScale
} from "@beyond-ui/theme";
import { Property } from "csstype";
import { SystemProps } from ".";
import { Token } from "./types";

export const transformPropsResolvers = {
  translateX: (prop: SpacingName | Property.Translate): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      transform: `translateX(${finalValue})`
    };
  },
  translateY: (prop: SpacingName | Property.Translate): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      transform: `translateY(${finalValue})`
    };
  },
  translate: (prop: SpacingName | Property.Translate): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      transform: `translate(${finalValue},${finalValue})`
    };
  },
  scale: (prop: ScaleValue | Property.Scale): SystemProps => {
    const finalValue = isOfTypeScaleValue(prop)
      ? getScale(prop as ScaleValue)
      : prop;
    return {
      transform: `scale(${finalValue})`
    };
  },
  scaleX: (prop: ScaleValue | Property.Scale): SystemProps => {
    const finalValue = isOfTypeScaleValue(prop)
      ? getScale(prop as ScaleValue)
      : prop;
    return {
      transform: `scaleX(${finalValue})`
    };
  },
  scaleY: (prop: ScaleValue | Property.Scale): SystemProps => {
    const finalValue = isOfTypeScaleValue(prop)
      ? getScale(prop as ScaleValue)
      : prop;
    return {
      transform: `scaleY(${finalValue})`
    };
  },
  skew: (prop: SkewValue | (string | number)): SystemProps => {
    const finalValue = isOfTypeSkewValue(prop)
      ? getSkew(prop as SkewValue)
      : prop;
    return {
      transform: `skew(${finalValue})`
    };
  },
  skewX: (prop: SkewValue | (string | number)): SystemProps => {
    const finalValue = isOfTypeSkewValue(prop)
      ? getSkew(prop as SkewValue)
      : prop;
    return {
      transform: `skewX(${finalValue})`
    };
  },
  skewY: (prop: SkewValue | (string | number)): SystemProps => {
    const finalValue = isOfTypeSkewValue(prop)
      ? getSkew(prop as SkewValue)
      : prop;
    return {
      transform: `skewY(${finalValue})`
    };
  },
  rotate: (prop: RotateValue | Property.Rotate): SystemProps => {
    const finalValue = isOfTypeRotateValue(prop)
      ? getRotate(prop as RotateValue)
      : prop;
    return {
      transform: `rotate(${finalValue})`
    };
  },
  transformOrigin: (
    prop: TransformOriginValue | Property.TransformOrigin
  ): SystemProps => {
    const finalValue = isOfTypeTransformOriginValue(prop)
      ? getTransformOrigin(prop as TransformOriginValue)
      : prop;
    return {
      transformOrigin: finalValue
    };
  }
};

export interface TransformProps {
  /**
   * The CSS `transform` property
   */
  transform?: Token<Property.Transform>;
  /**
   * The CSS `transform-origin` property
   */
  transformOrigin?: Token<TransformOriginValue | Property.TransformOrigin>;
  /**
   * The CSS `clip-path` property.
   *
   * It creates a clipping region that sets what part of an element should be shown.
   */
  clipPath?: Token<Property.ClipPath>;
  /**
   * Translate value of an elements in the x-direction
   */
  translateX?: Token<SpacingName | Property.Translate>;
  /**
   * Translate value of an elements in the y-direction.
   */
  translateY?: Token<SpacingName | Property.Translate>;
  /**
   * Sets the rotate value of the element
   */
  rotate?: Token<RotateValue | Property.Rotate>;
  /**
   * Skew value of an elements in the x and y direction.
   */
  skewx?: Token<SkewValue | (string | number)>;
  /**
   * Skew value of an elements in the x-direction.
   */
  skewX?: Token<SkewValue | (string | number)>;
  /**
   * Skew value of an elements in the y-direction.
   */
  skewY?: Token<SkewValue | (string | number)>;
  /**
   * Scale value of an elements in the x-direction.
   */
  scaleX?: Token<ScaleValue | Property.Scale>;
  /**
   * Scale value of an elements in the y-direction.
   */
  scaleY?: Token<ScaleValue | Property.Scale>;
  /**
   * Sets the scale value of the element
   */
  scale?: Token<ScaleValue | Property.Scale>;
}
