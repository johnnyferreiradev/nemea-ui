enum DropdownThemes {
  white = 'white',
  dark = 'dark',
}

export interface DropdownProps {
  children?: React.ReactNode;
  triggerAsChild?: boolean;
  trigger: React.ReactNode;
  className?: string;
  theme?: keyof typeof DropdownThemes;
}
