import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DropdownRadioGroupProps } from './types';

export default function DropdownRadioGroup({
  className = '',
  id,
  children,
  onValueChange,
  value,
}: DropdownRadioGroupProps) {
  return (
    <DropdownMenu.RadioGroup
      className={twMerge('au-dropdown-radio-group', className)}
      id={id}
      onValueChange={onValueChange}
      value={value}
    >
      {children}
    </DropdownMenu.RadioGroup>
  );
}
