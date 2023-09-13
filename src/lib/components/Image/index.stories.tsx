import { Meta, StoryObj } from '@storybook/react';

import Image from './index';
import { ImageProps } from './types';

import profileAvatar from '../../assets/images/dog-profile.jpeg';

export default {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: profileAvatar,
    alt: 'Avatar',
  },
} as Meta<ImageProps>;

export const Default: StoryObj<ImageProps> = {};
