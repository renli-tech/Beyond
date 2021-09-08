/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Badge } from "../Badge";
import { Container } from "../../Container";

export default {
  title: "Badge",
  component: Badge
} as Meta;

export const Basic = () => {
  return (
    <Container>
      <Badge className='button' colorScheme='green'>
        Success
      </Badge>
      <Badge className='button' colorScheme='red'>
        Danger
      </Badge>
      <Badge className='button' colorScheme='sky' textTransform='uppercase'>
        New
      </Badge>
    </Container>
  );
};
