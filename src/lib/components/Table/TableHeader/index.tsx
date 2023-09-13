import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableHeaderProps } from './types';

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, id, ...props }, ref) => (
    <thead
      ref={ref}
      className={twMerge(
        'au-table-header [&_tr]:border-b [&_tr]:border-b-[var(--gray-color)]',
        className,
      )}
      id={id}
      {...props}
    />
  ),
);

TableHeader.displayName = 'TableHeader';

export default TableHeader;
