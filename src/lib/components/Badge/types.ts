export enum BadgeThemes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  gray = 'gray',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
  dark = 'dark',
  light = 'light',

  outlinePrimary = 'outlinePrimary',
  outlineSecondary = 'outlineSecondary',
  outlineTertiary = 'outlineTertiary',
  outlineGray = 'outlineGray',
  outlineSuccess = 'outlineSuccess',
  outlineFailure = 'outlineFailure',
  outlineWarning = 'outlineWarning',
  outlineDark = 'outlineDark',
  outlineLight = 'outlineLight',
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  backgroundClassName?: string;
  contentClassName?: string;
  id?: string;
  children?: React.ReactNode;
  theme?: keyof typeof BadgeThemes;
}
