import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as RadixToast from '@radix-ui/react-toast';

import { X } from '@phosphor-icons/react';

const ToasterClose = forwardRef<
  React.ElementRef<typeof RadixToast.Close>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Close>
>(({ className, ...props }, ref) => (
  <RadixToast.Close
    ref={ref}
    className={twMerge(
      'au-toaster-close row-start-1 row-end-2 col-start-3 col-end-4',
      'flex justify-end items-start cursor-pointer',
      'h-full w-full outline-none',
      'group/toaster-close',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X
      className={twMerge(
        'rounded p-1 text-xl',
        'h-max w-max translate-y-[2px] translate-x-1',
        'group-hover/toaster-close:bg-grayscale-100 dark:group-hover/toaster-close:bg-grayscale-900',
      )}
    />
  </RadixToast.Close>
));

ToasterClose.displayName = RadixToast.Close.displayName;

export default ToasterClose;
