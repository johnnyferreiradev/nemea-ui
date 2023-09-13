import { twMerge } from 'tailwind-merge';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverAnchorProps } from './types';

export default function PopoverAnchor({
  className = '',
  id,
  children,
}: PopoverAnchorProps) {
  return (
    <RadixPopover.Anchor
      className={twMerge('au-popover-anchor', className)}
      id={id}
      asChild
    >
      {children}
    </RadixPopover.Anchor>
  );
}
