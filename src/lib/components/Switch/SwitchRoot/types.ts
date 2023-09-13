import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

export enum SwitchSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface SwitchProps extends RadixSwitchProps {
  asChild?: boolean;
  size?: keyof typeof SwitchSizes;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}
