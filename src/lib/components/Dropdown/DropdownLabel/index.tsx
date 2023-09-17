import { forwardRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

const DropdownLabel = forwardRef<
  React.ElementRef<typeof DropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenu.Label
    ref={ref}
    className={twMerge(
      'au-dropdown-label px-3',
      'py-1.5 text-start text-xs',
      inset && 'pl-6',
      className,
    )}
    {...props}
  />
));

DropdownLabel.displayName = DropdownMenu.Label.displayName;

export default DropdownLabel;
