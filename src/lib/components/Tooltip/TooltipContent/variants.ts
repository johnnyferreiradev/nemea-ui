import { tv } from 'tailwind-variants';

export const tooltipContentVariants = tv({
  base: [
    'au-tooltip-content rounded-md animate-fade-in-down shadow-lg outline-none z-40',
  ],
  variants: {
    theme: {
      light: [
        'bg-light dark:bg-grayscale-950',
        '[&_.au-tooltip-arrow]:fill-light',
        'dark:[&_.au-tooltip-arrow]:fill-grayscale-900',
      ],
      dark: [
        'bg-grayscale-950 dark:bg-light',
        '[&_.au-tooltip-arrow]:fill-grayscale-900',
        'dark:[&_.au-tooltip-arrow]:fill-light',
      ],
    },
  },
});
