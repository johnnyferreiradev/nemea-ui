import { Meta, StoryObj } from '@storybook/react';

import Label from './index';
import { LabelProps } from './types';

export default {
  title: 'Components/Label/LabelRoot',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: <>Label</>,
  },
} as Meta<LabelProps>;

export const Default: StoryObj<LabelProps> = {};
