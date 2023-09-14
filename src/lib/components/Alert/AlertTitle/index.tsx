import { twMerge } from 'tailwind-merge';

import { AlertTitleProps } from './types';

export default function AlertTitle({
  className = '',
  children,
}: AlertTitleProps) {
  return (
    <div
      className={twMerge(
        'au-alert-title text-lg font-bold break-all',
        className,
      )}
    >
      {children}
    </div>
  );
}
