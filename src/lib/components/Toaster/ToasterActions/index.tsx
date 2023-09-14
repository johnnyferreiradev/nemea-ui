import { twMerge } from 'tailwind-merge';

import { ToasterActionsProps } from './types';

export default function ToasterActions({
  className = '',
  children,
}: ToasterActionsProps) {
  return (
    <div
      className={twMerge(
        'au-toaster-actions row-start-2 row-end-3 col-start-2 col-end-4',
        'flex items-center gap-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
