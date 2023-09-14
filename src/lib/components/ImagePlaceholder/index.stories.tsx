import { Meta, StoryObj } from '@storybook/react';

import { Image } from '@phosphor-icons/react';

import ImagePlaceholder from './index';
import { ImagePlaceholderProps } from './types';

export default {
  title: 'Components/ImagePlaceholder',
  component: ImagePlaceholder,
  tags: ['autodocs'],
  args: {
    children: <Image />,
  },
} as Meta<ImagePlaceholderProps>;

export const Default: StoryObj<ImagePlaceholderProps> = {};
