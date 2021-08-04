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
  const ResultComponent: React.FC<Props<TTag, OurProps>> = () => {
    return React.createElement(view)
  };

  ResultComponent.displayName = displayName || "BeyondComponent";

  return ResultComponent;
}
