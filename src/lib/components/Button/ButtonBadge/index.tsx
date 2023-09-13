import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { ButtonBadgeProps } from './types';

const badge = tv({
  base: [
    'au-button-badge absolute pointer-events-none font-bold min-w-[20px]',
    'text-xs p-0.5 rounded-xl text-[var(--white-color)]',
  ],
  variants: {
    color: {
      primary: 'bg-[var(--primary-color)]',
      secondary: 'bg-[var(--secondary-color-200)]',
      tertiary1: 'bg-[var(--tertiary-color-1)]',
      tertiary2: 'bg-[var(--tertiary-color-2)]',
      tertiary3: 'bg-[var(--tertiary-color-3)]',
      supportPastel2: 'bg-[var(--support-pastel-color-2)]',
      gray: 'bg-[var(--grayscale-300)]',
      success: 'bg-[var(--success-color)]',
      danger: 'bg-[var(--danger-color)]',
      warning: 'bg-[var(--warning-color)]',
      dark: 'bg-[var(--dark-color)]',
      white: 'bg-[var(--white-color)] text-[var(--dark-color)]',
    },
    position: {
      'top-right': '-top-2 -right-2',
      'top-left': '-top-2 -left-2',
      'bottom-right': '-bottom-2 -right-2',
      'bottom-left': '-bottom-2 -left-2',
    },
  },
});

export default function ButtonBadge({
  className = '',
  children,
  position = 'top-right',
  color = 'primary',
}: ButtonBadgeProps) {
  return (
    <div className={twMerge(badge({ color, position }), className)}>
      {children}
    </div>
  );
}
