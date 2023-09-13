import { twMerge } from 'tailwind-merge';
import * as RadixToast from '@radix-ui/react-toast';

import { ToasterActionProps } from './types';

export default function ToasterAction({
  className = '',
  altText,
  children,
}: ToasterActionProps) {
  return (
    <RadixToast.Action
      className={twMerge('au-toaster-action', className)}
      asChild
      altText={altText}
    >
      {children}
    </RadixToast.Action>
  );
}
