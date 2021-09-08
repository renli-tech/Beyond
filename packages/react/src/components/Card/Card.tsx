import * as React from "react";
import {
  createComponent,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  createStyles,
  BeyondStyles,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext, useSpacing } from "@beyond-ui/shared";
import { css } from "@emotion/css";
import { GeneralStyles, GlobalStyles } from "../../GlobalStyles";
import { boxShadow } from "../../../../theme/dist";

export interface CardProps extends SystemProps, PropsOf<"div"> {}

export const Card: React.FC<CardProps> = props => {
  const { children, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const className = css(
    GeneralStyles,
    {
      padding: useSpacing("4"),
      borderRadius: useSpacing("1"),
      backgroundColor: "white",
      margin: useSpacing("4"),
      boxShadow: boxShadow["sm"]
    },
    styleFromProps
  );

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  return createComponent<CardProps>(
    "div",
    {
      ...elementProps,
      className
    },
    style,
    children
  );
};

Card.displayName = "BeyondCard";
