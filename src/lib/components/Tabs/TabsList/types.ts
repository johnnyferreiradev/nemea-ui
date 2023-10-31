enum TabsListThemes {
  default = 'default',
  light = 'light',
  dark = 'dark',
  darkUnderline = 'darkUnderline',
  primaryUnderline = 'primaryUnderline',
}

export interface TabsListProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  theme?: keyof typeof TabsListThemes;
}
