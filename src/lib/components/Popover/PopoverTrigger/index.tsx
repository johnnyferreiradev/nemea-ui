import { twMerge } from 'tailwind-merge';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverTriggerProps } from './types';

export default function PopoverTrigger({
  className = '',
  id,
  children,
}: PopoverTriggerProps) {
  return (
    <RadixPopover.Trigger
      className={twMerge('au-popover-trigger', className)}
      id={id}
      asChild
    >
      {children}
    </RadixPopover.Trigger>
  );
}
