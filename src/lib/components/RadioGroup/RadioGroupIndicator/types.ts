import { RadioGroupIndicatorProps as RadixRadioGroupIndicatorProps } from '@radix-ui/react-radio-group';

export enum RadioGroupIndicatorThemes {
  primary = 'primary',
}

export interface RadioGroupIndicatorProps
  extends RadixRadioGroupIndicatorProps {
  theme?: keyof typeof RadioGroupIndicatorThemes;
}
