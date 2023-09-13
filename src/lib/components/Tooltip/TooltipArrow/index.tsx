import { twMerge } from 'tailwind-merge';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { TooltipArrowProps } from './types';

export default function TooltipArrow({
  className = '',
  id,
}: TooltipArrowProps) {
  return (
    <RadixTooltip.Arrow
      className={twMerge('au-tooltip-arrow', className)}
      id={id}
    />
  );
}
