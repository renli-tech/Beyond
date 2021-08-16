import * as React from "react";
import { Property } from "csstype";
import {
  BeyondStyles,
  createComponent,
  PropsOf,
  createStyles
} from "@beyond/system";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";

export interface FlexBoxProps extends PropsOf<"div"> {
  alignItems?: Property.AlignItems;
  direction?: Property.FlexDirection;
  wrap?: Property.FlexWrap;
  grow?: 0 | 1;
  contents?: Property.JustifyContent;
}

export const FlexBox: React.FC<FlexBoxProps> = props => {
  const { alignItems, direction, wrap, grow, contents } = props;

  const className = css({
    display: "flex",
    alignItems,
    flexDirection: direction,
    flexWrap: wrap,
    flexGrow: grow,
    justifyContent: contents
  });

  // sizing props are passed here to overide the default sizings
  const style = createStyles<BeyondStyles>({}, GlobalStyles);
  return createComponent("div", { ...props, className }, style);
};
