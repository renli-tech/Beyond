import * as React from "react";
import { generateId } from "./utils";
import { Props } from "./types";

export const createComponent = <OurProps extends {}>(
  view: React.ComponentType<any>
) => (props: Props<OurProps>): React.ReactElement => {
  const newProps: Props<OurProps> = {
    id: generateId(view)
  } as Props<OurProps>;
  const res = React.createElement(view, newProps, props?.children);

  return res;
};
