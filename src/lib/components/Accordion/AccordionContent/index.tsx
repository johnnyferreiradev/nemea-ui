import { twMerge } from 'tailwind-merge';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AccordionContentProps } from './types';

export default function AccordionContent({
  className = '',
  id,
  children,
  asChild,
}: AccordionContentProps) {
  return (
    <RadixAccordion.Content
      className={twMerge(
        'au-accordion-content overflow-hidden',
        'data-[state="open"]:animate-slide-down data-[state="closed"]:animate-slide-up',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </RadixAccordion.Content>
  );
}
