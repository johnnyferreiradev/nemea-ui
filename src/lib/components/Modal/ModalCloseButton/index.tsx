import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { X } from '@phosphor-icons/react';

import { Button } from '../../Button';

import { ModalCloseButtonProps } from './types';

export default function ModalCloseButton({
  className = '',
  onClose,
  ...rest
}: ModalCloseButtonProps) {
  return (
    <Dialog.Close
      className={twMerge(
        'au-modal-close-button absolute right-4 top-4',
        className,
      )}
      asChild
      {...rest}
    >
      <Button.Root size="sm" theme="gray" className="w-8 h-8" onClick={onClose}>
        <Button.Label>
          <X weight="bold" />
        </Button.Label>
      </Button.Root>
    </Dialog.Close>
  );
}
