import { twMerge } from 'tailwind-merge';
import * as RadixForm from '@radix-ui/react-form';

import { FormSubmitProps } from './types';

export default function FormSubmit({
  className = '',
  children,
}: FormSubmitProps) {
  return (
    <RadixForm.Submit className={twMerge('au-form-submit', className)} asChild>
      {children}
    </RadixForm.Submit>
  );
}
