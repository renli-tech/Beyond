import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles
} from "@beyond/system";
import { ColorName, getSpacing } from "@beyond/theme";
import { useColor } from "@beyond/shared";
import React from "react";
import { GlobalStyles } from "../../GlobalStyles";

export interface TextInputProps extends PropsOf<"input"> {
  bgColor?: ColorName | string;
  color?: ColorName | string;
  placeholder?: string;
  placeholderColor?: string;
}

export const BeyondTextInputStyles = createStyles<BeyondStyles>(
  {
    border: "none",
    outline: "none",
    borderRadius: getSpacing("3"),
    padding: getSpacing("2.5"),
    width: getSpacing("40")
  },
  GlobalStyles
);
export const TextInput: React.FC<TextInputProps> = props => {
  const { bgColor, color } = props;

  const style: BeyondStyles = {
    ...BeyondTextInputStyles,
    backgroundColor: useColor(bgColor || "gray"),
    color: useColor(color || "white")
  };

  return createComponent<TextInputProps>("input", props, style);
};

TextInput.displayName = "TextInput";
