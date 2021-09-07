/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Badge } from "../Badge";

export default {
  title: "Badge",
  component: Badge
} as Meta;

export const Basic = () => {
  return (
    <Badge className='button' colorScheme='green'>
      cool
    </Badge>
  );
};
