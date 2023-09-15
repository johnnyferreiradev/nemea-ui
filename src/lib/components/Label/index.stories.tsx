import { Meta, StoryObj } from '@storybook/react';

import Label from './index';

export default {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: <>Label</>,
  },
} as Meta;

export const Default: StoryObj = {};
