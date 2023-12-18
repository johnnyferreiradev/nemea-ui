export enum SeparatorColors {
  primary = 'border-primary-50 dark:border-primary-800',
  secondary = 'border-secondary-50  dark:border-secondary-800',
  tertiary = 'border-tertiary-50 dark:border-tertiary-800',
  gray = 'border-grayscale-50 dark:border-grayscale-800',
  success = 'border-success-50 dark:border-success-800',
  failure = 'border-failure-50 dark:border-failure-800',
  warning = 'border-warning-50 dark:border-warning-800',
  dark = 'border-dark dark:border-light',
  light = 'border-light dark:border-dark',
}

export interface SeparatorProps extends React.HTMLProps<HTMLHRElement> {
  className?: string;
  id?: string;
  color?: keyof typeof SeparatorColors;
  orientation?: 'horizontal' | 'vertical';
}
