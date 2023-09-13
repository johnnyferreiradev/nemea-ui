import { twMerge } from 'tailwind-merge';

import { ToasterContentProps } from './types';

export default function ToasterContent({
  className = '',
  children,
}: ToasterContentProps) {
  return (
    <div
      className={twMerge(
        'au-toaster-content row-start-1 row-end-2 col-start-2 col-end-3',
        'flex flex-col justify-center w-full pr-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
