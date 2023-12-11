import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { SheetCloseProps } from './types';

export default function SheetClose({
  className = '',
  id,
  children,
}: SheetCloseProps) {
  return (
    <Dialog.Close
      className={twMerge('au-sheet-close', className)}
      id={id}
      asChild
    >
      {children}
    </Dialog.Close>
  );
}
