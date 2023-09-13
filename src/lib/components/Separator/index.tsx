import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

import { SeparatorColors, SeparatorProps } from './types';

const separatorVariants = tv({
  base: 'au-separator',
  variants: {
    color: {
      ...SeparatorColors,
    },
    orientation: {
      horizontal: ['w-full h-[1px] border'],
      vertical: ['h-full w-[1px] border'],
    },
  },
});

export default function Separator({
  className = '',
  id,
  color = 'gray',
  orientation = 'horizontal',
  ...rest
}: SeparatorProps) {
  return (
    <hr
      className={twMerge(separatorVariants({ color, orientation }), className)}
      id={id}
      {...rest}
    />
  );
}
