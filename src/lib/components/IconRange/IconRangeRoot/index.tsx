import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { iconRangeRootVariants } from './variants';

import { IconRangeRootProps } from './types';

export default function IconRangeRoot({
  asChild,
  className,
  defaultValue,
  value,
  onValueChange,
  onValueCommit,
  name,
  disabled = false,
  dir = 'ltr',
  inverted = false,
  min = 0,
  max = 100,
  step = 1,
  minStepsBetweenThumbs = 0,
  children,
  ...rest
}: IconRangeRootProps) {
  return (
    <Slider.Root
      asChild={asChild}
      className={twMerge(iconRangeRootVariants(), className)}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      onValueCommit={onValueCommit}
      name={name}
      disabled={disabled}
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
