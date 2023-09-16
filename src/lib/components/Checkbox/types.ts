export enum CheckboxThemes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
  dark = 'dark',
}

export interface CheckboxProps {
  theme?: keyof typeof CheckboxThemes;
}
