import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverRootProps } from './types';

export default function PopoverRoot({ children }: PopoverRootProps) {
  return <RadixPopover.Root>{children}</RadixPopover.Root>;
}
