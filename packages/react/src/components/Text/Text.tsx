import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles
} from "@beyond/system";
import { ColorName, getColor, getFontSize } from "@beyond/theme";
import { useColor } from "@beyond/shared";
import React from "react";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
export const TextSizes = {
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

export interface TextProps extends PropsOf<"span"> {
  bgcolor?: ColorName | string;
  color?: ColorName | string;
  size?: keyof typeof TextSizes;
}

export const Text: React.FC<TextProps> = props => {
  const { bgcolor, color, size } = props;

  const textSize = TextSizes[size || "base"];
  const style = createStyles<BeyondStyles>(
    {
      ...textSize
    },
    GlobalStyles
  );

  const className = css({
    color: useColor(color || "black"),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    backgroundColor: bgcolor ? useColor(bgcolor!) : getColor("white")
  });

  return createComponent<TextProps>("span", { ...props, className }, style);
};

Text.displayName = "Text";
