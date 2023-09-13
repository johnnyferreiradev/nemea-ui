import { twMerge } from 'tailwind-merge';
import * as RadixAvatar from '@radix-ui/react-avatar';

import { AvatarProps } from './types';

export default function AvatarRoot({ className = '', children }: AvatarProps) {
  return (
    <RadixAvatar.Root className={twMerge('au-avatar flex', className)}>
      {children}
    </RadixAvatar.Root>
  );
}
