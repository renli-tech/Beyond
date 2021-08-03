// Button.stories.ts | Button.stories.tsx

import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});