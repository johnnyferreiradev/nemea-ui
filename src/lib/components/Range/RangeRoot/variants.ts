import { tv } from 'tailwind-variants';

export const rangeRootVariants = tv({
  base: [
    'au-range',
    'relative flex items-center',
    'select-none touch-none',
    'w-full',
    'data-[orientation="vertical"]:flex-col',
    'data-[orientation="vertical"]:w-min',
    'data-[disabled]:opacity-80',
  ],
});
