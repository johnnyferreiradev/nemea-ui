import { twMerge } from 'tailwind-merge';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverCloseProps } from './types';

export default function PopoverClose({
  className = '',
  id,
  children,
}: PopoverCloseProps) {
  return (
    <RadixPopover.Close
      className={twMerge('au-popover-close', className)}
      id={id}
      asChild
    >
      {children}
    </RadixPopover.Close>
  );
}
