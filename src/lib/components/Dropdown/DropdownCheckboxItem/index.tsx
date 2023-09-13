import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Icon from '../../Icon';

import { DropdownCheckboxItemProps } from './types';

export default function DropdownCheckboxItem({
  className = '',
  id,
  children,
  checked,
  onCheckedChange,
}: DropdownCheckboxItemProps) {
  return (
    <DropdownMenu.CheckboxItem
      className={twMerge(
        'au-dropdown-checkbox-item au-item w-full py-3 px-4 pr-5 mb-[1px]',
        'text-lg text-start transition rounded-none',
        'outline-none cursor-pointer flex items-center gap-1',
        'data-[disabled]:cursor-default',
        className,
      )}
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <DropdownMenu.ItemIndicator>
        <Icon name="check" />
      </DropdownMenu.ItemIndicator>
      {children}
    </DropdownMenu.CheckboxItem>
  );
}
