import * as Label from '@radix-ui/react-label';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

import {
  LabelAligns,
  LabelColors,
  LabelDecorations,
  LabelProps,
  LabelSizes,
  LabelWeights,
} from './types';

const label = tv({
  base: 'au-label',
  variants: {
    size: {
      ...LabelSizes,
    },
    color: {
      ...LabelColors,
    },
    weight: {
      ...LabelWeights,
    },
    align: {
      ...LabelAligns,
    },
    decoration: {
      ...LabelDecorations,
    },
    italic: {
      true: 'italic',
      false: 'not-italic',
    },
    limited: {
      true: 'overflow-hidden text-ellipsis whitespace-nowrap',
      false: '',
    },
  },
});

export default function LabelRoot({
  className = '',
  asChild,
  htmlFor,
  children,
  size = 'base',
  color,
  weight = 'normal',
  align = 'start',
  decoration,
  italic,
  limited,
}: LabelProps) {
  return (
    <Label.Root
      className={twMerge(
        label({ size, color, weight, align, decoration, italic, limited }),
        className,
      )}
      htmlFor={htmlFor}
      asChild={asChild}
    >
      {children}
    </Label.Root>
  );
}
