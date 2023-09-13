import { tv } from 'tailwind-variants';

export const radioGroupIndicatorVariants = tv({
  base: [
    'au-radiogroup-indicator',
    'flex items-center justify-center',
    'w-full h-full relative',
    'after:content-[""] after:block',
  ],
  variants: {
    theme: {
      primary: [
        'after:w-2 after:h-2 after:rounded-full after:bg-[var(--white-color)]',
      ],
    },
  },
});
