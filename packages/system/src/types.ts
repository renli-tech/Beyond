import * as React from "react";

export type OveriddenStylesProperties = {
  fontFamily?: string;
};

export type BeyondStyles = Omit<
  React.CSSProperties,
  keyof OveriddenStylesProperties
> &
  OveriddenStylesProperties;

export type BeyondComponent = React.ReactElement;

export type Target = keyof JSX.IntrinsicElements | React.FunctionComponent;

export type RemovePropsWeControl<ElementProps, OurProps> = Omit<
  ElementProps,
  keyof OurProps
>;
export type PropsOf<
  TTag extends keyof JSX.IntrinsicElements
> = React.ComponentProps<TTag>;

export type Props<OurProps> = React.HTMLAttributes<HTMLElement> &
  React.ClassAttributes<HTMLElement> &
  RemovePropsWeControl<
    React.HTMLAttributes<HTMLElement> & React.ClassAttributes<HTMLElement>,
    OurProps
  >;
