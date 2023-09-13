import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableRootProps } from './types';

const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ className, id, tableClassName, ...props }, ref) => (
    <div
      className={twMerge(
        'au-table-root w-full overflow-auto default-scroll',
        className,
      )}
      id={id}
    >
      <table
        ref={ref}
        className={twMerge(
          'w-full relative caption-bottom text-base text-[var(--dark-color)] dark:text-[var(--white-color)]',
          tableClassName,
        )}
        {...props}
      />
    </div>
  ),
);

TableRoot.displayName = 'TableRoot';

export default TableRoot;
