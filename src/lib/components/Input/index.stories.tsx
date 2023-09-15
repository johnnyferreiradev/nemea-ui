import { Meta, StoryObj } from '@storybook/react';

import Input from './index';
import { InputProps } from './types';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
