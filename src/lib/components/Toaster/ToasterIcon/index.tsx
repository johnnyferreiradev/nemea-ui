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
        'text-3xl flex justify-center items-start rounded-full',
        'w-full h-full',
        className,
      )}
    >
      {children}
    </div>
  );
}
