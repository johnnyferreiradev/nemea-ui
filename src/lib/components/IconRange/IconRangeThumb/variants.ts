import { tv } from 'tailwind-variants';

export const iconRangeThumbVariants = tv({
  base: [
    'au-icon-range-thumb',
    'flex items-center justify-center',
    'border-[var(--white-color)]',
    'cursor-grab touch-none',
    'focus:outline-none',
    'data-[disabled]:cursor-default',
    'after:content-[""] after:absolute after:top-0',
    'w-[56px] h-[32px] border-none after:w-[28px] after:h-[32px] after:-left-[10px]',
  ],
  variants: {
    theme: {
      primary: [
        'after:bg-[var(--primary-color-300)] [&>div]:bg-[var(--primary-color)]',
      ],
      primary100: [
        'after:bg-[var(--primary-color-400)] [&>div]:bg-[var(--primary-color-300)]',
      ],
      secondary: [
        'after:bg-[var(--secondary-color-200)] [&>div]:bg-[var(--secondary-color)]',
      ],
      tertiary: [
        'after:bg-[var(--tertiary-color-3)] [&>div]:bg-[var(--tertiary-color-2)]',
      ],
    },
  },
});
