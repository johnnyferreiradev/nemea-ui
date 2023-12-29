import { twMerge } from 'tailwind-merge';

const PaginationRoot = ({
  className,
  ...props
}: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={twMerge(
      'nm-pagination-root mx-auto flex w-full justify-center',
      className,
    )}
    {...props}
  />
);

export default PaginationRoot;
