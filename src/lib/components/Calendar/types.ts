import { DayPicker, DateRange as ReactDayDateRange } from 'react-day-picker';

export interface DateRange extends ReactDayDateRange {}

export type CalendarProps = React.ComponentProps<typeof DayPicker>;
