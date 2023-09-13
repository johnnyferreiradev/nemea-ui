import { twMerge } from 'tailwind-merge';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverArrowProps } from './types';

export default function PopoverArrow({
  className = '',
  id,
}: PopoverArrowProps) {
  return (
    <RadixPopover.Arrow
      className={twMerge('au-popover-arrow', className)}
      id={id}
    />
  );
}
