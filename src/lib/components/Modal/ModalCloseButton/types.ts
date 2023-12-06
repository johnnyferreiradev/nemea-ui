import { ButtonHTMLAttributes } from 'react';

export interface ModalCloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  onClose?: () => void;
}
