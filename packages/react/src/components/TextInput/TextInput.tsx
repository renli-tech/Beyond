import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles
} from "@beyond/system";
import { ColorName, getColor } from "@beyond/theme";
import { useColor, useSpacing } from "@beyond/shared";
import React from "react";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
export interface TextInputProps extends PropsOf<"input"> {
  bgcolor?: ColorName | string;
  color?: ColorName | string;
  placeHolderColor?: string;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const { bgcolor, color, placeHolderColor } = props;

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const className = css({
    border: "none",
    outline: "none",
    borderRadius: useSpacing("3"),
    padding: useSpacing("2"),
    paddingLeft: useSpacing("4"),
    paddingRight: useSpacing("4"),
    width: useSpacing("40"),
    color: useColor(color || "black"),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    backgroundColor: bgcolor ? useColor(bgcolor!) : getColor("gray", "100"),
    "::placeholder": {
      color: placeHolderColor
        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          useColor(placeHolderColor!)
        : getColor("gray", "400")
    }
  });

  return createComponent<TextInputProps>(
    "input",
    { ...props, className },
    style
  );
};

TextInput.displayName = "TextInput";
