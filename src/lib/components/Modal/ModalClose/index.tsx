import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { ModalCloseProps } from './types';

export default function ModalClose({
  className = '',
  id,
  children,
}: ModalCloseProps) {
  return (
    <Dialog.Close
      className={twMerge('au-modal-close', className)}
      id={id}
      asChild
    >
      {children}
    </Dialog.Close>
  );
}
