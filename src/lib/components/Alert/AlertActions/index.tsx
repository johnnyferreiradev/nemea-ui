import { twMerge } from 'tailwind-merge';

import { AlertActionsProps } from './types';

export default function AlertActions({
  className = '',
  children,
}: AlertActionsProps) {
  return (
    <div
      className={twMerge(
        'au-alert-actions row-start-2 row-end-3 col-start-2 col-end-4',
        'flex items-center gap-4 pt-2',
        className,
      )}
    >
      {children}
    </div>
  );
}
