import { twMerge } from 'tailwind-merge';

import { ToasterIconProps } from './types';

export default function ToasterIcon({
  className = '',
  children,
}: ToasterIconProps) {
  return (
    <div
      className={twMerge(
        'au-toaster-icon row-start-1 row-end-2 col-start-1 col-end-2 row-span-1',
        'text-2xl flex justify-center items-center rounded-full',
        'w-9 h-9',
        className,
      )}
    >
      {children}
    </div>
  );
}
