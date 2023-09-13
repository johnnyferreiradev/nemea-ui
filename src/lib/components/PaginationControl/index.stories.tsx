import { Meta, StoryObj } from '@storybook/react';

import Icon from '../Icon';

import PaginationControl from './index';
import { PaginationControlProps } from './types';

export default {
  title: 'Components/PaginationControl',
  component: PaginationControl,
  tags: ['autodocs'],
  args: {
    pageCount: 10,
    previousLabel: <Icon name="arrow-left-s-line" />,
    nextLabel: <Icon name="arrow-right-s-line" />,
  },
} as Meta<PaginationControlProps>;

export const Default: StoryObj<PaginationControlProps> = {};
