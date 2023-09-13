enum TabsListThemes {
  default = 'default',
  white = 'white',
  dark = 'dark',
  darkUnderline = 'darkUnderline',
  primaryUnderline = 'primaryUnderline',
  leftDarkUnderline = 'leftDarkUnderline',
  rightDarkUnderline = 'rightDarkUnderline',
  leftPrimaryUnderline = 'leftPrimaryUnderline',
  rightPrimaryUnderline = 'rightPrimaryUnderline',
}

export interface TabsListProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  theme?: keyof typeof TabsListThemes;
}
