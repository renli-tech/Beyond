/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Icon } from "../Icon";
import { RiBankFill } from "react-icons/ri";
export default {
  title: "Icon",
  component: Icon
} as Meta;

export const Basic = () => {
  return <Icon as={RiBankFill} color='red' size='xs' />;
};
