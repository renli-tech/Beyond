import React from "react";
import { StandardLonghandProperties } from "csstype";

// type PropsOf<TTag> = TTag extends React.ElementType
//   ? React.ComponentProps<TTag>
//   : never;

type RemovePropsWeControl<ElementProps, OurProps> = Omit<
  ElementProps,
  keyof OurProps
>;

// export type Props<TTag, OurProps extends {}> = RemovePropsWeControl<
//   PropsOf<TTag>,
//   OurProps
// > &
//   OurProps;

export type Props<OurProps> = React.HTMLAttributes<HTMLElement> &
  React.ClassAttributes<HTMLElement> &
  RemovePropsWeControl<
    React.HTMLAttributes<HTMLElement> & React.ClassAttributes<HTMLElement>,
    OurProps
  >;

export type BeyondStyles = StandardLonghandProperties<
  string | number,
  string & {}
>;
