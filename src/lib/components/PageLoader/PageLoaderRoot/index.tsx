import { twMerge } from 'tailwind-merge';

import { PageLoaderRootProps } from './types';

export default function PageLoaderRoot({
  className = '',
  id,
  children,
  show,
}: PageLoaderRootProps) {
  return (
    <div
      className={twMerge(
        'au-page-loader-root h-screen bg-slate-400/20 dark:bg-slate-600/20 fixed inset-0',
        'backdrop-blur-sm animate-fade-in overflow-y-scroll justify-center items-center',
        'flex-col z-40',
        show ? 'flex' : 'hidden',
        className,
      )}
      id={id}
    >
      {children}
    </div>
  );
}
