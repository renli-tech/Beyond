import * as React from "react";
import {
  createComponent,
  BeyondStyles,
  css as BeyondCssFactory,
  createStyles,
  SystemProps,
  PropsOf,
  omitSystemProps
} from "@beyond-ui/system";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
import { ThemeContext } from "@beyond-ui/shared";

export interface FlexBoxProps extends SystemProps, PropsOf<"div"> {}

export const FlexBox: React.FC<FlexBoxProps> = props => {
  const { children, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const className = css(
    {
      display: "flex"
    },
    styleFromProps
  );

  return createComponent(
    "div",
    { ...elementProps, className },
    style,
    children
  );
};

FlexBox.displayName = "BeyondFlexBox";
