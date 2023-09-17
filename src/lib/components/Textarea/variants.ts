import { tv } from 'tailwind-variants';

export const textareaWrapperVatiants = tv({
  base: [
    'am-textarea-wrapper flex items-start rounded-md border',
    '[&:has([aria-invalid="true"])]:border-failure-400',
  ],
  variants: {
    theme: {
      light: [
        'bg-light border-grayscale-200 focus-within:border-primary-600',
        'dark:bg-grayscale-950 dark:border-grayscale-700 dark:focus-within:border-primary-500',
        '[&.is-disabled]:bg-grayscale-50 [&.is-disabled]:border-grayscale-200',
        'dark:[&.is-disabled]:bg-grayscale-900 dark:[&.is-disabled]:border-grayscale-700',
      ],
      gray: [
        'bg-grayscale-100 border-grayscale-100 focus-within:border-grayscale-100',
        'dark:bg-grayscale-800 dark:border-grayscale-800 dark:focus-within:border-grayscale-800',
        '[&.is-disabled]:bg-grayscale-200 [&.is-disabled]:border-grayscale-200',
        'dark:[&.is-disabled]:bg-grayscale-700 dark:[&.is-disabled]:border-grayscale-700',
      ],
      noBorder: [
        'bg-light border-light focus-within:border-light',
        'dark:bg-grayscale-950 dark:border-grayscale-950 dark:focus-within:border-grayscale-950',
        '[&.is-disabled]:bg-grayscale-50 [&.is-disabled]:border-grayscale-50',
        'dark:[&.is-disabled]:bg-grayscale-900 dark:[&.is-disabled]:border-grayscale-900',
      ],
      shadow: [
        'bg-light border-light focus-within:shadow-none',
        'shadow-lg shadow-grayscale-100 dark:shadow-grayscale-900 dark:focus-within:shadow-none',
        'dark:bg-grayscale-950 dark:border-grayscale-950',
        '[&.is-disabled]:bg-grayscale-50 [&.is-disabled]:border-grayscale-50',
        'dark:[&.is-disabled]:bg-grayscale-900 dark:[&.is-disabled]:border-grayscale-900',
        '[&.is-disabled]:shadow-none dark:[&.is-disabled]:shadow-none',
      ],
      dark: [
        'bg-grayscale-800 border-grayscale-800 focus-within:border-grayscale-800',
        'dark:bg-light dark:border-light dark:focus-within:border-grayscale-100',
        '[&.is-disabled]:bg-grayscale-50 [&.is-disabled]:border-grayscale-50',
        'dark:[&.is-disabled]:bg-grayscale-900 dark:[&.is-disabled]:border-grayscale-900',
      ],
    },
    size: {
      xs: 'p-1',
      sm: 'px-2 py-2',
      md: 'px-3 py-2',
      lg: 'px-4 py-3',
      xl: 'px-5 py-4',
    },
  },
});

export const textareaVariants = tv({
  base: [
    'am-textarea py-0 outline-none mx-1.5 w-full bg-transparent font-medium',
    'placeholder-grayscale-300 disabled:placeholder-grayscale-300',
    'dark:placeholder-grayscale-500 dark:disabled:placeholder-grayscale-700',
    'disabled:text-grayscale-500 dark:disabled:text-grayscale-400',
    'resize-none default-scroll font-normal rounded-none',
  ],
  variants: {
    theme: {
      light: ['text-dark dark:text-light'],
      gray: [
        'text-dark dark:text-light dark:disabled:placeholder-grayscale-600',
      ],
      noBorder: ['text-dark dark:text-light'],
      shadow: ['text-dark dark:text-light'],
      dark: ['text-light dark:text-dark'],
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-lg',
    },
  },
});
