import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';
import { ButtonLabelProps } from './types';

export default {
  title: 'Components/Button/ButtonLabel',
  component: Button.Label,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <Button.Root>{Story()}</Button.Root>;
    },
  ],
  args: {
    children: 'Button',
  },
} as Meta<ButtonLabelProps>;

export const Default: StoryObj<ButtonLabelProps> = {};
