import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';

import { inputVariants, inputWrapperVariants } from './variants';

import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size = 'md',
      theme = 'light',
      disabled,
      icon,
      actions,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'input';

    return (
      <div
        className={twMerge(
          inputWrapperVariants({ size, theme }),
          disabled ? 'is-disabled' : '',
          className,
        )}
      >
        <span>{icon}</span>
        <Component
          type={type}
          className={twMerge(inputVariants({ size, theme }))}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {actions}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
