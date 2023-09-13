import { twMerge } from 'tailwind-merge';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { AlertDialogDescriptionProps } from './types';

export default function AlertDialogDescription({
  className = '',
  id,
  children,
  asChild,
}: AlertDialogDescriptionProps) {
  return (
    <AlertDialog.Description
      className={twMerge(
        'au-alert-dialog-description text-lg leading-6',
        'text-[var(--dark-color)] dark:text-[var(--white-color)]',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </AlertDialog.Description>
  );
}
