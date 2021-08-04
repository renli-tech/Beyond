import React from "react";

type PropsOf<TTag> = TTag extends React.ElementType
  ? React.ComponentProps<TTag>
  : never;

type RemovePropsWeControl<ElementProps, OurProps> = Omit<
  ElementProps,
  keyof OurProps
>;

export type Props<TTag, OurProps extends {}> = RemovePropsWeControl<
  PropsOf<TTag>,
  OurProps
> &
  OurProps;
