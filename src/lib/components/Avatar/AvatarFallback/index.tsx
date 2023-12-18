import { twMerge } from 'tailwind-merge';
import * as RadixAvatar from '@radix-ui/react-avatar';

import { AvatarFallbackProps } from './types';

export default function AvatarFallback({
  className = '',
  children,
}: AvatarFallbackProps) {
  return (
    <RadixAvatar.Fallback
      className={twMerge(
        'au-avatar-fallback w-12 h-12 rounded-full inline-block p-2',
        'flex items-center justify-center font-medium',
        'text-xl bg-primary-300 text-light dark:bg-primary-800',
        className,
      )}
    >
      {children}
    </RadixAvatar.Fallback>
  );
}
