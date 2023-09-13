import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';
import { ButtonBadgeProps } from './types';

export default {
  title: 'Components/Button/ButtonBadge',
  component: Button.Badge,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Button.Root>
          <Button.Label>Button</Button.Label>
          {Story()}
        </Button.Root>
      );
    },
  ],
  args: {
    children: '10',
  },
} as Meta<ButtonBadgeProps>;

export const Default: StoryObj<ButtonBadgeProps> = {};
