import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { SheetDescriptionProps } from './types';

export default function SheetDescription({
  className = '',
  id,
  children,
  asChild,
}: SheetDescriptionProps) {
  return (
    <Dialog.Description
      className={twMerge(
        'au-sheet-description text-base leading-5',
        'text-grayscale-400',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </Dialog.Description>
  );
}
