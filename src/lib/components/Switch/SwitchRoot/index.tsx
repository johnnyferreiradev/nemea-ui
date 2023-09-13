import * as Switch from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';

import { switchVariants } from './variants';

import { SwitchProps } from './types';

export default function SwitchRoot({
  className = '',
  asChild,
  size = 'sm',
  defaultChecked = false,
  checked,
  onCheckedChange,
  disabled = false,
  required = false,
  name,
  value,
  children,
  ...rest
}: SwitchProps) {
  return (
    <Switch.Root
      className={twMerge(switchVariants({ size }), className)}
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
    </Switch.Root>
  );
}
