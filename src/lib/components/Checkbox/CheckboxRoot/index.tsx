import * as Checkbox from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';

import { checkboxVariants } from './variants';

import { CheckboxProps } from './types';

export default function CheckboxRoot({
  className = '',
  asChild,
  theme = 'primary',
  defaultChecked = false,
  checked,
  onCheckedChange,
  disabled = false,
  required = false,
  name,
  value,
  children,
  ...rest
}: CheckboxProps) {
  return (
    <Checkbox.Root
      className={twMerge(checkboxVariants({ theme }), className)}
      asChild={asChild}
      defaultChecked={defaultChecked}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      name={name}
      value={value}
      {...rest}
    >
      {children}
    </Checkbox.Root>
  );
}
