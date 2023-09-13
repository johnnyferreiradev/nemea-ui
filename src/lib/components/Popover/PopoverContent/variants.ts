import { tv } from 'tailwind-variants';

export const popoverContentVariants = tv({
  base: ['rounded-md animate-fade-in-down shadow-lg outline-none'],
  variants: {
    theme: {
      white: [
        'bg-[var(--white-color)] dark:bg-[var(--grayscale-400)]',
        '[&_.au-popover-arrow]:fill-[var(--white-color)]',
        'dark:[&_.au-popover-arrow]:fill-[var(--grayscale-400)]',
      ],
      dark: [
        'bg-[var(--grayscale-400)] dark:bg-[var(--white-color)]',
        '[&_.au-popover-arrow]:fill-[var(--grayscale-400)]',
        'dark:[&_.au-popover-arrow]:fill-[var(--white-color)]',
      ],
    },
  },
});
