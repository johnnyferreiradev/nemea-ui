import * as RadixTabs from '@radix-ui/react-tabs';

import { tabsListVariants } from './variants';

import { TabsListProps } from './types';

export default function TabsList({
  className = '',
  id,
  children,
  rounded,
  theme = 'default',
}: TabsListProps) {
  return (
    <RadixTabs.List
      className={tabsListVariants({
        theme,
        rounded,
        className,
      })}
      id={id}
    >
      {children}
    </RadixTabs.List>
  );
}
