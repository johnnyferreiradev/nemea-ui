import { twMerge } from 'tailwind-merge';

import { TableLoaderProps } from './types';

export default function TableLoader({
  className = '',
  id,
  children,
  show = false,
}: TableLoaderProps) {
  return (
    <div
      className={twMerge(
        'au-table-loader bg-slate-200/20 dark:bg-slate-600/20 absolute inset-0',
        'h-full w-full backdrop-blur-sm flex justify-center items-center rounded',
        !show ? 'hidden' : '',
        className,
      )}
      id={id}
    >
      {children}
    </div>
  );
}
