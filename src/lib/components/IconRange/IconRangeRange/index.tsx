import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { iconRangeRangeVariants } from './variants';

import { IconRangeRangeProps } from './types';

export default function IconRangeRange({
  asChild,
  theme = 'primary',
  className,
  ...rest
}: IconRangeRangeProps) {
  return (
    <Slider.Range
      asChild={asChild}
      className={twMerge(iconRangeRangeVariants({ theme }), className)}
      {...rest}
    />
  );
}
