import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableCellProps } from './types';

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={twMerge(
        'au-table-cell p-4 align-middle [&:has([role=checkbox])]:pr-0 text-[var(--grayscale-200)]',
        'font-medium',
        className,
      )}
      {...props}
    />
  ),
);

TableCell.displayName = 'TableCell';

export default TableCell;
