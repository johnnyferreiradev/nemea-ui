import { twMerge } from 'tailwind-merge';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DropdownArrowProps } from './types';

export default function DropdownArrow({ className = '' }: DropdownArrowProps) {
  return (
    <DropdownMenu.Arrow
      className={twMerge(
        'au-dropdown-arrow fill-light',
        'dark:fill-grayscale-800',
        className,
      )}
    />
  );
}
