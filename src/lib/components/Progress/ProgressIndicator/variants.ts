import { tv } from 'tailwind-variants';
import { ProgressIndicatorColors } from './types';

export const progressIndicatorVariants = tv({
  base: ['au-progress-indicator', 'w-full h-full transform'],
  variants: {
    color: {
      ...ProgressIndicatorColors,
    },
  },
});
