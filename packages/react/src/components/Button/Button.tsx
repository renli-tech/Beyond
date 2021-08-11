import { BeyondStyles, createComponent } from "@beyond/system";
import { ColorName, getColor, getSpacing, SpacingName } from "@beyond/theme";
import React from "react";

export interface ButtonProps {
  radius?: SpacingName;
  color?: ColorName;
  bgColor?: ColorName;
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

  const style: BeyondStyles = {
    ...BeyondButtonStyles,
    borderRadius: getSpacing(radius || "2"),
    color: getColor(color || "white"),
    backgroundColor: getColor(bgColor || "indigo")
  };
  return createComponent<ButtonProps>("button", props, style);
};

Button.displayName = "BeyondButton";
