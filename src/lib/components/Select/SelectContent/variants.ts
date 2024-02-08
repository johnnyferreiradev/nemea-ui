import { tv } from 'tailwind-variants';

export const selectContentVariants = tv({
  base: [
    'rounded-md animate-fade-in-down shadow-lg',
    '[&_.au-item:last-child]:mb-0 p-2',
  ],
  variants: {
    theme: {
      light: [
        'bg-light',
        '[&_.au-item]:text-dark',
        '[&_.au-select-separator]:bg-grayscale-50',
        '[&_.au-select-label]:text-grayscale-400',

        'dark:bg-grayscale-800',
        'dark:[&_.au-item]:text-light',
        'dark:[&_.au-select-separator]:bg-grayscale-700',
        'dark:[&_.au-select-label]:text-grayscale-400',
      ],
      dark: [
        'bg-grayscale-800',
        '[&_.au-item]:text-light',
        '[&_.au-select-separator]:bg-grayscale-700',
        '[&_.au-select-label]:text-grayscale-400',

        'dark:bg-light',
        'dark:[&_.au-item]:text-dark',
        'dark:[&_.au-select-separator]:bg-grayscale-50',
        'dark:[&_.au-select-label]:text-grayscale-400',
      ],
    },
  },
});
