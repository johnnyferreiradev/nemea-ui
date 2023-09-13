import * as RadixTooltip from '@radix-ui/react-tooltip';

import { TooltipRootProps } from './types';

export default function TooltipRoot({
  children,
  delayDuration = 400,
  disableHoverableContent,
  skipDelayDuration,
  defaultOpen,
  onOpenChange,
  open,
}: TooltipRootProps) {
  return (
    <RadixTooltip.Provider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      skipDelayDuration={skipDelayDuration}
    >
      <RadixTooltip.Root
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        open={open}
      >
        {children}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
