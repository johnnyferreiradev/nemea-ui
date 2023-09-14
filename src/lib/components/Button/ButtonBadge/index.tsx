import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import { ButtonBadgeProps } from './types';

const badge = tv({
  base: [
    'au-button-badge absolute pointer-events-none font-bold min-w-[20px]',
    'text-xs p-0.5 px-1 rounded-xl text-light text-center border-none',
  ],
  variants: {
    color: {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      tertiary: 'bg-tertiary-500',
      gray: 'bg-grayscale-500',
      success: 'bg-success-500',
      failure: 'bg-failure-500',
      warning: 'bg-warning-500',
      dark: 'bg-dark dark:bg-light',
      light: 'bg-light dark:bg-dark',
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
