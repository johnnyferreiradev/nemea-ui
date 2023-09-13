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
        'au-dropdown-item au-item w-full py-3 px-4 pr-5 mb-[1px]',
        'outline-none cursor-pointer transition rounded-none',
        'text-lg text-start',
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
