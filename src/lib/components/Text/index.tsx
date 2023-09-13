import { tv } from 'tailwind-variants';

import {
  TextAligns,
  TextColors,
  TextDecorations,
  TextProps,
  TextSizes,
  TextWeights,
} from './types';

const text = tv({
  base: 'au-text',
  variants: {
    size: {
      ...TextSizes,
    },
    color: {
      ...TextColors,
    },
    weight: {
      ...TextWeights,
    },
    align: {
      ...TextAligns,
    },
    decoration: {
      ...TextDecorations,
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

export default function Text({
  className = '',
  id,
  element,
  children,
  size = 'base',
  color,
  weight = 'normal',
  align = 'start',
  decoration,
  italic,
  limited,
}: TextProps) {
  const Component = element || 'p';

  return (
    <Component
      className={text({
        size,
        color,
        weight,
        align,
        italic,
        decoration,
        limited,
        className,
      })}
      id={id}
    >
      {children}
    </Component>
  );
}
