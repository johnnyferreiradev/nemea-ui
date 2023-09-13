import { twMerge } from 'tailwind-merge';
import * as RadixAvatar from '@radix-ui/react-avatar';

import { AvatarImageProps } from './types';

export default function AvatarImage({
  className = '',
  children,
  alt,
  src,
}: AvatarImageProps) {
  return (
    <RadixAvatar.Image
      className={twMerge(
        'au-avatar-image w-11 h-11 rounded-full inline-block',
        'flex items-center justify-center',
        className,
      )}
      src={src}
      alt={alt}
    >
      {children}
    </RadixAvatar.Image>
  );
}
