import { FormEventHandler } from 'react';

export interface FormProps {
  className?: string;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
