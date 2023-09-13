import { twMerge } from 'tailwind-merge';

import { AlertActionsProps } from './types';

export default function AlertActions({
  className = '',
  children,
}: AlertActionsProps) {
  return (
    <div
      className={twMerge(
        'au-alert-actions row-start-1 row-end-2 col-start-3 col-end-4',
        'flex items-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
