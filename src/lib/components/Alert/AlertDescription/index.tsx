import { twMerge } from 'tailwind-merge';

import { AlertDescriptionProps } from './types';

export default function AlertDescription({
  className = '',
  children,
}: AlertDescriptionProps) {
  return (
    <div className={twMerge('au-alert-description break-all', className)}>
      {children}
    </div>
  );
}
