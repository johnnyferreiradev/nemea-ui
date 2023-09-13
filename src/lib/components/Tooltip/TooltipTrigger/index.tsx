import { twMerge } from 'tailwind-merge';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { TooltipTriggerProps } from './types';

export default function TooltipTrigger({
  className = '',
  id,
  children,
}: TooltipTriggerProps) {
  return (
    <RadixTooltip.Trigger
      className={twMerge('au-tooltip-trigger', className)}
      id={id}
      asChild
    >
      {children}
    </RadixTooltip.Trigger>
  );
}
