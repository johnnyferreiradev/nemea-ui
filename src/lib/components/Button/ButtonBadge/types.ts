enum ButtonBadgePositions {
  'top-right' = 'top-right',
  'top-left' = 'top-left',
  'bottom-right' = 'bottom-right',
  'bottom-left' = 'bottom-left',
}

enum ButtonBadgeColors {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  gray = 'gray',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
  dark = 'dark',
  light = 'light',
}

export interface ButtonBadgeProps {
  className?: string;
  children?: React.ReactNode;
  position?: keyof typeof ButtonBadgePositions;
  color?: keyof typeof ButtonBadgeColors;
}
