import { createComponent, BeyondStyles, PropsOf } from "@beyond/system";
import { ColorName, getSpacing } from "@beyond/theme";
import { useColor } from "@beyond/shared";
import React from "react";

export interface TextInputProps extends PropsOf<"input"> {
  bgColor?: ColorName | string;
  color?: ColorName | string;
  placeholder?: string;
  placeholderColor?: string;
}

export const BeyondTextInputStyles: BeyondStyles = {
  border: "none",
  outline: "none",
  borderRadius: getSpacing("3"),
  padding: getSpacing("2.5"),
  fontSize: getSpacing("3"),
  width: getSpacing("40")
};
export const TextInput: React.FC<TextInputProps> = props => {
  const { bgColor, color } = props;
  const style: BeyondStyles = {
    ...BeyondTextInputStyles,
    backgroundColor: useColor(bgColor || "indigo"),
    color: useColor(color || "white")
  };
  return createComponent<TextInputProps>("input", props, style);
};

TextInput.displayName = "TextInput";
