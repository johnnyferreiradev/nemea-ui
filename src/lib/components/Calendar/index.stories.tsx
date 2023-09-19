import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ptBR from 'date-fns/locale/pt-BR';

import Calendar from './index';
import { CalendarProps, DateRange } from './types';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} as Meta<CalendarProps>;

function DefaultCalendarTemplate() {
  const [date, setDate] = useState<Date>();
  return <Calendar selected={date} onSelect={setDate} />;
}
export const Default = DefaultCalendarTemplate.bind({});

function MultipleCalendarTemplate() {
  const [date, setDate] = useState<Date[]>();
  return <Calendar selected={date} onSelect={setDate} mode="multiple" />;
}
export const Multiple = MultipleCalendarTemplate.bind({});

function RangeCalendarTemplate() {
  const [date, setDate] = useState<DateRange>();
  return <Calendar selected={date} onSelect={setDate} mode="range" />;
}
export const Range = RangeCalendarTemplate.bind({});

export const CustomLocale: StoryObj<CalendarProps> = {
  args: {
    locale: ptBR,
  },
};

export const WithDayDisabled: StoryObj<CalendarProps> = {
  args: {
    disabled: new Date(),
  },
};

export const WithMultiMonths: StoryObj<CalendarProps> = {
  args: {
    numberOfMonths: 2,
  },
};
