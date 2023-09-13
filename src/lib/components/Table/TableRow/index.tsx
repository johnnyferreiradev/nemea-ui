import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableRowProps } from './types';

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={twMerge(
        'au-table-row border-b border-b-[var(--gray-color)] dark:border-b-[var(--grayscale-300)] transition-colors',
        'hover:bg-[var(--gray-color)] data-[state=selected]:bg-[var(--grayscale-100)]',
        'dark:hover:bg-[var(--grayscale-400)] data-[state=selected]:bg-[var(--dark-color)]',
        className,
      )}
      {...props}
    />
  ),
);

TableRow.displayName = 'TableRow';

export default TableRow;
