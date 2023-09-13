import { tv } from 'tailwind-variants';

export const radioGroupRootVariants = tv({
  base: ['au-radiogroup flex gap-2'],
  variants: {
    orientation: {
      horizontal: ['flex-row'],
      vertical: ['flex-col'],
    },
  },
});
