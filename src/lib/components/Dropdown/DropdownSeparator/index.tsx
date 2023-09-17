import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DropdownSeparatorProps } from './types';

export default function DropdownSeparator({
  className = '',
}: DropdownSeparatorProps) {
  return (
    <DropdownMenu.Separator
      className={twMerge('au-dropdown-separator w-full h-0.5', className)}
    />
  );
}
