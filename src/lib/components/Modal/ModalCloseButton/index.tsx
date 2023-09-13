import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '../../Button';
import Icon from '../../Icon';

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
        theme="linkGrayPrimary"
        className="rounded-full w-10 h-10 shadow-md bg-[var(--white-color)] dark:bg-[var(--grayscale-400)]"
      >
        <Button.Label>
          <Icon name="close" size="2xl" />
        </Button.Label>
      </Button.Root>
    </Dialog.Close>
  );
}
