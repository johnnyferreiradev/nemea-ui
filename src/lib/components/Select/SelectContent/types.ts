enum ContentThemes {
  light = 'light',
  dark = 'dark',
}

export interface SelectContentProps {
  theme?: keyof typeof ContentThemes;
}
