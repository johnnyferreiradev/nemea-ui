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
        'au-collapsible-header border-solid border-b border-b-grayscale-100 dark:border-b-grayscale-800',
        'border-t-transparent border-l-transparent border-r-transparent ',
        className,
      )}
      id={id}
    >
      <RadixCollapsible.Trigger
        asChild={asChild}
        className="outline-grayscale-100 w-full text-start"
      >
        {children}
      </RadixCollapsible.Trigger>
    </div>
  );
}
