import { twMerge } from 'tailwind-merge';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AccordionItemProps } from './types';

export default function AccordionItem({
  className = '',
  id,
  value,
  disabled,
  children,
}: AccordionItemProps) {
  return (
    <RadixAccordion.Item
      className={twMerge('au-accordion-item', className)}
      id={id}
      value={value}
      disabled={disabled}
    >
      {children}
    </RadixAccordion.Item>
  );
}
