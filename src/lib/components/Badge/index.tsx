import { tv } from 'tailwind-variants';

import { BadgeProps } from './types';
import { twMerge } from 'tailwind-merge';

const badgeVariants = tv({
  base: [
    'au-badge relative rounded-md inline-flex items-center text-base w-max font-semibold transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  ],
  variants: {
    theme: {
      primary: ['text-light'],
      secondary: ['text-light'],
      tertiary: ['text-light'],
      gray: ['text-dark dark:text-light'],
      success: ['text-light'],
      failure: ['text-light'],
      warning: ['text-light'],
      dark: ['text-dark dark:text-light'],
      light: ['text-light dark:text-dark'],

      // outlines
      outlinePrimary: ['text-light'],
      outlineSecondary: ['text-light'],
      outlineTertiary: ['text-light'],
      outlineGray: ['text-dark dark:text-light'],
      outlineSuccess: ['text-light'],
      outlineFailure: ['text-light'],
      outlineWarning: ['text-light'],
      outlineDark: ['text-dark dark:text-light'],
      outlineLight: ['text-light dark:text-dark'],
    },
  },
  defaultVariants: {
    theme: 'gray',
  },
});

const badgeBackgroundVariants = tv({
  base: ['absolute w-full h-full z-10 inline-flex items-center rounded-full'],
  variants: {
    theme: {
      primary: ['bg-primary-600'],
      secondary: ['bg-secondary-600'],
      tertiary: ['bg-tertiary-600'],
      gray: ['bg-grayscale-50 dark:bg-grayscale-800'],
      success: ['bg-success-600'],
      failure: ['bg-failure-600'],
      warning: ['bg-warning-600'],
      dark: ['bg-dark'],
      light: ['bg-light'],

      // outlines
      outlinePrimary: ['bg-none border border-solid border-primary-600'],
      outlineSecondary: ['bg-none border border-solid border-secondary-600'],
      outlineTertiary: ['bg-none border border-solid border-tertiary-600'],
      outlineGray: [
        'bg-none border border-solid border-grayscale-50 dark:border-grayscale-800',
      ],
      outlineSuccess: ['bg-none border border-solid border-success-600'],
      outlineFailure: ['bg-none border border-solid border-failure-600'],
      outlineWarning: ['bg-none border border-solid border-warning-600'],
      outlineDark: [
        'bg-none border border-solid border-dark dark:border-light',
      ],
      outlineLight: [
        'bg-none border border-solid border-light dark:border-dark',
      ],
    },
  },
  defaultVariants: {
    theme: 'gray',
  },
});

export default function Badge({
  className = '',
  backgroundClassName = '',
  contentClassName = '',
  id,
  children,
  theme = 'primary',
  ...rest
}: BadgeProps) {
  return (
    <div className={badgeVariants({ theme, className })} id={id} {...rest}>
      <div
        className={badgeBackgroundVariants({
          theme,
          className: backgroundClassName,
        })}
      />
      <div className={twMerge('z-20 p-1', contentClassName)}>{children}</div>
    </div>
  );
}
