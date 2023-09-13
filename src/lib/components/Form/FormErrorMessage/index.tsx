import { tv } from 'tailwind-variants';

import { FormErrorMessageProps } from './types';

const formErrorMessage = tv({
  base: [
    'au-form-error-message text-sm block mt-[6px] leading-4',
    'text-[var(--danger-color)]',
  ],
  variants: {
    show: {
      true: 'block',
      false: 'hidden',
    },
  },
});

export default function FormErrorMessage({
  className = '',
  children,
  show = false,
}: FormErrorMessageProps) {
  return (
    <span className={formErrorMessage({ show, className })}>{children}</span>
  );
}
