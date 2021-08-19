/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles,
  SystemProps,
  extractCssInterpolationFromProps
} from "@beyond-ui/system";
import { ColorName, getColor } from "@beyond-ui/theme";
import { useColor, useSpacing } from "@beyond-ui/shared";
import React from "react";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
export interface TextInputProps
  extends SystemProps,
    Omit<PropsOf<"input">, keyof SystemProps> {
  bgcolor?: ColorName | string;
  color?: ColorName | string;
  placeHolderColor?: ColorName | string;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const { bgcolor, color, placeHolderColor } = props;

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const cssInter = extractCssInterpolationFromProps(props);

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
        ? useColor(placeHolderColor!)
        : getColor("gray", "400")
    },
    ...(cssInter as {})
  });

  return createComponent<TextInputProps>(
    "input",
    { ...props, className },
    style
  );
};

TextInput.displayName = "BeyondTextInput";
