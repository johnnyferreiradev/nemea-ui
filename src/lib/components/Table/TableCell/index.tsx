import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableCellProps } from './types';

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={twMerge(
        'au-table-cell p-2 align-middle [&:has([role=checkbox])]:pr-0 text-dark dark:text-light',
        'break-words hyphens-auto',
        className,
      )}
      {...props}
    />
  ),
);

TableCell.displayName = 'TableCell';

export default TableCell;
