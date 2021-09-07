import {
  createComponent,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  BeyondStyles,
  createStyles,
  omitSystemProps
} from "@beyond-ui/system";
import { css } from "@emotion/css";
import { ThemeContext } from "@beyond-ui/shared";
import * as React from "react";
import { GeneralStyles, GlobalStyles } from "../../GlobalStyles";

export interface GlassProps extends SystemProps, PropsOf<"div"> {
  blurRadius?: number;
  transparency?: number;
  showOutlines?: "true" | "false";
}

export const Glass: React.FC<GlassProps> = props => {
  const {
    children,
    blurRadius,
    transparency,
    showOutlines = "true",
    ...restProps
  } = props;

  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const className = css(
    GeneralStyles,
    {
      background: `rgba( 255, 255, 255, ${transparency || 0.2})`,
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: `blur(${blurRadius || 1}px)`,
      WebkitBackdropFilter: `blur(${blurRadius || 1.5}px)`,
      border: showOutlines ? "1px solid rgba( 255, 255, 255, 0.18 )" : "none"
    },
    styleFromProps
  );

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  return createComponent<GlassProps>(
    "div",
    { ...elementProps, className: `${className} ${props.className}` },
    style,
    children
  );
};
