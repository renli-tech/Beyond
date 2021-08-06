/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import {
  BeyondStyles,
  createComponent,
  makeBorder,
  makePaddingHorizontal,
  makePaddingVertical
} from "@beyond/system";
import { getSpacing } from "@beyond/theme";
import { Property } from "csstype";
import styled from "styled-components";

export interface ButtonProps {
  color?: Property.Color;
  backgroundColor?: Property.BackgroundColor;
  radius?: string | number;
}

const BeyondButtonStyles: BeyondStyles = {
  color: "white",
  backgroundColor: "slateblue",
  ...makePaddingHorizontal(getSpacing("6").value),
  ...makeBorder("none", "none", "transparent", getSpacing("2").value, true),
  ...makePaddingVertical(getSpacing("3").value)
};

const ButtonBase = styled.button<ButtonProps>((props: ButtonProps) => ({
  ...BeyondButtonStyles,
  color: props.color || BeyondButtonStyles.color,
  backgroundColor: props.backgroundColor || BeyondButtonStyles.backgroundColor,
  borderRadius: props.radius
}));

const Button = createComponent<ButtonProps>(ButtonBase);
export const AnotherButton = createComponent(ButtonBase);

export default Button;
