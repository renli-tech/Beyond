import React from "react";
import { Meta } from "@storybook/react";
import { TextInput } from "../TextInput";
export default {
  title: "TextInput",
  component: TextInput
} as Meta;

export const Basic = () => <TextInput />;
