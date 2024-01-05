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
        'au-skeleton animate-pulse bg-grayscale-200 dark:bg-grayscale-700',
        rounded ? 'rounded-full' : 'rounded-md',
        className,
      )}
      id={id}
      style={{ height, width }}
      {...rest}
    />
  );
}
