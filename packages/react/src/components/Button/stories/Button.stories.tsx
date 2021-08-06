import React from "react";
import Button, { AnotherButton } from "../Button";
export default {
  title: "Button title",
  component: Button
};
export const Basic = () => (
  <Button color='blue' backgroundColor='red'>
    Hello
  </Button>
);
export const AnotherBasic = () => (
  <AnotherButton color='blue'>Another Basic</AnotherButton>
);
