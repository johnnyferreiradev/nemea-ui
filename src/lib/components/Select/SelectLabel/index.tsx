import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { forwardRef } from 'react';

const SelectLabel = forwardRef<
  React.ElementRef<typeof Select.Label>,
  React.ComponentPropsWithoutRef<typeof Select.Label>
>(({ className, ...props }, ref) => (
  <Select.Label
    ref={ref}
    className={twMerge(
      'au-select-label px-3',
      'py-1.5 text-start text-xs',
      className,
    )}
    {...props}
  />
));

SelectLabel.displayName = Select.Label.displayName;

export default SelectLabel;
