export enum SwitchSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum SwitchColors {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
}

export interface SwitchProps {
  size?: keyof typeof SwitchSizes;
  theme?: keyof typeof SwitchColors;
}
