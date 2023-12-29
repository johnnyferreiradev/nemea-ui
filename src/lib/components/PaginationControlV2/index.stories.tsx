import { Meta, StoryObj } from '@storybook/react';

import PaginationControlV2 from './index';
import { PaginationControlV2Props } from './types';

export default {
  title: 'Components/PaginationControlV2',
  component: PaginationControlV2,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    totalPages: 10,
  },
} as Meta<PaginationControlV2Props>;

export const Default: StoryObj<PaginationControlV2Props> = {};
