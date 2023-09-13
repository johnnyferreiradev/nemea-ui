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
        'au-toaster-description leading-5 break-all',
        className,
      )}
      asChild={asChild}
    >
      {children}
    </RadixToast.Description>
  );
}
