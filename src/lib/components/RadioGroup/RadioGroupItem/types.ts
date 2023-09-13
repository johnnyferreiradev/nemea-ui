import { RadioGroupItemProps as RadixRadioGroupItemProps } from '@radix-ui/react-radio-group';

export enum RadioGroupItemThemes {
  primary = 'primary',
}

export interface RadioGroupItemProps extends RadixRadioGroupItemProps {
  theme?: keyof typeof RadioGroupItemThemes;
}
