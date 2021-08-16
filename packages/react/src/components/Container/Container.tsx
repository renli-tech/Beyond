import {
  createComponent,
  BeyondStyles,
  PropsOf,
  createStyles
} from "@beyond/system";
import { ColorName, getColor, getSpacing } from "@beyond/theme";
import { useColor, useSpacing } from "@beyond/shared";
import React from "react";
import { css } from "@emotion/css";
import { GlobalStyles } from "../../GlobalStyles";

export interface ContainerProps extends PropsOf<"div"> {
  bgcolor?: ColorName | string;
  color?: ColorName | string;
}

export const Container: React.FC<ContainerProps> = props => {
  const { bgcolor, color } = props;

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const className = css({
    borderRadius: useSpacing("0"),
    width: "100%",
    paddingRight: getSpacing("3"),
    paddingLeft: getSpacing("3"),
    marginRight: "auto",
    marginLeft: "auto",
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    backgroundColor: bgcolor ? useColor(bgcolor) : getColor("white"),
    color: color ? useColor(color) : getColor("gray", "900")
  });

  return createComponent<ContainerProps>("div", { ...props, className }, style);
};
