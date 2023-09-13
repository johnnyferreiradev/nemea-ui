import { tv } from 'tailwind-variants';

export const iconRangeRootVariants = tv({
  base: [
    'au-icon-range',
    'relative flex items-center',
    'select-none touch-none',
    'w-full',
    'data-[disabled]:opacity-80',
    'overflow-hidden',
    'rounded-full',
  ],
});
