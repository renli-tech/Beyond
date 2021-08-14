/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Avatar } from "../Avatar";
export default {
  title: "Avatar",
  component: Avatar
} as Meta;

export const Basic = () => {
  return (
    <Avatar
      src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
      size='4xl'
    />
  );
};
