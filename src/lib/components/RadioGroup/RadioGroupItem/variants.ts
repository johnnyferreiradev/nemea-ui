import { tv } from 'tailwind-variants';

export const radioGroupItemVariants = tv({
  base: ['au-radiogroup-item w-5 h-5 rounded-full'],
  variants: {
    theme: {
      primary: [
        'border border-[var(--grayscale-100)]',
        'data-[state="checked"]:bg-[var(--primary-color)] data-[state="checked"]:border-[var(--primary-color)]',
        'focus:outline-none',
        'bg-[var(--white-color)]',
        'disabled:bg-[var(--gray-color)]',
        'dark:bg-[var(--dark-color)] dark:border-[var(--grayscale-400)]',
        'dark:disabled:bg-[var(--grayscale-300)]',
        'data-[state="checked"]:dark:bg-[var(--primary-color)] data-[state="checked"]:dark:border-[var(--primary-color)]',
        'data-[state="checked"]:disabled:opacity-40',
      ],
    },
  },
});
