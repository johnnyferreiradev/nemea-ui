export enum SeparatorColors {
  primary100 = 'border-[var(--primary-color-100)]',
  primary200 = 'border-[var(--primary-color)]',
  primary300 = 'border-[var(--primary-color-300)]',
  primary400 = 'border-[var(--primary-color-400)]',

  secondary100 = 'border-[var(--secondary-color)]',
  secondary200 = 'border-[var(--secondary-color-200)]',

  tertiary1 = 'border-[var(--tertiary-color-1)]',
  tertiary2 = 'border-[var(--tertiary-color-2)]',
  tertiary3 = 'border-[var(--tertiary-color-3)]',

  supportPastel1 = 'border-[var(--support-pastel-color-1)]',
  supportPastel2 = 'border-[var(--support-pastel-color-2)]',

  whiteGray = 'border-[var(--white-gray-color)]',
  gray = 'border-[var(--gray-color)] dark:border-[var(--grayscale-300)]',
  grayscale100 = 'border-[var(--grayscale-100)]',
  grayscale200 = 'border-[var(--grayscale-200)]',
  grayscale300 = 'border-[var(--grayscale-300)] dark:border-[var(--gray-color)]',
  grayscale400 = 'border-[var(--grayscale-400)] dark:border-[var(--gray-color)]',

  success100 = 'border-[var(--success-color-100)]',
  success200 = 'border-[var(--success-color)]',
  success300 = 'border-[var(--success-color-300)]',

  warning100 = 'border-[var(--warning-color-100)]',
  warning200 = 'border-[var(--warning-color)]',

  danger100 = 'border-[var(--danger-color-100)]',
  danger200 = 'border-[var(--danger-color)]',
  danger300 = 'border-[var(--danger-color-300)]',

  dark = 'border-[var(--dark-color)] dark:border-[var(--white-color)]',
  white = 'border-[var(--white-color)] dark:border-[var(--dark-color)]',
}

export interface SeparatorProps extends React.HTMLProps<HTMLHRElement> {
  className?: string;
  id?: string;
  color?: keyof typeof SeparatorColors;
  orientation?: 'horizontal' | 'vertical';
}
