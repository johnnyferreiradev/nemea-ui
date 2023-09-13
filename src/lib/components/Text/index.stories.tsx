import { Meta, StoryObj } from '@storybook/react';

import Text from './index';
import { TextProps } from './types';

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Hello World',
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Bold: StoryObj<TextProps> = {
  args: {
    weight: 'bold',
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: '4xl',
  },
};

export const Decorated: StoryObj<TextProps> = {
  args: {
    decoration: 'underline',
  },
};

export const AlignToCenter: StoryObj<TextProps> = {
  args: {
    align: 'center',
  },
};

export const Limited: StoryObj<TextProps> = {
  args: {
    limited: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta vestibulum elit, ac feugiat quam varius ut. Sed vel quam lobortis metus suscipit lobortis. Donec cursus lacinia dolor. Cras rutrum risus at sem ultricies pellentesque. In dignissim, nulla pellentesque elementum porta, dui massa fringilla nisl, id pharetra augue ligula ut ligula. Donec sed neque quis dui rhoncus faucibus. Curabitur vulputate risus metus, vitae accumsan lorem ornare eget.',
  },
};
