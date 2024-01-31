import { Command as CommandPrimitive } from 'cmdk';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={twMerge(
      'relative flex cursor-default select-none items-center py-2 px-3 text-base',
      'rounded-md text-start',
      'outline-none aria-selected:bg-grayscale-100 dark:aria-selected:bg-grayscale-900',
      'data-[disabled]:pointer-events-none data-[disabled]:text-grayscale-50 dark:data-[disabled]:text-grayscale-600',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;
