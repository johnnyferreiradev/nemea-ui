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
        'bg-[var(--grayscale-100)] dark:bg-[var(--grayscale-400)]',
        'text-[var(--grayscale-300)] text-3xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
