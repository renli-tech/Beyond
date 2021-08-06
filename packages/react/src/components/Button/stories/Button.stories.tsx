import React from "react";
import { Meta } from "@storybook/react";
import Button, { AnotherButton } from "../Button";
export default {
  title: "Button",
  component: Button
} as Meta;
export const Basic = () => <Button radius='100'>Hello</Button>;
export const RoundedBasic = () => <AnotherButton>Another Basic</AnotherButton>;
