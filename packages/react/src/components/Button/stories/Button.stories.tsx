/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../Button";
import { ThemeProvider } from "@beyond/shared";
export default {
  title: "Button",
  component: Button,
  parameters: { actions: { argTypesRegex: "^on.*" } }
} as Meta;

export const Basic = () => <Button>Hello</Button>;
export const ThemedButton = () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#f00"
        }
      }}
    >
      <Button bgcolor='sky' onClick={e => console.log("clicked", e)}>
        Hello World
      </Button>
    </ThemeProvider>
  );
};
// export const RoundedBasic = () => <AnotherButton>Another Basic</AnotherButton>;
