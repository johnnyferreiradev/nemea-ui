import { twMerge } from 'tailwind-merge';
import { CaretLeft } from '@phosphor-icons/react';

import PaginationLink from '../PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="sm"
    className={twMerge('gap-1 pl-2.5', className)}
    {...props}
  >
    <CaretLeft className="h-4 w-4" weight="bold" />
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

export default PaginationPrevious;
