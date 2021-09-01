import {
  BeyondStyles,
  createComponent,
  createStyles,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory
} from "@beyond-ui/system";
import { ThemeContext } from "@beyond-ui/shared";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
import * as React from "react";

export interface TextProps extends SystemProps, PropsOf<"span"> {}

export const Text: React.FC<TextProps> = props => {
  const { children, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const className = css(styleFromProps);

  const style = createStyles<BeyondStyles>({}, GlobalStyles);
  return createComponent<TextProps>(
    "span",
    { ...props, className },
    style,
    children
  );
};

Text.displayName = "BeyondText";
