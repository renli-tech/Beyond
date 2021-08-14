/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { TextInput } from "../TextInput";
export default {
  title: "Text Input",
  component: TextInput
} as Meta;

export const Basic = () => {
  return <TextInput placeholder='Write Something' placeholderColor='white' />;
};
