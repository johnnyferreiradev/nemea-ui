import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { inputVariants, inputWrapperVatiants } from './variants';

import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size = 'md',
      theme = 'white',
      disabled,
      icon,
      actions,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={twMerge(
          inputWrapperVatiants({ size, theme }),
          disabled ? 'is-disabled' : '',
          className,
        )}
      >
        <span>{icon}</span>
        <input
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
