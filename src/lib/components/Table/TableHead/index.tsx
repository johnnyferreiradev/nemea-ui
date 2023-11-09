import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableHeadProps } from './types';

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={twMerge(
        'au-table-head p-2 text-left align-middle font-bold [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = 'TableHead';

export default TableHead;
