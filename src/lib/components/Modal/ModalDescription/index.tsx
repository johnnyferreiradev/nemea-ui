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
        'au-modal-description text-base leading-5',
        'text-grayscale-400 break-words hyphens-auto',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </Dialog.Description>
  );
}
