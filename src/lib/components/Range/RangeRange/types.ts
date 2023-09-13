import { SliderRangeProps as RadixSliderRangeProps } from '@radix-ui/react-slider';

export enum RangeRangeThemes {
  primary = 'primary',
  primary100 = 'primary100',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface RangeRangeProps extends RadixSliderRangeProps {
  asChild?: boolean;
  theme?: keyof typeof RangeRangeThemes;
}
