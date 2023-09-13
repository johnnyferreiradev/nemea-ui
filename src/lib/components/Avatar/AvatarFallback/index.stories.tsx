import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../index';
import { AvatarFallbackProps } from './types';

export default {
  title: 'Components/Avatar/AvatarFallback',
  component: Avatar.Fallback,
  tags: ['autodocs'],
  args: {
    children: 'AN',
  },
  decorators: [(Story) => <Avatar.Root>{Story()}</Avatar.Root>],
} as Meta<AvatarFallbackProps>;

export const Default: StoryObj<AvatarFallbackProps> = {};
