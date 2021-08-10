/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../Button";
export default {
  title: "Button",
  component: Button
} as Meta;

export const Basic = () => <Button>Hello</Button>;
// export const RoundedBasic = () => <AnotherButton>Another Basic</AnotherButton>;
