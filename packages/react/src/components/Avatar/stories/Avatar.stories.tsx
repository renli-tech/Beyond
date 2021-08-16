/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Avatar } from "../Avatar";
import { Container } from "../../Container";
export default {
  title: "Avatar",
  component: Avatar
} as Meta;

export const Basic = () => {
  return (
    <Container bgcolor='red'>
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
    </Container>
  );
};
