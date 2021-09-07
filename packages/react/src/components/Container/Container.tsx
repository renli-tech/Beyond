import {
  createComponent,
  BeyondStyles,
  css as BeyondCssFactory,
  createStyles,
  SystemProps,
  PropsOf,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext, useSpacing } from "@beyond-ui/shared";
import React from "react";
import { css } from "@emotion/css";
import { GeneralStyles, GlobalStyles } from "../../GlobalStyles";

export interface ContainerProps extends SystemProps, PropsOf<"div"> {}

export const Container: React.FC<ContainerProps> = props => {
  const { children, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const className = css(
    GeneralStyles,
    {
      paddingRight: useSpacing("3"),
      paddingLeft: useSpacing("3")
    },
    styleFromProps
  );

  return createComponent<ContainerProps>(
    "div",
    { ...elementProps, className: `${className} ${props.className}` },
    style,
    children
  );
};

Container.displayName = "BeyondContainer";
