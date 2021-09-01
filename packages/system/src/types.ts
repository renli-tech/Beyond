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

type PropsWeControl = "as" | "color" | "width" | "height";

export type RemovePropsWeControl<ElementProps, OurProps> = Omit<
  ElementProps,
  keyof OurProps
>;
export type PropsOf<TTag extends keyof JSX.IntrinsicElements> = Omit<
  React.ComponentProps<TTag>,
  PropsWeControl
>;

export type Props<OurProps> = OurProps &
  RemovePropsWeControl<
    React.HTMLAttributes<HTMLElement> & React.ClassAttributes<HTMLElement>,
    OurProps
  >;
