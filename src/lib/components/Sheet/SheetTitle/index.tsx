import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { SheetTitleProps } from './types';

export default function SheetTitle({
  className = '',
  id,
  children,
  asChild,
}: SheetTitleProps) {
  return (
    <Dialog.Title
      className={twMerge(
        'au-sheet-title font-bold text-xl leading-5',
        'text-dark dark:text-light',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </Dialog.Title>
  );
}
