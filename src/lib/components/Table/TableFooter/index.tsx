import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableFooterProps } from './types';

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={twMerge('au-table-footer font-medium', className)}
      {...props}
    />
  ),
);

TableFooter.displayName = 'TableFooter';

export default TableFooter;
