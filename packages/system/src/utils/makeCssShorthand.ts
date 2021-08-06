/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Property } from "csstype";
//Padding

export const makePaddingDes = (
  top?: string,
  bottom?: string,
  left?: string,
  right?: string
) => {
  return {
    paddingTop: top,
    paddingBottom: bottom,
    paddingLeft: left,
    paddingRight: right
  };
};

export const makePaddingHorizontal = (value: string | number) => {
  return {
    paddingLeft: value,
    paddingRight: value
  };
};

export const makePaddingVertical = (value: string | number) => {
  return {
    paddingTop: value,
    paddingBottom: value
  };
};

export const makePaddingAll = (value: string) => {
  return {
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value
  };
};

// Margin

export const makeMarginDes = (
  top?: string,
  bottom?: string,
  left?: string,
  right?: string
) => {
  return {
    marginTop: top,
    marginBottom: bottom,
    marginLeft: left,
    marginRight: right
  };
};

export const makeMarginAll = (value: string) => {
  return {
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value
  };
};

// Border

export const makeBorderStyle = (style?: Property.BorderStyle) => {
  return {
    borderLeftStyle: style as Property.BorderLeftStyle,
    borderRightStyle: style as Property.BorderRightStyle,
    borderTopStyle: style as Property.BorderTopStyle,
    borderBottomStyle: style as Property.BorderBottomStyle
  };
};

export const makeBorderColor = (color?: Property.Color) => ({
  borderLeftColor: color as Property.BorderLeftColor,
  borderRightColor: color as Property.BorderRightColor,
  borderTopColor: color as Property.BorderTopColor,
  borderBottomColor: color as Property.BorderBottomColor
});

export const makeBorderWidth = (width?: Property.BorderWidth) => ({
  borderLeftWidth: width as Property.BorderLeftWidth,
  borderRightWidth: width as Property.BorderRightWidth,
  borderTopWidth: width as Property.BorderTopWidth,
  borderBottomWidth: width as Property.BorderBottomWidth
});

export const makeBorderRadius = (Radius?: Property.BorderRadius) => ({
  borderTopLeftRadius: Radius as Property.BorderTopLeftRadius,
  borderTopRightRadius: Radius as Property.BorderTopRightRadius,
  borderBottomLeftRadius: Radius as Property.BorderBottomLeftRadius,
  borderBottomRightRadius: Radius as Property.BorderBottomRightRadius
});

// correct
export const makeBorder = (
  width?: Property.BorderWidth,
  style?: Property.BorderStyle,
  color?: Property.Color,
  radius?: Property.BorderRadius,
  none?: boolean
) => {
  const widthObj = makeBorderWidth(none ? 0 : width);

  const colorObj = makeBorderColor(none ? "transparent" : color);

  const styleObj = makeBorderStyle(style);

  const raduisObj = makeBorderRadius(radius);
  return { ...widthObj, ...colorObj, ...styleObj, ...raduisObj };
};

export type BorderPositionProp = {
  style?: Property.BorderStyle;
  width?: Property.BorderWidth;
  color?: Property.Color;
};
