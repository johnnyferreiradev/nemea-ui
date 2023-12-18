import { tv } from 'tailwind-variants';

export const switchVariants = tv({
  base: [
    'au-switch relative rounded-full focus:outline-none',
    'bg-grayscale-100 dark:bg-grayscale-800',
    'transition will-change-transform duration-[0.4s]',
    'disabled:opacity-40',
  ],
  variants: {
    theme: {
      primary:
        'data-[state="checked"]:bg-primary-600 data-[state="checked"]:dark:bg-primary-600',
      secondary:
        'data-[state="checked"]:bg-secondary-600 data-[state="checked"]:dark:bg-secondary-600',
      tertiary:
        'data-[state="checked"]:bg-tertiary-600 data-[state="checked"]:dark:bg-tertiary-600',
      success:
        'data-[state="checked"]:bg-success-600 data-[state="checked"]:dark:bg-success-600',
      failure:
        'data-[state="checked"]:bg-failure-600 data-[state="checked"]:dark:bg-failure-600',
      warning:
        'data-[state="checked"]:bg-warning-600 data-[state="checked"]:dark:bg-warning-600',
    },
    size: {
      sm: ['w-[34px] h-[20px]'],
      md: ['w-[50px] h-[30px]'],
      lg: ['w-[64px] h-[38px]'],
    },
  },
});

export const switchThumbVariants = tv({
  base: [
    'au-switch-thumb',
    'block bg-light rounded-full',
    'transition will-change-transform duration-[0.4s]',
  ],
  variants: {
    size: {
      sm: [
        'w-4 h-4',
        'translate-x-[2.5px] data-[state="checked"]:translate-x-[16px]',
      ],
      md: [
        'w-6 h-6',
        'translate-x-[3px] data-[state="checked"]:translate-x-[23px]',
      ],
      lg: [
        'w-8 h-8',
        'translate-x-[3.5px] data-[state="checked"]:translate-x-[29px]',
      ],
    },
  },
});
