/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import * as React from "react";
import styled from "styled-components";

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
}

const ButtonBase = styled.button<ButtonProps>`
  color: ${(props: ButtonProps) => props.color};
  background-color: ${(props: ButtonProps) => props.backgroundColor};
`;

const Button: React.FC<ButtonProps> = props => {
  return React.createElement(ButtonBase, props, props.children);
};

export const createComponent = (view: any) => (
  props:
    | (React.HTMLAttributes<HTMLElement> & React.ClassAttributes<HTMLElement>)
    | null
    | undefined
) => {
  const res = React.createElement(view, props, props?.children);

  return res;
};

export const AnotherButton = createComponent(ButtonBase);

export default Button;
