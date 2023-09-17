import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

import { DropdownItemProps } from './types';

export default function DropdownItem({
  className = '',
  children,
  disabled,
  onClick,
}: DropdownItemProps) {
  return (
    <DropdownMenu.Item
      className={twMerge(
        'au-dropdown-item au-item w-full py-2 px-3',
        'outline-none cursor-pointer transition rounded-md',
        'text-base text-start',
        'data-[disabled]:cursor-default',
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </DropdownMenu.Item>
  );
}
