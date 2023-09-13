import { twMerge } from 'tailwind-merge';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { AlertDialogActionProps } from './types';

export default function AlertDialogAction({
  className = '',
  id,
  children,
}: AlertDialogActionProps) {
  return (
    <AlertDialog.Action
      className={twMerge('au-alert-dialog-action', className)}
      id={id}
      asChild
    >
      {children}
    </AlertDialog.Action>
  );
}
