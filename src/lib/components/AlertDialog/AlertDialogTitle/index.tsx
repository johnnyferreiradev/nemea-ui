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
        'au-alert-dialog-title font-bold text-2xl leading-6',
        'text-[var(--dark-color)] dark:text-[var(--white-color)]',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </AlertDialog.Title>
  );
}
