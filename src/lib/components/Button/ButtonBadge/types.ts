enum ButtonBadgePositions {
  'top-right' = 'top-right',
  'top-left' = 'top-left',
  'bottom-right' = 'bottom-right',
  'bottom-left' = 'bottom-left',
}

enum ButtonBadgeColors {
  primary = 'primary',
  secondary = 'secondary',
  tertiary1 = 'tertiary1',
  tertiary2 = 'tertiary2',
  tertiary3 = 'tertiary3',
  supportPastel2 = 'supportPastel2',
  gray = 'gray',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  dark = 'dark',
  white = 'white',
}

export interface ButtonBadgeProps {
  className?: string;
  children?: React.ReactNode;
  position?: keyof typeof ButtonBadgePositions;
  color?: keyof typeof ButtonBadgeColors;
}
