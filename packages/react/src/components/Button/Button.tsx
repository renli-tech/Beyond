import * as React from "react";
import {
  BeyondStyles,
  createComponent,
  createStyles,
  css as BeyondCssFactory,
  SystemProps,
  PropsOf
} from "@beyond-ui/system";
import { ThemeContext, useColor, useSpacing } from "@beyond-ui/shared";
import {
  ColorName,
  SpacingName,
  getFontSize,
  getSpacing
} from "@beyond-ui/theme";
import { GlobalStyles } from "../../GlobalStyles";
import { css, keyframes } from "@emotion/css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

const ButtonChild: React.FC<{
  isLoading?: boolean;
  loadingText?: string;
  // eslint-disable-next-line react/prop-types
}> = ({ isLoading, loadingText, children }) => {
  if (isLoading) {
    const spin = keyframes`
      0% {
        transform: rotate(0deg);
      }

      100% { 
        transform : rotate(360deg);
      }
    `;

    return (
      <span
        className={css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        })}
      >
        <AiOutlineLoading3Quarters
          className={css({
            animation: `${spin} 0.6s linear infinite`
          })}
          style={{ marginRight: getSpacing("1.5") }}
        />
        {loadingText}
      </span>
    );
  }

  return <span>{children}</span>;
};

export interface ButtonProps extends SystemProps, PropsOf<"button"> {
  radius?: SpacingName;
  backgroundColorScheme?: ColorName;
  isLoading?: boolean;
  loadingText?: string;
  variant?: "outline" | "dashed";
  size?: keyof typeof ButtonSizes;
}

export const Button: React.FC<ButtonProps> = props => {
  const { size, children, isLoading, loadingText, ...restProps } = props;
  const buttonSize = ButtonSizes[size || "sm"];

  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const className = css(
    {
      border: "none",
      padding: useSpacing("2"),
      paddingLeft: useSpacing("4"),
      paddingRight: useSpacing("4"),
      margin: buttonSize.fontSize,
      cursor: "pointer",
      outline: "none",
      borderRadius: useSpacing("2"),
      color: useColor("white"),
      backgroundColor: useColor("red"),
      ":hover": {
        backgroundColor: useColor("red-600"),
        transition: "all ease-in-out .2s"
      }
    },
    styleFromProps
  );

  // sizing props are passed here to overide the default sizings
  const style = createStyles<BeyondStyles>(
    {
      ...buttonSize
    },
    GlobalStyles
  );

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type

  return createComponent<ButtonProps>(
    "button",
    { ...props, className },
    style,
    React.createElement(ButtonChild, { isLoading, loadingText }, children)
  );
};
