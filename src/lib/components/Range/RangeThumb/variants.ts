import { tv } from 'tailwind-variants';

export const rangeThumbVariants = tv({
  base: [
    'au-range-thumb',
    'flex items-center justify-center',
    'rounded-full',
    'border-[var(--white-color)]',
    'cursor-grab touch-none',
    'focus:outline-none',
    'data-[disabled]:cursor-default',
  ],
  variants: {
    size: {
      md: ['w-[20px] h-[20px]', 'border-[1px]'],
      lg: ['w-[36px] h-[36px]', 'border-[4px]'],
      withIcon: ['w-[56px] h-[32px] border-none'],
    },
    theme: {
      primary: ['bg-[var(--primary-color)]'],
      primary100: ['bg-[var(--primary-color-300)]'],
      secondary: ['bg-[var(--secondary-color)]'],
      tertiary: ['bg-[var(--tertiary-color-2)]'],
    },
  },
});
