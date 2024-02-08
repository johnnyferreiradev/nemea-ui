import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';
import { Check } from '@phosphor-icons/react';

import { forwardRef } from 'react';

const SelectItem = forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ className, children, ...props }, ref) => (
  <Select.Item
    ref={ref}
    className={twMerge(
      'au-select-item au-item w-full py-2 px-3',
      'outline-none cursor-pointer transition rounded-md',
      'text-base text-start flex items-center',
      'data-[disabled]:cursor-default',

      'text-dark',
      'focus:bg-grayscale-100',
      'data-[highlighted]:bg-grayscale-100',
      'data-[disabled]:text-grayscale-200',

      'dark:text-light',
      'dark:focus:bg-grayscale-900',
      'dark:data-[highlighted]:bg-grayscale-900',
      'dark:data-[disabled]:text-grayscale-600',
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <Select.ItemIndicator>
        <Check className="h-3.5 w-3.5 mx-2" />
      </Select.ItemIndicator>
    </span>

    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
));

SelectItem.displayName = Select.Item.displayName;

export default SelectItem;
