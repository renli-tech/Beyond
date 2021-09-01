/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { FlexBox } from "../FlexBox";
import { Button } from "../../Button";
export default {
  title: "Flex Box",
  component: FlexBox
} as Meta;

export const Basic = () => {
  return (
    <FlexBox alignItems='center' contents='space-evenly'>
      <Button
        radius='12'
        onClick={() => console.log("hello")}
        backgroundColorScheme='green'
        title='Hello World'
        cursor='move'
        ring={4}
      >
        Submit Form
      </Button>
      <Button
        size='xs'
        radius='12'
        onClick={() => console.log("hello")}
        backgroundColorScheme='green'
        title='Hello World'
        cursor='move'
        ring={4}
      >
        Submit Form
      </Button>
    </FlexBox>
  );
};
