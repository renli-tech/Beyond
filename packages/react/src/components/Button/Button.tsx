import React from "react";
import { BeyondStyles, createComponent, PropsOf } from "@beyond/system";
import { useColor, useSpacing } from "@beyond/shared";
import { ColorName, getSpacing, SpacingName } from "@beyond/theme";

export interface ButtonProps extends PropsOf<"button"> {
  radius?: SpacingName;
  color?: ColorName | string;
  bgcolor?: ColorName | string;
}

export const BeyondButtonStyles: BeyondStyles = {
  border: "none",
  padding: getSpacing("2.5"),
  paddingLeft: getSpacing("4"),
  paddingRight: getSpacing("4"),
  margin: getSpacing("3"),
  cursor: "pointer",
  outline: "none"
};

export const Button: React.FC<ButtonProps> = props => {
  const { radius, color, bgcolor } = props;

  const className = "";

  const style: BeyondStyles = {
    ...BeyondButtonStyles,
    borderRadius: useSpacing(radius || "2"),
    color: useColor(color || "white"),
    backgroundColor: useColor(bgcolor || "indigo")
  };
  return createComponent<ButtonProps>("button", { ...props, className }, style);
};

Button.displayName = "BeyondButton";
