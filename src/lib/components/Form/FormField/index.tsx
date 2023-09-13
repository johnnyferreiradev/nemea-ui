import { twMerge } from 'tailwind-merge';
import * as RadixForm from '@radix-ui/react-form';

import { FormFieldProps } from './types';

export default function FormField({
  className = '',
  children,
  name = 'nonamed',
}: FormFieldProps) {
  return (
    <RadixForm.Field
      className={twMerge('au-form-field', className)}
      name={name}
    >
      {children}
    </RadixForm.Field>
  );
}
