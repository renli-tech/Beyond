import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles,
  css as BeyondCssFactory,
  SystemProps,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext, useSpacing } from "@beyond-ui/shared";
import React from "react";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";

export const AvatarSizes = {
  xs: { width: "1rem", height: "1rem" },
  sm: { width: "1.25rem", height: "1.25rem" },
  base: { width: "1.5rem", height: "1.5rem" },
  lg: { width: "1.75rem", height: "1.75rem" },
  xl: { width: "2rem", height: "2rem" },
  "2xl": { width: "2.25rem", height: "2.25rem" },
  "3xl": { width: "2.5rem", height: "2.5rem" },
  "4xl": { width: "2.75rem", height: "2.75rem" }
} as const;

export interface AvatarProps extends SystemProps, PropsOf<"img"> {
  size?: keyof typeof AvatarSizes;
}

export const Avatar: React.FC<AvatarProps> = props => {
  const { size, children, ...restProps } = props;

  const themeContext = React.useContext(ThemeContext);

  const elementProps = omitSystemProps(restProps);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const avatarSize = AvatarSizes[size || "base"];
  const style = createStyles<BeyondStyles>(
    {
      ...avatarSize
    },
    GlobalStyles
  );

  const className = css(
    {
      cursor: "pointer",
      borderRadius: useSpacing("full")
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    },
    styleFromProps
  );

  return createComponent<AvatarProps>(
    "img",
    { ...elementProps, className },
    style,
    children
  );
};

Avatar.displayName = "BeyondAvatar";
