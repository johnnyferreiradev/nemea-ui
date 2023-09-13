import { ButtonHTMLAttributes } from 'react';

export interface ModalCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
