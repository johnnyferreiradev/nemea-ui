import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as RadixLabel from '@radix-ui/react-label';

import { useFormField } from '../FormField/hooks';

import Label from '../../Label';

const FormLabel = forwardRef<
  React.ElementRef<typeof RadixLabel.Root>,
  React.ComponentPropsWithoutRef<typeof RadixLabel.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={twMerge(
        error && 'text-destructive',
        'au-form-label text-sm block leading-4',
        'text-grayscale-500 dark:text-grayscale-200',
        className,
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
