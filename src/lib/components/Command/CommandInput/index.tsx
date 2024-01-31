import React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { twMerge } from 'tailwind-merge';

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="flex items-center border-b border-grayscale-100 dark:border-grayscale-800 px-3"
    // eslint-disable-next-line react/no-unknown-property
    cmdk-input-wrapper=""
  >
    <MagnifyingGlass
      className="mr-2 h-4 w-4 shrink-0 opacity-50"
      weight="bold"
    />
    <CommandPrimitive.Input
      ref={ref}
      className={twMerge(
        'flex h-10 w-full bg-transparent py-0 mx-1.5 text-base font-medium',
        'placeholder-grayscale-400 disabled:placeholder-grayscale-300',
        'dark:placeholder-grayscale-500 dark:disabled:placeholder-grayscale-700',
        'disabled:text-grayscale-500 dark:disabled:text-grayscale-400',
        'outline-none disabled:cursor-not-allowed font-normal rounded-none',
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
