import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { SelectLabelProps } from './types';

export default function SelectLabel({
  className = '',
  children,
}: SelectLabelProps) {
  return (
    <Select.Label
      className={twMerge(
        'au-select-label px-4 mb-[1px]',
        'py-2 text-start text-sm',
        className,
      )}
    >
      {children}
    </Select.Label>
  );
}
