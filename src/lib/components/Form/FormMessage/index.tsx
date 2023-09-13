import { twMerge } from 'tailwind-merge';
import * as RadixForm from '@radix-ui/react-form';

import { FormMessageProps } from './types';

export default function FormMessage({
  className = '',
  match,
  children,
}: FormMessageProps) {
  return (
    <RadixForm.Message
      className={twMerge(
        'form-message text-sm block mt-[6px] leading-4',
        'text-[var(--danger-color)]',
        className,
      )}
      match={match}
    >
      {children}
    </RadixForm.Message>
  );
}
