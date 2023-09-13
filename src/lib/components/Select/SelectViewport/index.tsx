import { twMerge } from 'tailwind-merge';
import * as Select from '@radix-ui/react-select';

import { SelectViewportProps } from './types';

export default function SelectViewport({
  className = '',
  children,
}: SelectViewportProps) {
  return (
    <Select.Viewport className={twMerge('au-select-viewport', className)}>
      {children}
    </Select.Viewport>
  );
}
