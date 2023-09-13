import { SliderProps as RadixSliderProps } from '@radix-ui/react-slider';

export interface IconRangeRootProps extends RadixSliderProps {
  asChild?: boolean;
  defaultValue?: number[];
  value?: number[];
  onValueChange?(value: number[]): void;
  onValueCommit?(value: number[]): void;
  name?: string;
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  inverted?: boolean;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
}
