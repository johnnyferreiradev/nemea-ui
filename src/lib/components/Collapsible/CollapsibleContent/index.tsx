import { twMerge } from 'tailwind-merge';
import * as RadixCollapsible from '@radix-ui/react-collapsible';

import { CollapsibleContentProps } from './types';

export default function CollapsibleContent({
  className = '',
  id,
  children,
  asChild,
}: CollapsibleContentProps) {
  return (
    <RadixCollapsible.Content
      className={twMerge(
        'au-collapsible-content overflow-hidden',
        'data-[state="open"]:animate-collapsible-slide-down',
        'data-[state="closed"]:animate-collapsible-slide-up',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </RadixCollapsible.Content>
  );
}
