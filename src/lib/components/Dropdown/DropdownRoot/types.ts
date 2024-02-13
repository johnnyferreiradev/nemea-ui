import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

enum DropdownThemes {
  light = 'light',
  dark = 'dark',
}

export interface DropdownProps extends DropdownMenuProps {
  children?: React.ReactNode;
  triggerAsChild?: boolean;
  trigger: React.ReactNode;
  className?: string;
  theme?: keyof typeof DropdownThemes;
}
