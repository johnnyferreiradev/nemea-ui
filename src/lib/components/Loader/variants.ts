import { tv } from 'tailwind-variants';

export const loaderVariants = tv({
  base: 'inline  mr-2 text-grayscale-200 animate-spin-linear dark:text-grayscale-600',
  variants: {
    color: {
      primary: ['fill-primary-600'],
      secondary: ['fill-secondary-600'],
      tertiary: ['fill-tertiary-600'],
      success: ['fill-success-600'],
      failure: ['fill-failure-600'],
      warning: ['fill-warning-600'],
      dark: ['fill-dark dark:fill-light'],
      light: ['fill-light dark:fill-dark'],
    },
    size: {
      xs: ['w-4 h-4'],
      sm: ['w-6 h-6'],
      md: ['w-8 h-8'],
      lg: ['w-10 h-10'],
    },
  },
});
