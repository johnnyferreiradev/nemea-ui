import { tv } from 'tailwind-variants';

export const tooltipContentVariants = tv({
  base: [
    'au-tooltip-content rounded-md animate-fade-in-down shadow-lg outline-none',
  ],
  variants: {
    theme: {
      white: [
        'bg-[var(--white-color)] dark:bg-[var(--grayscale-400)]',
        '[&_.au-tooltip-arrow]:fill-[var(--white-color)]',
        'dark:[&_.au-tooltip-arrow]:fill-[var(--grayscale-400)]',
      ],
      dark: [
        'bg-[var(--grayscale-400)] dark:bg-[var(--white-color)]',
        '[&_.au-tooltip-arrow]:fill-[var(--grayscale-400)]',
        'dark:[&_.au-tooltip-arrow]:fill-[var(--white-color)]',
      ],
    },
  },
});
