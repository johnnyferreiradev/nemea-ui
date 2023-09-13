import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { SelectGroupProps } from './types';

export default function SelectGroup({
  className = '',
  children,
}: SelectGroupProps) {
  return (
    <Select.Group className={twMerge('au-select-group', className)}>
      {children}
    </Select.Group>
  );
}
