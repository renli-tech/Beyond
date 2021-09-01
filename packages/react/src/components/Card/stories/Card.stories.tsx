/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Card } from "../Card";

export default {
  title: "Card",
  component: Card
} as Meta;

export const Basic = () => {
  return (
    <Card radius='12'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a similique,
      est deserunt obcaecati sint aliquam suscipit totam, voluptatum ducimus
      illum eos porro repellendus! Ea ullam hic tenetur voluptatibus
      accusantium.
    </Card>
  );
};
