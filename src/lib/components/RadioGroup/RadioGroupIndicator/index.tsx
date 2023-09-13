import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

import { radioGroupIndicatorVariants } from './variants';

import { RadioGroupIndicatorProps } from './types';

export default function RadioGroupIndicator({
  className = '',
  theme = 'primary',
  asChild,
  // forceMount
  children,
}: RadioGroupIndicatorProps) {
  return (
    <RadioGroup.Indicator
      asChild={asChild}
      className={twMerge(radioGroupIndicatorVariants({ theme }), className)}
    >
      {children}
    </RadioGroup.Indicator>
  );
}
