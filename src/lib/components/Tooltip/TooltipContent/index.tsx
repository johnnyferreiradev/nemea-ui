import * as RadixTooltip from '@radix-ui/react-tooltip';

import { tooltipContentVariants } from './variants';

import { TooltipContentProps } from './types';

export default function TooltipContent({
  className = '',
  id,
  children,
  theme = 'white',
  side = 'bottom',
  ...rest
}: TooltipContentProps) {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={tooltipContentVariants({ theme, className })}
        id={id}
        avoidCollisions
        sideOffset={5}
        collisionPadding={8}
        side={side}
        {...rest}
      >
        {children}
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
}
