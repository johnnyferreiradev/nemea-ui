import { twMerge } from 'tailwind-merge';

import { AlertContentProps } from './types';

export default function AlertContent({
  className = '',
  children,
}: AlertContentProps) {
  return (
    <div
      className={twMerge(
        'au-alert-content row-start-1 row-end-2 col-start-2 col-end-3',
        'flex flex-col justify-center w-full pr-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
