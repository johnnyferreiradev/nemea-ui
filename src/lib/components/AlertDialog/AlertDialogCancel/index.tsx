import { twMerge } from 'tailwind-merge';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { AlertDialogCancelProps } from './types';

export default function AlertDialogCancel({
  className = '',
  id,
  children,
}: AlertDialogCancelProps) {
  return (
    <AlertDialog.Cancel
      className={twMerge('au-alert-dialog-cancel', className)}
      id={id}
      asChild
    >
      {children}
    </AlertDialog.Cancel>
  );
}
