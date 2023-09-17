import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';

import { DropdownLabelProps } from './types';

export default function DropdownLabel({
  className = '',
  children,
}: DropdownLabelProps) {
  return (
    <DropdownMenu.Label
      className={twMerge(
        'au-dropdown-label px-4',
        'py-2 text-start text-xs',
        className,
      )}
    >
      {children}
    </DropdownMenu.Label>
  );
}
