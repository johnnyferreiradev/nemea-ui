import { DateRange as ReactDayDateRange } from 'react-day-picker';

export interface DateRange extends ReactDayDateRange {}

export interface CalendarProps {
  className?: string;
  id?: string;
}
