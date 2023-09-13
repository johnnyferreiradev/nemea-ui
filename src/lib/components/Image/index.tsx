import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';

import { ImageProps } from './types';

export default function Image({
  className = '',
  src,
  alt,
  asChild,
}: ImageProps) {
  const Component = asChild ? Slot : 'img';

  return (
    <Component className={twMerge('au-image', className)} src={src} alt={alt} />
  );
}
