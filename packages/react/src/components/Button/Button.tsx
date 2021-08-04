import styled from "styled-components"
import { createComponent } from "@beyond/system";

export interface ButtonProps {
  color?: string;
}

const ButtonView = styled.button`
    background:"palevioletred";
    color: "palevioletred";
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export const Button = createComponent<"button",ButtonProps>(ButtonView, {
  displayName: "Button",
  props: {}
});
