import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import Icon from '../../Icon';

import { SelectItemIndicatorProps } from './types';

export default function SelectItemIndicator({
  className = '',
  asChild,
  children,
}: SelectItemIndicatorProps) {
  return (
    <Select.ItemIndicator
      className={twMerge('au-select-item-indicator', className)}
      asChild={!children || (!!children && asChild)}
    >
      {children || <Icon name="check" />}
    </Select.ItemIndicator>
  );
}
