/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Meta } from "@storybook/react";
import { ToolTip } from "../ToolTip";
import { Container } from "../../Container";
export default {
  title: "ToolTip",
  component: ToolTip
} as Meta;

export const Basic = () => {
  return (
    <Container padding='72'>
      <ToolTip aria-label='Life is not that problematic' toolTipPosition='west'>
        This text is very long
      </ToolTip>
    </Container>
  );
};
