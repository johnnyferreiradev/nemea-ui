import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { forwardRef } from 'react';

import { buttonVariants } from './variants';

import { ButtonProps } from './types';

const ButtonRoot = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      asChild,
      theme = 'gray',
      size = 'lg',
      align = 'center',
      children,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        className={twMerge(
          buttonVariants({ theme, size }),
          className,
          `justify-${align}`,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

ButtonRoot.displayName = 'ButtonRoot';

export default ButtonRoot;
