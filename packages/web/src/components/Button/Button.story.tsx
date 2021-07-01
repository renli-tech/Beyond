import React, { FC } from 'react'
import { color } from '@storybook/addon-knobs'
import { Button } from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const basic: FC = () => <Button />

export const custom: FC = () => <Button color={color('Color', '#d36ac2')} />
