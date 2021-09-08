/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { CheckBox } from "../CheckBox";
export default {
  title: "CheckBox",
  component: CheckBox
} as Meta;

export const Basic = () => {
  return <CheckBox>Agree to terms and conditions</CheckBox>;
};

export const Disabled = () => {
  return <CheckBox disabled>Agree to terms and conditions</CheckBox>;
};
