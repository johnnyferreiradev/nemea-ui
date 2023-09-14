import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';

import { ButtonIconProps } from './types';

export default function ButtonIcon({
  className = '',
  children,
}: ButtonIconProps) {
  return (
    <Slot className={twMerge('au-button-icon', className)}>{children}</Slot>
  );
}
