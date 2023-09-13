import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../index';
import { AvatarProps } from './types';

import profileImage from '../../../assets/images/dog-profile.jpeg';

export default {
  title: 'Components/Avatar/AvatarRoot',
  component: Avatar.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Avatar.Image src={profileImage} alt="Avatar" />
        <Avatar.Fallback>AN</Avatar.Fallback>
      </>
    ),
  },
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {};
