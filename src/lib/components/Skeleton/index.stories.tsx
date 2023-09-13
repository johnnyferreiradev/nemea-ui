import { Meta, StoryObj } from '@storybook/react';

import Skeleton from './index';
import { SkeletonProps } from './types';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {
    width: '180px',
    height: '30px',
  },
} as Meta<SkeletonProps>;

export const Default: StoryObj<SkeletonProps> = {};

export const Rounded: StoryObj<SkeletonProps> = {
  args: {
    width: '100px',
    height: '100px',
    rounded: true,
  },
};
