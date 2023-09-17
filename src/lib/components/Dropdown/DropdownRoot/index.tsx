import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

import { dropdownVariants } from './variations';

import { DropdownProps } from './types';

export default function DropdownRoot({
  children,
  trigger,
  triggerAsChild,
  className = '',
  theme = 'light',
}: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild={triggerAsChild}
        className={twMerge('outline-none', className)}
      >
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={dropdownVariants({ theme, className })}
          sideOffset={5}
          collisionPadding={8}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
