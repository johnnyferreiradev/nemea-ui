import { tv } from 'tailwind-variants';

export const radioGroupItemVariants = tv({
  base: [
    'au-radiogroup-item w-5 h-5 rounded-full border border-grayscale-200',
    'focus:outline-none bg-light disabled:bg-grayscale-50',
    'dark:bg-grayscale-800 dark:border-grayscale-600 dark:disabled:bg-grayscale-700',
    'data-[state="checked"]:disabled:opacity-40',
  ],
  variants: {
    theme: {
      primary: [
        'data-[state="checked"]:bg-primary-600 data-[state="checked"]:border-primary-600',
        'data-[state="checked"]:dark:bg-primary-600 data-[state="checked"]:dark:border-primary-600',
      ],
      secondary: [
        'data-[state="checked"]:bg-secondary-600 data-[state="checked"]:border-secondary-600',
        'data-[state="checked"]:dark:bg-secondary-600 data-[state="checked"]:dark:border-secondary-600',
      ],
      tertiary: [
        'data-[state="checked"]:bg-tertiary-600 data-[state="checked"]:border-tertiary-600',
        'data-[state="checked"]:dark:bg-tertiary-600 data-[state="checked"]:dark:border-tertiary-600',
      ],
      success: [
        'data-[state="checked"]:bg-success-600 data-[state="checked"]:border-success-600',
        'data-[state="checked"]:dark:bg-success-600 data-[state="checked"]:dark:border-success-600',
      ],
      failure: [
        'data-[state="checked"]:bg-failure-600 data-[state="checked"]:border-failure-600',
        'data-[state="checked"]:dark:bg-failure-600 data-[state="checked"]:dark:border-failure-600',
      ],
      warning: [
        'data-[state="checked"]:bg-warning-600 data-[state="checked"]:border-warning-600',
        'data-[state="checked"]:dark:bg-warning-600 data-[state="checked"]:dark:border-warning-600',
      ],
    },
  },
});
