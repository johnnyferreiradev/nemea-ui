import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../index';
import { AvatarImageProps } from './types';

import profileImage from '../../../assets/images/dog-profile.jpeg';

export default {
  title: 'Components/Avatar/AvatarImage',
  component: Avatar.Image,
  tags: ['autodocs'],
  args: {
    src: profileImage,
    alt: 'Avatar',
  },
  decorators: [(Story) => <Avatar.Root>{Story()}</Avatar.Root>],
} as Meta<AvatarImageProps>;

export const Default: StoryObj<AvatarImageProps> = {};
