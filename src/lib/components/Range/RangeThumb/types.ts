import { SliderThumbProps as RadixSliderThumbProps } from '@radix-ui/react-slider';

export enum RangeThumbSizes {
  md = 'md',
  lg = 'lg',
  withIcon = 'withIcon',
}

export enum RangeThumbThemes {
  primary = 'primary',
  primary100 = 'primary100',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface RangeThumbProps extends RadixSliderThumbProps {
  asChild?: boolean;
  theme?: keyof typeof RangeThumbThemes;
  size?: keyof typeof RangeThumbSizes;
}
