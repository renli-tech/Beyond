import * as React from "react";
import {
  BeyondStyles,
  createComponent,
  PropsOf,
  createStyles,
  SystemProps,
  extractCssInterpolationFromProps
} from "@beyond-ui/system";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";

export interface FlexBoxProps
  extends SystemProps,
    Omit<PropsOf<"div">, keyof SystemProps> {}

export const FlexBox: React.FC<FlexBoxProps> = props => {
  const cssInter = extractCssInterpolationFromProps(props);

  const className = css({
    display: "flex",
    ...(cssInter as {})
  });

  // sizing props are passed here to overide the default sizings
  const style = createStyles<BeyondStyles>({}, GlobalStyles);
  return createComponent("div", { ...props, className }, style);
};

FlexBox.displayName = "BeyondFlexBox";
