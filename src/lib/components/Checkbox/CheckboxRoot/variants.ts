import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  base: [
    'au-checkbox',
    'w-5 h-5 flex items-center justify-center',
    'text-white',
    'rounded border-2 ',
    'focus:outline-none',
  ],
  variants: {
    theme: {
      primary: [
        'border-[var(--grayscale-100)]',
        'bg-[var(--white-color)]',
        'aria-checked:bg-[var(--primary-color)] aria-checked:border-[var(--primary-color)]',
        'dark:bg-[var(--dark-color)] dark:border-[var(--grayscale-400)]',
        'dark:aria-checked:bg-[var(--primary-color)] dark:aria-checked:border-[var(--primary-color)]',
        'disabled:bg-[var(--gray-color)] dark:disabled:bg-[var(--grayscale-300)]',
        'disabled:aria-checked:opacity-40',
      ],
    },
  },
});
