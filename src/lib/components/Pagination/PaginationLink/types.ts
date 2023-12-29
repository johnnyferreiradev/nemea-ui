import { ButtonProps } from '../../Button/ButtonRoot/types';

export type PaginationLinkProps = {
  isActive?: boolean;
  asChild?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;
