import {
  BeyondStyles,
  createComponent,
  createStyles,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext, useColor, useSpacing } from "@beyond-ui/shared";
import { GeneralStyles, GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
import * as React from "react";
import { ColorName, getFontSize, getSpacing } from "@beyond-ui/theme";

export interface BadgeProps extends SystemProps, PropsOf<"span"> {
  colorScheme?: ColorName;
}

export const Badge: React.FC<BadgeProps> = props => {
  const { children, colorScheme = "red", ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const className = css(
    GeneralStyles,
    {
      backgroundColor: useColor(`${colorScheme}-400 opacity-75`),
      color: useColor(`${colorScheme}-800`),
      paddingLeft: useSpacing("2"),
      paddingRight: useSpacing("2"),
      fontWeight: "bold",
      cursor: "pointer",
      textTransform: "capitalize",
      borderRadius: getSpacing("2"),
      ...getFontSize("xs"),
      paddingTop: useSpacing("1"),
      margin: useSpacing("0.5"),
      paddingBottom: useSpacing("1")
    },
    styleFromProps
  );

  const style = createStyles<BeyondStyles>({}, GlobalStyles);
  return createComponent<BadgeProps>(
    "span",
    { ...elementProps, className: `${className} ${props.className}` },
    style,
    children
  );
};

Badge.displayName = "BeyondBadge";
