import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Circle } from '@phosphor-icons/react';

import { forwardRef } from 'react';

const DropdownRadioItem = forwardRef<
  React.ElementRef<typeof DropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenu.RadioItem
    ref={ref}
    className={twMerge(
      'au-dropdown-radio-item au-item w-full py-2 px-3 pl-6',
      'text-base text-start transition rounded-md',
      'outline-none cursor-pointer flex items-center gap-1',
      'data-[disabled]:cursor-default',
      className,
    )}
    {...props}
  >
    <span className="absolute left-3 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenu.ItemIndicator>
        <Circle className="h-3 w-3 fill-current" />
      </DropdownMenu.ItemIndicator>
    </span>
    {children}
  </DropdownMenu.RadioItem>
));

DropdownRadioItem.displayName = DropdownMenu.RadioItem.displayName;

export default DropdownRadioItem;
