export enum BadgeThemes {
  primary = 'primary',
  primary100 = 'primary100',
  secondary = 'secondary',
  secondary200 = 'secondary200',
  secondary_20 = 'secondary_20',
  tertiary1 = 'tertiary1',
  tertiary3 = 'tertiary3',
  supportPastel2 = 'supportPastel2',
  supportPastel2_20 = 'supportPastel2_20',
  gray200 = 'gray200',
  gray300 = 'gray300',
  gray200White = 'gray200White',
  success100 = 'success100',
  danger100 = 'danger100',
  danger200 = 'danger200',
  dark = 'dark',

  outlinePrimary = 'outlinePrimary',
  outlinePrimary100 = 'outlinePrimary100',
  outlineSecondary = 'outlineSecondary',
  outlineSecondary200 = 'outlineSecondary200',
  outlineSecondary_20 = 'outlineSecondary_20',
  outlineTertiary1 = 'outlineTertiary1',
  outlineTertiary3 = 'outlineTertiary3',
  outlineSupportPastel2 = 'outlineSupportPastel2',
  outlineSupportPastel2_20 = 'outlineSupportPastel2_20',
  outlineGray200 = 'outlineGray200',
  outlineGray300 = 'outlineGray300',
  outlineGray200White = 'outlineGray200White',
  outlineSuccess100 = 'outlineSuccess100',
  outlineDanger100 = 'outlineDanger100',
  outlineDanger200 = 'outlineDanger200',
  outlineDark = 'outlineDark',
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  backgroundClassName?: string;
  contentClassName?: string;
  id?: string;
  children?: React.ReactNode;
  theme?: keyof typeof BadgeThemes;
}
