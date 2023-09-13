import * as RadixPopover from '@radix-ui/react-popover';

import { popoverContentVariants } from './variants';

import { PopoverContentProps } from './types';

export default function PopoverContent({
  className = '',
  id,
  children,
  theme = 'white',
  side = 'bottom',
  ...rest
}: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        className={popoverContentVariants({ theme, className })}
        id={id}
        avoidCollisions
        sideOffset={5}
        collisionPadding={8}
        side={side}
        {...rest}
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
}
