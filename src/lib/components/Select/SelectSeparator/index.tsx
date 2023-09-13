import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { SelectSeparatorProps } from './types';

export default function SelectSeparator({
  className = '',
}: SelectSeparatorProps) {
  return (
    <Select.Separator
      className={twMerge(
        'au-select-separator w-full h-8 bg-[var(--white-color)]',
        'dark:bg-[var(--grayscale-400)]',
        className,
      )}
    />
  );
}
