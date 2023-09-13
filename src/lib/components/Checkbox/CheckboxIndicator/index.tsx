import * as Checkbox from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';

import { CheckboxIndicatorProps } from './types';

export default function CheckboxIndicator({
  className = '',
  asChild,
  children,
}: CheckboxIndicatorProps) {
  return (
    <Checkbox.Indicator
      asChild={asChild}
      className={twMerge(
        'au-checkbox-indicator flex items-center justify-center',
        className,
      )}
    >
      {children}
    </Checkbox.Indicator>
  );
}
