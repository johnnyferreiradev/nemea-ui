import { twMerge } from 'tailwind-merge';
import * as RadixToast from '@radix-ui/react-toast';

import { ToasterCloseProps } from './types';

export default function ToasterClose({
  className = '',
  children,
}: ToasterCloseProps) {
  return (
    <RadixToast.Close
      className={twMerge(
        'au-toaster-close row-start-1 row-end-2 col-start-4 col-end-5',
        'flex justify-end items-start cursor-pointer',
        '-top-[1px] flex justify-end items-start',
        'h-max w-max p-1 pr-0 outline-none hover:opacity-80',
        className,
      )}
      asChild
    >
      {children}
    </RadixToast.Close>
  );
}
