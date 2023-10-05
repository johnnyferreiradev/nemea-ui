import { twMerge } from 'tailwind-merge';
import * as RadixToast from '@radix-ui/react-toast';

import { ToasterTitleProps } from './types';

export default function ToasterTitle({
  className = '',
  asChild,
  children,
}: ToasterTitleProps) {
  return (
    <RadixToast.Title
      className={twMerge(
        'au-toaster-title text-lg font-bold break-words leading-5 mb-1',
        'translate-y-[2px] w-full max-w-md',
        className,
      )}
      asChild={asChild}
    >
      {children}
    </RadixToast.Title>
  );
}
