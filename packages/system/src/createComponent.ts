import * as React from "react";
import { BeyondComponent, BeyondStyles, Props, Target } from "./types";
import { generateId } from "@beyond/utils";

export const createComponent = <OurProps>(
  target: Target,
  props: Props<OurProps>,
  style: BeyondStyles
): BeyondComponent => {
  const newProps: Props<OurProps> = {
    ...props,
    id: generateId(),
    style: { ...style, ...props.style }
  };

  return React.createElement<Props<OurProps>>(target, newProps, props.children);
};
