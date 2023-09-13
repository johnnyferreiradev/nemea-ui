import { twMerge } from 'tailwind-merge';
import ReactDatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';

import { datePickerControlWrapper, datePickerControl } from './variants';

import {
  getCalendarOpenToDate as getPickerOpenToDate,
  getDayClassNames as getPickerDayClassNames,
} from './utils';

import { DatePickerProps } from './types';

import './styles.css';

export function DatePicker({
  className = '',
  id,
  wrapperId,
  disabled,
  size = 'md',
  theme = 'white',
  actions,
  icon,
  value,
  onChange,
  customInput,
  dateFormat,
  maxDate,
  minDate,
  placeholder,
  invalid,
}: DatePickerProps) {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        datePickerControlWrapper({ size, theme, invalid, className }),
        disabled ? 'is-disabled' : '',
      )}
      id={wrapperId}
    >
      <span>{icon}</span>
      <ReactDatePicker
        selected={value}
        onChange={onChange}
        openToDate={getPickerOpenToDate(value)}
        className={datePickerControl({ size, theme })}
        wrapperClassName="w-full"
        popperClassName="au-datepicker-popper"
        monthClassName={() => 'au-datepicker-month'}
        calendarClassName="au-datepicker-calendar"
        weekDayClassName={() => 'au-datepicker-week-day'}
        dayClassName={getPickerDayClassNames}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        placeholderText={placeholder || t('DD/MM/YYYY')}
        dateFormat={dateFormat || 'dd/MM/yyyy'}
        autoComplete="off"
        customInput={customInput}
        id={id}
      />
      {actions}
    </div>
  );
}

export default DatePicker;
