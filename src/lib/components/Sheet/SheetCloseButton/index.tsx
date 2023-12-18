import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { X } from '@phosphor-icons/react';

import { Button } from '../../Button';

import { SheetCloseButtonProps } from './types';

export default function SheetCloseButton({
  className = '',
  id,
  onClose,
}: SheetCloseButtonProps) {
  return (
    <Dialog.Close
      className={twMerge(
        'au-sheet-close-button absolute right-4 top-4',
        className,
      )}
      id={id}
      asChild
    >
      <Button.Root size="sm" theme="gray" className="w-8 h-8" onClick={onClose}>
        <Button.Label>
          <X weight="bold" />
        </Button.Label>
      </Button.Root>
    </Dialog.Close>
  );
}
