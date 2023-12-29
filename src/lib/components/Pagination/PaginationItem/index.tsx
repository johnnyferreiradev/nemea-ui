import React from 'react';
import { twMerge } from 'tailwind-merge';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={twMerge('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

export default PaginationItem;
