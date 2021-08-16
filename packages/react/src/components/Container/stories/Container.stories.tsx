/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Container } from "../Container";
export default {
  title: "Container",
  component: Container
} as Meta;

export const Basic = () => {
  return <Container bgcolor='blue'>Beyond UI</Container>;
};
