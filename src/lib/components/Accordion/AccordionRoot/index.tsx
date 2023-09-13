import { twMerge } from 'tailwind-merge';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AccordionRootProps } from './types';

export default function AccordionRoot({
  className = '',
  id,
  collapsible,
  defaultValue,
  dir = 'ltr',
  disabled,
  onValueChange,
  orientation = 'vertical',
  value,
  children,
}: AccordionRootProps) {
  return (
    <RadixAccordion.Root
      className={twMerge('au-accordion-root', className)}
      id={id}
      type="single"
      collapsible={collapsible}
      defaultValue={defaultValue}
      dir={dir}
      disabled={disabled}
      onValueChange={onValueChange}
      orientation={orientation}
      value={value}
    >
      {children}
    </RadixAccordion.Root>
  );
}
