import { tv } from 'tailwind-variants';

import { BadgeProps } from './types';
import { twMerge } from 'tailwind-merge';

const badgeVariants = tv({
  base: [
    'au-badge relative rounded-full inline-flex items-center text-base w-max font-semibold transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  ],
  variants: {
    theme: {
      primary: ['text-[var(--white-color)]'],
      primary100: ['text-[var(--primary-color)]'],
      secondary: ['text-[var(--white-color)]'],
      secondary200: ['text-[var(--white-color)]'],
      secondary_20: ['text-[var(--secondary-color)]'],
      tertiary1: ['text-[var(--white-color)]'],
      tertiary3: ['text-[var(--white-color)]'],
      supportPastel2: ['text-[var(--white-color)]'],
      supportPastel2_20: ['text-[var(--support-pastel-color-2)]'],
      gray200: ['text-[var(--dark-color)]'],
      gray300: ['text-[var(--white-color)]'],
      gray200White: ['text-[var(--white-color)]'],
      success100: ['text-[var(--success-color)]'],
      danger100: ['text-[var(--danger-color)]'],
      danger200: ['text-[var(--white-color)]'],
      dark: ['text-[var(--white-color)]'],

      // outlines
      outlinePrimary: ['text-[var(--primary-color)]'],
      outlinePrimary100: ['text-[var(--primary-color)]'],
      outlineSecondary: ['text-[var(--secondary-color)]'],
      outlineSecondary200: ['text-[var(--secondary-color-200)]'],
      outlineSecondary_20: ['text-[var(--secondary-color)]'],
      outlineTertiary1: ['text-[var(--tertiary-color-1)]'],
      outlineTertiary3: ['text-[var(--tertiary-color-3)]'],
      outlineSupportPastel2: ['text-[var(--support-pastel-color-2)]'],
      outlineSupportPastel2_20: ['text-[var(--support-pastel-color-2)]'],
      outlineGray200: ['text-[var(--grayscale-300)]'],
      outlineGray300: ['text-[var(--grayscale-300)]'],
      outlineGray200White: ['text-[var(--grayscale-200)]'],
      outlineSuccess100: ['text-[var(--success-color)]'],
      outlineDanger100: ['text-[var(--danger-color)]'],
      outlineDanger200: ['text-[var(--danger-color)]'],
      outlineDark: ['text-[var(--dark-color)]'],
    },
  },
  defaultVariants: {
    theme: 'primary',
  },
});

const badgeBackgroundVariants = tv({
  base: ['absolute w-full h-full z-10 inline-flex items-center rounded-full'],
  variants: {
    theme: {
      primary: ['bg-[var(--primary-color)]'],
      primary100: ['bg-[var(--primary-color-100)]'],
      secondary: ['bg-[var(--secondary-color)]'],
      secondary200: ['bg-[var(--secondary-color-200)]'],
      secondary_20: ['bg-[var(--secondary-color)] opacity-20'],
      tertiary1: ['bg-[var(--tertiary-color-1)]'],
      tertiary3: ['bg-[var(--tertiary-color-3)]'],
      supportPastel2: ['bg-[var(--support-pastel-color-2)]'],
      supportPastel2_20: ['bg-[var(--support-pastel-color-2)] opacity-20'],
      gray200: ['bg-[var(--grayscale-200)]'],
      gray300: ['bg-[var(--grayscale-300)]'],
      gray200White: ['bg-[var(--grayscale-200)]'],
      success100: ['bg-[var(--success-color-100)]'],
      danger100: ['bg-[var(--danger-color-100)]'],
      danger200: ['bg-[var(--danger-color)]'],
      dark: ['bg-[var(--dark-color)]'],

      // outlines
      outlinePrimary: [
        'bg-none border border-solid border-[var(--primary-color)]',
      ],
      outlinePrimary100: [
        'bg-none border border-solid border-[var(--primary-color-100)]',
      ],
      outlineSecondary: [
        'bg-none border border-solid border-[var(--secondary-color)]',
      ],
      outlineSecondary200: [
        'bg-none border border-solid border-[var(--secondary-color-200)]',
      ],
      outlineSecondary_20: [
        'bg-none border border-solid border-[var(--grayscale-100)]',
      ],
      outlineTertiary1: [
        'bg-none border border-solid border-[var(--tertiary-color-1)]',
      ],
      outlineTertiary3: [
        'bg-none border border-solid border-[var(--tertiary-color-3)]',
      ],
      outlineSupportPastel2: [
        'bg-none border border-solid border-[var(--support-pastel-color-2)]',
      ],
      outlineSupportPastel2_20: [
        'bg-none border border-solid border-[var(--grayscale-100)]',
      ],
      outlineGray200: [
        'bg-none border border-solid border-[var(--grayscale-200)]',
      ],
      outlineGray300: [
        'bg-none border border-solid border-[var(--grayscale-300)]',
      ],
      outlineGray200White: [
        'bg-none border border-solid border-[var(--grayscale-200)]',
      ],
      outlineSuccess100: [
        'bg-none border border-solid border-[var(--success-color)]',
      ],
      outlineDanger100: [
        'bg-none border border-solid border-[var(--danger-color-100)]',
      ],
      outlineDanger200: [
        'bg-none border border-solid border-[var(--danger-color)]',
      ],
      outlineDark: ['bg-none border border-solid border-[var(--dark-color)]'],
    },
  },
  defaultVariants: {
    theme: 'primary',
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
      <div className={twMerge('z-20 px-4 py-3', contentClassName)}>
        {children}
      </div>
    </div>
  );
}
