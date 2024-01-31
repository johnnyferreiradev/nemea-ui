import { Command as CommandPrimitive } from 'cmdk';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={twMerge(
      '-mx-1 h-px bg-grayscale-100 dark:bg-grayscale-800',
      className,
    )}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
