import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Command as CommandPrimitive } from 'cmdk';

export const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={twMerge(
      'flex h-full w-full flex-col overflow-hidden rounded-md',
      className,
    )}
    {...props}
  />
));
CommandRoot.displayName = CommandPrimitive.displayName;
