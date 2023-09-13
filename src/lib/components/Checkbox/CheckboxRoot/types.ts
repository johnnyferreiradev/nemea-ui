import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';

export enum CheckboxThemes {
  primary = 'primary',
}

export interface CheckboxProps extends RadixCheckboxProps {
  className?: string;
  asChild?: boolean;
  theme?: keyof typeof CheckboxThemes;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}
