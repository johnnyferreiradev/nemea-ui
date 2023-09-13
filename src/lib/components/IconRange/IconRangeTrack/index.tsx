import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { iconRangeTrackVariants } from './variants';

import { IconRangeTrackProps } from './types';

export default function IconRangeTrack({
  asChild,
  className,
  children,
  ...rest
}: IconRangeTrackProps) {
  return (
    <Slider.Track
      asChild={asChild}
      className={twMerge(iconRangeTrackVariants(), className)}
      {...rest}
    >
      {children}
    </Slider.Track>
  );
}
