import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from '@phosphor-icons/react';

import { checkboxVariants } from './variants';

import { CheckboxProps } from './types';

const Checkbox = forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> & CheckboxProps
>(({ className, theme = 'primary', ...props }, ref) => (
  <RadixCheckbox.Root
    ref={ref}
    className={twMerge(checkboxVariants({ theme }), className)}
    {...props}
  >
    <RadixCheckbox.Indicator className="au-checkbox-indicator flex items-center justify-center">
      <Check className="h-4 w-4" weight="bold" />
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
));

Checkbox.displayName = RadixCheckbox.Root.displayName;

export default Checkbox;
