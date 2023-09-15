import { tv } from 'tailwind-variants';

export const inputWrapperVatiants = tv({
  base: [
    'am-input-wrapper flex items-center rounded border',
    '[&:has([aria-invalid="true"])]:border-failure-400',
  ],
  variants: {
    theme: {
      white: [
        'bg-light border-grayscale-200 focus-within:border-primary-600',
        'dark:bg-grayscale-950 dark:border-grayscale-700 dark:focus-within:border-primary-500',
        '[&.is-disabled]:bg-grayscale-200 [&.is-disabled]:border-grayscale-200',
        'dark:[&.is-disabled]:bg-grayscale-300 dark:[&.is-disabled]:border-grayscale-300',
      ],
      gray: [
        'bg-grayscale-200 border-grayscale-200 focus-within:border-grayscale-200',
        'dark:bg-[var(--grayscale-400)] dark:border-[var(--grayscale-400)]',
        '[&.is-disabled]:bg-grayscale-200 [&.is-disabled]:border-grayscale-200',
        'dark:[&.is-disabled]:bg-grayscale-300 dark:[&.is-disabled]:border-grayscale-300',
      ],
      noBorder: [
        'bg-light border-light focus-within:border-light',
        'dark:bg-grayscale-900 dark:border-grayscale-900 dark:focus-within:border-grayscale-900',
        '[&.is-disabled]:bg-grayscale-200 [&.is-disabled]:border-grayscale-200',
        'dark:[&.is-disabled]:bg-grayscale-300 dark:[&.is-disabled]:border-grayscale-300',
      ],
      shadow: [
        'bg-light border-light focus-within:border-primary-600',
        'shadow-lg shadow-grayscale-200 dark:shadow-[var(--grayscale-400)]',
        'dark:bg-grayscale-900 dark:border-grayscale-900 dark:focus-within:border-grayscale-900',
        '[&.is-disabled]:bg-grayscale-200 [&.is-disabled]:border-grayscale-200 [&.is-disabled]:shadow-none',
        'dark:[&.is-disabled]:bg-grayscale-300 dark:[&.is-disabled]:border-grayscale-300 dark:[&.is-disabled]:shadow-none',
      ],
      dark: [
        'bg-grayscale-900 border-grayscale-900 focus-within:border-primary-600',
        '[&.is-disabled]:bg-grayscale-300 [&.is-disabled]:border-grayscale-300',
        'dark:bg-light dark:border-light',
        'dark:[&.is-disabled]:bg-grayscale-200 dark:[&.is-disabled]:border-grayscale-200',
      ],
    },
    size: {
      sm: 'p-1',
      md: 'px-3 py-2',
      lg: 'px-4 py-3',
      xl: 'px-5 py-4',
    },
  },
});

export const inputVariants = tv({
  base: [
    'am-input py-0 outline-none mx-1.5 w-full bg-transparent font-medium',
    'placeholder-grayscale-300 dark:placeholder-grayscale-500',
    'resize-none default-scroll font-normal rounded-none',
  ],
  variants: {
    theme: {
      white: ['text-dark dark:text-light'],
      gray: ['text-dark dark:text-light'],
      noBorder: ['text-dark dark:text-light'],
      shadow: ['text-dark dark:text-light'],
      dark: ['text-light dark:text-dark'],
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-lg',
    },
  },
});
