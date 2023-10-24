import { twMerge } from 'tailwind-merge';

import { X } from '@phosphor-icons/react';

import { AlertCloseProps } from './types';

export default function AlertClose({
  className = '',
  onClose,
  ...rest
}: AlertCloseProps) {
  return (
    <div
      className={twMerge(
        'au-alert-close row-start-1 row-end-2 col-start-3 col-end-4',
        '-top-[1px] flex justify-end items-start pr-2',
        'h-full w-full outline-none group/alert-close',
        className,
      )}
    >
      <button
        className={twMerge(
          'au-alert-close-button group-hover/toaster-close:opacity-80 p-1 pr-0 outline-none',
          'h-max w-max text-2xl translate-x-1',
        )}
        onClick={onClose}
        {...rest}
      >
        <X />
      </button>
    </div>
  );
}
