import { forwardRef } from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

import { popoverContentVariants } from './variants';

import { PopoverContentProps } from './types';

const PopoverContent = forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content> &
    PopoverContentProps
>(
  (
    { className, align = 'center', sideOffset = 4, theme = 'light', ...props },
    ref,
  ) => (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={popoverContentVariants({ theme, className })}
        {...props}
      />
    </RadixPopover.Portal>
  ),
);

PopoverContent.displayName = RadixPopover.Content.displayName;

export default PopoverContent;
