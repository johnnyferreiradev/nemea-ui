import { tv } from 'tailwind-variants';

export const rangeTrackVariants = tv({
  base: [
    'au-range-track',
    'relative flex-grow rounded-full',
    'bg-[var(--grayscale-100)]',
    'dark:bg-[var(--grayscale-400)]',
  ],
  variants: {
    size: {
      md: ['h-[12px]', 'data-[orientation="vertical"]:w-[12px]'],
      lg: ['h-[32px]', 'data-[orientation="vertical"]:w-[32px]'],
    },
  },
});
