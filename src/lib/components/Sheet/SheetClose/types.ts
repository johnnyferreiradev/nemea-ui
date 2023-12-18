import { ButtonHTMLAttributes } from 'react';

export interface SheetCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}
