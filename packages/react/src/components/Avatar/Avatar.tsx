import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles
} from "@beyond/system";
import { ColorName, getColor, getSize } from "@beyond/theme";
import { useColor, useSpacing } from "@beyond/shared";
import React from "react";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
export const AvatarSizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  base: getSize("base"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  "7xl": getSize("7xl"),
  "8xl": getSize("8xl"),
  "9xl": getSize("9xl")
} as const;

export interface AvatarProps extends PropsOf<"img"> {
  bgcolor?: ColorName | string;
  size?: keyof typeof AvatarSizes;
}

export const Avatar: React.FC<AvatarProps> = props => {
  const { bgcolor, size } = props;

  const avatarSize = AvatarSizes[size || "base"];
  const style = createStyles<BeyondStyles>(
    {
      ...avatarSize
    },
    GlobalStyles
  );

  const className = css({
    borderRadius: useSpacing("full"),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    backgroundColor: bgcolor ? useColor(bgcolor!) : getColor("white")
  });

  return createComponent<AvatarProps>("img", { ...props, className }, style);
};

Avatar.displayName = "Avatar";
