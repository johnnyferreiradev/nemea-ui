import { tv } from 'tailwind-variants';

export const iconRangeRangeVariants = tv({
  base: [
    'au-icon-range-range',
    'absolute',
    'rounded-full',
    'data-[orientation="horizontal"]:h-full',
    'data-[orientation="vertical"]:w-full',
  ],
  variants: {
    theme: {
      primary: ['bg-[var(--primary-color-300)]'],
      primary100: ['bg-[var(--primary-color-400)]'],
      secondary: ['bg-[var(--secondary-color-200)]'],
      tertiary: ['bg-[var(--tertiary-color-3)]'],
    },
  },
});
