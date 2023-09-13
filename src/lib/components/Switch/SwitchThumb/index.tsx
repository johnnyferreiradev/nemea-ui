import * as Switch from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';

import { switchThumbVariants } from './variants';

import { SwitchThumbProps } from './types';

export default function SwitchThumb({
  className = '',
  asChild,
  size = 'sm',
  children,
}: SwitchThumbProps) {
  return (
    <Switch.Thumb
      asChild={asChild}
      className={twMerge(switchThumbVariants({ size }), className)}
    >
      {children}
    </Switch.Thumb>
  );
}
