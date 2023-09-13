import { SliderThumbProps as RadixSliderThumbProps } from '@radix-ui/react-slider';

export enum IconRangeThumbThemes {
  primary = 'primary',
  primary100 = 'primary100',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface IconRangeThumbProps extends RadixSliderThumbProps {
  asChild?: boolean;
  theme?: keyof typeof IconRangeThumbThemes;
}
