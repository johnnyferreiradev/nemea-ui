import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableCaptionProps } from './types';

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={twMerge(
        'au-table-caption mt-4 text-sm font-medium text-grayscale-400',
        className,
      )}
      {...props}
    />
  ),
);

TableCaption.displayName = 'TableCaption';

export default TableCaption;
