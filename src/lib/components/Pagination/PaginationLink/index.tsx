import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';

import PaginationItem from '../PaginationItem';
import { buttonVariants } from '../../Button/ButtonRoot/variants';

import { PaginationLinkProps } from './types';
import { RefObject } from 'react';

const PaginationLink = ({
  className,
  isActive,
  asChild,
  size = 'sm',
  ref,
  ...props
}: PaginationLinkProps) => {
  const Component = asChild ? Slot : 'a';

  return (
    <PaginationItem>
      <Component
        aria-current={isActive ? 'page' : undefined}
        className={twMerge(
          buttonVariants({
            theme: isActive ? 'primary' : 'grayPrimary',
            size,
          }),
          className,
        )}
        ref={ref as unknown as RefObject<HTMLAnchorElement>}
        {...props}
      />
    </PaginationItem>
  );
};
PaginationLink.displayName = 'PaginationLink';

export default PaginationLink;
