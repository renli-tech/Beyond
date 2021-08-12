import React from "react";
import { BeyondStyles, createComponent, PropsOf } from "@beyond/system";
import { useColor, useSpacing } from "@beyond/shared";
import {
  ColorName,
  getSpacing,
  SpacingName,
  getFontSize,
  getFontFamily
} from "@beyond/theme";

export const ButtonSizes = {
  xs: getFontSize("xs"),
  sm: getFontSize("sm"),
  base: getFontSize("base"),
  lg: getFontSize("lg"),
  xl: getFontSize("xl"),
  "2xl": getFontSize("2xl"),
  "3xl": getFontSize("3xl"),
  "4xl": getFontSize("4xl"),
  "5xl": getFontSize("5xl"),
  "6xl": getFontSize("6xl"),
  "7xl": getFontSize("7xl"),
  "8xl": getFontSize("8xl"),
  "9xl": getFontSize("9xl")
} as const;
export interface ButtonProps extends PropsOf<"button"> {
  radius?: SpacingName;
  color?: ColorName | string;
  size?: keyof typeof ButtonSizes;
  bgcolor?: ColorName | string;
}

export const BeyondButtonStyles: BeyondStyles = {
  border: "none",
  padding: getSpacing("2.5"),
  paddingLeft: getSpacing("5"),
  paddingRight: getSpacing("5"),
  margin: getSpacing("3"),
  cursor: "pointer",
  fontFamily: getFontFamily("sans"),
  outline: "none"
};

export const Button: React.FC<ButtonProps> = props => {
  const { radius, color, bgcolor, size } = props;

  const className = "";

  console.log(getFontFamily("sans"));

  const buttonSize = ButtonSizes[size || "base"];

  const style: BeyondStyles = {
    ...BeyondButtonStyles,
    borderRadius: useSpacing(radius || "2"),
    color: useColor(color || "white"),
    backgroundColor: useColor(bgcolor || "indigo"),
    ...buttonSize
  };
  return createComponent<ButtonProps>("button", { ...props, className }, style);
};

Button.displayName = "BeyondButton";
