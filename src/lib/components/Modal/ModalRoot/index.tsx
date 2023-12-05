import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { ModalRootProps } from './types';

export default function ModalRoot({
  contentClassName = '',
  contentId,
  trigger,
  children,
  defaultOpen,
  onOpenChange,
  open,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onInteractOutside,
  onOpenAutoFocus,
}: ModalRootProps) {
  return (
    <Dialog.Root
      modal
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      open={open}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={twMerge(
            'au-modal w-screen h-screen bg-slate-400/20 fixed inset-0',
            'backdrop-blur-sm animate-fade-in overflow-y-scroll mb-16 z-30',
            'default-scroll',
          )}
        >
          <Dialog.Content
            className={twMerge(
              'au-modal-content min-w-[300px]',
              'bg-light dark:bg-grayscale-900',
              'fixed top-0 left-1/2 -translate-x-1/2 my-16',
              'p-4 outline-none rounded-md shadow-lg',
              'animate-content-show',
              contentClassName,
            )}
            onCloseAutoFocus={onCloseAutoFocus}
            onEscapeKeyDown={onEscapeKeyDown}
            onInteractOutside={onInteractOutside}
            onOpenAutoFocus={onOpenAutoFocus}
            id={contentId}
          >
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
