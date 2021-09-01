/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../Button";
import { ThemeProvider } from "@beyond-ui/shared";
export default {
  title: "Button",
  component: Button
} as Meta;

export const Basic = () => {
  return (
    <Button
      radius='12'
      onClick={() => console.log("hello")}
      backgroundColorScheme='green'
      title='Hello World'
      cursor='move'
      ring={4}
    >
      Submit Form
    </Button>
  );
};

export const SizedButtons = () => {
  return (
    <div>
      <Button
        size='xs'
        ring='4'
        backgroundColorScheme='red'
        sm={{
          bg: "blue"
        }}
        landscape={{
          bg: "green"
        }}
      >
        Create Account
      </Button>
      <Button
        size='2xl'
        ring='4'
        backgroundColorScheme='red'
        sm={{
          bg: "blue"
        }}
        landscape={{
          bg: "green"
        }}
      >
        Create Account
      </Button>
    </div>
  );
};
export const ThemedButton = () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#ff0"
        }
      }}
    >
      <Button
        ring='7'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(e: any) => console.log("clicked", e)}
      >
        Hello World
      </Button>
    </ThemeProvider>
  );
};
