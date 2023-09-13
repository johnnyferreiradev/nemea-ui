import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';
import { CaretUp } from '@phosphor-icons/react';

import { SelectScrollUpButtonProps } from './types';

export default function SelectScrollUpButton({
  className = '',
  children,
}: SelectScrollUpButtonProps) {
  return (
    <Select.ScrollUpButton
      className={twMerge(
        'au-select-scroll-up-button au-item flex justify-center items-center',
        className,
      )}
    >
      {children || (
        <div className="px-2 py-1 text-sm">
          <CaretUp />
        </div>
      )}
    </Select.ScrollUpButton>
  );
}
