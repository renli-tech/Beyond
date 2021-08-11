import * as React from "react";
import { BeyondComponent, BeyondStyles, Props, Target } from "./types";

export const createComponent = <OurProps>(
  target: Target,
  props: Props<OurProps>,
  style: BeyondStyles
): BeyondComponent => {
  const newProps: Props<OurProps> = {
    ...props,
    style
  };

  return React.createElement(target, newProps, props.children);
};
