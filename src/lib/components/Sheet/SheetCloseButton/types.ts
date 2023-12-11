import { ButtonHTMLAttributes } from 'react';

export interface SheetCloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  onClose?: () => void;
}
