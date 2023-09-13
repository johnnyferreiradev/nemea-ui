import { twMerge } from 'tailwind-merge';
import * as RadixForm from '@radix-ui/react-form';

import { FormProps } from './types';

export default function FormRoot({
  className = '',
  children,
  onSubmit,
}: FormProps) {
  return (
    <RadixForm.Root
      className={twMerge('au-form', className)}
      onSubmit={onSubmit}
    >
      {children}
    </RadixForm.Root>
  );
}
