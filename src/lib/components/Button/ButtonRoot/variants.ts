import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'au-button outline-grayscale-200 dark:outline-grayscale-600',
    'relative box-border cursor-pointer border-none',
    'transition duration-200 ease-in-out',
    'rounded text-sm font-semibold decoration-0',
    'flex items-center text-center',
    'disabled:opacity-30 disabled:pointer-events-none',
  ],
  variants: {
    theme: {
      primary: [
        'bg-primary-600 text-light',
        'border border-solid border-primary-600',
        'hover:bg-primary-700 hover:border-primary-700',
        'outline-primary-200 dark:outline-primary-400',
      ],
      secondary: [
        'bg-secondary-600 text-light',
        'border border-solid border-secondary-600',
        'hover:bg-secondary-700 hover:border-secondary-700',
        'outline-secondary-200 dark:outline-secondary-400',
      ],
      tertiary: [
        'bg-tertiary-600 text-light',
        'border border-solid border-tertiary-600',
        'hover:bg-tertiary-700 hover:border-tertiary-700',
        'outline-tertiary-200 dark:outline-tertiary-400',
      ],
      gray: [
        'bg-grayscale-100 text-dark',
        'dark:bg-grayscale-800 dark:text-grayscale-50',
        'border border-solid border-grayscale-100 dark:border-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'hover:border-grayscale-200 dark:hover:border-grayscale-900',
        'outline-grayscale-300 dark:outline-grayscale-400',
      ],
      success: [
        'bg-success-600 text-light',
        'border border-solid border-success-600',
        'hover:bg-success-700 hover:border-success-700',
        'outline-success-200 dark:outline-success-400',
      ],
      failure: [
        'bg-failure-600 text-light',
        'border border-solid border-failure-600',
        'hover:bg-failure-700 hover:border-failure-700',
        'outline-failure-200 dark:outline-failure-400',
      ],
      warning: [
        'bg-warning-500 text-light',
        'border border-solid border-warning-500',
        'hover:bg-warning-600 hover:border-warning-600',
        'outline-warning-200 dark:outline-warning-400',
      ],
      dark: [
        'bg-dark text-light',
        'dark:bg-light dark:text-dark',
        'hover:bg-grayscale-900 dark:hover:bg-grayscale-100',
        'border border-solid border-dark hover:border-grayscale-900',
        'dark:border-light dark:hover:border-grayscale-100',
        'outline-grayscale-400 dark:outline-grayscale-400',
      ],
      light: [
        'bg-light text-dark',
        'dark:bg-dark dark:text-light',
        'hover:bg-grayscale-100 dark:hover:bg-grayscale-900',
        'border border-solid border-light hover:border-grayscale-100',
        'dark:border-dark dark:hover:border-grayscale-900',
        'outline-grayscale-400 dark:outline-grayscale-400',
      ],

      linkPrimary: [
        'bg-none text-primary-600 dark:text-primary-500',
        'hover:text-primary-700 dark:hover:text-primary-600',
        'outline-primary-700',
        'disabled:text-gray-400',
      ],
      linkSecondary: [
        'bg-none text-secondary-600 dark:text-secondary-500',
        'hover:text-secondary-700 dark:hover:text-secondary-600',
        'outline-secondary-700',
        'disabled:text-gray-400',
      ],
      linkTertiary: [
        'bg-none text-tertiary-600 dark:text-tertiary-500',
        'hover:text-tertiary-700 dark:hover:text-tertiary-600',
        'outline-tertiary-700',
        'disabled:text-gray-400',
      ],
      linkGray: [
        'bg-none text-grayscale-600 dark:text-grayscale-500',
        'hover:text-grayscale-700 dark:hover:text-grayscale-600',
        'outline-grayscale-700',
        'disabled:text-gray-400',
      ],
      linkSuccess: [
        'bg-none text-success-600 dark:text-success-500',
        'hover:text-success-700 dark:hover:text-success-600',
        'outline-success-700',
        'disabled:text-gray-400',
      ],
      linkFailure: [
        'bg-none text-failure-600 dark:text-failure-500',
        'hover:text-failure-700 dark:hover:text-failure-600',
        'outline-failure-700',
        'disabled:text-gray-400',
      ],
      linkWarning: [
        'bg-none text-warning-500 dark:text-warning-500',
        'hover:text-warning-600 dark:hover:text-warning-600',
        'outline-warning-600',
        'disabled:text-gray-400',
      ],
      linkDark: [
        'bg-none text-dark',
        'hover:text-grayscale-900',
        'dark:text-light dark:hover:text-grayscale-300',
        'outline-dark dark:outline-grayscale-300',
        'disabled:text-gray-400',
      ],
      linkLight: [
        'bg-none text-light',
        'hover:text-grayscale-300',
        'dark:text-dark dark:hover:text-grayscale-900',
        'outline-grayscale-300 dark:outline-dark',
        'disabled:text-gray-400',
      ],

      primaryFlat: [
        'bg-none text-primary-600 border border-solid border-transparent dark:text-primary-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border-grayscale-50 dark:hover:border-grayscale-800',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      secondaryFlat: [
        'bg-none text-secondary-600 border border-solid border-transparent dark:text-secondary-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border-grayscale-50 dark:hover:border-grayscale-800',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      tertiaryFlat: [
        'bg-none text-tertiary-600 border border-solid border-transparent dark:text-tertiary-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border-grayscale-50 dark:hover:border-grayscale-800',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      grayFlat: [
        'bg-none text-grayscale-600 border border-solid border-transparent dark:text-grayscale-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border border-solid hover:border-grayscale-50',
        'dark:hover:border-grayscale-800',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      successFlat: [
        'bg-none text-success-600 border border-solid border-transparent dark:text-success-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border-grayscale-50 dark:hover:border-grayscale-800',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      failureFlat: [
        'bg-none text-failure-600 border border-solid border-transparent dark:text-failure-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border-grayscale-50 dark:hover:border-grayscale-800',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      warningFlat: [
        'bg-none text-warning-500 border border-solid border-transparent dark:text-warning-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border-grayscale-50 dark:hover:border-grayscale-800',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      darkFlat: [
        'bg-none text-dark border border-solid border-transparent dark:text-light',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border border-solid hover:border-grayscale-50',
        'dark:hover:border-grayscale-800 dark:text-light',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],
      lightFlat: [
        'bg-none text-light border border-solid border-transparent dark:text-dark',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'hover:border border-solid hover:border-grayscale-50',
        'dark:hover:border-grayscale-800 dark:text-dark',
        'outline-grayscale-50 dark:outline-dark',
        'disabled:text-gray-400',
      ],

      outlinePrimary: [
        'bg-none text-primary-600',
        'border border-solid border-primary-600',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'outline-primary-700',
      ],
      outlineSecondary: [
        'bg-none text-secondary-600',
        'border border-solid border-secondary-600',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'outline-secondary-700',
      ],
      outlineTertiary: [
        'bg-none text-tertiary-600',
        'border border-solid border-tertiary-600',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'outline-tertiary-700',
      ],
      outlineGray: [
        'bg-none text-[var(--grayscale-color-400)]',
        'border border-solid border-[var(--grayscale-color-400)]',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'outline-[var(--grayscale-color-400)]',
      ],
      outlineSuccess: [
        'bg-none text-success-600',
        'border border-solid border-success-600',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'outline-success-700',
      ],
      outlineFailure: [
        'bg-none text-failure-600',
        'border border-solid border-failure-600',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'outline-failure-700',
      ],
      outlineWarning: [
        'bg-none text-warning-500',
        'border border-solid border-warning-500',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'outline-warning-600',
      ],
      outlineDark: [
        'bg-none text-dark',
        'border border-solid border-dark dark:border-light',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'dark:text-light',
        'outline-dark dark:outline-light',
      ],
      outlineLight: [
        'bg-none text-light',
        'border border-solid border-light dark:border-dark',
        'hover:bg-grayscale-50 dark:hover:bg-grayscale-800',
        'dark:text-dark',
        'outline-light dark:outline-dark',
      ],

      grayPrimary: [
        'bg-none text-primary-600',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-primary-600 active:text-light',
        'dark:active:bg-primary-600 dark:active:text-light',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
      graySecondary: [
        'bg-none text-secondary-600',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-secondary-600 active:text-light',
        'dark:active:bg-secondary-600 dark:active:text-light',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
      grayTertiary: [
        'bg-none text-tertiary-600',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-tertiary-600 active:text-light',
        'dark:active:bg-tertiary-600 dark:active:text-light',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
      graySuccess: [
        'bg-none text-success-600',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-success-600 active:text-light',
        'dark:active:bg-success-600 dark:active:text-light',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
      grayFailure: [
        'bg-none text-failure-600',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-failure-600 active:text-light',
        'dark:active:bg-failure-600 dark:active:text-light',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
      grayWarning: [
        'bg-none text-warning-500',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-warning-500 active:text-light',
        'dark:active:bg-warning-500 dark:active:text-light',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
      grayDark: [
        'bg-none text-dark dark:text-light',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-dark active:text-light',
        'dark:active:bg-light dark:active:text-dark',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
      grayLight: [
        'bg-none text-light dark:text-dark',
        'bg-grayscale-50 dark:bg-grayscale-800',
        'hover:bg-grayscale-200 dark:hover:bg-grayscale-900',
        'active:bg-light active:text-dark',
        'dark:active:bg-dark dark:active:text-light',
        'border border-solid border-grayscale-50 hover:border-grayscale-200',
        'dark:border-grayscale-800 dark:hover:border-grayscale-900',
        'outline-grayscale-200 dark:outline-grayscale-900',
      ],
    },
    size: {
      xs: 'p-1 text-xs',
      sm: 'px-2 py-2 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
      xl: 'px-5 py-4 text-lg',
    },
  },
});
