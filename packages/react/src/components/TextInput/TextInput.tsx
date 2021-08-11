import { createComponent, BeyondStyles } from "@beyond/system";
import { ColorName, getColor, getSpacing } from "@beyond/theme";
import React from "react";

export interface TextInputProps {
  bgColor?: ColorName;
  color?: ColorName;
}

export const BeyondTextInputStyles: BeyondStyles = {
  border: "none",
  borderRadius: getSpacing("3"),
  color: getColor("gray", "600"),
  padding: getSpacing("2.5"),
  fontSize: getSpacing("3"),
  width: getSpacing("40")
};
export const TextInput: React.FC<TextInputProps> = props => {
  const { bgColor, color } = props;
  const style: BeyondStyles = {
    ...BeyondTextInputStyles,
    backgroundColor: getColor(bgColor || "indigo"),
    color: getColor(color || "white")
  };
  return createComponent<TextInputProps>("input", props, style);
};
