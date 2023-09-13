import { twMerge } from 'tailwind-merge';
import * as RadixCollapsible from '@radix-ui/react-collapsible';

import { CollapsibleRootProps } from './types';

export default function CollapsibleRoot({
  className = '',
  id,
  defaultOpen,
  disabled,
  onOpenChange,
  open,
  children,
}: CollapsibleRootProps) {
  return (
    <RadixCollapsible.Root
      className={twMerge('au-collapsible-root', className)}
      id={id}
      defaultOpen={defaultOpen}
      disabled={disabled}
      onOpenChange={onOpenChange}
      open={open}
    >
      {children}
    </RadixCollapsible.Root>
  );
}
