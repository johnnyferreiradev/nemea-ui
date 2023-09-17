import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as RadixSelect from '@radix-ui/react-select';
import { CaretDown } from '@phosphor-icons/react';

import { triggerVariants } from './variants';

import { SelectTriggerProps } from './types';

const SelectTrigger = forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger> &
    SelectTriggerProps
>(({ className, children, theme = 'gray', size = 'md', ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={twMerge(triggerVariants({ theme, size }), className)}
    {...props}
  >
    {children}
    <RadixSelect.Icon asChild>
      <CaretDown className="h-4 w-4 opacity-50" />
    </RadixSelect.Icon>
  </RadixSelect.Trigger>
));

SelectTrigger.displayName = RadixSelect.Trigger.displayName;

export default SelectTrigger;
