/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../Button";
import { ThemeProvider } from "@beyond/shared";
export default {
  title: "Button",
  component: Button
} as Meta;

export const Basic = () => {
  return (
    <Button
      radius='12'
      backgroundColorScheme='green'
      bgcolor='red'
      title='Hello World'
      paddingLeft='200px'
    >
      Hello
    </Button>
  );
};

export const SizedButtons = () => {
  return (
    <div>
      <Button size='xs'>Create Account</Button>{" "}
    </div>
  );
};
export const ThemedButton = () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#f00"
        }
      }}
    >
      <Button bgcolor='green' onClick={e => console.log("clicked", e)}>
        Hello World
      </Button>
    </ThemeProvider>
  );
};
