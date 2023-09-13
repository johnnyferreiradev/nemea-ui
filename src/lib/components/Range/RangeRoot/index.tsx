import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { rangeRootVariants } from './variants';

import { RangeRootProps } from './types';

export default function RangeRoot({
  asChild,
  className,
  defaultValue,
  value,
  onValueChange,
  onValueCommit,
  name,
  disabled = false,
  orientation = 'horizontal',
  dir = 'ltr',
  inverted = false,
  min = 0,
  max = 100,
  step = 1,
  minStepsBetweenThumbs = 0,
  children,
  ...rest
}: RangeRootProps) {
  return (
    <Slider.Root
      asChild={asChild}
      className={twMerge(rangeRootVariants(), className)}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      onValueCommit={onValueCommit}
      name={name}
      disabled={disabled}
      orientation={orientation}
      dir={dir}
      inverted={inverted}
      min={min}
      max={max}
      step={step}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      {...rest}
    >
      {children}
    </Slider.Root>
  );
}
