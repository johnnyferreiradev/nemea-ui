import { twMerge } from 'tailwind-merge';

import { ButtonLabelProps } from './types';

export default function ButtonLabel({
  className = '',
  children,
}: ButtonLabelProps) {
  return (
    <p
      className={twMerge(
        'au-button-label inline-block mx-2 min-w-max',
        'font-medium',
        className,
      )}
    >
      {children}
    </p>
  );
}
