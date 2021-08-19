import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles,
  SystemProps,
  extractCssInterpolationFromProps
} from "@beyond/system";
import { getColor, getSpacing } from "@beyond/theme";
import { useColor, useSpacing } from "@beyond/shared";
import React from "react";
import { css } from "@emotion/css";
import { GlobalStyles } from "../../GlobalStyles";

export interface ContainerProps
  extends SystemProps,
    Omit<PropsOf<"div">, keyof SystemProps> {}

export const Container: React.FC<ContainerProps> = props => {
  const { bgcolor, color } = props;

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const cssInter = extractCssInterpolationFromProps(props);

  const className = css({
    borderRadius: useSpacing("0"),
    width: "100%",
    paddingRight: getSpacing("3"),
    paddingLeft: getSpacing("3"),
    marginRight: "auto",
    marginLeft: "auto",
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    backgroundColor: bgcolor ? useColor(bgcolor) : getColor("white"),
    color: color ? useColor(color) : getColor("gray", "900"),
    ...(cssInter as {})
  });

  return createComponent<ContainerProps>("div", { ...props, className }, style);
};

Container.displayName = "BeyondContainer";
