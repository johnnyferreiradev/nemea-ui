import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useFormField } from '../FormField/hooks';

const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={twMerge('am-form-description', className)}
      {...props}
    />
  );
});

FormDescription.displayName = 'FormDescription';

export default FormDescription;
