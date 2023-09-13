import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { rangeRangeVariants } from './variants';

import { RangeRangeProps } from './types';

export default function RangeRange({
  asChild,
  theme = 'primary',
  className,
  ...rest
}: RangeRangeProps) {
  return (
    <Slider.Range
      asChild={asChild}
      className={twMerge(rangeRangeVariants({ theme }), className)}
      {...rest}
    />
  );
}
