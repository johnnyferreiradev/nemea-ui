interface DateFNSInjectedLocale {
  __localeId__: string;
}

export interface LocaleCode {
  [key: string]: string;
}

export type Window_DateFNS = Window & typeof globalThis & DateFNSInjectedLocale;

enum DatePickerControlThemes {
  white = 'white',
  gray = 'gray',
  noBorder = 'noBorder',
  shadow = 'shadow',
  dark = 'dark',
}

enum DatePickerControlSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export interface DatePickerProps {
  className?: string;
  id?: string;
  wrapperId?: string;
  disabled?: boolean;
  theme?: keyof typeof DatePickerControlThemes;
  size?: keyof typeof DatePickerControlSizes;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  value?: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  dateFormat?: string;
  customInput?: React.ReactNode;
  invalid?: boolean;
}
