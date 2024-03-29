import { twMerge } from 'tailwind-merge';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { AlertDialogRootProps } from './types';

export default function AlertDialogRoot({
  contentClassName = '',
  contentId,
  trigger,
  children,
  defaultOpen,
  onOpenChange,
  open,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onOpenAutoFocus,
}: AlertDialogRootProps) {
  return (
    <AlertDialog.Root
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      open={open}
    >
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className={twMerge(
            'au-modal w-screen h-screen bg-slate-400/20 fixed inset-0',
            'backdrop-blur-sm animate-fade-in overflow-y-scroll z-30',
            'default-scroll p-4',
          )}
        >
          <AlertDialog.Content
            className={twMerge(
              'au-modal-content min-w-[300px]',
              'bg-light dark:bg-grayscale-900',
              'fixed left-1/2 -translate-x-1/2 my-16',
              'p-6 outline-none rounded-md shadow-lg',
              'animate-content-show',
              contentClassName,
            )}
            onCloseAutoFocus={onCloseAutoFocus}
            onEscapeKeyDown={onEscapeKeyDown}
            onOpenAutoFocus={onOpenAutoFocus}
            id={contentId}
          >
            {children}
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
