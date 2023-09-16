import { Meta, StoryObj } from '@storybook/react';

import Checkbox from './index';
import { CheckboxProps } from './types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
