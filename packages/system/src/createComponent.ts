import React from "react";
import { Props } from "./types";

interface Options<TTag, OurProps> {
  displayName: string;
  props: Props<TTag, OurProps>;
}

export function createComponent<TTag, OurProps>(
  view: React.FC<{}>,
  { props, displayName }: Options<TTag, OurProps>
): React.FunctionComponent<Props<TTag, OurProps>> {
  const ResultComponent: React.FC<Props<TTag, OurProps>> = (props) => {
    return React.createElement(view,props,props.children)
  };

  ResultComponent.displayName = displayName || "BeyondComponent";

  return ResultComponent;
}
