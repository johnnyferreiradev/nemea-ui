import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const DropdownSeparator = forwardRef<
  React.ElementRef<typeof DropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Separator
    ref={ref}
    className={twMerge('-mx-1 my-1 h-px', className)}
    {...props}
  />
));

DropdownSeparator.displayName = DropdownMenu.Separator.displayName;

export default DropdownSeparator;
