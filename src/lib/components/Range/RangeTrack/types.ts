import { SliderTrackProps as RadixSliderTrackProps } from '@radix-ui/react-slider';

export enum RangeTrackSizes {
  md = 'md',
  lg = 'lg',
}

export interface RangeTrackProps extends RadixSliderTrackProps {
  asChild?: boolean;
  size?: keyof typeof RangeTrackSizes;
}
