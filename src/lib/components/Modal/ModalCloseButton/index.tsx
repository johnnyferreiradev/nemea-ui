import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { X } from '@phosphor-icons/react';

import { Button } from '../../Button';

import { ModalCloseButtonProps } from './types';

export default function ModalCloseButton({
  className = '',
  id,
}: ModalCloseButtonProps) {
  return (
    <Dialog.Close
      className={twMerge(
        'au-modal-close-button absolute right-4 top-4',
        className,
      )}
      id={id}
      asChild
    >
      <Button.Root size="sm" theme="gray" className="w-8 h-8">
        <Button.Label>
          <X weight="bold" />
        </Button.Label>
      </Button.Root>
    </Dialog.Close>
  );
}
