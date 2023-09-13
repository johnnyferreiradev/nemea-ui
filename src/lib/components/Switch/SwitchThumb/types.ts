import { SwitchThumbProps as RadixSwitchThumbProps } from '@radix-ui/react-switch';

enum SwitchThumbSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface SwitchThumbProps extends RadixSwitchThumbProps {
  size?: keyof typeof SwitchThumbSizes;
}
