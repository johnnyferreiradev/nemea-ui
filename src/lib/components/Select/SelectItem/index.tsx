import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { SelectItemProps } from './types';

export default function SelectItem({
  className = '',
  value,
  asChild,
  disabled,
  textValue,
  children,
}: SelectItemProps) {
  return (
    <Select.Item
      className={twMerge(
        'au-select-item au-item w-full py-3 px-4 pr-5 mb-[1px]',
        'outline-none cursor-pointer transition rounded-none',
        'text-lg text-start flex items-center gap-2',
        'data-[disabled]:cursor-default',
        className,
      )}
      value={value}
      asChild={asChild}
      disabled={disabled}
      textValue={textValue}
    >
      {children}
    </Select.Item>
  );
}
