import { twMerge } from 'tailwind-merge';

import { ImagePlaceholderProps } from './types';

export default function ImagePlaceholder({
  className = '',
  children,
}: ImagePlaceholderProps) {
  return (
    <div
      className={twMerge(
        'au-image-placeholder w-max min-w-[80px] min-h-[80px]',
        'relative flex justify-center items-center rounded',
        'bg-grayscale-200 dark:bg-grayscale-800',
        'text-grayscale-400 dark:text-grayscale-600 text-3xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
