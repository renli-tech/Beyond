import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles,
  css as BeyondCssFactory,
  SystemProps
} from "@beyond-ui/system";
import { ThemeContext, useSpacing } from "@beyond-ui/shared";
import React from "react";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";

export const AvatarSizes = {
  xs: { width: "1rem", height: "1rem" },
  sm: { width: "2rem", height: "2rem" },
  base: { width: "2.5rem", height: "2.5rem" },
  lg: { width: "4rem", height: "4rem" },
  xl: { width: "5rem", height: "5rem" },
  "2xl": { width: "6rem", height: "6rem" },
  "3xl": { width: "8rem", height: "8rem" },
  "4xl": { width: "12rem", height: "12rem" },
  "5xl": { width: "14rem", height: "14rem" },
  "6xl": { width: "16rem", height: "16rem" },
  "7xl": { width: "18rem", height: "18rem" },
  "8xl": { width: "20rem", height: "20rem" },
  "9xl": { width: "22rem", height: "22rem" }
} as const;

export interface AvatarProps extends SystemProps, PropsOf<"img"> {
  size?: keyof typeof AvatarSizes;
}

export const Avatar: React.FC<AvatarProps> = props => {
  const { size, children, ...restProps } = props;

  const themeContext = React.useContext(ThemeContext);

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
    { ...props, className },
    style,
    children
  );
};

Avatar.displayName = "BeyondAvatar";
