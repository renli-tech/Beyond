import * as React from "react";
import { Property } from "csstype";
import {
  BeyondStyles,
  createComponent,
  PropsOf,
  createStyles,
  SystemProps
} from "@beyond/system";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";

export interface FlexBoxProps extends SystemProps, PropsOf<"div"> {}

export const FlexBox: React.FC<FlexBoxProps> = props => {
  const className = css({
    display: "flex"
  });

  // sizing props are passed here to overide the default sizings
  const style = createStyles<BeyondStyles>({}, GlobalStyles);
  return createComponent("div", { ...props, className }, style);
};

FlexBox.displayName = "BeyondFlexBox";
