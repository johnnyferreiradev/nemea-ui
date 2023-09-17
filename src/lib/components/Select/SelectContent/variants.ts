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
        '[&_.au-item[data-highlighted]]:bg-grayscale-100',
        '[&_.au-item[data-disabled]]:text-grayscale-200',
        '[&_.au-select-separator]:bg-grayscale-50',
        '[&_.au-select-label]:text-grayscale-400',

        'dark:bg-grayscale-800',
        'dark:[&_.au-item]:text-light',
        'dark:[&_.au-item[data-highlighted]]:bg-grayscale-900',
        'dark:[&_.au-item[data-disabled]]:text-grayscale-600',
        'dark:[&_.au-select-separator]:bg-grayscale-700',
        'dark:[&_.au-select-label]:text-grayscale-400',
      ],
      dark: [
        'bg-grayscale-800',
        '[&_.au-item]:text-light',
        '[&_.au-item[data-highlighted]]:bg-grayscale-900',
        '[&_.au-item[data-disabled]]:text-grayscale-600',
        '[&_.au-select-separator]:bg-grayscale-700',
        '[&_.au-select-label]:text-grayscale-400',

        'dark:bg-light',
        'dark:[&_.au-item]:text-dark',
        'dark:[&_.au-item[data-highlighted]]:bg-grayscale-100',
        'dark:[&_.au-item[data-disabled]]:text-grayscale-200',
        'dark:[&_.au-select-separator]:bg-grayscale-50',
        'dark:[&_.au-select-label]:text-grayscale-400',
      ],
    },
  },
});
