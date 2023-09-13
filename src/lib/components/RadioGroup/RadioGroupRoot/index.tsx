import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

import { radioGroupRootVariants } from './variants';

import { RadioGroupRootProps } from './types';

export default function RadioGroupRoot({
  className = '',
  asChild,
  defaultValue,
  value,
  onValueChange,
  disabled = false,
  required = false,
  name,
  orientation = 'vertical',
  dir = 'ltr',
  loop,
  children,
  ...rest
}: RadioGroupRootProps) {
  return (
    <RadioGroup.Root
      className={twMerge(radioGroupRootVariants({ orientation }), className)}
      asChild={asChild}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      required={required}
      name={name}
      orientation={orientation}
      dir={dir}
      loop={loop}
      {...rest}
    >
      {children}
    </RadioGroup.Root>
  );
}
