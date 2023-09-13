import { tv } from 'tailwind-variants';

export const datePickerControlWrapper = tv({
  base: ['au-date-picker-control-wrapper flex items-center rounded-lg border'],
  variants: {
    theme: {
      white: [
        'bg-[var(--white-color)] border-[var(--grayscale-100)] focus-within:border-[var(--primary-color)]',
        'dark:bg-[var(--dark-color)] dark:border-[var(--grayscale-300)]',
        '[&.is-disabled]:bg-[var(--gray-color)] [&.is-disabled]:border-[var(--gray-color)]',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:[&.is-disabled>.au-date-picker-control-control]:placeholder-[var(--grayscale-200)]',
      ],
      gray: [
        'bg-[var(--gray-color)] border-[var(--gray-color)] focus-within:border-[var(--gray-color)]',
        'dark:bg-[var(--grayscale-400)] dark:border-[var(--grayscale-400)]',
        '[&.is-disabled]:bg-[var(--grayscale-100)] [&.is-disabled]:border-[var(--grayscale-100)]',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:[&.is-disabled>.au-date-picker-control]:placeholder-[var(--grayscale-200)]',
      ],
      noBorder: [
        'bg-[var(--white-color)] border-[var(--white-color)] focus-within:border-[var(--white-color)]',
        'dark:bg-[var(--dark-color)] dark:border-[var(--dark-color)] dark:focus-within:border-[var(--dark-color)]',
        '[&.is-disabled]:bg-[var(--gray-color)] [&.is-disabled]:border-[var(--gray-color)]',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:[&.is-disabled>.au-date-picker-control]:placeholder-[var(--grayscale-200)]',
      ],
      shadow: [
        'bg-[var(--white-color)] border-[var(--white-color)] focus-within:border-[var(--primary-color)]',
        'shadow-lg shadow-[var(--gray-color)] dark:shadow-[var(--grayscale-400)]',
        'dark:bg-[var(--dark-color)] dark:border-[var(--dark-color)] dark:focus-within:border-[var(--dark-color)]',
        '[&.is-disabled]:bg-[var(--gray-color)] [&.is-disabled]:border-[var(--gray-color)] [&.is-disabled]:shadow-none',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)] dark:[&.is-disabled]:shadow-none',
        'dark:[&.is-disabled>.au-date-picker-control]:placeholder-[var(--grayscale-200)]',
      ],
      dark: [
        'bg-[var(--dark-color)] border-[var(--dark-color)] focus-within:border-[var(--primary-color)]',
        '[&.is-disabled]:bg-[var(--grayscale-300)] [&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:bg-[var(--white-color)] dark:border-[var(--white-color)]',
        'dark:[&.is-disabled]:bg-[var(--gray-color)] dark:[&.is-disabled]:border-[var(--gray-color)]',
      ],
    },
    size: {
      xs: 'p-1',
      sm: 'px-2 py-1',
      md: 'px-[14px] py-2',
      lg: 'px-[14px] py-2',
      xl: 'px-4 py-3',
    },
    invalid: {
      true: 'border-[var(--danger-color)]',
      false: '',
    },
  },
});

export const datePickerControl = tv({
  base: [
    'au-date-picker-control py-0 outline-none mx-1.5 w-full bg-transparent font-medium',
    'placeholder-[var(--grayscale-200)] dark:placeholder-[var(--grayscale-300)]',
  ],
  variants: {
    theme: {
      white: ['text-[var(--dark-color)] dark:text-[var(--white-color)]'],
      gray: ['text-[var(--dark-color)] dark:text-[var(--white-color)]'],
      noBorder: ['text-[var(--dark-color)] dark:text-[var(--white-color)]'],
      shadow: ['text-[var(--dark-color)] dark:text-[var(--white-color)]'],
      dark: ['text-[var(--white-color)] dark:text-[var(--dark-color)]'],
    },
    size: {
      xs: 'text-xs h-[14px]',
      sm: 'text-sm h-[26px]',
      md: 'text-base h-[26px]',
      lg: 'text-lg h-[34px]',
      xl: 'text-xl h-[34px]',
    },
  },
});
