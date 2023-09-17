import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check } from '@phosphor-icons/react';

import { forwardRef } from 'react';

const DropdownCheckboxItem = forwardRef<
  React.ElementRef<typeof DropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenu.CheckboxItem
    ref={ref}
    className={twMerge(
      'au-dropdown-checkbox-item au-item w-full py-2 px-3 pl-6',
      'text-base text-start transition rounded-md',
      'outline-none cursor-pointer flex items-center gap-1',
      'data-[disabled]:cursor-default',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-3 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenu.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenu.ItemIndicator>
    </span>
    {children}
  </DropdownMenu.CheckboxItem>
));

DropdownCheckboxItem.displayName = DropdownMenu.CheckboxItem.displayName;

export default DropdownCheckboxItem;
