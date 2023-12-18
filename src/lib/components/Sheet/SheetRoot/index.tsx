import { twMerge } from 'tailwind-merge';
import * as Dialog from '@radix-ui/react-dialog';

import { buttonVariants } from './variants';

import { SheetRootProps } from './types';

export default function SheetRoot({
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
  side,
}: SheetRootProps) {
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
            'au-sheet-overlay w-screen h-screen bg-slate-400/20 fixed inset-0',
            'backdrop-blur-sm animate-fade-in overflow-y-auto mb-16 z-30',
            'default-scroll',
          )}
        >
          <Dialog.Content
            className={buttonVariants({
              side,
              className: contentClassName,
            })}
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
