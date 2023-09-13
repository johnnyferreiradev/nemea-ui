import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { ModalDescriptionProps } from './types';

export default function ModalDescription({
  className = '',
  id,
  children,
  asChild,
}: ModalDescriptionProps) {
  return (
    <Dialog.Description
      className={twMerge(
        'au-modal-description text-lg leading-6',
        'text-[var(--dark-color)] dark:text-[var(--white-color)]',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </Dialog.Description>
  );
}
