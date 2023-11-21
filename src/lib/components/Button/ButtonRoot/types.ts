export enum ButtonThemes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  gray = 'gray',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
  dark = 'dark',
  light = 'light',

  linkPrimary = 'linkPrimary',
  linkSecondary = 'linkSecondary',
  linkTertiary = 'linkTertiary',
  linkGray = 'linkGray',
  linkSuccess = 'linkSuccess',
  linkFailure = 'linkFailure',
  linkWarning = 'linkWarning',
  linkDark = 'linkDark',
  linkLight = 'linkLight',

  primaryFlat = 'primaryFlat',
  secondaryFlat = 'secondaryFlat',
  tertiaryFlat = 'tertiaryFlat',
  grayFlat = 'grayFlat',
  successFlat = 'successFlat',
  failureFlat = 'failureFlat',
  warningFlat = 'warningFlat',
  darkFlat = 'darkFlat',
  lightFlat = 'lightFlat',

  outlinePrimary = 'outlinePrimary',
  outlineSecondary = 'outlineSecondary',
  outlineTertiary = 'outlineTertiary',
  outlineGray = 'outlineGray',
  outlineSuccess = 'outlineSuccess',
  outlineFailure = 'outlineFailure',
  outlineWarning = 'outlineWarning',
  outlineDark = 'outlineDark',
  outlineLight = 'outlineLight',

  grayPrimary = 'grayPrimary',
  graySecondary = 'graySecondary',
  grayTertiary = 'grayTertiary',
  graySuccess = 'graySuccess',
  grayFailure = 'grayFailure',
  grayWarning = 'grayWarning',
  grayDark = 'grayDark',
  grayLight = 'grayLight',
}

enum ButtonSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

enum ButtonAligns {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  asChild?: boolean;
  theme?: keyof typeof ButtonThemes;
  size?: keyof typeof ButtonSizes;
  align?: keyof typeof ButtonAligns;
}
