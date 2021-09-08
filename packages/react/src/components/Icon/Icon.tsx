import {
  BeyondStyles,
  createComponent,
  createStyles,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext } from "@beyond-ui/shared";
import { GeneralStyles, GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
import * as React from "react";

export const IconSizes = {
  xs: { width: "1rem", height: "1rem" },
  sm: { width: "1.25rem", height: "1.25rem" },
  base: { width: "1.5rem", height: "1.5rem" },
  lg: { width: "1.75rem", height: "1.75rem" },
  xl: { width: "2rem", height: "2rem" },
  "2xl": { width: "2.25rem", height: "2.25rem" },
  "3xl": { width: "2.5rem", height: "2.5rem" },
  "4xl": { width: "2.75rem", height: "2.75rem" }
} as const;

export interface IconProps extends SystemProps, PropsOf<"span"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  size?: keyof typeof IconSizes;
}

export const Icon: React.FC<IconProps> = props => {
  const { as, size, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const className = css(GeneralStyles, styleFromProps);

  const iconStyle = css({
    ...IconSizes[size || "base"]
  });
  const style = createStyles<BeyondStyles>({}, GlobalStyles);
  return createComponent<IconProps>(
    "span",
    { ...elementProps, className: `${className} ${props.className}` },
    style,
    React.createElement(as, { className: iconStyle })
  );
};

Icon.displayName = "BeyondIcon";
