import { tv } from 'tailwind-variants';

export const popoverContentVariants = tv({
  base: ['rounded-md animate-fade-in-down shadow-lg outline-none z-40'],
  variants: {
    theme: {
      light: [
        'bg-light dark:bg-grayscale-800',
        '[&>span_svg]:fill-light',
        'dark:[&>span_svg]:fill-grayscale-800',
      ],
      dark: [
        'bg-grayscale-800 dark:bg-light',
        '[&>span_svg]:fill-grayscale-800',
        'dark:[&>span_svg]:fill-light',
      ],
    },
  },
});
