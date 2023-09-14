import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useFormField } from '../FormField/hooks';

const FormMessage = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={twMerge(
        'form-message text-sm block mt-[6px] leading-4',
        'text-[var(--danger-color)]',
        className,
      )}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';

export default FormMessage;
