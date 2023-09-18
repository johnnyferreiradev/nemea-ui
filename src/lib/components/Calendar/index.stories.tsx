import { Meta, StoryObj } from '@storybook/react';

import Calendar from './index';
import { CalendarProps } from './types';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} as Meta<CalendarProps>;

export const Default: StoryObj<CalendarProps> = {};
