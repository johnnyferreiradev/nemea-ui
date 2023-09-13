import * as Progress from '@radix-ui/react-progress';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

import { ProgressProps, ProgressSizes } from './types';

const progressVariants = tv({
  base: [
    'au-progress',
    'relative overflow-hidden',
    'rounded-full',
    'bg-[var(--grayscale-100)]',
    'dark:bg-[var(--grayscale-400)]',
  ],
  variants: {
    size: {
      ...ProgressSizes,
    },
  },
});

export default function ProgressRoot({
  className = '',
  size = 'md',
  asChild,
  value,
  max = 100,
  children,
  getValueLabel,
  ...rest
}: ProgressProps) {
  return (
    <Progress.Root
      className={twMerge(progressVariants({ size }), className)}
      asChild={asChild}
      value={value}
      max={max}
      getValueLabel={getValueLabel}
      {...rest}
    >
      {children}
    </Progress.Root>
  );
}
