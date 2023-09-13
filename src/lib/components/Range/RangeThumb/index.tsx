import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { rangeThumbVariants } from './variants';

import { RangeThumbProps } from './types';

export default function RangeThumb({
  asChild,
  theme = 'primary',
  className,
  size = 'md',
  children,
  ...rest
}: RangeThumbProps) {
  return (
    <Slider.Thumb
      asChild={asChild}
      className={twMerge(rangeThumbVariants({ size, theme }), className)}
      {...rest}
    >
      {children}
    </Slider.Thumb>
  );
}
