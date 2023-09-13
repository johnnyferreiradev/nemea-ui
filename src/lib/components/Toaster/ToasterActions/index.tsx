import { twMerge } from 'tailwind-merge';

import { ToasterActionsProps } from './types';

export default function ToasterActions({
  className = '',
  children,
}: ToasterActionsProps) {
  return (
    <div
      className={twMerge(
        'au-toaster-actions row-start-1 row-end-2 col-start-3 col-end-4',
        'flex items-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
