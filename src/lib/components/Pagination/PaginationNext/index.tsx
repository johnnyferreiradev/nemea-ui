import { twMerge } from 'tailwind-merge';

import PaginationLink from '../PaginationLink';
import { CaretRight } from '@phosphor-icons/react';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    size="sm"
    className={twMerge('gap-1 pr-2.5', className)}
    {...props}
  >
    <CaretRight className="h-4 w-4" weight="bold" />
  </PaginationLink>
);

export default PaginationNext;
