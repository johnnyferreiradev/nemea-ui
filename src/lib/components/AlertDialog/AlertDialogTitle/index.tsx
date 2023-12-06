import { twMerge } from 'tailwind-merge';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { AlertDialogTitleProps } from './types';

export default function AlertDialogTitle({
  className = '',
  id,
  children,
  asChild,
}: AlertDialogTitleProps) {
  return (
    <AlertDialog.Title
      className={twMerge(
        'au-alert-dialog-title font-bold text-xl leading-5',
        'text-dark dark:text-light',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </AlertDialog.Title>
  );
}
