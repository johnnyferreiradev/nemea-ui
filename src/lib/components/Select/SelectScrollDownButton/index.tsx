import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';
import { CaretDown } from '@phosphor-icons/react';

import { SelectScrollDownButtonProps } from './types';

export default function SelectScrollDownButton({
  className = '',
  children,
}: SelectScrollDownButtonProps) {
  return (
    <Select.ScrollDownButton
      className={twMerge(
        'au-select-scroll-down-button au-item flex justify-center items-center',
        className,
      )}
    >
      {children || (
        <div className="px-2 py-1 text-sm">
          <CaretDown />
        </div>
      )}
    </Select.ScrollDownButton>
  );
}
