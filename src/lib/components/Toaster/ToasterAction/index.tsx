import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as RadixToast from '@radix-ui/react-toast';

const ToasterAction = forwardRef<
  React.ElementRef<typeof RadixToast.Action>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Action>
>(({ className, ...props }, ref) => (
  <RadixToast.Action
    ref={ref}
    className={twMerge('au-toaster-action', className)}
    {...props}
  />
));

ToasterAction.displayName = RadixToast.Action.displayName;

export default ToasterAction;
