import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { forwardRef } from 'react';

const SelectSeparator = forwardRef<
  React.ElementRef<typeof Select.Separator>,
  React.ComponentPropsWithoutRef<typeof Select.Separator>
>(({ className, ...props }, ref) => (
  <Select.Separator
    ref={ref}
    className={twMerge('au-select-separator -mx-1 my-1 h-px', className)}
    {...props}
  />
));

SelectSeparator.displayName = Select.Separator.displayName;

export default SelectSeparator;
