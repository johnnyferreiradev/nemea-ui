import { tv } from 'tailwind-variants';

export const appLoaderVariants = tv({
  base: [
    'au-app-loader w-screen h-screen absolute flex items-center justify-center',
    'flex-col dark:bg-[var(--grayscale-color-800)] bg-[var(--dark-color)]',
    'z-10',
  ],
  variants: {
    show: {
      true: ['flex'],
      false: ['hidden'],
    },
  },
});
