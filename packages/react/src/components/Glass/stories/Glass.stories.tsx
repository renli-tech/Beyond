/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Glass } from "../Glass";
import { FlexBox } from "../../FlexBox";
export default {
  title: "Glass",
  component: Glass
} as Meta;

export const Basic = () => {
  return (
    <FlexBox
      justifyContent='center'
      alignItems='center'
      background='linear-gradient(red,blue)'
      h='screen'
      w='screen'
    >
      <Glass
        boxSize='6/12'
        color='white'
        padding='4'
        showOutlines='true'
        rounded='xl'
      >
        This is a Glass
      </Glass>
    </FlexBox>
  );
};
