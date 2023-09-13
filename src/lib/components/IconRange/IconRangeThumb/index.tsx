import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { iconRangeThumbVariants } from './variants';

import { IconRangeThumbProps } from './types';

export default function IconRangeThumb({
  asChild,
  theme = 'primary',
  className,
  children,
  ...rest
}: IconRangeThumbProps) {
  return (
    <Slider.Thumb
      asChild={asChild}
      className={twMerge(iconRangeThumbVariants({ theme }), className)}
      {...rest}
    >
      <div className="w-full h-full rounded-full flex items-center justify-center z-[3]">
        {children}
      </div>
    </Slider.Thumb>
  );
}
