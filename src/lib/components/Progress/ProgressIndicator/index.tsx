import * as Progress from '@radix-ui/react-progress';
import { twMerge } from 'tailwind-merge';

import { progressIndicatorVariants } from './variants';

import { ProgressIndicatorProps } from './types';

export default function ProgressIndicator({
  className = '',
  asChild,
  color = 'primary',
  children,
  ...rest
}: ProgressIndicatorProps) {
  return (
    <Progress.Indicator
      asChild={asChild}
      className={twMerge(progressIndicatorVariants({ color }), className)}
      {...rest}
    >
      {children}
    </Progress.Indicator>
  );
}
