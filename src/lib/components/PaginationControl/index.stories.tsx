import { Meta, StoryObj } from '@storybook/react';

import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import PaginationControl from './index';
import { PaginationControlProps } from './types';

export default {
  title: 'Components/PaginationControl',
  component: PaginationControl,
  tags: ['autodocs'],
  args: {
    pageCount: 10,
    previousLabel: <CaretLeft />,
    nextLabel: <CaretRight />,
  },
} as Meta<PaginationControlProps>;

export const Default: StoryObj<PaginationControlProps> = {};
