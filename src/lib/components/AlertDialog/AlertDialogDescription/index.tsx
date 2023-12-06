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
        'au-alert-dialog-description text-base leading-5',
        'text-grayscale-400',
        className,
      )}
      id={id}
      asChild={asChild}
    >
      {children}
    </AlertDialog.Description>
  );
}
