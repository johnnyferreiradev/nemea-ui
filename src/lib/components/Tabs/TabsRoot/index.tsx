import * as RadixTabs from '@radix-ui/react-tabs';
import { tv } from 'tailwind-variants';

import { TabsRootProps } from './types';

const tabsRootVariations = tv({
  base: 'au-tabs-root',
  variants: {
    orientation: {
      horizontal: 'flex',
      vertical: 'flex flex-col',
    },
  },
});

export default function TabsRoot({
  className = '',
  id,
  activationMode = 'automatic',
  defaultValue,
  onValueChange,
  orientation = 'vertical',
  value,
  children,
}: TabsRootProps) {
  return (
    <RadixTabs.Root
      className={tabsRootVariations({ orientation, className })}
      id={id}
      activationMode={activationMode}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      orientation={orientation}
      value={value}
    >
      {children}
    </RadixTabs.Root>
  );
}
