import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { forwardRef } from 'react';

const SelectValue = forwardRef<
  React.ElementRef<typeof Select.Value>,
  React.ComponentPropsWithoutRef<typeof Select.Value>
>(({ className, ...props }, ref) => (
  <Select.Value
    ref={ref}
    className={twMerge(
      'data-[placeholder]:text-graycale-400 text-red-400',
      className,
    )}
    {...props}
  />
));

SelectValue.displayName = Select.Value.displayName;

export default SelectValue;
