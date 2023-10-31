import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableRowProps } from './types';

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={twMerge(
        'au-table-row border-b border-b-grayscale-50 dark:border-b-grayscale-800 transition-colors',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'data-[state=selected]:bg-grayscale-100 dark:data-[state=selected]:bg-grayscale-700',
        className,
      )}
      {...props}
    />
  ),
);

TableRow.displayName = 'TableRow';

export default TableRow;
