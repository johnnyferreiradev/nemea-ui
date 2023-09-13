import { Meta, StoryObj } from '@storybook/react';
import 'react-datepicker/dist/react-datepicker.css';

import * as dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import timezonePlugin from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import DatePicker from './index';
import { DatePickerProps } from './types';

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);
dayjs.extend(localizedFormat);

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} as Meta<DatePickerProps>;

export const Default: StoryObj<DatePickerProps> = {};
