import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { ModalTitleProps } from './types';

export default function ModalTitle({
  className = '',
  id,
  children,
  asChild,
}: ModalTitleProps) {
  return (
    <Dialog.Title
      className={twMerge(
        'au-modal-title font-bold text-xl leading-5',
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
