import { twMerge } from 'tailwind-merge';
import * as RadixCollapsible from '@radix-ui/react-collapsible';

import { CollapsibleHeaderProps } from './types';

export default function CollapsibleHeader({
  className = '',
  id,
  children,
  asChild,
}: CollapsibleHeaderProps) {
  return (
    <div
      className={twMerge(
        'au-collapsible-header border-solid border border-b-[grayscale-100]',
        'border-t-0 border-l-0 border-r-0 dark:border-b-[grayscale-300]',
        className,
      )}
      id={id}
    >
      <RadixCollapsible.Trigger
        asChild={asChild}
        className="outline-[var(--grayscale-100)] w-full text-start"
      >
        {children}
      </RadixCollapsible.Trigger>
    </div>
  );
}
