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
        'au-accordion-header border-solid border border-b-grayscale-200',
        'border-t-0 border-l-0 border-r-0 dark:border-b-grayscale-600',
        '',
        className,
      )}
      id={id}
    >
      <RadixAccordion.Trigger
        asChild={asChild}
        className={twMerge(
          'outline-grayscale-300 dark:outline-grayscale-600 w-full text-start',
          'text-dark dark:text-light',
        )}
      >
        {children}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}
