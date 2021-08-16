/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { FlexBox } from "../FlexBox";
import { Avatar } from "../../Avatar";
export default {
  title: "Flex Box",
  component: FlexBox
} as Meta;

export const Basic = () => {
  return (
    <FlexBox alignItems='center' contents='space-evenly'>
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='lg'
        title='Renli Logo'
      />
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='4xl'
        title='Renli Logo'
      />
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='8xl'
        title='Renli Logo'
      />
    </FlexBox>
  );
};
