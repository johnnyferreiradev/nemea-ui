import { twMerge } from 'tailwind-merge';
import * as RadixToast from '@radix-ui/react-toast';

import { ToasterDescriptionProps } from './types';

export default function ToasterDescription({
  className = '',
  asChild,
  children,
}: ToasterDescriptionProps) {
  return (
    <RadixToast.Description
      className={twMerge(
        'au-toaster-description break-words w-full max-w-md',
        className,
      )}
      asChild={asChild}
    >
      {children}
    </RadixToast.Description>
  );
}
