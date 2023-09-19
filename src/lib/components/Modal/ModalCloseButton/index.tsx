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
        'au-modal-close-button absolute -right-12 top-0',
        className,
      )}
      id={id}
      asChild
    >
      <Button.Root
        size="xs"
        theme="linkGray"
        className="rounded-full w-10 h-10 shadow-md bg-[var(--white-color)] dark:bg-[var(--grayscale-400)]"
      >
        <Button.Label>
          <X />
        </Button.Label>
      </Button.Root>
    </Dialog.Close>
  );
}
