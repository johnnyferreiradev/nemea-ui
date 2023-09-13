import { tv } from 'tailwind-variants';

import {
  IconProps,
  IconNames,
  IconColors,
  IconWeights,
  IconSizes,
} from './types';

import './styles.css';

const icon = tv({
  base: 'au-icon not-italic text-lg',
  variants: {
    color: {
      ...IconColors,
    },
    size: {
      ...IconSizes,
    },
    name: {
      ...IconNames,
    },
    weight: {
      ...IconWeights,
    },
  },
});

export function Icon({
  className = '',
  name,
  size,
  color,
  id,
  weight,
}: IconProps) {
  return (
    <i className={icon({ size, name, color, weight, className })} id={id} />
  );
}

export default Icon;
