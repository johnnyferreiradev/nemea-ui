import { twMerge } from 'tailwind-merge';

import { AlertCloseProps } from './types';

export default function AlertClose({
  className = '',
  children,
  onClose,
}: AlertCloseProps) {
  return (
    <div
      className={twMerge(
        'au-alert-close row-start-1 row-end-2 col-start-4 col-end-5',
        'flex justify-end items-start',
        '-top-[1px] flex justify-end items-start',
        'w-max',
        className,
      )}
    >
      <button
        className={twMerge(
          'au-alert-close-button rounded-full h-max w-max p-1 pr-0 outline-none',
          'hover:opacity-80',
        )}
        onClick={onClose}
      >
        {children}
      </button>
    </div>
  );
}
