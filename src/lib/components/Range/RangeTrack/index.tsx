import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { rangeTrackVariants } from './variants';

import { RangeTrackProps } from './types';

export default function RangeTrack({
  asChild,
  size = 'md',
  className,
  children,
  ...rest
}: RangeTrackProps) {
  return (
    <Slider.Track
      asChild={asChild}
      className={twMerge(rangeTrackVariants({ size }), className)}
      {...rest}
    >
      {children}
    </Slider.Track>
  );
}
