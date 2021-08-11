import React from "react";
import { BeyondStyles, createComponent } from "@beyond/system";
import { useColor } from "@beyond/shared";
import { ColorName, getSpacing, SpacingName } from "@beyond/theme";

export interface ButtonProps {
  radius?: SpacingName;
  color?: ColorName | string;
  bgColor?: ColorName | string;
}

export const BeyondButtonStyles: BeyondStyles = {
  border: "none",
  padding: getSpacing("2.5"),
  paddingLeft: getSpacing("4"),
  paddingRight: getSpacing("4"),
  cursor: "pointer",
  outline: "none"
};

export const Button: React.FC<ButtonProps> = props => {
  const { radius, color, bgColor } = props;

  const className = "";

  const style: BeyondStyles = {
    ...BeyondButtonStyles,
    borderRadius: getSpacing(radius || "2"),
    color: useColor(color || "white"),
    backgroundColor: useColor(bgColor || "indigo")
  };
  return createComponent<ButtonProps>("button", { ...props, className }, style);
};

Button.displayName = "BeyondButton";
