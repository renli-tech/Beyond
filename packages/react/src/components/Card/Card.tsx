import * as React from "react";
import {
  createComponent,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  createStyles,
  BeyondStyles
} from "@beyond-ui/system";
import { ThemeContext, useSpacing } from "@beyond-ui/shared";
import { css } from "@emotion/css";
import { GlobalStyles } from "../../GlobalStyles";

export interface CardProps extends SystemProps, PropsOf<"div"> {}

export const Card: React.FC<CardProps> = props => {
  const { children, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const className = css(
    {
      padding: useSpacing("4"),
      borderRadius: useSpacing("1"),
      backgroundColor: "white",
      margin: useSpacing("4"),
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    styleFromProps
  );

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  return createComponent<CardProps>(
    "div",
    {
      ...props,
      className
    },
    style,
    children
  );
};
