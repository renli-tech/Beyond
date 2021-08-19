import * as React from "react";
import {
  BeyondStyles,
  createComponent,
  PropsOf,
  createStyles,
  SystemProps
} from "@beyond/system";
import { useColor, useSpacing } from "@beyond/shared";
import { ColorName, SpacingName, getFontSize, getColor } from "@beyond/theme";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";

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

export interface ButtonProps extends SystemProps, PropsOf<"button"> {
  radius?: SpacingName;
  backgroundColorScheme?: ColorName;
  isLoading?: boolean;
  loadingText?: string;
  variant?: "outline" | "dashed";
  size?: keyof typeof ButtonSizes;
}

export const Button: React.FC<ButtonProps> = props => {
  const {
    radius,
    color,
    bgcolor,
    size,
    backgroundColorScheme
    // isLoading
  } = props;
  const buttonSize = ButtonSizes[size || "sm"];

  // const [loading, setLoading] = React.useState(isLoading);

  const className = css({
    border: "none",
    padding: useSpacing("2"),
    paddingLeft: useSpacing("4"),
    paddingRight: useSpacing("4"),
    margin: buttonSize.fontSize,
    cursor: "pointer",
    outline: "none",
    borderRadius: useSpacing(radius || "2"),
    color: useColor(color || "white"),
    backgroundColor: useColor(
      backgroundColorScheme ? backgroundColorScheme : bgcolor || "indigo"
    ),
    ":hover": {
      backgroundColor: getColor(backgroundColorScheme || "indigo", "700"),
      transition: "all ease-in-out .1s"
    }
  });

  // sizing props are passed here to overide the default sizings
  const style = createStyles<BeyondStyles>(
    {
      ...buttonSize
    },
    GlobalStyles
  );

  return createComponent<ButtonProps>("button", { ...props, className }, style);
};

Button.displayName = "BeyondButton";
