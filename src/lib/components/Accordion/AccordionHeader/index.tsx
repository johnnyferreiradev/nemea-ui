import { twMerge } from 'tailwind-merge';
import * as RadixAccordion from '@radix-ui/react-accordion';

import { AccordionHeaderProps } from './types';

export default function AccordionHeader({
  className = '',
  id,
  children,
  asChild,
}: AccordionHeaderProps) {
  return (
    <RadixAccordion.Header
      className={twMerge(
        'au-accordion-header border-solid border border-b-[grayscale-100]',
        'border-t-0 border-l-0 border-r-0 dark:border-b-[grayscale-300]',
        className,
      )}
      id={id}
    >
      <RadixAccordion.Trigger
        asChild={asChild}
        className="outline-[var(--grayscale-100)] w-full text-start"
      >
        {children}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}
