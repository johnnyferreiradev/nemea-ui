import { ButtonHTMLAttributes } from 'react';

export interface AlertDialogActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
