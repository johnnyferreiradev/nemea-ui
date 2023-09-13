import { Meta, StoryObj } from '@storybook/react';

import Icon from '../Icon';

import ImagePlaceholder from './index';
import { ImagePlaceholderProps } from './types';

export default {
  title: 'Components/ImagePlaceholder',
  component: ImagePlaceholder,
  tags: ['autodocs'],
  args: {
    children: <Icon name="image-fill" size="2xl" />,
  },
} as Meta<ImagePlaceholderProps>;

export const Default: StoryObj<ImagePlaceholderProps> = {};
