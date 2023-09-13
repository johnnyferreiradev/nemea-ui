import { twMerge } from 'tailwind-merge';
import * as RadixTabs from '@radix-ui/react-tabs';

import { TabsContentProps } from './types';

export default function TabsContent({
  className = '',
  id,
  children,
  value,
  asChild,
}: TabsContentProps) {
  return (
    <RadixTabs.Content
      className={twMerge('au-tabs-content outline-none', className)}
      id={id}
      value={value}
      asChild={asChild}
    >
      {children}
    </RadixTabs.Content>
  );
}
