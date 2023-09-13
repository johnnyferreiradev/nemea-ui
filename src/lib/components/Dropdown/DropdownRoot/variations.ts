import { tv } from 'tailwind-variants';

export const dropdownVariants = tv({
  base: [
    'dark:bg-[var(--grayscale-400)]',
    'rounded-md animate-fade-in-down shadow-lg overflow-hidden',
    '[&_.au-item:last-child]:mb-0',
  ],
  variants: {
    theme: {
      white: [
        'bg-[var(--gray-color)]',
        '[&_.au-item]:bg-[var(--white-color)] [&_.au-item]:text-[var(--grayscale-200)]',
        '[&_.au-item[data-highlighted]]:bg-[var(--gray-color)]',
        '[&_.au-item[data-disabled]]:text-[var(--grayscale-100)]',
        '[&_.au-item[data-disabled]]:my-0',
        '[&_.au-dropdown-separator]:bg-[var(--white-color)]',
        '[&_.au-dropdown-label]:bg-[var(--white-color)] [&_.au-dropdown-label]:text-[var(--grayscale-200)]',

        'dark:bg-[var(--grayscale-300)]',
        'dark:[&_.au-item]:bg-[var(--grayscale-400)] dark:[&_.au-item]:text-[var(--grayscale-100)]',
        'dark:[&_.au-item[data-highlighted]]:bg-[var(--dark-color)]',
        'dark:[&_.au-item[data-disabled]]:text-[var(--grayscale-100)] dark:[&_.au-item[data-disabled]]:opacity-80',
        'dark:[&_.au-item[data-disabled]]:bg-[var(--grayscale-300)]',
        'dark:[&_.au-item[data-disabled]]:my-0',
        'dark:[&_.au-dropdown-separator]:bg-[var(--grayscale-400)]',
        'dark:[&_.au-dropdown-label]:bg-[var(--grayscale-400)] dark:[&_.au-dropdown-label]:text-[var(--grayscale-100)]',
      ],
      dark: [
        'bg-[var(--grayscale-300)]',
        '[&_.au-item]:bg-[var(--grayscale-400)] [&_.au-item]:text-[var(--grayscale-100)]',
        '[&_.au-item[data-highlighted]]:bg-[var(--dark-color)]',
        '[&_.au-item[data-disabled]]:text-[var(--grayscale-100)] [&_.au-item[data-disabled]]:opacity-80',
        '[&_.au-item[data-disabled]]:bg-[var(--grayscale-300)]',
        '[&_.au-item[data-disabled]]:my-0',
        '[&_.au-dropdown-separator]:bg-[var(--grayscale-400)]',
        '[&_.au-dropdown-label]:bg-[var(--grayscale-400)] [&_.au-dropdown-label]:text-[var(--grayscale-100)]',

        'dark:bg-[var(--gray-color)]',
        'dark:[&_.au-item]:bg-[var(--white-color)] dark:[&_.au-item]:text-[var(--grayscale-200)]',
        'dark:[&_.au-item[data-highlighted]]:bg-[var(--gray-color)]',
        'dark:[&_.au-item[data-disabled]]:text-[var(--grayscale-100)] dark:[&_.au-item[data-disabled]]:opacity-100',
        'dark:[&_.au-item[data-disabled]]:bg-[var(--white-color)]',
        'dark:[&_.au-item[data-disabled]]:my-0',
        'dark:[&_.au-dropdown-separator]:bg-[var(--white-color)]',
        'dark:[&_.au-dropdown-label]:bg-[var(--white-color)] dark:[&_.au-dropdown-label]:text-[var(--grayscale-200)]',
      ],
    },
  },
});
