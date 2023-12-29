import { DotsThree } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={twMerge('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsThree className="h-4 w-4 text-primary-500" weight="bold" size={28} />
  </span>
);

export default PaginationEllipsis;
