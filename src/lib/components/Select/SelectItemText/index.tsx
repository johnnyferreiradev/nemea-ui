import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { SelectItemTextProps } from './types';

export default function SelectItemText({
  className = '',
  children,
  asChild,
}: SelectItemTextProps) {
  return (
    <Select.ItemText
      className={twMerge('au-select-item-text', className)}
      asChild={asChild}
    >
      {children}
    </Select.ItemText>
  );
}
