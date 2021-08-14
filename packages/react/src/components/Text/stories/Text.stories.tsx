/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Text } from "../Text";
export default {
  title: "Text",
  component: Text
} as Meta;

export const Basic = () => {
  return <Text>cool</Text>;
};
