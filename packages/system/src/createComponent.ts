import * as React from "react";
import { BeyondComponent, BeyondStyles, Target } from "./types";
import { generateId } from "@beyond-ui/utils";

export const createComponent = <OurProps>(
  target: Target,
  props: OurProps,
  style: BeyondStyles,
  children: React.ReactNode
): BeyondComponent => {
  const newProps: OurProps = {
    ...props,
    id: generateId(),
    style
  };

  return React.createElement<OurProps>(target, newProps, children);
};
