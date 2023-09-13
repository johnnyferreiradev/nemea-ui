import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

import { radioGroupItemVariants } from './variants';

import { RadioGroupItemProps } from './types';

export default function RadioGroupItem({
  className = '',
  theme = 'primary',
  asChild,
  value,
  disabled = false,
  required = false,
  children,
  ...rest
}: RadioGroupItemProps) {
  return (
    <RadioGroup.Item
      asChild={asChild}
      className={twMerge(radioGroupItemVariants({ theme }), className)}
      value={value}
      disabled={disabled}
      required={required}
      {...rest}
    >
      {children}
    </RadioGroup.Item>
  );
}
