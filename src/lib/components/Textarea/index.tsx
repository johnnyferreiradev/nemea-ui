import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { textareaVariants, textareaWrapperVatiants } from './variants';

import { TextareaProps } from './types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size = 'md',
      theme = 'light',
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
          textareaWrapperVatiants({ size, theme }),
          disabled ? 'is-disabled' : '',
          className,
        )}
      >
        <span className="mt-1">{icon}</span>
        <textarea
          className={twMerge(textareaVariants({ size, theme }))}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {actions}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
