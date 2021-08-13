/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { FlexBox } from "../FlexBox";
export default {
  title: "FlexBox",
  component: FlexBox
} as Meta;

export const Basic = () => {
  return <FlexBox>Hello</FlexBox>;
};
