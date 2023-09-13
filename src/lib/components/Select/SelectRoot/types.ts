export enum TriggerThemes {
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

  linkPrimary = 'linkPrimary',
  linkSecondary = 'linkSecondary',
  linkTertiary1 = 'linkTertiary1',
  linkTertiary2 = 'linkTertiary2',
  linkTertiary3 = 'linkTertiary3',
  linkSupportPastel2 = 'linkSupportPastel2',
  linkGray = 'linkGray',
  linkSuccess = 'linkSuccess',
  linkDanger = 'linkDanger',
  linkWarning = 'linkWarning',
  linkDark = 'linkDark',
  linkWhite = 'linkWhite',

  primaryFlat = 'primaryFlat',
  secondaryFlat = 'secondaryFlat',
  tertiaryFlat1 = 'tertiaryFlat1',
  tertiaryFlat2 = 'tertiaryFlat2',
  tertiaryFlat3 = 'tertiaryFlat3',
  supportPastelFlat2 = 'supportPastelFlat2',
  grayFlat = 'grayFlat',
  successFlat = 'successFlat',
  dangerFlat = 'dangerFlat',
  warningFlat = 'warningFlat',
  darkFlat = 'darkFlat',
  whiteFlat = 'whiteFlat',

  outlinePrimary = 'outlinePrimary',
  outlineSecondary = 'outlineSecondary',
  outlineTertiary1 = 'outlineTertiary1',
  outlineTertiary2 = 'outlineTertiary2',
  outlineTertiary3 = 'outlineTertiary3',
  outlineSupportPastel2 = 'outlineSupportPastelColor2',
  outlineGray = 'outlineGray',
  outlineSuccess = 'outlineSuccess',
  outlineDanger = 'outlineDanger',
  outlineWarning = 'outlineWarning',
  outlineDark = 'outlineDark',
  outlineWhite = 'outlineWhite',

  grayPrimary = 'grayPrimary',
  graySecondary = 'graySecondary',
  grayTertiary1 = 'grayTertiary1',
  grayTertiary2 = 'grayTertiary2',
  grayTertiary3 = 'grayTertiary3',
  graySupportPastel2 = 'graySupportPastel2',
  graySuccess = 'graySuccess',
  grayDanger = 'grayDanger',
  grayWarning = 'grayWarning',
  grayDark = 'grayDark',
  grayWhite = 'grayWhite',

  primaryShadow = 'primaryShadow',
  secondaryShadow = 'secondaryShadow',
  tertiaryShadow1 = 'tertiaryShadow1',
  tertiaryShadow2 = 'tertiaryShadow2',
  tertiaryShadow3 = 'tertiaryShadow3',
  supportPastelShadow2 = 'supportPastelShadow2',
  grayShadow = 'grayShadow',
  successShadow = 'successShadow',
  dangerShadow = 'dangerShadow',
  warningShadow = 'warningShadow',
  darkShadow = 'darkShadow',
  whiteShadow = 'whiteShadow',

  outlinePrimaryDark = 'outlinePrimaryDark',
  linkGrayDark = 'linkGrayDark',
  linkGrayPrimary = 'linkGrayPrimary',
  grayFlatPrimary = 'grayFlatPrimary',
  graySuccess100 = 'graySuccess100',
}

enum TriggerSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

enum ContentThemes {
  white = 'white',
  dark = 'dark',
}

export interface SelectRootProps {
  className?: string;
  id?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  triggerTheme?: keyof typeof TriggerThemes;
  triggerSize?: keyof typeof TriggerSizes;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  isPopper?: boolean;
  disabled?: boolean;
  contentTheme?: keyof typeof ContentThemes;
}
