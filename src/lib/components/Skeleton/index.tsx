import { twMerge } from 'tailwind-merge';

import { SkeletonProps } from './types';

export default function Skeleton({
  className = '',
  id,
  height,
  width,
  rounded,
  ...rest
}: SkeletonProps) {
  return (
    <div
      className={twMerge(
        'au-skeleton animate-pulse bg-[var(--grayscale-100)] dark:bg-[var(--grayscale-400)]',
        rounded ? 'rounded-full' : 'rounded-lg',
        className,
      )}
      id={id}
      style={{ height, width }}
      {...rest}
    />
  );
}
