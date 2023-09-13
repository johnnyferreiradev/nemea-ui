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
        'au-dropdown-radio-item au-item w-full py-3 px-4 pr-5 mb-[1px]',
        'text-lg text-start transition rounded-none',
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
