/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { Form } from "../Form";
import { Button } from "../../Button";
import { TextInput } from "../../TextInput";
export default {
  title: "Form",
  component: Form
} as Meta;

export const Basic = () => {
  return (
    <Form>
      <TextInput placeholder='Username' />
      <Button>Submit</Button>
    </Form>
  );
};
