import { ButtonHTMLAttributes } from 'react';

export interface ModalCloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClose?: () => void;
}
