import { RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';

export interface RadioGroupRootProps extends RadixRadioGroupProps {
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  orientation?: 'horizontal' | 'vertical';
  dir?: 'ltr' | 'rtl';
  loop?: boolean;
}
