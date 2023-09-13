import { ButtonHTMLAttributes } from 'react';

export interface AlertDialogCancelProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
