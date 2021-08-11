import * as React from "react";

export type BeyondStyles = React.CSSProperties;

export type BeyondComponent = React.ReactElement;

export type Target = keyof JSX.IntrinsicElements | React.FunctionComponent;

type RemovePropsWeControl<ElementProps, OurProps> = Omit<
  ElementProps,
  keyof OurProps
>;

export type Props<OurProps> = React.HTMLAttributes<HTMLElement> &
  React.ClassAttributes<HTMLElement> &
  RemovePropsWeControl<
    React.HTMLAttributes<HTMLElement> & React.ClassAttributes<HTMLElement>,
    OurProps
  >;
