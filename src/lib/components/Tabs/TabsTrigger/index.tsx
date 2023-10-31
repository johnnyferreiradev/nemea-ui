import { twMerge } from 'tailwind-merge';
import * as RadixTabs from '@radix-ui/react-tabs';

import { TabsTriggerProps } from './types';

export default function TabsTrigger({
  className = '',
  id,
  children,
  value,
  disabled,
  asChild,
}: TabsTriggerProps) {
  return (
    <RadixTabs.Trigger
      className={twMerge(
        'au-tabs-trigger py-1 px-2 rounded-md border-2 border-solid border-transparent outline-none',
        className,
      )}
      id={id}
      value={value}
      disabled={disabled}
      asChild={asChild}
    >
      {children}
    </RadixTabs.Trigger>
  );
}
