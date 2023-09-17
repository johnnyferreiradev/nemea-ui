import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Icon from '../../Icon';

import { DropdownRadioItemProps } from './types';

export default function DropdownRadioItem({
  className = '',
  id,
  value,
  children,
}: DropdownRadioItemProps) {
  return (
    <DropdownMenu.RadioItem
      className={twMerge(
        'au-dropdown-radio-item au-item w-full py-2 px-3',
        'text-base text-start transition rounded-md',
        'outline-none cursor-pointer flex items-center gap-1',
        'data-[disabled]:cursor-default',
        className,
      )}
      id={id}
      value={value}
    >
      <DropdownMenu.ItemIndicator>
        <Icon name="radio-button-line" />
      </DropdownMenu.ItemIndicator>
      {children}
    </DropdownMenu.RadioItem>
  );
}
