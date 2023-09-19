import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { DayPicker } from 'react-day-picker';
import { CaretRight, CaretLeft } from '@phosphor-icons/react';

import './styles.css';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [date, setDate] = useState<Date>();

  return (
    <DayPicker
      selected={date}
      onSelect={setDate}
      showOutsideDays={showOutsideDays}
      className={twMerge('am-calendar p-2 m-0 w-max rounded-md', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label:
          'text-sm font-medium text-grayscale-800 dark:text-grayscale-200 leading-3 font-semibold mt-1',
        nav: 'space-x-1 flex items-center pt-1',
        nav_button: twMerge(
          'flex justify-center items-center rounded-md text-dark dark:text-light',
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:bg-grayscale-100 dark:hover:bg-grayscale-600',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'rounded-md w-9 font-semibold text-sm',
        row: 'flex w-full mt-2',

        cell: twMerge(
          'text-center text-sm p-0 relative',
          'focus-within:relative focus-within:z-20',
          'first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md',
        ),
        day: twMerge(
          'flex justify-center items-center h-9 w-9 p-0 font-normal aria-selected:bg-primary-600 aria-selected:text-light text-grayscale-800 rounded-md',
          'dark:text-grayscale-100 hover:bg-grayscale-100 dark:hover:bg-grayscale-800 aria-selected:hover:bg-primary-700 dark:aria-selected:hover:bg-primary-700',
        ),
        day_selected:
          'bg-primary-600 text-light hover:bg-primary-900 hover:text-light focus:bg-primary-600 focus:text-light rounded-md',
        day_today: 'bg-grayscale-50 dark:bg-grayscale-700',
        day_outside: 'text-grayscale-400 opacity-30 dark:opacity-50',
        day_disabled:
          'opacity-30 text-grayscale-300 [&.rdp-button]:bg-transparent [&.rdp-button]:hover:bg-transparent [&.rdp-button]:aria-selected:hover:bg-primary-600',
        day_range_middle: twMerge(
          '[&.rdp-button]:aria-selected:bg-grayscale-50 [&.rdp-button]:aria-selected:text-grayscale-800 [&.rdp-button]:aria-selected:hover:bg-grayscale-100',
          'dark:[&.rdp-button]:aria-selected:bg-grayscale-900 dark:[&.rdp-button]:aria-selected:text-light [&.rdp-button]:aria-selected:rounded-none',
          'dark:[&.rdp-button]:aria-selected:hover:bg-grayscale-800',
        ),
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <CaretLeft className="h-4 w-4" weight="bold" />,
        IconRight: () => <CaretRight className="h-4 w-4" weight="bold" />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export default Calendar;
