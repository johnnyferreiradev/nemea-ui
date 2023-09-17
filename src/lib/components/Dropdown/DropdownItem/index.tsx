import { forwardRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

const DropdownItem = forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={twMerge(
      'au-dropdown-item au-item w-full py-2 px-3',
      'outline-none cursor-pointer transition rounded-md',
      'text-base text-start',
      'data-[disabled]:cursor-default',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));

DropdownItem.displayName = DropdownMenu.Item.displayName;

export default DropdownItem;
