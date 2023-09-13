import { tv } from 'tailwind-variants';

export const switchVariants = tv({
  base: [
    'au-switch',
    'relative rounded-full',
    'focus:outline-none',
    'bg-[var(--grayscale-100)]',
    'dark:bg-[var(--grayscale-400)]',
    'transition will-change-transform duration-[0.4s]',
    'data-[state="checked"]:bg-[var(--primary-color)]',
    'data-[state="checked"]:dark:bg-[var(--primary-color)]',
    'disabled:bg-[var(--gray-color)]',
    'data-[state="checked"]:disabled:opacity-40',
  ],
  variants: {
    size: {
      sm: ['w-[34px] h-[20px]'],
      md: ['w-[49px] h-[29px]'],
      lg: ['w-[64px] h-[38px]'],
    },
  },
});
