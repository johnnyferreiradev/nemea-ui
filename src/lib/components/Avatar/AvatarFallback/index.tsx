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
        'flex items-center justify-center font-normal',
        'text-xl bg-[var(--primary-color-100)] text-[var(--primary-color)]',
        className,
      )}
    >
      {children}
    </RadixAvatar.Fallback>
  );
}
