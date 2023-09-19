import { RadioGroupItemProps as RadixRadioGroupItemProps } from '@radix-ui/react-radio-group';

export enum RadioGroupItemThemes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
}

export interface RadioGroupItemProps extends RadixRadioGroupItemProps {
  theme?: keyof typeof RadioGroupItemThemes;
}
