import { twMerge } from 'tailwind-merge';
import * as RadixForm from '@radix-ui/react-form';

import { FormLabelProps } from './types';

export default function FormLabel({
  className = '',
  children,
  htmlFor,
}: FormLabelProps) {
  return (
    <RadixForm.Label
      className={twMerge(
        'au-form-label text-sm block mb-[6px] leading-4',
        'text-[var(--grayscale-200)]',
        className,
      )}
      htmlFor={htmlFor}
    >
      {children}
    </RadixForm.Label>
  );
}
