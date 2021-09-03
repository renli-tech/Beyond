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
    <Avatar
      src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
      title='Renli Logo'
      rounded='none'
    />
  );
};

export const Sized = () => {
  return (
    <Container>
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='xs'
        title='Renli Logo'
      />
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='sm'
        title='Renli Logo'
      />
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='base'
        title='Renli Logo'
      />
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='lg'
        title='Renli Logo'
      />
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='2xl'
        title='Renli Logo'
      />
      <Avatar
        src='https://avatars.githubusercontent.com/u/80798883?s=200&v=4'
        size='3xl'
        title='Renli Logo'
      />
    </Container>
  );
};
