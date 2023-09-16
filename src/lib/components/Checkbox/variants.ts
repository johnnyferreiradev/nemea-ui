import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  base: [
    'au-checkbox',
    'w-5 h-5 flex items-center justify-center',
    'text-white rounded border',
    'focus:outline-none',
    'border-grayscale-200 bg-light',
    'dark:bg-grayscale-800 dark:border-grayscale-600',
    'disabled:bg-grayscale-50 dark:disabled:bg-grayscale-700',
    'disabled:aria-checked:opacity-40',
  ],
  variants: {
    theme: {
      primary: [
        'aria-checked:bg-primary-600 aria-checked:border-primary-600',
        'dark:aria-checked:bg-primary-600 dark:aria-checked:border-primary-600',
      ],
      secondary: [
        'aria-checked:bg-secondary-600 aria-checked:border-secondary-600',
        'dark:aria-checked:bg-secondary-600 dark:aria-checked:border-secondary-600',
      ],
      tertiary: [
        'aria-checked:bg-tertiary-600 aria-checked:border-tertiary-600',
        'dark:aria-checked:bg-tertiary-600 dark:aria-checked:border-tertiary-600',
      ],
      success: [
        'aria-checked:bg-success-600 aria-checked:border-success-600',
        'dark:aria-checked:bg-success-600 dark:aria-checked:border-success-600',
      ],
      failure: [
        'aria-checked:bg-failure-600 aria-checked:border-failure-600',
        'dark:aria-checked:bg-failure-600 dark:aria-checked:border-failure-600',
      ],
      warning: [
        'aria-checked:bg-warning-600 aria-checked:border-warning-600',
        'dark:aria-checked:bg-warning-600 dark:aria-checked:border-warning-600',
      ],
      dark: [
        'aria-checked:bg-dark aria-checked:border-dark',
        'dark:aria-checked:bg-light dark:aria-checked:text-dark dark:aria-checked:border-light',
      ],
    },
  },
});
