import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableBodyProps } from './types';

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={twMerge(
        'au-table-body [&_tr:last-child]:border-0 [&_tr:last-child]:border-b-grayscale-50 dark:[&_tr:last-child]:border-b-grayscale-800',
        className,
      )}
      {...props}
    />
  ),
);
TableBody.displayName = 'TableBody';

export default TableBody;
