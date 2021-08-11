import * as React from "react";
import { BeyondComponent, BeyondStyles, Props, Target } from "./types";
import { generateId } from "./utils";

export const createComponent = <OurProps>(
  target: Target,
  props: Props<OurProps>,
  style: BeyondStyles
): BeyondComponent => {
  const newProps: Props<OurProps> = {
    ...props,
    id: generateId(),
    style
  };

  return React.createElement(target, newProps, props.children);
};